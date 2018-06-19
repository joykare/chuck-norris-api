import React, { Component } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import Jokes from "./Jokes";
import configureStore from "../store";

import "antd/dist/antd.css";
import "../style/App.css";

const { Header, Content, Footer} = Layout;
const store = configureStore();

class App extends Component {
  render() {
		return (
			<Provider store={store}>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<div className="navbar">Chuck Norris Jokes</div>
					<div className="breadcrumb"> Select a Category</div>
					<Jokes />
				</div>
			</Provider>
		)
	}
}

export default App;