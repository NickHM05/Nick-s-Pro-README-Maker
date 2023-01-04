// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = require('./utils/questions');

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
        writeToFile("./GeneratedREADME/test.md", generateMarkdown(userInput) )

    })
}

// Function call to initialize app
init();

