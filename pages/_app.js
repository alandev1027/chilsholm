import App, { Container } from "next/app";
import React, { Fragment } from "react";
import { MuiThemeProvider, createMuiTheme, muiThemeable } from '@material-ui/core/styles';

const THEME = createMuiTheme({
  typography: {
    "fontFamily": "'museo-sans' sans-serif",
    "fontWeightLight": 300,
    "fontWeightRegular": 500,
    "fontWeightMedium": 700
  }
});

class SportscardApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  constructor(props) {
    super(props);
    this.state = {
      load: false
    }
  }

  componentDidMount() {
    this.setState({ load: true });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { load } = this.state;
    if (!load) return <div></div>;
    else {
      return (
        <MuiThemeProvider theme={THEME}>
          <Container>
            <Component {...pageProps} />
          </Container>
        </MuiThemeProvider>
      );
    }
  }
}

export default SportscardApp;
