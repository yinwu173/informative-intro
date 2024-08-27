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
        message: "List your project description.",
        name: "description",
    },
    {
        type: "input",
        message: "Create your table of contents.",
        name: "tableOfContents",
    },
    {
        type: "input",
        message: "Include an installation guide.",
        name: "installation",     
    },
    {
        type: "input",
        message: "List the usage for the project",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter project license:",
        name: "license",
    },
    {
        type: "input",
        message: "List out the contributions.",
        name: "contributions",
    },
    {
        type: "input",
        message: "Please include test instructions.",
        name: "tests",
    },
    {
        type: "input",
        message: "Do you have any questions?",
        name: "questions",
    },
    {
        type: "input",
        message: "Enter your Github username:",
        name: "username",  
    },
    {
        type: "input",
        message: "Enter your email address:",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('ReadMe.md', fileName, (err) =>
        err ? console.error(err) : console.log('Success! You have created a file.')
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
