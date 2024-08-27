// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "name",
    },
    {
        type: "input",
        message: "List your project description?",
        name: "description",
    },
    {
        type: "input",
        message: "Create your table of contents",
        name: "tableOfContents",
    },
    {
        type: "input",
        message: "Include an installation guide.",
        name: "installation",     
    },
    {
        type: "input",
        message: "Usage?",
        name: "usage",
    },
    {
        type: "input",
        message: "License?",
        name: "license",
    },
    {
        type: "input",
        message: "List out the contributions.",
        name: "contributions",
    },
    {
        type: "input",
        message: "Tests?",
        name: "tests",
    },
    {
        type: "input",
        message: "Any Questions?",
        name: "questions",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('ReadMe.md', fileName, (err) =>
        err ? console.error(err) : console.log('Success!')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Creating ReadMe file in progress")
    });
}

// Function call to initialize app
init();
