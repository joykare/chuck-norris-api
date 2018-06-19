import React, { Component } from "react";
import { Provider } from "react-redux";
import Categories from "./Categories";
import configureStore from "../store";

import "antd/dist/antd.css";
import "../style/App.css";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="navbar">Chuck Norris Jokes</div>
          <Categories />
        </div>
      </Provider>
    )
  }
}

export default App;