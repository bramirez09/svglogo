// packages
const fs = require('fs');
const inquirer = require('inquirer');

// user prompts
const questions = [
    {
        type: 'input',
        message: 'Enter 3 text characters',
        name: 'text',  
    },
    {
        type: 'input',
        message: 'Enter color for text',
        name: 'textcolor',  
    },
    {
        type: 'List',
        message: 'Select logo shape',
        name: 'shape', 
        choices: ['circle', 'square', 'triangle','rectable'],
    },
    {
        type: 'input',
        message: 'Enter shape color',
        name: 'shapecolor',  
    },    
];

// call function to initialize app
function init(){
    inquirer.prompt(questions)
        .then((answers) =>{
            const createLogo = logoMaker(answers);
            writeToFile("example.svg",createLogo);
        })
}

init();