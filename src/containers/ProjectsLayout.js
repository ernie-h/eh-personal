import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import ProjectCard from '../components/ProjectCard';
import Whiteboard from '../assets/projects/whiteboard.png';
import Kooker from '../assets/projects/kooker.png';
import ProjectDumpster from '../assets/projects/projectDumpster.png';
import Abstraction from '../assets/projects/abstractart.png';
import TorchTales from '../assets/projects/torchtales.png';

const styles = {
    wrapper: {
        display: 'block',
        overflow: 'auto',
        backgroundColor: '#2d80c4',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'start',
        backgroundRepeat: 'no-repeat',

    },
    titleSpacing: {
        height: '70px',
    },
    header: {
        color: '#2d80c4',
        backgroundColor: '#f4f4f4'
    },
    valueInfoBox: {
        display: 'inline-block',
        overflow: 'auto',
        maxWidth: 650,
        margin: 20,
        padding: 40,
        backgroundColor: '#ffffff',
        borderRadius: '15px 50px 30px'

    }
};

const cards = {
    whiteboard: {
        header: 'Whiteboard (2018)',
        description: 'Whiteboard is a course managing site for student and faculty members, built with React, MEAN stack, and Springboot.',
        img: Whiteboard
    },
    kooker: {
        header: 'Kooker (2018)',
        description: 'Kooker is a social media platform that connects homecooks, verified chefs, and critics, built with React and Springboot.',
        img: Kooker
    },
    abstraction: {
        header: 'Abstraction (2017)' ,
        description: 'Abstraction is an art creator that takes an image and turns it into abstract art. Built using Java and the Processing library.',
        img: Abstraction
    },
    projectDumpster: {
        header: 'Project Dumpster (2017)',
        description: 'Project Dumpster is a zombie survival game, where protaganist Fell must fend off the horde. Built using Java and the FunWorld library.',
        img: ProjectDumpster

    },
    torchTales: {
        header: 'TorchTales (2016)' ,
        description:'Torch Tales is a mobile platform game featuring my High School principal. Built using GameSalad' ,
        img: TorchTales

    }
};


export class ProjectsLayout extends Component {
    render() {
        return (
            <Grid
                container
                style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    direction='column'
                    alignItems='center'>
                    <Typography
                        className='rounded pl-5 pr-5 pb-2 mb-5'
                        variant='display3'
                        item='true'
                        style={styles.header}>
                        projects
                    </Typography>
                    <Grid
                        container
                        direction='row'
                        justify='center'>
                        <ProjectCard
                            header={cards.whiteboard.header}
                            description={cards.whiteboard.description}
                            img={cards.whiteboard.img} />
                        <ProjectCard
                            header={cards.kooker.header}
                            description={cards.kooker.description}
                            img={cards.kooker.img} />
                        <ProjectCard
                            header={cards.abstraction.header}
                            description={cards.abstraction.description}
                            img={cards.abstraction.img} />
                        <ProjectCard
                            header={cards.projectDumpster.header}
                            description={cards.projectDumpster.description}
                            img={cards.projectDumpster.img} />
                        <ProjectCard
                            header={cards.torchTales.header}
                            description={cards.torchTales.description}
                            img={cards.torchTales.img} />
                    </Grid>


                    {/* <Typography variant='caption'>
                        coming soon...but heres a link to my <a href='https://github.com/ernie-h'>Github</a> for now
              </Typography> */}

                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </Grid>
        );
    }
}

export default ProjectsLayout;
