//Jude Gibbons, Coventry University, 2015

//run code when DOM content is loaded
//cross-browser code for <IE9 from http://javascript.info/tutorial/onload-ondomcontentloaded
if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', init, false);
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

function init(jsonurl) {
	var jsonurl = "./xmljobsfeed.json";
	loadjson("GET", jsonurl, passJsonThrough);
	loadxml();
};

//import the json file
var loadjson = function(method, url, callback) {

	var jsonfile;

	if (window.XMLHttpRequest) {
		jsonfile = new XMLHttpRequest;
	} else {
		jsonfile = new ActiveXObject('Msxml2.XMLHTTP');
	};

	jsonfile.open(method, url, true);
	jsonfile.send(url);

	jsonfile.onreadystatechange = function() {
   		if (jsonfile.readyState == 4 && jsonfile.status == 200) {
    		var jsondata = JSON.parse(jsonfile.responseText);
    		passJsonThrough(jsondata); 
   		};
	};
};

//import xml and when it's loaded, run the display function
function loadxml() {
	var feedurl = "https://staffrecruitment.coventry.ac.uk/RSS/UniversityVacancies.xml";
	var feedlimit = 150; // NUMBER OF JOBS TO DISPLAY IN FEED
	var jobsfeed = new google.feeds.Feed(feedurl+"?t="+new Date().getTime());
	jobsfeed.setResultFormat(google.feeds.Feed.XML_FORMAT);
	jobsfeed.setNumEntries(feedlimit);
	jobsfeed.load(displayWhenFeedLoaded);
};

//only loads when feed download complete; then only displays feed when page loads
displayWhenFeedLoaded = function(result) {
	var jobsFeedModuleObjects = new jobsFeedModule.Objects();
	google.setOnLoadCallback(jobsFeedModuleObjects.displayfeed(result));
	//set error or loading message here?
};

passJsonThrough = function(jsondata) {
	var jobsFeedModuleCreateArrays = new jobsFeedModule.CreateArrays();
	jobsFeedModuleCreateArrays.parsejson(jsondata);
};