import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Card, Row, Col } from "antd";

import { fetchJokeCategories } from '../actions';
import "../style/Joke.css"

class Jokes extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchJokeCategories();
  }


  render() {
    return (
      <div className="cards-container">
        {/* <Row gutter={16}>
          <Col span={8}> */}
          {/* </Col>
        </Row> */}
        {this.props.categories.map(category => (
          <Card className="category-card">
            <p>{category}</p>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJokeCategories: bindActionCreators(fetchJokeCategories, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Jokes);