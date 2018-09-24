import React, { Component } from 'react';
import { Grid, Typography, Collapse } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import LinkedIn from '../assets/icons/linkedin.png';
import Gmail from '../assets/icons/gmail.png';

const styles = {
    wrapper: {
        display: 'block',
        overflow: 'auto',
        backgroundColor: '#f4f4f4',
    },
    titleSpacing: {
        height: '300px'
    },
    text: {
        color: '#2d80c4'
    },
    icon: {
        width: 100,
        height: 100,
        marginTop: 30,
    },
};

export class ContactLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            anchorEl: null,
            open: false
        };
    }


    render() {
        return (
            <div style={styles.wrapper}>
                <div style={styles.titleSpacing}>
                </div>
                <ScrollAnimation animateIn='fadeIn'>
                    <Grid
                        container
                        direction='row'
                        justify='center'>
                        <Typography align='center' variant='display3' color='primary'>
                            Let's get in contact
                         </Typography>
                        <Grid
                            container
                            direction='row'
                            justify='center'
                            className='mr-5'>
                            <a href='https://www.linkedin.com/in/ernie-hao/'>
                                <img className='ml-5 mr-2' src={LinkedIn} style={styles.icon} onClick={() => this.setState({ open: !this.state.open })} />
                            </a>
                            <Grid
                                direction='column'
                                align='center'
                                className='mt-1'>
                                <img src={Gmail} style={styles.icon} onClick={() => this.setState({ open: !this.state.open })} />
                                <Collapse in={this.state.open}>
                                    <Typography variant='body1'>
                                        hao.e@husky.neu.edu
                                    </Typography>
                                </Collapse>
                            </Grid>
                        </Grid>
                    </Grid>
                </ScrollAnimation>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default ContactLayout;
