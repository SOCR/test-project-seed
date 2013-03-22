test-project-seed
=================

### A starting point/project to implement the test projects of SOCR. 

This seed project is to help you get to speed on how development process goes on at SOCR. By working on these projects, you will gets a hands on experience ofcoffeescript,brunch.io ,HTML5,AngularJS,GitHub,D3.

Feel free to choose one of the experiments from the list given below and start working on it. Please keep updating your progress to github. If you are new to github, please refer  book  for more info. Git probably the best versioning tool ever created!

If you are not familiar with any language or technology, please refer their documentations or online examples.Or  send us an email at  selvam1991 at gmail dot com

## Installation

### Prerequisites
  This application requires [NodeJS](http://nodejs.org) on the development machine. Please go ahead and install nodeJS.   This [article](http://howtonode.org/how-to-install-nodejs) will help beginners.
### Get the code! 
  Clone this repo to your computer. If you are new to github, this [wiki] will help you get started.
### Initialization
  Once you have the code, you need initialize the project. Get into the directory where you cloned code, by default it should be test-project-seed/ . Initializing basically means installing certain node packages which is needed for setting up the enviroment. You just need to run this command from the command line:
  
    socr-testproject-seed selvam$ sudo ./scripts/init.sh 
    
  This command will create a new folder node_modules/ , dont bother about it.
  
### Deploy!
  You are almost done. We are going to deploy a local server to test the code. Run this command from inside the test-project-seed/ folder:
    
    socr-testproject-seed selvam$ sudo ./scripts/server.sh 
  
  Now open a browser and check http://localhost:3333 to see the running application!
