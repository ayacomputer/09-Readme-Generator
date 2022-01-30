// Including packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
        message: 'What technologies(languages) did you use to build this application?',
        name: 'technologies',
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
    `<!-- TABLE OF CONTENTS -->
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
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](./assets/screenshot/product.png)

${description}

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* ${technology}
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Vue.js](https://vuejs.org/)
* [Angular](https://angular.io/)
* [Svelte](https://svelte.dev/)
* [Laravel](https://laravel.com)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>




### Installation


// Prep. Get a free API Key at [https://example.com](https://example.com)

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
    ```
2. Install NPM packages
   ```sh
   npm install
        ```
3. Enter your API in `config.js`
   ```js
    const API_KEY = 'ENTER YOUR API';
    ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under ${license} License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact Me

${userName} - ${email}

Project Link: [https://github.com/${gitHubName}/${repoName}](https://github.com/${gitHubName}/${repoName})

<p align="right">(<a href="#top">back to top</a>)</p>
`
}

// Creating a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Your README file is successfully created.'))
        .catch((err) => console.error(err));
}

// Function call to initialize app
init();
