import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, LinearProgress } from '../../node_modules/@material-ui/core';

const styles = {
    icon: {
        width: 48,
        height: 48,
        marginTop: 30,
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
        width: 420,
        marginTop: 50,
        marginRight: 50,

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
                justify='flex-start'>

                <Grid
                    align='center'
                    style={styles.iconWrapper}>
                    <img src={this.props.icon} style={styles.icon} />
                    <Typography
                        style={styles.text}
                        className='text-secondary rounded pt-2 pb-2 pl-2 pr-2'
                        variant='body2'
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
                    <LinearProgress color={this.props.color} variant="determinate" value={this.state.completed} />
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

