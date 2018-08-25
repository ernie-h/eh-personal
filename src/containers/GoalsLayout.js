import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

const styles = {
    wrapper: {
        height: '728px'
    },
    titleSpacing: {
        height: '300px'
    }
};

export class GoalsLayout extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    justify='center'>
                    <Typography variant='display4' item='true'>
                        Goals
                    </Typography>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default GoalsLayout;
