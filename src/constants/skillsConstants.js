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
                progress: 70
            }, {
                text: 'CSS3',
                icon: CSS,
                progress: 60

            }, {
                text: 'JS (ES5/ES6)',
                icon: JS,
                progress: 80

            }, {
                text: 'Java',
                icon: Java,
                progress: 70

            }, {
                text: 'SQL',
                icon: SQL,
                progress: 60
            }, {
                text: 'Ruby',
                icon: Ruby,
                progress: 50
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
                progress: 70
            }, {
                text: 'Angular',
                icon: Angular,
                progress: 60

            }, {
                text: 'Rails',
                icon: Rails,
                progress: 40

            }
        ]
    },
    backend: {
        infos: [
            {
                text: 'Node.js',
                icon: Node,
                progress: 60
            }, {
                text: 'Express.js',
                icon: Express,
                progress: 50

            }, {
                text: 'Spring',
                icon: Spring,
                progress: 50

            }, {
                text: 'JPA',
                icon: JPA,
                progress: 60
            }, {
                text: 'SQLDB',
                icon: SQLDB,
                progress: 70

            }, {
                text: 'MongoDB',
                icon: Mongo,
                progress: 60
            }
        ]
    },
    design: {
        infos: [
            {
                text: 'Bootstrap',
                icon: Bootstrap,
                progress: 80
            }, {
                text: 'Material UI',
                icon: Material,
                progress: 60

            }
        ]
    },
    services: {
        infos: [
            {
                text: 'Amazon Web Services',
                icon: AWS,
                progress: 30
            }, {
                text: 'Heroku',
                icon: Heroku,
                progress: 30

            }
        ]
    },
    other: {
        infos: [
            {
                text: 'Git/Github',
                icon: Git,
                progress: 80
            }, {
                text: 'Postman',
                icon: Postman,
                progress: 40
            }, {
                text: 'My SQL Workbench',
                icon: MySQL,
                progress: 50
            }
        ]
    }
};