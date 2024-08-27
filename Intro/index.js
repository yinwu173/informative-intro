// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your Project?",
        name: "title",
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
        message: "What are the steps to install your Project?",
        name: "installation",     
    },
    {
        type: "input",
        message: "Provide instructions and examples for use.",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose project license:",
        name: "license",
        choices: [
            'MIT',
            'Mozilla',
            'None',
        ]
    },
    {
        type: "input",
        message: "List your collaborators and give credits to resources utilized.",
        name: "contributions",
    },
    {
        type: "input",
        message: "Please include test instructions and examples on how to run them.",
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
    fs.writeFile(fileName, data, (err) => 
        err ? console.error(err) : console.log('Success! You have created a file.')
    )
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log('Creating ReadMe file in progress');
        const dataTemplate = generateMarkdown(response);
        writeToFile('README.md', dataTemplate);
    });
}

// Function call to initialize app
init();
