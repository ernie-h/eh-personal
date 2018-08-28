import React from 'react';
import { Stepper, Step, StepLabel, StepContent, Typography, Grid, IconButton } from '@material-ui/core';
import { Languages } from '../components/skills/Languages';
import { Technologies } from '../components/skills/Technologies';
import { Other } from '../components/skills/Other';

const styles = {
    wrapper: {
        display: 'block',
        overflow: 'auto',
        backgroundColor: '#f4f4f4'
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
        marginBottom: 50,
    },
};


function getSteps() {
    return ['Languages', 'Technologies', 'Other'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Languages className='ml-5' />;
        case 1:
            return <Technologies />;
        case 2:
            return <Other />;
        default:
            return 'Unknown step';
    }
}

class SkillsLayout extends React.Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.state = {
            activeStep: 0,
        };
    }

    handleNext() {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    };

    handleBack() {
        this.setState({
            activeStep: this.state.activeStep - 1,
        });
    };

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <Grid
                style={styles.wrapper}>
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
                    <div style={styles.stepperWrapper}>
                        <Stepper
                            style={styles.wrapper}
                            activeStep={activeStep}
                            orientation="vertical">
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label}>
                                        <StepLabel className='text-secondary'>{label}</StepLabel>
                                        <StepContent>
                                            {getStepContent(index)}
                                            <div>
                                            </div>
                                            <div className='float-right mt-2'>
                                                <IconButton
                                                    disabled={activeStep == 0 && true}
                                                    variant='raised'
                                                    color='primary'
                                                    style={{ outline: 'none' }}
                                                    onClick={this.handleBack}>
                                                    <i className="fa fa-chevron-circle-up"></i>
                                                </IconButton>
                                                <IconButton
                                                    disabled={activeStep === steps.length - 1 && true}
                                                    variant='raised'
                                                    color='primary'
                                                    style={{ outline: 'none' }}
                                                    onClick={this.handleNext}>
                                                    <i className="fa fa-chevron-circle-down"></i>
                                                </IconButton>
                                            </div>
                                        </StepContent>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export default SkillsLayout;
