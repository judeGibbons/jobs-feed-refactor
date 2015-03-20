var jobsFeedModule = jobsFeedModule || {}; 
	var variables = function () {


		// to remove a line from the code, add two strokes in front of the line
		// to add a line, remove the two strokes
		// you must leave one and only one line uncommented in each of the following sections
		// each line must end with a semicolon


		//========= URL OF THE JOBS FEED =========//

		//this is a test feed I've set up on cutours:
		//jobsFeedModule.feedurlVariable = "http://www.cutours.co.uk/staffrecruitment/testrssfeed.xml";

		//current url of the live feed:
		jobsFeedModule.feedurlVariable = "https://staffrecruitment.coventry.ac.uk/RSS/UniversityVacancies.xml";

		//========================================//


		//============= URL CACHING ==============//

		// to FLUSH THE CACHE, switch to the second version, load the webpage and then switch them back again
		//NEED TO TEST THIS!!!

		//using this forces it to fetch a new version every time the page loads, ie removes Google's caching:
		jobsFeedModule.removeCacheString = "?t="+new Date().getTime();

		//using this lets Google cache the feed which means if it's been edited on iTrent you may see an out of date version:
		//jobsFeedModule.removeCacheString = "";

		//========================================//


		//====== MAX NUMBER OF JOBS TO LOAD ======//

		//this is the maximum number of jobs to receive from the feed - 150 should cover it!
		jobsFeedModule.feedlimitVariable = 150;

		//========================================//


		//=========== 'NO JOBS' MESSAGE ==========//

		//this is the message you get when there are no jobs in that section - MUST have double quotes around the text
		jobsFeedModule.noJobsMessage = "There are currently no jobs available.";

		//========================================//

	};
variables();