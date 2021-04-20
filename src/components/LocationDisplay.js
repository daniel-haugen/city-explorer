import React from "react";
import { Card, Container } from "react-bootstrap";

class LocationDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.cityName && (
          <Container fluid>
            <Card
              style={{
                maxWidth: "55%",
                margin: "0 auto",
                backgroundColor: "lightblue",
                marginTop: "50px"
              }}
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
            <Container style={{
              margin: "0 auto"
            }}>
            <img src={this.props.mapImage}
             alt="" />
             </Container>
          </Container>
        )}
      </>
    );
  }
}

export default LocationDisplay;
