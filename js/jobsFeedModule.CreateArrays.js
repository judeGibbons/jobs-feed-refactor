var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.CreateArrays = function () {

	this.parsefeed = function(newXmlObjectsArray) {

		var jsonObject = jobsFeedModule.jsonData,
			divsOnPageArray =[];

		//create an array of just those jobs that have corresponding divs on the page
		for (var k=0, maxk=jsonObject.length; k<maxk; k++) {
			if (document.getElementById(jsonObject[k].nameId)) {
				divsOnPageArray.push(jsonObject[k]);
			} else {
				continue;
			};
		};

		//create array variable to push support jobs to
		for (var m=0, maxm=divsOnPageArray.length; m<maxm; m++) {
			divsOnPageArray[m].dataArray = [];
			divsOnPageArray[m].dataTable = "";
			if (divsOnPageArray[m].nameId == "support") { 
				var supportJobs = divsOnPageArray[m];
			};
		};

		//filter jobs by category and optionally location, push to corresponding arrays
		for (var i=0, maxi=newXmlObjectsArray.length; i<maxi; i++) {
			for (var j=0, maxj=divsOnPageArray.length; j<maxj; j++) {
				if (newXmlObjectsArray[i].category == "Research") {
					if ((divsOnPageArray[j].dataType == "location")&&(newXmlObjectsArray[i].location)&&(newXmlObjectsArray[i].location == divsOnPageArray[j].nameString)) {
						divsOnPageArray[j].dataArray.push(newXmlObjectsArray[i]);
					}
				} else if ((newXmlObjectsArray[i].category == "Additional Research")&&(divsOnPageArray[j].nameId == "additional")) {
					divsOnPageArray[j].dataArray.push(newXmlObjectsArray[i]);
				} else if (newXmlObjectsArray[i].category == "Research Support") {
					if ((divsOnPageArray[j].dataType == "location")&&(newXmlObjectsArray[i].location)&&(newXmlObjectsArray[i].location == divsOnPageArray[j].nameString)) {
						divsOnPageArray[j].dataArray.push(newXmlObjectsArray[i]);
					} else {
						if (supportJobs) {
							supportJobs.dataArray.push(newXmlObjectsArray[i]);
							break;
						};
					};
				};
			};
		};

		//sort function moved from jobsFeedModule.Format.js - can't make it work from there
		function sortOnTitle(a,b) {
			if (a.title < b.title) {
				return -1;
			};
			if (a.title > b.title) {
				return 1;
			};
			return 0;
		};

		for (var j=0, maxj=divsOnPageArray.length; j<maxj; j++) {
			divsOnPageArray[j].dataArray = divsOnPageArray[j].dataArray.sort(sortOnTitle); //(jobsFeedModule.Format.sortOnTitle(a,b));
		};


		var jobsFeedModuleDisplay = new jobsFeedModule.Display();
		jobsFeedModuleDisplay.displaytables(newXmlObjectsArray,divsOnPageArray);
	};
}; 