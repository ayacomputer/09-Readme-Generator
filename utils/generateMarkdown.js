//Creating a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

//Creating a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

//Creating a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

//Creating a function to generate markdown for README
const generateMarkdown = ({ userName, projectName, description, installation, technology1, technology2, technology3, usage, license, gitHubName, email, repoName }) =>
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


module.exports = generateMarkdown;
