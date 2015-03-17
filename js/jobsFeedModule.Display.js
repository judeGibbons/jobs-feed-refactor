var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.Display = function () {

	this.displaytables = function(newItemObjectsArray,catsListArray,catArray,frcsListArray,frcArray) { 

		//push the sorted variables from the frc arrays into html tables
		for (var n=0, maxn=frcsListArray.length; n<maxn; n++) {
			var frcfeedcontainer = document.getElementById(frcsListArray[n].nameid);
			var frcjobtype = frcsListArray[n].namestring;
			var frcrssoutput = "";
			for (var k=0, maxk=frcsListArray[n].frcArray.length; k<maxk; k++) {
				frcrssoutput+="<tr><td><span class='title'><a href='" 
				+ frcsListArray[n].frcArray[k].link + "' target='_blank'>" 
				+ frcsListArray[n].frcArray[k].title + "<\/a><\/span><br \/>" 
				//+ frcsListArray[n].frcArray[k].location +"<br \/> //no need for this if all presorted
				+ "<span class='strong'>Reference:<\/span> " 
				+ frcsListArray[n].frcArray[k].reference +"<\/td><td>" 
				+ frcsListArray[n].frcArray[k].salary +"<\/td><td>" 
				+ frcsListArray[n].frcArray[k].closingdate +"<\/td><\/tr>"
			};
			if (frcrssoutput === "") {
				frcsListArray[n].frcTable+="<p class='standalonepara nojobs'>There are currently no jobs available in the " + frcjobtype + ".<\/p>";
			} else {
				frcsListArray[n].frcTable+="<table><thead><tr><th>Job title<\/th><th>Salary<\/th><th>Closing date<\/th><\/tr><\/thead><tbody>" + frcrssoutput + "<\/tbody><\/table>";
			};
			frcfeedcontainer.innerHTML=frcsListArray[n].frcTable;
		};

		//push the sorted variables from the category arrays into html tables
		for (var p=0, maxp=catsListArray.length; p<maxp; p++) {
			var catfeedcontainer = document.getElementById(catsListArray[p].nameid);
			var catjobtype = catsListArray[p].namestring;
			var catrssoutput = "";
			for (var q=0, maxq=catsListArray[p].catArray.length; q<maxq; q++) {
				catrssoutput+="<tr><td><span class='title'><a href='" 
				+ catsListArray[p].catArray[q].link + "' target='_blank'>" 
				+ catsListArray[p].catArray[q].title + "<\/a><\/span><br \/>" 
				+ catsListArray[p].catArray[q].location
				+ "<br \/><span class='strong'>Reference:<\/span> "
				+ catsListArray[p].catArray[q].reference +"<\/td><td>" 
				+ catsListArray[p].catArray[q].salary +"<\/td><td>" 
				+ catsListArray[p].catArray[q].closingdate +"<\/td><\/tr>"
			};

			if (catrssoutput === "") {
				catsListArray[p].catTable+="<p class='standalonepara nojobs'>There are currently no " + catjobtype + " jobs available.<\/p>";
			} else {
				catsListArray[p].catTable+="<table><thead><tr><th>Job title<\/th><th>Salary<\/th><th>Closing date<\/th><\/tr><\/thead><tbody>" + catrssoutput + "<\/tbody><\/table>";
			};
			if (catfeedcontainer) {
				catfeedcontainer.innerHTML=catsListArray[p].catTable;
			};
		};
	};
};