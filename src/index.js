/**
 * * There are a couple of ways to run our javascript file:
 * 
 * * The first way we can run index.js is to open our terminal and type:
 * 
 * ! node src/index.js
 * 
 * * In he line above we ask the node server to run the index.js file in the src folder. 
 * 
 * * To run this file, open your terminal and type:
 * 
 * ! npm run start_js_only
 * 
 * * When we run the line above it does a few things!
 * 
 * * 1. npm looks in the package.json file
 * * 2. npm checks scripts for an entry called start_js_only
 * * 3. npm runs the contents of the script start_js_only
 * 
 * * In each of these cases we run the script only once.  Any changes to the script need to 
 * * be manually run again with either of the above 2 commands.
 * 
 * * How do we solve this so the script runs each time we change it?  Lets try nodemon!  
 */

console.log(`node can run javascript files!`);