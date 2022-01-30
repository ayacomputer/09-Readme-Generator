// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// Creating an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectName',
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
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'gitHubName',
    },
    {
        type: 'input',
        message: 'Enter your email address?',
        name: 'email',
    },

];

// Creating functions to write README file
const promptUser = () => inquirer.prompt(questions);
const generateREADME = ({ projectName, description, installation, usage, license, gitHubName, email }) => {

}

// Creating a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Your README file is successfully created.'))
        .catch((error) => console.error(err));
}

// Function call to initialize app
init();
