import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { HashRouter as Router, useRoutes } from "react-router-dom";
import theme from "./constans/theme";
import routerList from "./router";
import GlobalStyle from "./globalStyled";
import ReduxContextProvider from "./context";

const App = () => {
  const [width, setWidth] = useState(document.body.clientWidth || 0);
  const [scrollTop, setScrollTop] = useState(document.body.scrollTop || 0);
  const setPageWidth = () => {
    setWidth(document.body.clientWidth);
  };
  const setPageScrollTop = () => {
    setScrollTop(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("resize", setPageWidth);
    window.addEventListener("scroll", setPageScrollTop);
    return () => {
      window.removeEventListener("resize", setPageWidth);
      window.removeEventListener("scroll", setPageScrollTop);
    };
  });
  const element = useRoutes(routerList);
  return (
    <ReduxContextProvider value={{ bodyWidth: width, scrollTop }}>
      {element}
    </ReduxContextProvider>
  );
};

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
