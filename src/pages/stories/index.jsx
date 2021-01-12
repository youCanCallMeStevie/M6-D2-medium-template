import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { editArticle, deleteArticle } from "../../api/index";

export default class Stories extends Component {
  render() {
    return (
      <Container>
        <p>List your stories here</p>
      </Container>
    );
  }
}
