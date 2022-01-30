// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input'
        message: 'What is your project name?'
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'How do you installation this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you run this application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please pick a license.',
        name: 'license',
        choices: ['MIT', 'A', 'B', 'C'],
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'githubName',
    },
    {
        type: 'input',
        message: 'Enter your email address?',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
