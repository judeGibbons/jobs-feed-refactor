#jobs-feed-refactor

Takes an xml output from a recruitment database, filters it on various parameters and 
displays it in different html files for iframing into a CMS-driven site.

This is a refactoring of jobs-xml-feed using the third commit as a starting point.

Firstly I took the single javascript file and split it into modules for:
* loading the xml;
* parsing it and creating javascript objects;
* formatting the dates;
* pushing the data to arrays based on the category and/or location of each job;
* creating an html table of whichever array needed to be displayed.
