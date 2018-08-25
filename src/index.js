import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import Homepage from 'containers/Homepage';

const mainTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#f04d22'
        },
        secondary: {
            main: '#e91e63',
        },
        text: {
            primary: '#f04d22'
        },
    }
});
class App extends React.Component {
    render() {
        return (<Homepage />);
    }
}

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={mainTheme}>
            <Route component={ConnectedApp} />
        </MuiThemeProvider>
    </Router>
    , document.getElementById('root'));

export default App;
