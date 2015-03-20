var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Display = function () {

	this.displaytables = function(newXmlObjectsArray,jsonObject,stuff) {

		//push the sorted variables from the data arrays into html tables
		for (var i=0, maxi=jsonObject.length; i<maxi; i++) {
			var displayLocation = "";
			if (document.getElementById(jsonObject[i].nameId)) {
				var divOnPage = document.getElementById(jsonObject[i].nameId);
			} else { 
				continue;
			};

			var dataOutput = "";
			for (var j=0, maxj=jsonObject[i].dataArray.length; j<maxj; j++) {
				if (jsonObject[i].dataType == "category") {
					displayLocation = jsonObject[i].dataArray[j].location + "<br \/>";
				} else {
					displayLocation = "";
				};
				dataOutput+="<tr><td><span class='title'><a href='" 
				+ jsonObject[i].dataArray[j].link + "' target='_blank'>" 
				+ jsonObject[i].dataArray[j].title + "<\/a><\/span><br \/>" 
				+ displayLocation 
				+ "<span class='strong'>Reference:<\/span> " 
				+ jsonObject[i].dataArray[j].reference +"<\/td><td>" 
				+ jsonObject[i].dataArray[j].salary +"<\/td><td>" 
				+ jsonObject[i].dataArray[j].closingdate +"<\/td><\/tr>"
			};
			if (dataOutput === "") {
				jsonObject[i].dataTable+="<p class='standalonepara nojobs'>" + jobsFeedModule.noJobsMessage + "<\/p>";
			} else {
				jsonObject[i].dataTable+="<table><thead><tr><th>Job title<\/th><th>Salary<\/th><th>Closing date<\/th><\/tr><\/thead><tbody>" + dataOutput + "<\/tbody><\/table>";
			};
			divOnPage.innerHTML=jsonObject[i].dataTable;
		};
	};
};