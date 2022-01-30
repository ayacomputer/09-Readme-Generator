// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Creating an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'projectName',
    },
    {
        type: 'input',
        message: 'What is your repository name?',
        name: 'repoName',
    },
    {
        type: 'input',
        message: 'Describe your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the first technology did you use to build this application?',
        name: 'technology1',
    },
    {
        type: 'input',
        message: 'What is the second technology did you use to build this application?',
        name: 'technology2',
    },
    {
        type: 'input',
        message: 'What is the third technology did you use to build this application?',
        name: 'technology3',
    },
    {
        type: 'input',
        message: 'What is the fourth technology did you use to build this application?',
        name: 'technology4',
    },
    {
        type: 'input',
        message: 'How do you install this application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'If you have the screenshot or animation of the product please enter the link.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please pick a license.',
        name: 'license',
        choices: ['MIT', 'Apache License 2.0', 'GNU General Public License 2.0', 'GNU General Public License 3.0'],
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
const markDownExample = `\n
Let's create your README.md file!

----------------------Mark Down examples---------------------
Italic text: *This text will be italic* 
Bold text: **This text will be bold**
Links: [text](https://website.com)
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Node.js](https://nodejs.org/)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)
Image or Animation: ![This is an image of the product.](./assets/product.png)
Clone: git clone git@github.com:ayacomputer/09-Readme-Generator.git
-------------------------------------------------------------
Please answer the questions bellow:
`
const promptUser = () => inquirer.prompt(questions);


// Creating a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => {
            fs.writeFileSync('README.md', generateMarkdown(answers))
        })
        .then(() => {
            console.log(`\n-------------------------------------\n`);
            console.log('Your README file is successfully created.');
            console.log(`\n-------------------------------------\n`);
        })
        .catch((err) => console.error(err));
}

// Function call to initialize app
console.log(markDownExample);
init();
