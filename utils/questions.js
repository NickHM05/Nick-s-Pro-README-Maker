const inquirer = require('inquirer');
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
    type: 'list',
    message: 'Select an Option',
    name: 'badgeOptions',
    choices: [
        new inquirer.Separator(),
        'MIT', 
        new inquirer.Separator(),
        'Apache', 
        new inquirer.Separator(),
        'Boost',
    ]
}]

module.exports = questions