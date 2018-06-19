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
				<div style={{ display: "flex", flexDirection: "column", backgroundColor:"#b6acac33", minHeight: "100%"}}>
					<div className="navbar">Chuck Norris Jokes</div>
					<Categories />
				</div>
			</Provider>
		)
	}
}

export default App;