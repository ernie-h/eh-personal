import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillInfo from '../../components/SkillInfo';

import JS from '../../assets/icons/js.png';
import CSS from '../../assets/icons/css.png';
import HTML from '../../assets/icons/html.png';
import SQL from '../../assets/icons/sql.png';
import Java from '../../assets/icons/java.png';
import TS from '../../assets/icons/ts.png';
import Ruby from '../../assets/icons/ruby.png';

const styles = {
    header: {
        marginTop: 10,
        color: '#2d80c4',  
    },
};

export const Languages = () => {
    return (<Grid
        container
        justify='center'
        direction='column'
        style={styles.spacing}>
        <Grid
            align='center'>
            <Typography variant='display1' style={styles.header}>
                Proficient In
                </Typography>
            <Grid
                container
                direction='row'
                justify='space-around'>
                <SkillInfo icon={HTML} text='HTML 5' />
                <SkillInfo icon={CSS} text='CSS 3' />
                <SkillInfo icon={JS} text='JavaScript (ES5/ES6)' />
                <SkillInfo icon={Java} text='Java' />
                <SkillInfo icon={SQL} text='SQL' />
            </Grid>
        </Grid>
        <Grid
            align='center'>
            <Typography variant='display1' style={styles.header} className='mt-5'>
                Familiar with
                </Typography>
            <Grid
                container
                direction='row'
                justify='center'>
                <SkillInfo icon={Ruby} text='Ruby' />
                <SkillInfo icon={TS} text='TypeScript' />
            </Grid>
        </Grid>
    </Grid>);

};
