import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class MainArea extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col>Some Text</Col>
            <Col>Some Text</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
