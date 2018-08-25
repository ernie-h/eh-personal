import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

const styles = {
    spacing: {
        height: '300px'
    }
};

export class HomepageLayout extends Component {
    render() {
        return (
            <div>
                <div style={styles.spacing}>
                </div>
                <Grid
                    container
                    justify='center'>
                    <Typography variant='display4' item='true'>
                        Ernie Hao
              </Typography>
                </Grid>
                <div style={styles.spacing}>
                </div>
            </div>
        );
    }
}

export default HomepageLayout;
