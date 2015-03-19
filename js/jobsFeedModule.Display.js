var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Display = function () {

	this.displaytables = function(newItemObjectsArray,dataListArray,dataArray) { 

		//push the sorted variables from the data arrays into html tables
		for (var i=0, maxi=dataListArray.length; i<maxi; i++) {
			var displayLocation = "";
			if (document.getElementById(dataListArray[i].nameId)) {
				var divOnPage = document.getElementById(dataListArray[i].nameId);
			} else { 
				continue;
			};
			//console.log(dataListArray[i]);

			var dataOutput = "";
			for (var j=0, maxj=dataListArray[i].dataArray.length; j<maxj; j++) {
				if (dataListArray[i].dataType == "category") {
					displayLocation = dataListArray[i].dataArray[j].location + "<br \/>";
				} else {
					displayLocation = "";
				};
				dataOutput+="<tr><td><span class='title'><a href='" 
				+ dataListArray[i].dataArray[j].link + "' target='_blank'>" 
				+ dataListArray[i].dataArray[j].title + "<\/a><\/span><br \/>" 
				+ displayLocation 
				+ "<span class='strong'>Reference:<\/span> " 
				+ dataListArray[i].dataArray[j].reference +"<\/td><td>" 
				+ dataListArray[i].dataArray[j].salary +"<\/td><td>" 
				+ dataListArray[i].dataArray[j].closingdate +"<\/td><\/tr>"
			};
			if (dataOutput === "") {
				dataListArray[i].dataTable+="<p class='standalonepara nojobs'>There are currently no jobs available.<\/p>";
			} else {
				dataListArray[i].dataTable+="<table><thead><tr><th>Job title<\/th><th>Salary<\/th><th>Closing date<\/th><\/tr><\/thead><tbody>" + dataOutput + "<\/tbody><\/table>";
			};
			divOnPage.innerHTML=dataListArray[i].dataTable;
		};
	};
};