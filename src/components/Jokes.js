import React, { Component, Fragment } from "react";
import { Card, Row, Col } from "antd";

import "../style/Joke.css"

class Jokes extends Component {
  render() {
    return (
      <Fragment>
        {/* <Row gutter={16}>
          <Col span={8}> */}
          {/* </Col>
        </Row> */}
        <Card className="category-card">
          <p>Card content</p>
        </Card>
      </Fragment>
    );
  }
}

export default Jokes;