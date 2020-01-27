

/*
Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when
*/

//Git Hub pages
// https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
//  1)
npm install gh-pages

//  2) add
"homepage": "https://yourgithub.github.io/index.html",
/*YOU NEED TO FULL path
THIS PART OF file

{
  "name": "react-port",
  "version": "0.1.0",
  "private": true,

  "homepage": "https://newbi462.github.io/index.html",

  "dependencies": {

*/

// 3) ADD, need a fix for must run on master FIX HERE: https://dev.to/javascripterika/deploy-a-react-app-as-a-github-user-page-with-yarn-3fka
"predeploy": "npm run build", // turotials say "yarn", dont mix, make all NPM
"deploy": "gh-pages -b master -d build",
/*
THIS PART OF FILE
"scripts": {
  "start": "react-scripts start",

  "predeploy": "npm run build",
  "deploy": "gh-pages -b master -d build",

  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
*/


//TO DEPLYOY:
npm run deploy
/*
NOTE: this will over ride the "master" brantch, take care to have a BUILD BRANCH

*/



//ZITE

// IF IN SUB FOLDERmake a now.json

{
    "version": 2,
    "name": "project-name",
    "builds": [{ "src": "project-name/package.json", "use": "@now/static-build", "config": {"distDir": "build"} }],
    "routes": [
        { "src": "/(.*)", "dest": "project-name/$1" }
    ]
}

//exsample from this repo https://github.com/better-professor-web23/front-end/blob/master/now.json
{
    "version": 2,
    "name": "better-professor",
    "builds": [{ "src": "better-professor/package.json", "use": "@now/static-build", "config": {"distDir": "build"} }],
    "routes": [
      { "src": "/(.*)", "dest": "better-professor/$1"}
    ]
  }

//ZITE COMANDS

//TO DEPLY
// now
//
