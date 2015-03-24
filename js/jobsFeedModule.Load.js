//Jude Gibbons, Coventry University, 2015

var jobsFeedModule = jobsFeedModule || {}; 

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
	var jsonurl = "./js/jobsFeedModule.json";
	loadjson("GET", jsonurl);
	loadxml();
};

//import the json file
var loadjson = function(method, url) {

	var jsonFile;

	if (window.XMLHttpRequest) {
		jsonFile = new XMLHttpRequest;
	} else {
		jsonFile = new ActiveXObject('Msxml2.XMLHTTP');
	};

	jsonFile.open(method, url, true);
	jsonFile.send(url);

	jsonFile.onreadystatechange = function() {
   		if (jsonFile.readyState == 4 && jsonFile.status == 200) {
    		jobsFeedModule.jsonData = JSON.parse(jsonFile.responseText);
   		};
	};
};

//import xml and when it's loaded, run the display function
//variables are stored and edited in jobsFeedModule.Variables.js
function loadxml() {
	var feedurl = jobsFeedModule.feedurlVariable;
	var feedlimit = jobsFeedModule.feedlimitVariable;
	var jobsfeed = new google.feeds.Feed(feedurl+jobsFeedModule.removeCacheString);
	jobsfeed.setResultFormat(google.feeds.Feed.XML_FORMAT);
	jobsfeed.setNumEntries(feedlimit);
	jobsfeed.load(displayWhenFeedLoaded);
};

//only loads when feed download complete; then only displays feed when page loads
displayWhenFeedLoaded = function(result) {
	var jobsFeedModuleObjects = new jobsFeedModule.Objects();
	google.setOnLoadCallback(jobsFeedModuleObjects.displayfeed(result));
	//set error or loading message here
};