
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("Inside generatedMarkdown")
  console.log(data)
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Features](#Features)
- [License](#badgeOptions)
- [Credits](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## Badges
${data.badgeOptions}

## License
${data.License}

## Features
${data.Features}

## Credits
${data.Contributing}

## Testing
${data.Tests}

## Questions
${data.Questions}
`;}

module.exports = generateMarkdown;
