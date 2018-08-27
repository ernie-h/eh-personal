import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid } from '../../node_modules/@material-ui/core';

const styles = {
    icon: {
        width: 48,
        height: 48,
    },
    header: {
        color: '#2d80c4',
    },
};

const AboutInfo = ({ icon, text, header }) => {
    return (
        <Grid
            container
            alignItems='center'
            direction='column'
        >
            <img src={icon} style={styles.icon} />
            <Typography
                style={styles.header}
                variant='display1' >
                {header}
            </Typography>
            <Typography
                style={styles.text}
                className='text-secondary rounded pt-2 pb-2 pl-2 pr-2 mt-2'
                variant='body2'
                align='center'>
                {text}
            </Typography>
        </Grid>
    );
};

AboutInfo.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

export default AboutInfo;

