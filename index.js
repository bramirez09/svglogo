// packages
const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes')

function logoMaker(data) {
    render() {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="red" />

  <circle cx="150" cy="100" r="80" fill="green" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

     </svg>`
    }



}

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
        choices: ['circle', 'square', 'triangle',],
    },
    {
        type: 'input',
        message: 'Enter shape color',
        name: 'shapecolor',
    },
];

// call function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            const createLogo = logoMaker(data);
            writeToFile("example.svg", createLogo);
        })
}

init();