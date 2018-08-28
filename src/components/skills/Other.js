import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillInfo from '../../components/SkillInfo';

import Git from '../../assets/icons/git.png';
import Postman from '../../assets/icons/postman.png';
import MySQL from '../../assets/icons/mysql.png';

const styles = {
    header: {
        marginTop: 10,
        color: '#2d80c4',  
    },
};

export const Other = () => {
    return (<Grid
        container
        justify='center'
        direction='column'
        style={styles.spacing}>
        <Grid
            align='center'>
            <Typography variant='display1' style={styles.header}>
                Applications
                </Typography>
            <Grid
                container
                direction='row'
                justify='center'>
                <SkillInfo icon={Git} text='Git/Github' />
                <SkillInfo icon={Postman} text='Postman' />
                <SkillInfo icon={MySQL} text='My SQL Workbench' />
            </Grid>
        </Grid>
    </Grid>);

};
