import React, {Component} from 'react';
import {ThemeContext, themes} from './theme/themesContext';
import {StyledStatusBar} from './components/StyledStatusBar/StyledStatusBar';
import Routes from './routes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.selectTheme = key => {
      switch (key) {
        case 'light':
          return themes.light;
        case 'dark':
          return themes.dark;
        default:
          return themes.light;
      }
    };
    this.toggleTheme = key => {
      this.setState(() => ({
        theme: this.selectTheme(key),
      }));
    };

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <StyledStatusBar />
        <Routes />
      </ThemeContext.Provider>
    );
  }
}
