//Creating a function to generate markdown for README
const generateMarkdown = (data) => {

  switch (data.license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Apache License 2.0':
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    case 'GNU General Public License 2.0':
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      break;
    case 'GNU General Public License 3.0':
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;
  }

  let readmeContents = `
  # ${data.projectName}`
  let tableOfContents = `\n<details>
  \n<summary>Table of Contents</summary>
  \n<ol>
  \n<li>
  \n<a href="#about-the-project">About The Project</a>
  \n<ul>
  \n<li><a href="#built-with">Built With</a></li>
  \n</ul>
  \n</li>`

  if (data.installation) {
    tableOfContents += `
    \n<li>
    \n<a href="#getting-started">Getting Started</a>
    \n<ul>
    \n<li><a href="#installation">Installation</a></li>
    \n</ul>
    \n</li>`}

  if (data.usage) {
    tableOfContents += `
    \n<li><a href="#usage">Usage</a></li>`
  }

  tableOfContents += `
  \n<li><a href="#license">License</a></li>
  \n<li><a href="#contact">Contact</a></li>
  \n</ol >
  \n</details >`


  readmeContents += tableOfContents;

  readmeContents += `
\n ## About The Project
\n[![Product Name Screen Shot][product - screenshot]](./assets/screenshot/product.png)
\n ${data.description}
\n<p align="right">(<a href="#top">back to top</a>)</p>`


  readmeContents += `
  \n ## Built With`

  if (data.technology1) {
    readmeContents += `\n * ${data.technology1}`
  }
  if (data.technology2) {
    readmeContents += `\n * ${data.technology2}`
  }
  if (data.technology3) {
    readmeContents += `\n * ${data.technology3}`
  }
  if (data.technology4) {
    readmeContents += `\n * ${data.technology4}`
  }

  readmeContents += `\n<p align="right">(<a href="#top">back to top</a>)</p>`

  if (data.installation) {
    readmeContents += `
  \n## Getting Started
  \nTo get a local copy up and running follow these simple example steps.
  \n ## Installation
  \n ${data.installation}
  \n<p align="right">(<a href="#top">back to top</a>)</p>`
  }

  if (data.usage) {
    readmeContents += `
\n## Usage
\n Following animation and images show this application's functionality.
\n${data.usage}
\n<p align = "right" > (<a href="#top">back to top</a>)</p>`
  }


  readmeContents += `
\n## License
\nDistributed under ${data.license} License.
\nSee LICENSE.txt for more information.
\n<p align = "right"> (<a href="#top">back to top</a>)</ >`

  readmeContents += `
\n ## Contact Me
\n${data.userName} - ${data.email}

\nProject Link: [https://github.com/${data.gitHubName}/${data.repoName}](https://github.com/${data.gitHubName}/${data.repoName})

\n<p align="right">(<a href="#top">back to top</a>)</p>
`
  return readmeContents;
};


module.exports = generateMarkdown;
