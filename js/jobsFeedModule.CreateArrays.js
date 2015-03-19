var jobsFeedModule = jobsFeedModule || {}; 

jobsFeedModule.CreateArrays = function () {

	this.parsefeed = function(newItemObjectsArray) {

		console.log(jobsFeedModule.jsondata[0].nameString);


		var itemArray = [],
			itemsArray = [],
			dataListArray = [];
			dataArray = [];
			dataTable = "";

		//set up FRC/categories object from json
		function dataObject(dataType,nameId,nameString,dataarray,datatable) {
			this.dataType = dataType;
			this.nameId = nameId;
			this.nameString = nameString;
			this.dataArray = dataarray;
			this.dataTable = datatable;

			dataListArray.push(this);
		};

		var cawr  = new dataObject("location", "cawr", "Centre for Agroecology, Water and Resilience", [], "");
		var cabes = new dataObject("location", "cabes", "Centre for Applied Biological and Exercise Sciences", [], "");
		var cbs   = new dataObject("location", "cbs", "Centre for Business in Society", [], "");
		var ccsj  = new dataObject("location", "ccsj", "Centre for Communities and Social Justice", [], "");
		//var cdare  = new dataObject("location", "cdare", "Centre for Dance Research", [], "");
		var clib  = new dataObject("location", "clib", "Centre for Low Impact Buildings", [], "");
		//var cmme  = new dataObject("location", "cmme", "Centre for Manufacturing and Materials Engineering", [], "");
		var cpba  = new dataObject("location", "crpba", "Centre for Research in Psychology, Behaviour and Achievement", [], "");
		var cteh  = new dataObject("location", "cteh", "Centre for Technology Enabled Health", [], "");
		var ctpsr = new dataObject("location", "ctpsr", "Centre for Trust, Peace and Social Relations", [], "");
		var iame  = new dataObject("location", "iame", "Institute for Advanced Manufacturing and Engineering", [], "");
		var research = new dataObject("category", "research", "Research", [], "");
		var support = new dataObject("category", "support", "Research Support", [], "");
		var additional = new dataObject("category", "additional", "Additional Research", [], "");

		for (var i=0, maxi=newItemObjectsArray.length; i<maxi; i++) {
			for (var j=0, maxj=dataListArray.length; j<maxj; j++) {
				if (newItemObjectsArray[i].category == ("Research")) {
					if ((dataListArray[j].dataType == ("location"))&&(newItemObjectsArray[i].location == dataListArray[j].nameString)) {
						dataListArray[j].dataArray.push(newItemObjectsArray[i]);
					}
				} else if ((newItemObjectsArray[i].category == ("Additional Research"))&&(dataListArray[j] == additional)) {
					dataListArray[j].dataArray.push(newItemObjectsArray[i]);
				} else if (newItemObjectsArray[i].category == ("Research Support")) {
					if ((dataListArray[j].dataType == ("location"))&&(newItemObjectsArray[i].location == dataListArray[j].nameString)) {
						dataListArray[j].dataArray.push(newItemObjectsArray[i]);
					} else {
						support.dataArray.push(newItemObjectsArray[i]);
						break;
					}
				}
				dataListArray[j].dataArray = dataListArray[j].dataArray.sort(jobsFeedModule.Format.sortOnTitle);
			} //end of inner loop				
		}; //end of outer loop
		var jobsFeedModuleDisplay = new jobsFeedModule.Display();
		jobsFeedModuleDisplay.displaytables(newItemObjectsArray,dataListArray,dataArray);
	}; //end of parsefeed
}; //end of page