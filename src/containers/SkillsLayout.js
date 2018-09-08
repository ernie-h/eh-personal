import React from 'react';
import { Typography, Grid, IconButton, Label, Button, Collapse } from '@material-ui/core';
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
    languagesBox: {
        backgroundColor: '#ffffff',
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
                    <div>
                        <div container style={styles.languagesBox}>
                            <Typography align='center' variant='display1' className='mb-2 pt-5'>
                                Languages
                            </Typography>
                            {this.renderListOfLanguages()}
                        </div>
                        
                        <Typography variant='display1' className='mb-2 mt-5'>
                            Design
                        </Typography>
                        {this.renderListOfDesign()}
                        <Typography variant='display1' className='mb-2 mt-5'>
                            Services
                    </Typography>
                        {this.renderListOfServices()}
                    </div>
                    <div>
                        <Typography variant='display1' className='mb-2 mt-5'>
                            Frontend
                        </Typography>
                        {this.renderListOfFrontEnd()}
                        <Typography variant='display1' className='mb-2 mt-5'>
                            Backend
                    </Typography>
                        {this.renderListOfBackEnd()}
                        <Typography variant='display1' className='mb-2 mt-5'>
                            Other
                    </Typography>
                        {this.renderListOfOther()}
                    </div>
                </Grid>
                <div style={styles.titleSpacing}>
                </div>
            </div>
        );
    }

}

export default SkillsLayout;
