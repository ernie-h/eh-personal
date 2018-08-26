import React, { Component } from 'react';
import { Grid, Typography, Avatar } from '@material-ui/core';

import AboutInfo from '../components/AboutInfo';
import Profile from '../assets/profile.JPG';
import Batman from '../assets/icons/batman.png';
import Coffee from '../assets/icons/coffee.png';
import HK from '../assets/icons/hk.png';
import NEU from '../assets/icons/neu.png';
import Bicycle from '../assets/icons/bicycle.png';
import Personality from '../assets/icons/personality.png';

const styles = {
  wrapper: {
    height: 880,
    backgroundColor: '#f4f4f4'
  },
  titleSpacing: {
    height: '70px',
  },
  header: {
    color: '#2d80c4',
    backgroundColor: '#ffffff'
},
  profile: {
    width: 400,
    height: 530,
    boxShadow:'8px 8px 2px #e3e4e5'

  },
  aboutInfo: {
    width: 300,
    height: 200,
    marginBottom: 25
  }
};

const texts = {
  hk: 'I\'m from the beautiful city of Hong Kong. I went to an American international school and am fluent in English',
  neu: 'I\'m a third-year student at Northeastern studying Computer Science and Finance and feel blessed to call Boston my new home',
  movies: 'Movies make me laugh, cry, and reflect. I recommend Her by Spike Jonze and The Dark Knight by Christopher Nolan',
  coffee: 'I have a confession. I\'m addicted to coffee. Fun fact, order a double espresso over ice, add your own milk, and save $2',
  personality: 'I am an outspoken individual who never passes up an oppurtunity to make someone laugh',
  transport: 'Preferred mode of transport: bicycle. Fast, efficient, and healthy'
};

export class AboutLayout extends Component {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.titleSpacing}>
        </div>
        <Grid
          container
          alignItems='center'
          direction='column'>
          <Typography
            className='rounded pl-5 pr-5'
            variant='display3'
            item='true'
            style={styles.header}>
            Facts.
          </Typography>
          <Grid
            container
            justify='space-around'
            className='mt-4'>
            <div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.hk} icon={HK} header='home' />
              </div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.neu} icon={NEU} header='school' />
              </div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.personality} icon={Personality} header='personality' />
              </div>
            </div>
            <img
              className='mt-5 rounded'
              src={Profile}
              alt="Ernie Hao"
              style={styles.profile} />
            <div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.movies} icon={Batman} header='hobby' />
              </div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.coffee} icon={Coffee} header='beverage' />
              </div>
              <div item='true' style={styles.aboutInfo}>
                <AboutInfo text={texts.transport} icon={Bicycle} header='transport' />
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={styles.titleSpacing}>
        </div>
      </div>
    );
  }
}

export default AboutLayout;
