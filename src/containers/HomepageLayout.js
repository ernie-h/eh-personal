import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';

import backgroundImage from '../assets/homepage_cover_1440.jpg';

const styles = {
    wrapper: {
        height: '780px',
        backgroundImage: `url(${backgroundImage})`,
    },
    titleSpacing: {
        height: '300px'
    },
    text: {
        color: '#ffffff'
    },
    name: {
        color: '#2d80c4'
    }
};

export class HomepageLayout extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    direction='column'
                    alignItems='center'
                    >
                     <Typography variant='title' item='true' style={styles.text}>
                        <em>Hiya, I'm</em>
              </Typography>
                
                    <Typography className="bg-light rounded pl-3 pr-3 mt-2" variant='display3' item='true' style={styles.name}>
                        ernie hao
              </Typography>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default HomepageLayout;
