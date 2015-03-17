var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Objects = function () {

	this.displayfeed = function(result) {

		var newItemObjectsArray = [];

		if (!result.error) {
		    var items = result.xmlDocument.getElementsByTagName('item');

			//set up objects based on xml items
			function itemObject(title,link,location,reference,category,salary,minsalary,closingdate,closingdateObject,description) {
				this.title = title;
				this.link = link;
				this.location = location;
				this.reference = reference;
				this.category = category;
				this.salary = salary;
				this.minsalary = minsalary;
				this.closingdate = closingdate;
				this.closingdateObject = closingdateObject;
				this.description = description;	
			};
				
			//run this function to weed out non-existent or empty child nodes in items
			var xmlElement;
			function checkElementChildren(xmlElement) {
				if (xmlElement) {
					if (xmlElement.childNodes.length == 0) {
						var elementString = "";
						return (elementString);
					} else {
						for (j=0, maxj=xmlElement.childNodes.length; j<maxj; j++) {
							if (xmlElement.childNodes[j] !== null) {
								elementString = xmlElement.childNodes[j].nodeValue;
								break;
							};
						xmlElement.childNodes[j] = xmlElement.childNodes[j+1];
						};
					return (elementString);
					};
				};
			};

		    //take xml elements and convert them into arrays of strings, checking for empty nodes in checkElementChildren function
			for (var i=0, maxi=items.length; i<maxi; i++) {

				var item = items[i],
				titleElement = item.getElementsByTagName("title")[0],
				linkElement = item.getElementsByTagName("link")[0];
				if (item.getElementsByTagName("job:reference")[0]) {
					var referenceElement = item.getElementsByTagName("job:reference")[0],
					locationElement = item.getElementsByTagName("job:location")[0],
					salaryElement = item.getElementsByTagName("job:salary")[0],
					closingdateElement = item.getElementsByTagName("job:closingdate")[0],
					descriptionElement = item.getElementsByTagName("job:description")[0],
					minsalaryElement = item.getElementsByTagName("job:minsalary")[0],
					categoryElement = item.getElementsByTagName("job:category")[0];
				} else {
					var referenceElement = item.getElementsByTagName("reference")[0],
					locationElement = item.getElementsByTagName("location")[0],
					salaryElement = item.getElementsByTagName("salary")[0],
					closingdateElement = item.getElementsByTagName("closingdate")[0],
					descriptionElement = item.getElementsByTagName("description")[0],
					minsalaryElement = item.getElementsByTagName("minsalary")[0],
					categoryElement = item.getElementsByTagName("category")[0];
				};
				
				var title = checkElementChildren(titleElement),
				link = checkElementChildren(linkElement),
				reference = checkElementChildren(referenceElement),
				location = checkElementChildren(locationElement),
				salary = checkElementChildren(salaryElement),
				closingdate = checkElementChildren(closingdateElement),
				description = checkElementChildren(descriptionElement),
				minsalary = checkElementChildren(minsalaryElement),
				category = checkElementChildren(categoryElement),
				closingdateObject;

				var newItemObject = new itemObject(title,link,location,reference,category,salary,minsalary,closingdate,closingdateObject,description);
				newItemObjectsArray.push(newItemObject);

			};

		} else { 
			alert(result.error.message); //change to something sensible?
		};

		var jobsFeedModuleFormat = new jobsFeedModule.Format();
		jobsFeedModuleFormat.formatfeed(newItemObject,newItemObjectsArray);

	};
};