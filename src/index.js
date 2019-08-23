import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./global-style";
import theme from "./theme";

ReactDOM.render(
  <Fragment>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    <GlobalStyle />
  </Fragment>,
  document.getElementById("root")
);
