import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import "./styles.css"; // CSS dosyasını import edin

export default class ProductList extends Component {
  render() {
    return (
      <div className="product-list">
        <h5 className="product-list-title">
          {this.props.info.title} - {this.props.currentCategory}
        </h5>
        <Table size="sm" className="product-table">
          <thead>
            <tr className="table-secondary">
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units InStock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id } className="table-warning">
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button outline onClick={() => this.props.addToCart(product)}>
                    Add to cart
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
