import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import Teddy from '../assets/tr.png';
import { ValueInfo } from '../components/ValueInfo';

const styles = {
    wrapper: {
        display: 'block',
        overflow: 'auto',
        backgroundColor: '#2d80c4',
        backgroundImage: `url(${Teddy})`,
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

const texts = {
    one: ' "THE CREDIT BELONGS TO THE MAN WHO IS ACTUALLY IN THE ARENA"',
    two: ' "WHO COMES SHORT AGAIN AND AGAIN, BECAUSE THERE IS NO EFFORT WITHOUT ERROR AND SHORTCOMING"',
    three: ' "WHO SPENDS HIMSELF IN A WORTHY CAUSE"',
    four: '"WHO AT THE BEST KNOWS THE TRIUMPH OF HIGH ACHIEVEMENT"',
    five: '  "WHO AT THE WORST, FAILS WHILE DARING GREATLY"',
    six: ' "HIS PLACE SHALL NEVER BE WITH THOSE COLD & TIMID SOULS WHO NEITHER KNOW VICTORY OR DEFEAT"'
};


export class GoalsLayout extends Component {
    render() {
        return (
            <Grid 
                container 
                style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    alignItems='center'
                    direction='column'
                    xl='auto'>
                    <Typography
                        className='rounded pl-5 pr-5 pb-2 mb-5'
                        variant='display3'
                        item='true'
                        style={styles.header}>
                        values
                    </Typography>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.one} />
                    </div>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.two} />
                    </div>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.three} />
                    </div>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.four} />
                    </div>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.five} />
                    </div>
                    <div style={styles.valueInfoBox}>
                        <ValueInfo text={texts.six} />
                    </div>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </Grid>
        );
    }
}

export default GoalsLayout;
