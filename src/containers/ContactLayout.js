import React, { Component } from 'react';
import { Grid, Typography, Collapse } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import LinkedIn from '../assets/icons/linkedin.png';
import Gmail from '../assets/icons/gmail.png';
import Github from '../assets/githubContact.png';

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
        width: 64,
        height: 64,
        marginTop: 30,
    },
    icon2: {
        width: 50,
        height: 50,
        marginTop: 38,
    }
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
                            Let's get in contact.
                         </Typography>
                        <Grid
                            container
                            direction='row'
                            justify='center'>
                            <a href='https://www.linkedin.com/in/ernie-hao/'>
                                <img className='' src={LinkedIn} style={styles.icon} />
                            </a>
                            <a href='https://github.com/ernie-h'>
                                <img className='' src={Github} style={styles.icon2} />
                            </a>
                            <img src={Gmail} style={styles.icon} className='ml-2 pt-2' onClick={() => this.setState({ open: !this.state.open })} />
                        </Grid>
                            <Grid
                                direction='column'
                                align='center'
                                className='mt-1'>
                                <Collapse in={this.state.open}>
                                    <Typography variant='body1'>
                                        hao.e@husky.neu.edu
                                    </Typography>
                                </Collapse>
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
