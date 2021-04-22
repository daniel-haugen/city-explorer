import React from "react"
import { Card, Container } from "react-bootstrap"
import Weather from './Weather'
import Movies from './Movies'

class LocationDisplay extends React.Component {
  render() {
    return (
      <>
        {this.props.cityName && (
          <Container fluid>
            <Card>
              <Card.Body className="d-flex">
                <Container>
                  <Card.Title className="mb-4"><span className="h3">{this.props.cityName}</span></Card.Title>
                  <Card.Text>Latitude: {this.props.lat}</Card.Text>
                  <Card.Text style={{marginTop:"-10px"}}>Longitude: {this.props.lon}</Card.Text>
                  <Weather weather={this.props.weather} />
                  <Movies movies={this.props.movies} searchQuery={this.props.searchQuery}/>
                </Container>
                <Card.Img
                  src={this.props.mapImage}
                  style={{ height: "400px", width: "auto" }}
                ></Card.Img>
              </Card.Body>
            </Card>
          </Container>
        )}
      </>
    );
  }
}

export default LocationDisplay;
