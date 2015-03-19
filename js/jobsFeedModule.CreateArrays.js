var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.CreateArrays = function () {

	this.parsefeed = function(newXmlObjectsArray) {

		var jsonObject = jobsFeedModule.jsonData,
			supportJobs;

		for (var j=0, maxj=jsonObject.length; j<maxj; j++) {
			jsonObject[j].dataArray = [];
			jsonObject[j].dataTable = "";
			if (jsonObject[j].nameId == "support") {
				supportJobs = jsonObject[j];
			}
		};

		for (var i=0, maxi=newXmlObjectsArray.length; i<maxi; i++) {
			for (var j=0, maxj=jsonObject.length; j<maxj; j++) {
				if (newXmlObjectsArray[i].category == ("Research")) {
					if ((jsonObject[j].dataType == ("location"))&&(newXmlObjectsArray[i].location)&&(newXmlObjectsArray[i].location == jsonObject[j].nameString)) {
						jsonObject[j].dataArray.push(newXmlObjectsArray[i]); //Cannot read property 'push' of undefined
					}
				} else if ((newXmlObjectsArray[i].category == ("Additional Research"))&&(jsonObject[j] == jsonObject[j].nameString)) {
					jsonObject[j].dataArray.push(newXmlObjectsArray[i]);
				} else if (newXmlObjectsArray[i].category == ("Research Support")) {
					if ((jsonObject[j].dataType == ("location"))&&(newXmlObjectsArray[i].location)&&(newXmlObjectsArray[i].location == jsonObject[j].nameString)) {
						jsonObject[j].dataArray.push(newXmlObjectsArray[i]);
					} else {
						supportJobs.dataArray.push(newXmlObjectsArray[i]);
						break;
					}
				}
				jsonObject[j].dataArray = jsonObject[j].dataArray.sort(jobsFeedModule.Format.sortOnTitle);
			}
		};
		var jobsFeedModuleDisplay = new jobsFeedModule.Display();
		jobsFeedModuleDisplay.displaytables(newXmlObjectsArray,jsonObject);
	};
}; 