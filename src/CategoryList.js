import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./styles.css"; // CSS dosyasını import edin

export default class CategoryList extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div className="category-list">
        <h3 className="category-list-title">{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              color="warning"
              active={category.categoryName === this.props.currentCategory}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              className="category-list-item"
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
