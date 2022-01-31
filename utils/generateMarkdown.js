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

  let readmeContents = `\n${licenseBadge}\n\n---
  \n# ${data.projectName}`



  let tableOfContents = `\n<details>
  \n<summary>Table of Contents</summary>\n
  \n<ol>
  \n<li>
  \n<a href="#about-the-project">About The Project</a></li>\n
  \n<ul>
  \n<li><a href="#built-with">Built With</a></li>\n`

  if (data.usage) {
    tableOfContents += `\n<li><a href="#usage">Usage</a></>`
  }

  if (data.installation) {
    tableOfContents += `\n</ul>
\n</li>
\n<li>
\n<a href="#getting-started">Getting Started</a>
\n<ul>
\n<li><a href="#installation">Installation</a>
\n</ul>
\n</li>`}



  tableOfContents += `\n<li><a href="#license">License</a></>
  \n<li><a href="#contact">Contact</a></>
  \n</ol>
  \n</details>\n`


  readmeContents += tableOfContents;

  readmeContents += `\n ## About The Project\n
\n ![ProductScreen Shot](./assets/product.gif)\n
\n${data.description}
\n<p align = "right">(<a href="#top">back to top</a>)</>\n`


  readmeContents += `\n ## Built With`

  if (data.technology1) {
    readmeContents += `\n* ${data.technology1} `
  }
  if (data.technology2) {
    readmeContents += `\n* ${data.technology2} `
  }
  if (data.technology3) {
    readmeContents += `\n* ${data.technology3} `
  }
  if (data.technology4) {
    readmeContents += `\n* ${data.technology4} `
  }
  readmeContents += `\n<p align = "right"> (<a href="#top">back to top</a>)</>\n`

  if (data.usage) {
    readmeContents += `\n## Usage
\n  Following image shows this application's functionality(questions).
\n${data.usage}
\n<p align ="right">(<a href="#top">back to top</a>)</>\n`
  }



  if (data.installation) {
    readmeContents += `\n## Getting Started
\nTo get a local copy up and running follow these simple example steps.
\n ## Installation
\n The application will be invoked by using the following command:\n
\n ${data.installation}
\n<p align="right">(<a href="#top">back to top</a>)</>\n`
  }




  readmeContents += `\n## License
\n${licenseBadge}
\nDistributed under ${data.license} License.
\nSee LICENSE.txt for more information.
\n<p align ="right">(<a href="#top">back to top</a>)</>\n`

  readmeContents += `\n ## Contact Me
\n${data.userName} - ${data.email}
\nProject Link: [https://github.com/${data.gitHubName}/${data.repoName}](https://github.com/${data.gitHubName}/${data.repoName})
\n<p align="right">(<a href="#top">back to top</a>)</>\n`

  return readmeContents;
};


module.exports = generateMarkdown;
