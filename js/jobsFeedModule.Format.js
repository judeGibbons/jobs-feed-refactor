var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Format = function () {

	this.formatfeed = function(newItemObject,newItemObjectsArray) {

		for (var i=0, maxi=newItemObjectsArray.length; i<maxi; i++) {

			//reformat closingdate - line removed below allows sort on closingdateElement
			if (newItemObjectsArray[i].closingdate !== "") {
				//newItemObjectsArray[i].closingdateObject = new Date(closingdateElement.childNodes[0].nodeValue);
				newItemObjectsArray[i].closingdate = newItemObjectsArray[i].closingdate.replace(" 00:00:00 GMT","").replace(",","");
			};
			
			var mapDateString = {
				Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday", Fri:"Friday", Sat:"Saturday", Sun:"Sunday", Jan:"January ", Feb:"February ", Mar:"March ", Apr:"April ", Jun:"June ", Jul:"July ", Aug:"August ", Sep:"September ", Oct:"October ", Nov:"November ", Dec:"December "
			};
			newItemObjectsArray[i].closingdate = newItemObjectsArray[i].closingdate.replace(/Mon|Tue|Wed|Thu|Fri|Sat|Sun|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec/g, function(matched) {
				return mapDateString[matched];
			});
		};
					
	//sort on job title (could sort on closing date or salary instead)
		function sortOnTitle(a,b) {
			if (a.title < b.title) {
				return -1;
			};
			if (a.title > b.title) {
				return 1;
			};
			return 0;
		};

		var jobsFeedModuleCreateArrays = new jobsFeedModule.CreateArrays();
		jobsFeedModuleCreateArrays.parsefeed(newItemObjectsArray);

	};
};