const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

// node modules
const fs = require('fs');
const inquirer = require('inquirer');

// list prompts for mgr., eng., and int.
// Need name, id, and email (and office # for mgr's) (and github for eng.) (and school for interns)

const addManager = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the team manager's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the team manager's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the team manager's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the team manager's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the team manager's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the team manager's office number",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's office number");
                    return false;
                }
            }
        },
    ])
};

const addEngineer = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the engineer's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the engineer's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the engineer's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's GitHub",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's GitHub");
                    return false;
                }
            }
        },
    ])
};

const addIntern = () => {
    return inquirer.prompt ([
        {
            // name
            type: 'input',
            name: 'name',
            message: "Please list the intern's name",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the intern's name");
                    return false;
                }
            }

        },
        {
            // id
            type: 'input',
            name: 'id',
            message: "Please enter the intern's ID",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please list the intern's ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email address",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's email address");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's school",

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the engineer's school");
                    return false;
                }
            }
        },
    ])
};