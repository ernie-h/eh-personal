import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, LinearProgress } from '../../node_modules/@material-ui/core';

const styles = {
    icon: {
        width: 48,
        height: 48,
    },
    header: {
        color: '#2d80c4',
    },
    iconWrapper: {
        width: 100,
        marginLeft: 20,
        marginBottom: 20
    },
    progressSpacing: {
        display: 'block',
        overflow: 'auto',
        width: '400px',
        maxWidth: '100%',
        margin: '0 50px 50px 50px'
    }
};
class SkillInfo extends React.Component {
    constructor(props) {
        super(props);
        this.progress = this.progress.bind(this);
        this.state = {
            completed: 0,
            timer: null
        };
        let timer = null;
    }
    componentDidMount() {
        this.setState({ timer: setInterval(this.progress, 10) });
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    progress() {
        if (this.state.completed === this.props.progress) {
            clearInterval(this.timer);
        } else {
            this.setState({ completed: this.state.completed + 1 });
        }
    };

    render() {
        return (
            <Grid
                container
                direction='row'
                justify='center'>

                <Grid
                    align='center'
                    style={styles.iconWrapper}>
                    <img src={this.props.icon} style={styles.icon} />
                    <Typography
                        className='mt-2'
                        color={this.props.color}
                        variant='caption'
                        align='center'>
                        {this.props.text}
                    </Typography>
                </Grid>
                <div style={styles.progressSpacing}>
                    <Grid
                        container
                        direction='row'
                        justify='space-around'
                        className='mb-2'>
                        <Typography variant='caption' >
                            Practicing
                    </Typography>
                        <Typography variant='caption' >
                            Familiar
                    </Typography>
                        <Typography variant='caption'>
                            Proficient
                    </Typography>
                        <Typography variant='caption'>
                            Expert
                    </Typography>
                    </Grid>
                    <LinearProgress
                        color={this.props.color}
                        variant="determinate"
                        value={this.state.completed} />
                </div>
            </Grid>
        );
    }
};

SkillInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
};

export default SkillInfo;

