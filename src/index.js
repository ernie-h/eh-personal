import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import HomepageLayout from './containers/HomepageLayout';
import AboutLayout from './containers/AboutLayout';
import GoalsLayout from './containers/GoalsLayout';
import SkillsLayout from './containers/SkillsLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import ContactLayout from './containers/ContactLayout';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#2d80c4',
        },
        secondary: {
            main: '#2dc4b9',
            contrastText: '#ffcc00',
        },
    },
});

class App extends React.Component {
    render() {
        return (<div>
            <HomepageLayout />
            <AboutLayout />
            <GoalsLayout />
            <SkillsLayout />
            <ProjectsLayout />
            <ContactLayout />
        </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={mainTheme}>
            <App />
        </MuiThemeProvider>
    </Router>
    , document.getElementById('root'));

export default App;
