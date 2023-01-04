// ## Table of Contents
// - [Description](#description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [Features](#features)
// - [License](#license)
// - [Credits](#credits)
// - [Tests](#tests)
// - [Questions](#questions)
const licensesForUse = require('./licensesForUse.js')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  let result = licensesForUse.filter(licenseUsed => licenseUsed.name == license);
  return result[0].badgeOptions
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    return ``;
  }
  let result = licensesForUse.filter(licenseUsed => licenseUsed.name == license);;
  return result[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "None") {
    return ``;
  }
  return `## License 
  This application is licensed under [${license}](${renderLicenseLink(license)}) license. Click the link for license rights and limitations.`;
}
// TODO: Create a function to generate markdown for README
// function makeAtable(data) {
//   if (!data.confirmTable) {
//     return;
//   }
//   if (data.license == 'None') {
//     return `## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [Credits](#contribute)
//   - [Tests](#tests)
//   - [Questions](#questions)`;
//   }

//   return `## Table of Contents
//   - [Installation](#installation)
//   - [Usage](#usage)
//   - [License](#license)
//   - [Credits](#contribute)
//   - [Tests](#tests)
//   - [Questions](#questions)`;
// }

function generateMarkdown(data) {
  // console.log("Inside generatedMarkdown")
  // console.log(data)
  return `# ${data.title}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}

## Badges
${data.badgeOptions}

## Features
${data.features}

## Credits
${data.credits}

## Tests
${data.tests}

## Questions
[Link to my Github Profile](https://github.com/${data.username}

For any additional questions, you can email me at:

${data.email}
`;
}

module.exports = generateMarkdown;
