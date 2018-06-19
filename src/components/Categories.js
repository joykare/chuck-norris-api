import React, { Component, Fragment } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Card, Spin, Icon, Modal } from "antd";

import { fetchJokeCategories, fetchRandomJoke } from '../actions';
import "../style/Categories.css"

const loadingIcon = <Icon type="loading" style={{ fontSize: 50 }} spin />

class Categories extends Component {
  state = {
    category: "",
    modalVisiblity: false,
  }

  componentDidMount() {
    this.props.fetchJokeCategories();
  }

  handleClick = (event) => {
    const category = event.target.textContent;

    this.setState({ category });

    this.props.fetchRandomJoke(category).then(
      this.setModalVisible(true)
    );
  }

  setModalVisible(modalVisiblity) {
    this.setState({ modalVisiblity });
  }

  checkLoading(category) {
    return this.props.isFetchingJoke && category === this.props.category;
  }

  render() {
    return (
      <Fragment>
        <div className="breadcrumb"> Categories</div>

        {this.props.isFetchingCategories ?
          <Spin className="loading-spinner" indicator={loadingIcon} /> :
          <div className="cards-container">
            {this.props.categories.map((category, i) => (
              <Card
                key={i}
                hoverable
                className="category-card"
                loading={this.checkLoading(category)}
                value={category}
                onClick={this.handleClick}>
                <span>{category}</span>
              </Card>
            ))}
          </div>
        }

        {!this.props.isFetchingJoke &&
          <Modal
            title={this.state.category}
            wrapClassName="vertical-center-modal"
            visible={this.state.modalVisiblity}
            onOk={() => this.setModalVisible(false)}
            onCancel={() => this.setModalVisible(false)}
            closable={false}
          >
            <img src={this.props.joke.icon_url} alt="" />
            <p>{this.props.joke.value}</p>
          </Modal>
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isFetchingCategories: state.categoryReducer.isFetching,
    isFetchingJoke: state.jokeReducer.isFetching,
    categories: state.categoryReducer.categories,
    joke: state.jokeReducer.joke,
    category: state.jokeReducer.category
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJokeCategories: bindActionCreators(fetchJokeCategories, dispatch),
    fetchRandomJoke: bindActionCreators(fetchRandomJoke, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);