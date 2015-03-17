//Jude Gibbons, Coventry University, 2015

//import the xml when the DOM content is loaded
//cross-browser code for <IE9 from http://javascript.info/tutorial/onload-ondomcontentloaded
if (window.addEventListener) {
	window.addEventListener('DOMContentLoaded', loadxml, false);
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