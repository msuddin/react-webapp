# sample-react-webapp

## Purpose

Question:
What is the purpose of this project?

Answer:
* When NPM run (npm start), the public/index.html page is loaded
* The index.html page renders just one component call root
* In src/index.js, root is defined as the App.js component
* App.Js is seen as a wrapper components for all components
* It extends React.Component and renders all other components
* It also contains logic to call /hi/{id} endpoint
* It also contains login and logout logic
* It also controls page render based on user login/logout status
* The repo also contains a single src/App.test.js

## Dependencies
* This project assumes that http://localhost:8080/hi/{id} is available
* This project assumes that the java jar found at https://github.com/msuddin/sample-spring-hibernate-local-postgres-db is running locally

## Instructions
From the root directory of the project, run the following command to firstly install all dependencies:
```
npm install
```
Now run the application by running the following:
```
npm start
```
That should start the development server
This should allow your App.js to start talking to the server
