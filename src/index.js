import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import HomepageLayout from './containers/HomepageLayout';

const mainTheme = createMuiTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#ff4400',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        // dark: will be calculated from palette.secondary.main,
        contrastText: '#ffcc00',
      },
      // error: will use the default color
    },
  });
  
class App extends React.Component {
    render() {
        return (<HomepageLayout />);
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
