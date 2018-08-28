import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '../../node_modules/@material-ui/core';

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
        width: 120,
        height: 140,
        margin: '20px 10px 10px 10px',
        backgroundColor: '#ffffff',
        borderRadius: '15px ',
    }
};

const SkillInfo = ({ icon, text, header }) => {
    return (
        <Grid
            align='center'
            style={styles.iconWrapper}>
            <img src={icon} style={styles.icon} />
            <Typography
                style={styles.header}
                variant='display1' >
                {header}
            </Typography>
            <Typography
                style={styles.text}
                className='text-secondary rounded pt-2 pb-2 pl-2 pr-2'
                variant='body2'
                align='center'>
                {text}
            </Typography>
        </Grid>
    );
};

SkillInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SkillInfo;

