import React from "react";
import { Container, Card } from "react-bootstrap";

class LocationDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.cityName && 
          <Container fluid
          style={{ marginTop: "50px" }}>
            <Card
              style={{ width: "18rem", backgroundColor: "lightblue" }}
              className="mb-2"
            >
              <Card.Body>
                <Card.Title>{this.props.cityName}</Card.Title>
                <Card.Text style={{ fontWeight: "bold" }}>
                  Latitude: {this.props.lat}
                </Card.Text>
                <Card.Text>Longitude: {this.props.lon}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        }
      </>
    );
  }
}

export default LocationDisplay;
