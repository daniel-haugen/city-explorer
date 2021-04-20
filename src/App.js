import React from "react";
import ExploreForm from "./components/ExploreForm";
import LocationDisplay from "./components/LocationDisplay";
import axios from "axios";
import Navbar from 'react-bootstrap/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      cityName: "",
      mapImageURL: "",
    };
  }

  updateQuery = (e) => this.setState({ searchQuery: e.target.value });

  updateLocation = (e) =>
    this.setState({
      location: {
        lon: e.lon,
        lat: e.lat,
      },
      cityName: e.display_name,
    });

  getMap = async () => {
    const mapAPI = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;
    const mapResponse = await axios.get(mapAPI);
    const mapURL = mapResponse.request.responseURL;
    return this.setState({ mapImageURL: mapURL });
  };

  render() {
    return (
      <>
        <Navbar>
          <Navbar.Brand href="#home">City Explorer</Navbar.Brand>
        </Navbar>
        <ExploreForm
          updateLoc={this.updateLocation}
          search={this.updateQuery}
          searchQuery={this.state.searchQuery}
          getMap={this.getMap}
        />
        <LocationDisplay
          cityName={this.state.cityName}
          lat={this.state.location.lat}
          lon={this.state.location.lon}
          mapImage={this.state.mapImageURL}
        />
      </>
    );
  }
}

export default App;
