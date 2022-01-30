//Creating a function to generate markdown for README
const generateMarkdown = (data) => {

  switch (data.license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache License 2.0': `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GNU General Public License 2.0': `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'GNU General Public License 3.0': `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
  }

  `#${projectName}
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
`};


module.exports = generateMarkdown;
