//Jude Gibbons, Coventry University, 2015

//import the xml when the DOM content is loaded
//cross-browser code for <IE9 from http://javascript.info/tutorial/onload-ondomcontentloaded
if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', loadjson, false);
} else if (window.attachEvent) {
	if ( document.documentElement.doScroll && !isFrame ) {
		function tryScroll(){
			if (called) return
			try {
				document.documentElement.doScroll("left")
				ready()
			} catch(e) {
				setTimeout(tryScroll, 10)
			}
		}
		tryScroll()
	}
};


var jsonurl,
	jsondata;
function loadjson(jsondata) {
	var getData = function(method, url, callback) {
		//var method = "GET";
		jsonurl = "./xmljobsfeed.json";
		var jsonfile;

		if (window.XMLHttpRequest) {
			jsonfile = new XMLHttpRequest;
		} else {
			jsonfile = new ActiveXObject('Msxml2.XMLHTTP');
		};

		jsonfile.open(method, jsonurl, true);
		jsonfile.send(jsonurl);

		jsonfile.onreadystatechange = function() {
 	   		if (jsonfile.readyState == 4 && jsonfile.status == 200) {
  	    		var jsondata = JSON.parse(jsonfile.responseText);
  	    		loadxml(jsondata);
  	    		console.log(jsondata);
 	   		}
		};
	};
	getData("GET",jsonurl,loadxml);
	
};


//import xml [and json] and when it's loaded, run the display function
function loadxml(jsondata) {
	var feedurl = "https://staffrecruitment.coventry.ac.uk/RSS/UniversityVacancies.xml";
	var feedlimit = 150; // NUMBER OF JOBS TO DISPLAY IN FEED
	var jobsfeed = new google.feeds.Feed(feedurl+"?t="+new Date().getTime());
	jobsfeed.setResultFormat(google.feeds.Feed.XML_FORMAT);
	jobsfeed.setNumEntries(feedlimit);
	jobsfeed.load(displayWhenFeedLoaded);
	//return(jsondata);
};
//console.log(jsondata);

//only loads when feed download complete; then only displays feed when page loads
displayWhenFeedLoaded = function(result) {
	var jobsFeedModuleObjects = new jobsFeedModule.Objects();
	//jobsFeedModuleObjects(jsondata);
	//pass jsondata straight to createarrays.js?
	google.setOnLoadCallback(jobsFeedModuleObjects.displayfeed(result));
	//set error or loading message here?
};

