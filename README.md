# nodeScript

This repo is all about getting node to run javascript files!

## How to get Started
Download this repo, open it in VS Code, then open your terminal in VS Code!

## Try this in your terminal!
In your Terminal type the following:

_node src/index.js_ 

then hit enter!  You'll see the console log message in your terminal.  Node has run your js file.

## There is another way!  Taskrunners!
In the previous command we asked node directly to run the file.  Another way to go about this would be to set up a script or taskrunner to do it.  We have one and it is called _start_js_only_.  The taskrunner is shown in the scripts section of package.json.

To use the taskrunner we go into the terminal and type:

_npm run start_js_only_

Doing this causes the following to happen.

1. node package manager(npm) checks the package.json files script section for something called start_js_only
2. node package manager runs the command in start_js_only which asks node to run src/index.js

## The Problem!
It only runs once though!  To make it run everytime the file changes, we need some help from a library called nodemon.

