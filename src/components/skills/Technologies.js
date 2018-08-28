import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillInfo from '../../components/SkillInfo';

import ReactIcon from '../../assets/icons/react.png';
import Angular from '../../assets/icons/angular.png';
import Rails from '../../assets/icons/rails.png';

import Spring from '../../assets/icons/spring.png';
import JPA from '../../assets/icons/jpa.jpg';
import Node from '../../assets/icons/node.png';
import Express from '../../assets/icons/express.png';
import Mongo from '../../assets/icons/mongo.png';
import SQLDB from '../../assets/icons/sqldb.png';

import Bootstrap from '../../assets/icons/bootstrap.png';
import Material from '../../assets/icons/material.png';

import AWS from '../../assets/icons/aws.png';
import Heroku from '../../assets/icons/heroku.png';


import Git from '../../assets/icons/git.png';
import Postman from '../../assets/icons/postman.png';
import MySQL from '../../assets/icons/mysql.png';

const styles = {
    header: {
        marginTop: 10,
        color: '#2d80c4',
    }
};

export const Technologies = () => {
    return (<Grid
        container
        justify='center'
        direction='column'>
        <Grid
            align='center'>
            <Typography variant='display1' style={styles.header}>
                Frontend
                </Typography>
            <Grid
                container
                direction='row'
                justify='center'>
                <SkillInfo icon={ReactIcon} text='React.js/native' />
                <SkillInfo icon={Angular} text='Angular' />
                <SkillInfo icon={Rails} text='Ruby on Rails' />
            </Grid>
        </Grid>
        <Grid
            align='center'>
            <Typography variant='display1' style={styles.header} className='mt-5'>
                Backend
                </Typography>
            <Grid
                container
                direction='row'
                justify='space-around'>
                <SkillInfo icon={Node} text='Node.js' />
                <SkillInfo icon={Express} text='Express.js' />
                <SkillInfo icon={Spring} text='Spring boot' />
                <SkillInfo icon={JPA} text='Java Persistence API' />
                <SkillInfo icon={SQLDB} text='SQL DB' />
                <SkillInfo icon={Mongo} text='MongoDB' />
            </Grid>
        </Grid>

        <Grid 
            className='design-services-group'
            container
            justify='center'
            direction='row'>
            <Grid
                align='center'>
                <Typography variant='display1' style={styles.header} className='mt-5'>
                    Design
                </Typography>
                <Grid
                    container
                    direction='row'
                    justify='center'>
                    <SkillInfo icon={Bootstrap} text='Bootstrap' />
                    <SkillInfo icon={Material} text='Material UI' />
                </Grid>
            </Grid>
            <Grid
                align='center'>
                <Typography variant='display1' style={styles.header} className='mt-5'>
                    Services
                </Typography>
                <Grid
                    container
                    direction='row'
                    justify='center'>
                    <SkillInfo icon={AWS} text='Amazon Web Services' />
                    <SkillInfo icon={Heroku} text='Heroku' />
                </Grid>
            </Grid>
        </Grid>
    </Grid>);

};
