#jobs-feed-refactor

Takes an xml output from a recruitment database, uses Google Feeds API to import
the xml, filters it on various parameters and displays it in separate html files 
for iframing into a CMS-driven site.

This is a refactoring of jobs-xml-feed using the third commit as a starting point.

Firstly, the single javascript file was split into modules for:
* loading the xml;
* parsing it and creating javascript objects;
* formatting the dates;
* pushing the data to arrays based on the category and/or location of each job;
* creating an html table of whichever array needed to be displayed;
* storing the variables, allowing them to be more easily edited by non-coders.

The 'location' and 'category' objects were moved into an external JSON file, 
again to make it easy for editing.

The code which looks for the divs on the page to match the data to was moved 
so that it runs before the creation of the arrays, meaning that it only has
to create the array(s) that are needed for each htm page.

In March 2015 I found out that, as from 20 April 2015, the Google Feeds API could 
be switched off at any time, so the next stage of the project is to rewrite 
this code using jQuery, producing a custom version that only loads the code 
I need. I will avoid a problem with loading xml cross-domain by using server 
space on the same domain as the jobs database.