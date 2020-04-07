import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router";
import Details from "./details";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <React.StrictMode>
        <div id="something-important">
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </React.StrictMode>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
