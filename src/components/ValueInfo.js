import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

const styles = {
    header: {
        color: '#2d80c4',
    }
};

export class ValueInfo extends Component {
    render() {
        return (
                <Typography
                    align='center'
                    style={styles.header}
                    variant='title'>
                    {this.props.text}
                </Typography>
        );
    }
}

ValueInfo.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ValueInfo;
