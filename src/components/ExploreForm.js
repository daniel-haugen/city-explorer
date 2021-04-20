import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";

class ExploreForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      badSearchAlert: false,
      errorCode: ''
    }
  }

showAlert = (e, code) => this.setState({badSearchAlert: e, errorCode: code})

  getLocation = async (e) => {
    e.preventDefault();

    const dataAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER}&q=${this.props.searchQuery}&format=json`;

    const dataResponse = await axios.get(dataAPI).catch(this.showAlert(true));

    this.showAlert(false);
    const location = dataResponse.data[0];
    this.props.updateLoc(location);
    this.props.getMap();
    
  };

  render() {
    return (
      <div className="container-fluid" style={{backgroundColor:"lightgrey"}}>
        <Form className="h-100" onSubmit={this.getLocation}>
          <Form.Group className="d-flex flex-column h-100">
            <Form.Label className="h2 mt-3">Choose Your City: </Form.Label>
            <Form.Control className="mt-3" style={{width:"400px"}} onChange={this.props.search} />

            {this.state.badSearchAlert && 
            <Alert style={{width: "300px", marginBottom:"-10px"}} onClose={() => this.showAlert(false)} variant="danger" 
             dismissible>{this.state.errorCode}Error: Please enter a valid location</Alert>}

            <Button variant="primary" className="my-3" style={{width: "150px"}} type="submit">
              Explore!
            </Button>
          </Form.Group>
        </Form>
        
        
      </div>
    );
  }
}

export default ExploreForm;
