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

export class ProjectsLayout extends Component {
    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <Grid
                    container
                    direction='column'
                    alignItems='center'>
                    <Typography variant='display4' item='true'>
                        Projects
              </Typography>
              <br/>
              <Typography variant='caption'>
                coming soon...but heres a link to my <a href='https://github.com/ernie-h'>Github</a> for now
              </Typography>
     
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default ProjectsLayout;
