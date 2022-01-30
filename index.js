// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
const promptUser = () => inquirer.prompt(questions);
const generateREADME = ({ userName, projectName, description, installation, technology1, technology2, technology3, usage, license, gitHubName, email, repoName }) =>
    `
    #${projectName}
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](./assets/screenshot/product.png)

${description}

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* ${technology1}
* ${technology2}
* ${technology3}

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started
To get a local copy up and running follow these simple example steps.

  
### Installation
${installation}


<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
${usage}

Following animation and images show this application's functionality.
[![Product Screen Shot][product-screenshot]](./assets/screenshot/product.gif)


<p align="right">(<a href="#top">back to top</a>)</p>



## License

Distributed under ${license} License. See 'LICENSE.txt' for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## Contact Me

${userName} - ${email}

Project Link: [https://github.com/${gitHubName}/${repoName}](https://github.com/${gitHubName}/${repoName})

<p align="right">(<a href="#top">back to top</a>)</p>
`;

// Creating a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Your README file is successfully created.'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
