import JS from '../assets/icons/js.png';
import CSS from '../assets/icons/css.png';
import HTML from '../assets/icons/html.png';
import SQL from '../assets/icons/sql.png';
import Java from '../assets/icons/java.png';
import TS from '../assets/icons/ts.png';
import Ruby from '../assets/icons/ruby.png';

import ReactIcon from '../assets/icons/react.png';
import Angular from '../assets/icons/angular.png';
import Rails from '../assets/icons/rails.png';

import Spring from '../assets/icons/spring.png';
import JPA from '../assets/icons/jpa.jpg';
import Node from '../assets/icons/node.png';
import Express from '../assets/icons/express.png';
import Mongo from '../assets/icons/mongo.png';
import SQLDB from '../assets/icons/sqldb.png';

import Bootstrap from '../assets/icons/bootstrap.png';
import Material from '../assets/icons/material.png';

import AWS from '../assets/icons/aws.png';
import Heroku from '../assets/icons/heroku.png';


import Git from '../assets/icons/git.png';
import Postman from '../assets/icons/postman.png';
import MySQL from '../assets/icons/mysql.png';

export const SKILLS = {
    languages: {
        infos: [
            {
                text: 'HTML5',
                icon: HTML,
                progress: 65
            }, {
                text: 'CSS3',
                icon: CSS,
                progress: 55

            }, {
                text: 'JS (ES5/ES6)',
                icon: JS,
                progress: 65

            }, {
                text: 'Java',
                icon: Java,
                progress: 70

            }, {
                text: 'SQL',
                icon: SQL,
                progress: 50
            }, {
                text: 'Ruby',
                icon: Ruby,
                progress: 40
            }, {
                text: 'TypeScript',
                icon: TS,
                progress: 40
            }
        ]
    },
    frontend: {
        infos: [
            {
                text: 'React JS/Native',
                icon: ReactIcon,
                progress: 65
            }, {
                text: 'Angular',
                icon: Angular,
                progress: 45

            }, {
                text: 'Rails',
                icon: Rails,
                progress: 45

            }
        ]
    },
    backend: {
        infos: [
            {
                text: 'Node.js',
                icon: Node,
                progress: 50
            }, {
                text: 'Express.js',
                icon: Express,
                progress: 40

            }, {
                text: 'Spring',
                icon: Spring,
                progress: 45

            }, {
                text: 'JPA',
                icon: JPA,
                progress: 45
            }, {
                text: 'SQLDB',
                icon: SQLDB,
                progress: 65

            }, {
                text: 'MongoDB',
                icon: Mongo,
                progress: 55
            }
        ]
    },
    design: {
        infos: [
            {
                text: 'Bootstrap',
                icon: Bootstrap,
                progress: 65
            }, {
                text: 'Material UI',
                icon: Material,
                progress: 65

            }
        ]
    },
    services: {
        infos: [
            {
                text: 'Amazon Web Services',
                icon: AWS,
                progress: 45
            }, {
                text: 'Heroku',
                icon: Heroku,
                progress: 45

            }
        ]
    },
    other: {
        infos: [
            {
                text: 'Git/Github',
                icon: Git,
                progress: 75
            }, {
                text: 'Postman',
                icon: Postman,
                progress: 50
            }, {
                text: 'My SQL Workbench',
                icon: MySQL,
                progress: 65
            }
        ]
    }
};