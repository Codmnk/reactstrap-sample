import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import PeopleCard from "./PeopleCard";

export default class MainArea extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          id: 2,
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          id: 3,
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        },
        {
          id: 4,
          name: "David the Devil",
          subtitle: "Corko Inc.",
          description: "met at a party. Will connet with later"
        }
      ]
    };
  }

  removePerson(id) {
    this.setState({
      people: this.state.people.filter(person => person.id !== id)
    });
  }

  render() {
    let peopleCard = this.state.people.map(person => (
      <Col sm="4">
        <PeopleCard
          key={person.id}
          removePerson={this.removePerson.bind(this)}
          person={person}
        />
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
