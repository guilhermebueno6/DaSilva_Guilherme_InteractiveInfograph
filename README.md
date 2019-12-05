# SVG project / example using Apache instead of Node

This is the same project we just finished with Node. I'm using Apache / PHP / mySQL instead of Node / Express / mySQL.  
The main difference is the project structure itself - Apache can be a lot simpler, with fewer files and folders to track / remember. The back end is the same - we connect to the database, and run queries to get the data. That data is still coming from the database and being sent back to the JavaScript file in the browser (main.js) - if you have a look, you'll see that the ONLY thing that's changed is the URL in the fetchData function. Everything else is identical.

That's the main difference between the 2 - Node needs a lot more infrastructure on the back end, while Apache has it built in to MAMP. It's still configured and running things behind the scenes - you just don't need to hack on anything to make it work.

Clone this to the htdocs folder inside your MAMP application (WAMP for Windows) and run it on localhost:8888 (or just localhost for windows)

localhost:8888/svb_WP_GS

You'll have to set up the database, if you don't have it, but even that is identical. Do it on the command line or use phpmyadmin, whichever floats your boat.

If you get some errors or don't see anything, check the config in includes/connect.php -> the database configuration settings are at the top of the page.

NOTE:: IMPORTANT!!!!!

The PHP file I'm running is VERY different than Pan's, although it's doing basically the same thing. Pan is taking an OOP approach (object oriented programming) and PAN'S WAY IS THE WAY YOU SHOULD DO IT.

This example is procedural, and for demo only, to show / illustrate the differences on the back and structurally, and to show how nothing really changes on the client side - we're hitting a php script in our fetch function instead of a route. You would hit an API endpoint, like the one you're building with the movies database example.
