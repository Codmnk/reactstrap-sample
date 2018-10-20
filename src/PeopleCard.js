import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default class PeopleCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const { name, subtitle, description } = this.props;
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{this.props.person.name}</CardTitle>
            <CardSubtitle>{this.props.person.subtitle}</CardSubtitle>
            <CardText>{this.props.person.description}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}
