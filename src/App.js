import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: normal;
    color:${(props) => props.palette.secondaryColor}
    background-color:${(props) => props.palette.mainColor}
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      theme: 'light',
      palette: {
        mainColor: '#fafafa',
        secondaryColor: '#212121',
        accent: '#ffc400',
        attention: '#c62828',
      },
    };
  }

  changeTheme = () => {
    const { theme } = this.state;
    if (theme === 'light') {
      this.setState({
        theme: 'dark',
        palette: {
          mainColor: '#212121',
          secondaryColor: '#fafafa',
          accent: '#ffc400',
          attention: '#c62828',
        },
      });
    } else {
      this.setState({
        theme: 'light',
        palette: {
          mainColor: '#fafafa',
          secondaryColor: '#212121',
          accent: '#ffc400',
          attention: '#e53935',
        },
      });
    }
  };

  render() {
    const { palette, theme } = this.state;
    return (
      <main>
        <ThemeProvider theme={palette}>
          <GlobalStyle palette={palette} />
          <Switch>
            <Route exact path="/trybewallet" component={Login} />
            <Route
              exact
              path="/trybewallet/carteira"
              render={(props) => (
                <Wallet
                  {...props}
                  currentTheme={theme}
                  changeTheme={this.changeTheme}
                />
              )}
            />
          </Switch>
        </ThemeProvider>
      </main>
    );
  }
}

export default App;
