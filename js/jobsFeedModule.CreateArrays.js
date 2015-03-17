var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.CreateArrays = function () {

	this.parsefeed = function(newItemObjectsArray) {

	var itemArray = [],
		itemsArray = [],
		frcArray = [],
		frcsListArray = [],
		frcTable = "",
		catArray = [],
		catsListArray = [],
		catTable = "";

	//set up the Faculty Research Centre object
	function frcObject(nameid,namestring,frcArray,frcTable) {
		this.nameid = nameid;
		this.namestring = namestring;
		this.frcArray = frcArray;
		this.frcTable = frcTable;

		frcsListArray.push(this);
	};
	
	//set up the categories object [for different categories to research, ie research support]
	function catObject(nameid,namestring,catArray,catTable) {
		this.nameid = nameid;
		this.namestring = namestring;
		this.catArray = catArray;
		this.catTable = catTable;

		catsListArray.push(this);
	};


	//REMOVE TO EXTERNAL JSON FILE
	//NOTE THAT DIVS IN HTML FILE MUST MATCH THE NAMEID!!!!!!!!

	//list out FRCs
	var cawr  = new frcObject("cawr",  "Centre for Agroecology, Water and Resilience", [], "");
	var cabes = new frcObject("cabes", "Centre for Applied Biological and Exercise Sciences", [], "");
	var cbs   = new frcObject("cbs",   "Centre for Business in Society", [], "");
	var ccsj  = new frcObject("ccsj",  "Centre for Communities and Social Justice", [], "");
	//var cdare  = new frcObject("cdare",  "Centre for Dance Research", [], "");
	var clib  = new frcObject("clib",  "Centre for Low Impact Buildings", [], "");
	//var cmme  = new frcObject("cmme",  "Centre for Manufacturing and Materials Engineering", [], "");
	var cpba  = new frcObject("crpba",  "Centre for Research in Psychology, Behaviour and Achievement", [], "");
	var cteh  = new frcObject("cteh",  "Centre for Technology Enabled Health", [], "");
	var ctpsr = new frcObject("ctpsr", "Centre for Trust, Peace and Social Relations", [], "");
	var iame  = new frcObject("iame",  "Institute for Advanced Manufacturing and Engineering", [], "");
	
	//list out additional categories eg research support
	var support = new catObject("support", "Research Support", [], "");
	var additional = new catObject("additional", "Additional Research", [], "");
	
	//REMOVE INTO EXTERNAL JSON FILE//


	//for each item in feed, make object and match to certain frc names
	for (var i=0, maxi=newItemObjectsArray.length; i<maxi; i++) {
						
			if (newItemObjectsArray[i].category == ("Research")||newItemObjectsArray[i].category == ("Research Support")) { //add "Additional Research" if needed
				for (var l=0, maxl=frcsListArray.length; l<maxl; l++) {
					if (newItemObjectsArray[i].location == frcsListArray[l].namestring) {
						frcsListArray[l].frcArray.push(newItemObjectsArray[i]);
						frcsListArray[l].frcArray = frcsListArray[l].frcArray.sort(jobsFeedModule.Format.sortOnTitle);
						
						if (newItemObjectsArray[i].category == ("Additional Research")) {
							for (var m=0, maxm=catsListArray.length; m<maxm; m++) {
								if (newItemObjectsArray[i].category == catsListArray[m].namestring) {
								catsListArray[m].catArray.push(newItemObjectsArray[i]);
								catsListArray[m].catArray = catsListArray[m].catArray.sort(jobsFeedModule.Format.sortOnTitle);

								};
							};
						};
					};
				};
			};
		};

		var jobsFeedModuleDisplay = new jobsFeedModule.Display();
		jobsFeedModuleDisplay.displaytables(newItemObjectsArray,catsListArray,catArray,frcsListArray,frcArray);
	};
};