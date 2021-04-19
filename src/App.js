import React from "react";
import ExploreForm from "./components/ExploreForm";
import LocationDisplay from './components/LocationDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      location: {},
      cityName: ''
    }
  }

  updateQuery = e => this.setState({ searchQuery: e.target.value })

  updateLocation = e => this.setState({ location: {
    lon: e.lon,
    lat: e.lat
  }, cityName: e.display_name
})

  render() {
    return (
      <>
        <h1>Hello World</h1>
        <ExploreForm updateLoc={this.updateLocation} search={this.updateQuery} searchQuery={this.state.searchQuery}  />
        <LocationDisplay cityName={this.state.cityName} lat={this.state.location.lat} lon={this.state.location.lon} />
      </>
    );
  }
}

export default App;
