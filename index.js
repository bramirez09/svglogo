// packages
const fs = require('fs');
const inquirer = require('inquirer');
const { findSourceMap } = require('module');
const { Circle, Square, Triangle } = require('./lib/shapes')


class LogoMaker {
    constructor() {
        this.userText = "";
        this.userShape = "";
    }
    render() {
        return `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
        ${this.userShape}
        ${this.userText}

  </svg>`
    }

    addText(text, textcolor) {
      this.userText =  `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>`
    }
    
    addShape(x){
        this.userShape = shape.render(x)
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
        type: 'list',
        message: 'Select logo shape',
        name: 'shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        message: 'Enter shape color',
        name: 'shapecolor',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("success!")
    })
}

// call function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            let x;
            switch (data.shape) {
                case 'circle':
                    x = new Circle();
                    break;
                case 'square':
                    x = new Square();
                    break;
                default:
                    x = new Triangle();
            }
            x.addcolor(data.shapecolor);
            //console.log(x);
            const createLogo = new LogoMaker();
            createLogo.addText(data.text, data.textcolor);
            console.log(createLogo);
            //writeToFile("example.svg", createLogo);
        })
}

init();