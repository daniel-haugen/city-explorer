import React from "react";
import { Card } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        <Card.Text style={{ marginTop: "-10px" }}>
          Date: {this.props.weather.date}
        </Card.Text>
        <Card.Text style={{ marginTop: "-10px" }}>
          Weather: {this.props.weather.description}
        </Card.Text>
      </>
    );
  }
}

export default Weather;
