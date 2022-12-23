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