// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
/*THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions*/
const questions = [{
    type: 'input',
    message: 'What is your project name?',
    name: 'title',
},
{
    type: 'input',
    message: 'What is your project description?',
    name: 'description',
},
{
    type: 'confirm',
    message: 'Do you need a table of contents?',
    name: 'confirmTable',
    default: true
},
{
    type: 'input',
    message: 'What are the steps required to install this project? Provide a step by step guide.',
    name: 'installation',
},
{
    type: 'input',
    message: 'What is your project description of the usage section?',
    name: 'usage',
},
{
    type: 'list',
    message: 'Select an Option',
    name: 'badgeOptions',
    choices: [
        new inquirer.Separator(),
        'MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
        new inquirer.Separator(),
        'Apache [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
        new inquirer.Separator(),
        'Boost [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    ]
},
{
    type: 'list',
    message: 'Select an Option',
    name: 'license',
    choices: [
        new inquirer.Separator(),
        'MIT',
        new inquirer.Separator(),
        'Apache',
        new inquirer.Separator(),
        'Boost',
    ]
},
{
    type: 'input',
    message: 'If your project has a lot of features, list them here.',
    name: 'features',
},
{
    type: 'input',
    message: 'Who contributed to your work?',
    name: 'credits',
},
{
    type: 'input',
    message: 'Please enter your data for tests.',
    name: 'tests',
},
{
    type: 'input',
    message:"What is your Github username?",
    name: 'username',
},
{
    type: 'input',
    message:"What is your email?",
    name: 'email',
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    // console.log(fileName)
    // console.log(data)

    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(userInput =>{
        console.log(userInput)
        writeToFile("GeneratedREADME.md", generateMarkdown(userInput) )

    });
}

// Function call to initialize app
init();

