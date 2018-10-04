import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SkillInfo from '../components/SkillInfo';
import { SKILLS } from '../constants/skillsConstants';

const styles = {
    wrapper: {
        display: 'block',
        overflow: 'auto',
        backgroundColor: '#f4f4f4',
    },
    stepperWrapper: {
        backgroundColor: '#f4f4f4',

    },
    titleSpacing: {
        height: '70px',
    },
    titleHeader: {
        color: '#2d80c4',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        marginTop: 80,

    },
    sizing: {
        width: 300,
        height: 500,
    },
    whiteBox: {
        backgroundColor: '#ffffff',
        marginTop: 50,
        borderRadius: '15px 10px 10px',
    },
    blueBox: {
        backgroundColor: '#2d80c4',
        marginTop: 50,
        borderRadius: '15px 10px 10px',
    }
};

class SkillsLayout extends React.Component {

    renderListOfLanguages() {
        let languages = SKILLS.languages.infos.map((info, index) => {
            return <SkillInfo color='primary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return languages;
    }
    renderListOfFrontEnd() {
        let frontend = SKILLS.frontend.infos.map((info, index) => {
            return <SkillInfo color='secondary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return frontend;
    }
    renderListOfBackEnd() {
        let backend = SKILLS.backend.infos.map((info, index) => {
            return <SkillInfo color='primary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return backend;
    }
    renderListOfDesign() {
        let design = SKILLS.design.infos.map((info, index) => {
            return <SkillInfo color='secondary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return design;
    }
    renderListOfServices() {
        let services = SKILLS.services.infos.map((info, index) => {
            return <SkillInfo color='primary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return services;
    }
    renderListOfOther() {
        let other = SKILLS.other.infos.map((info, index) => {
            return <SkillInfo color='secondary' text={info.text} icon={info.icon} progress={info.progress} key={index} />;
        });
        return other;
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <Grid
                    container
                    alignItems='center'
                    direction='column'>
                    <Typography
                        className='rounded pl-5 pr-5'
                        variant='display3'
                        item='true'
                        style={styles.titleHeader}>
                        skills
                    </Typography>
                </Grid>

                <Grid
                    container
                    direction='row'
                    justify='space-around'>
                    <div className='grid-1'>
                        <div container style={styles.whiteBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Languages
                            </Typography>
                            {this.renderListOfLanguages()}
                        </div>
                        <div container style={styles.blueBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Design
                        </Typography>
                            {this.renderListOfDesign()}
                        </div>
                        <div container style={styles.whiteBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Services
                            </Typography>
                            {this.renderListOfServices()}
                        </div>
                    </div>
                    <div className='grid-2'>
                        <div container style={styles.blueBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Frontend
                        </Typography>
                            {this.renderListOfFrontEnd()}
                        </div>
                        <div container style={styles.whiteBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Backend
                        </Typography>
                            {this.renderListOfBackEnd()}
                        </div>
                        <div container style={styles.blueBox}>
                            <Typography align='center' variant='display1' className='mb-5 pt-5'>
                                Other
                             </Typography>
                            {this.renderListOfOther()}
                        </div>
                    </div>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }
}

export default SkillsLayout;
