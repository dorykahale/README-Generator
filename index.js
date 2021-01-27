// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a short description of your project: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation instructions: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage information of the project: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter contributing guidelines: ",
        name: "contribution"
    }, 
    {
        type: "input",
        message: "Enter tests instructions: ",
        name: "test"
    },
    {
        type: "input",
        message: "Enter licensing information: ",
        name: "license"
    },
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
    type: "input",
    message: "Enter your contact email address: ",
    name: "email"
    }
];

// TODO: Create a function to write README file
function writeToFile(README, data) {
    fs.writeFile(README, data, function (err) {
            if (err) {
                throw err;
            }
            console.log("Success! README.md File Was Created");
        });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        const response = generateMarkdown(answers);
        console.log(answers);
        writeToFile("./output/README.md", response)
    })
}


// Function call to initialize app
init();
