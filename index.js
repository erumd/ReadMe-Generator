//store inquier package in the inquirer
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
//import fs(file system)
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];
inquirer
  .prompt([
    {
      type: "input",
      message: "Title of project",
      name: "title",
    },
    {
      type: "input",
      message: "Description",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage Information",
      name: "usage",
    },
    {
      type: "input",
      message: "Contribution Guidelines ",
      name: "contribution",
    },
    {
      type: "input",
      message: "Test",
      name: "test",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "GitHub",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "list",
      message: "License",
      name: "license",
      choices: ["Community", "MIT", "None"],
    },
  ])
  .then((data) => {
    // const answers =
    //dont need const bc using data. using data variable to pass it to the right file

    //bc have object and want string
    //   JSON.stringify(data);

    // TODO: Create a function to write README file
    fs.writeFile("READMEGenerator.md", generateMarkdown(data), (err) =>
      err ? console.error(err) : console.log("file created!")
    );

    // TODO: Create a function to initialize app
    function init() {}

    // Function call to initialize app
    init();
  });
