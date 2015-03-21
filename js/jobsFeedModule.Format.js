var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Format = function () {

	this.formatfeed = function(newXmlObject,newXmlObjectsArray) {

		for (var i=0, maxi=newXmlObjectsArray.length; i<maxi; i++) {

			//reformat closingdate - line removed below allows sort on closingdateElement
			if (newXmlObjectsArray[i].closingdate !== "") {
				//newXmlObjectsArray[i].closingdateObject = new Date(closingdateElement.childNodes[0].nodeValue); //if I want to sort on closing date
				newXmlObjectsArray[i].closingdate = newXmlObjectsArray[i].closingdate.replace(" 00:00:00 GMT","").replace(",","");
			};
			
			var mapDateString = {
				Mon:"Monday", Tue:"Tuesday", Wed:"Wednesday", Thu:"Thursday", Fri:"Friday", Sat:"Saturday", Sun:"Sunday", Jan:"January ", Feb:"February ", Mar:"March ", Apr:"April ", Jun:"June ", Jul:"July ", Aug:"August ", Sep:"September ", Oct:"October ", Nov:"November ", Dec:"December "
			};
			newXmlObjectsArray[i].closingdate = newXmlObjectsArray[i].closingdate.replace(/Mon|Tue|Wed|Thu|Fri|Sat|Sun|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec/g, function(matched) {
				return mapDateString[matched];
			});
		};

		var jobsFeedModuleCreateArrays = new jobsFeedModule.CreateArrays();
		jobsFeedModuleCreateArrays.parsefeed(newXmlObjectsArray);

	};
};