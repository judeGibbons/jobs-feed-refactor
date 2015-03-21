var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Display = function () {

	this.displaytables = function(newXmlObjectsArray,divsOnPageArray) {

		//push the sorted variables from the filtered data arrays into html tables
		for (var i=0, maxi=divsOnPageArray.length; i<maxi; i++) {
			var divOnPage = document.getElementById(divsOnPageArray[i].nameId);
			var displayLocation = "";
					var dataOutput = "";

			for (var j=0, maxj=divsOnPageArray[i].dataArray.length; j<maxj; j++) {

				if (divsOnPageArray[i].dataType == "category") {
					displayLocation = divsOnPageArray[i].dataArray[j].location + "<br \/>";
				} else {
					displayLocation = "";
				};
				dataOutput+="<tr><td><span class='title'><a href='" 
				+ divsOnPageArray[i].dataArray[j].link + "' target='_blank'>" 
				+ divsOnPageArray[i].dataArray[j].title + "<\/a><\/span><br \/>" 
				+ displayLocation 
				+ "<span class='strong'>Reference:<\/span> " 
				+ divsOnPageArray[i].dataArray[j].reference +"<\/td><td>" 
				+ divsOnPageArray[i].dataArray[j].salary +"<\/td><td>" 
				+ divsOnPageArray[i].dataArray[j].closingdate +"<\/td><\/tr>"
			};
			if (dataOutput === "") {
				divsOnPageArray[i].dataTable+="<p class='standalonepara nojobs'>" + jobsFeedModule.noJobsMessage + "<\/p>";
			} else {
				divsOnPageArray[i].dataTable+="<table><thead><tr><th>Job title<\/th><th>Salary<\/th><th>Closing date<\/th><\/tr><\/thead><tbody>" + dataOutput + "<\/tbody><\/table>";
			};
			divOnPage.innerHTML=divsOnPageArray[i].dataTable;
		};
	};
};