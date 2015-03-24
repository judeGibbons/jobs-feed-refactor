var jobsFeedModule = jobsFeedModule || {}; 
	var variables = function () {

		//============= INSTRUCTIONS ==============//
		//
		// to toggle the variables, remove the live code by adding two strokes in front of the line
		// AND add in the commented-out line by removing the two strokes in front of the line
		// you MUST have EXACTLY ONE line uncommented in each of the following sections
		// each line must end with a semicolon;
		//
		// to add a new Centre name or category, edit the xmljobsfeed.json file
		// you can't add any comments in the json file - if you do, it won't work!
		// each item in the json is three lines long: each line ends with a comma EXCEPT the last in the item
		// each item is separated with a comma EXCEPT the last item
		// to check the formatting of the json file, go here: http://jsonlint.com/ ...
		// copy the code and paste it into the box and click 'validate'



		//Google Feed API's TOS explicitly state that the deprecation policy (which says Google will 
		//give three years' notice before discontinuing the service) will no longer be applicable from April 20, 2015. 
		//(i.e., the service may be discontinued at any time, with or without warning, after that date.)



		//========= URL OF THE JOBS FEED =========//

		//this is a test feed with static data I've set up on cutours
		//jobsFeedModule.feedurlVariable = "http://www.cutours.co.uk/staffrecruitment/testrssfeed.xml";

		//current url of the live feed:
		jobsFeedModule.feedurlVariable = "https://staffrecruitment.coventry.ac.uk/RSS/UniversityVacancies.xml";

		//========================================//


		//============= URL CACHING ==============//

		// to FLUSH THE CACHE, switch to the second version, load the webpage and then switch them back again
		//NEED TO TEST THIS!!!
		//Of course, this could also introduce the possibility - particularly if your server is slow in returning the feed - 
		//that the API times out and returns an error about being unable to fetch the feed. 
		//So you'll want to make sure you have logic to handle that and send the same request a second time if necessary.


		//using this forces it to fetch a new version every time the page loads, ie removes Google's caching:
		jobsFeedModule.removeCacheString = "?t="+new Date().getTime();

		//using this lets Google cache the feed which means if it's been edited on iTrent you may see an out of date version:
		//jobsFeedModule.removeCacheString = "";

		//========================================//


		//====== MAX NUMBER OF JOBS TO LOAD ======//

		//this is max number of jobs to receive from feed: 150 should cover it BUT if jobs not appearing, check this!
		jobsFeedModule.feedlimitVariable = 150;

		//========================================//


		//=========== 'NO JOBS' MESSAGE ==========//

		//this is the message you get when there are no jobs in that section - MUST have double quotes around the text
		jobsFeedModule.noJobsMessage = "There are currently no jobs available.";

		//========================================//

	};
variables();