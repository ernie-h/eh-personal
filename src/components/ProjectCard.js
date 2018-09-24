import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '../../node_modules/@material-ui/core';

const styles = {
    cardWrapper: {
        width: '320px',
        transitionDuration: '0.5s',
        height: '360px',
        display: 'block',
        overflow: 'auto',
        margin: '10px 50px 50px 50px',
        position: 'relative',
    },
    imgWrapper: {
        width: '60%',
        height: '30%'
    },
    button: {
        outline: 'none'
    }
};

const ProjectCard = ({header, description, img}) => {
    return (
        <div >
        <Card style={styles.cardWrapper}>
            <CardMedia
                component="img"
                src={img}
                title={header}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {header}
                </Typography>
                <Typography component="p">
                   {description}
                </Typography>
            </CardContent>
            <CardActions className='float-right'>
                <Button size="small" color="primary" style={styles.button}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
        </div>
    );
};

ProjectCard.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,


};

export default ProjectCard;

