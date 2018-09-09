import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import HomepageLayout from './containers/HomepageLayout';
import AboutLayout from './containers/AboutLayout';
import GoalsLayout from './containers/GoalsLayout';
import SkillsLayout from './containers/SkillsLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import ContactLayout from './containers/ContactLayout';

import AnchorLink from 'react-anchor-link-smooth-scroll';
import { slide as Menu } from 'react-burger-menu';
import { Typography, Grid } from '../node_modules/@material-ui/core';
import Hamburger from './assets/icons/hamburger.png';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2d80c4',
        },
        secondary: {
            main: '#ffffff',
            light: '#2d80c4',
            contrastText: '#ffcc00',
        },
    },
});

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '50px',
        height: '50px',
        left: '25px',
        top: '30px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#2d80c4',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        borderLeft: 'grey solid 20px'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block',
        color: '#ffffff'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };
    }
    render() {
        return (<div>

            <Menu styles={styles} customBurgerIcon={<img src={Hamburger} />} >
                <Grid container
                    direction='column'
                    justify='space-around'>
                    <AnchorLink id="home" className="menu-item" href="#homepage">
                        <Typography variant='display1'>Home</Typography>
                    </AnchorLink>
                    <br />
                    <AnchorLink className="menu-item" href="#about">
                        <Typography variant='display2'>About</Typography>
                    </AnchorLink>
                    <br />
                    <AnchorLink className="menu-item" href="#values">
                        <Typography variant='display1'>Values</Typography>
                    </AnchorLink>
                    <br />
                    <AnchorLink className="menu-item" href="#projects">
                        <Typography variant='display2'>Projects</Typography>
                    </AnchorLink>
                    <br />
                    <AnchorLink className="menu-item" href="#contact">
                        <Typography variant='display1'>Contact</Typography>
                    </AnchorLink>
                </Grid>
            </Menu>
            <section id='homepage'>
                <HomepageLayout />
            </section>
            <section id='about'>
                <AboutLayout />
            </section>
            <section id='values'>
                <GoalsLayout />
            </section>
            <section id='skills'>
                <SkillsLayout />
            </section>
            <section id='projects'>
                <ProjectsLayout />
            </section>
            <section id='contact'>
                <ContactLayout />
            </section>
        </div>
        );
    }
}

ReactDOM.render(
    <MuiThemeProvider theme={mainTheme}>
        <App />
    </MuiThemeProvider>
    , document.getElementById('root'));

export default App;
