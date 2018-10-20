import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCard from "./PeopleCard";

export default class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        }
      ]
    };
  }
  render() {
    let peopleCard = this.state.people.map(person => (
      <Col sm="4">
        <PeopleCard person={person} />
      </Col>
    ));
    return (
      <div>
        <Container fluid>
          <Row>{peopleCard}</Row>
        </Container>
      </div>
    );
  }
}
