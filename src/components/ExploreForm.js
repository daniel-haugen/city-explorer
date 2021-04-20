import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios'

class ExploreForm extends React.Component {


  getLocation = async (e) => {
    e.preventDefault();
    const dataAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.props.searchQuery}&format=json`;
   
    const dataResponse = await axios.get(dataAPI);
    const location = dataResponse.data[0];
    this.props.updateLoc(location);
    this.props.getMap();
  }
  
  
  render() {
    return (
      <Form onSubmit={this.getLocation}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>City Name: </Form.Label>
          <Form.Control onChange={this.props.search} />
          <Button variant="primary" type="submit">
            Explore!
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default ExploreForm;
