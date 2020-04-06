import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// any other browser specific things

hydrate(<App />, document.getElementById("root"));
