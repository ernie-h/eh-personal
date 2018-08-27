import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ValueInfo } from '../components/ValueInfo';

const styles = {
    wrapper: {
        height: 1080,
        backgroundColor: '#2d80c4'
    },
    titleSpacing: {
        height: '70px',
    },
    header: {
        color: '#2d80c4',
        backgroundColor: '#f4f4f4'
    },
    profile: {
        width: 400,
        height: 530,
        boxShadow: '8px 8px 2px #e3e4e5',
        border: 'solid 8px white'

    },
    valueInfoBox: {

        width: 900,
        height: 110,
        marginBottom: 25,
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
            <div style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    alignItems='center'
                    direction='column'>
                    <Typography
                        className='rounded pl-5 pr-5 pb-2 mb-5'
                        variant='display3'
                        item='true'
                        style={styles.header}>
                        values
                    </Typography>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.one} />
                    </Grid>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.two} />
                    </Grid>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.three} />
                    </Grid>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.four} />
                    </Grid>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.five} />
                    </Grid>
                    <Grid container
                        justify='center'
                        style={styles.valueInfoBox}>
                        <ValueInfo text={texts.six} />
                    </Grid>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default GoalsLayout;
