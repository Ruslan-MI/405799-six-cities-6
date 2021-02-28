import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import getMockOffers from "./mocks/offers";

ReactDOM.render(<App offers={getMockOffers()} />, document.querySelector(`#root`));
