import React from "react";
import ExploreForm from "./components/ExploreForm";
import LocationDisplay from "./components/LocationDisplay";
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      location: {},
      cityName: "",
      mapImageURL: "",
      weather: {},
      movies: []
    };
  }

  updateQuery = e => 
  this.setState({
    searchQuery: e.target.value 
  })

  updateLocation = e =>
    this.setState({
      location: {
        lon: e.lon,
        lat: e.lat,
      },
      cityName: e.display_name,
    })

    updateWeather = e => 
    this.setState({
      weather: {
        description: e.description,
        date: e.date
      }
    })

    updateMovies = e =>
    this.setState({
      movies: {
        name: e.name
      }
    })

    getMap = async () => {
      const mapAPI = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`;
      const mapResponse = await axios.get(mapAPI);
      const mapURL = mapResponse.request.responseURL;
      return this.setState({ mapImageURL: mapURL });
    }

    getMovies = async () => {
      const movieAPI = `http://localhost:3001/movie?cityName=${this.state.searchQuery}`
      const movieResponse = await axios.get(movieAPI);
      const movieArr = movieResponse.data.map(e => e.name);

      return this.setState({movies: movieArr});
    }

 

  render() {
    return (
      <>
        <Navbar bg="dark" className="mb-5" style={{height:"100px", marginBottom:"20px"}}>
          <Navbar.Brand href="#home"><span className="text-white h1">City Explorer</span></Navbar.Brand>
        </Navbar>
        <ExploreForm
          updateLoc={this.updateLocation}
          updateWea={this.updateWeather}
          search={this.updateQuery}
          searchQuery={this.state.searchQuery}
          lat={this.state.location.lat}
          lon={this.state.location.lon}
          getMap={this.getMap}
          getMovies={this.getMovies}
        />
        <LocationDisplay
          cityName={this.state.cityName}
          lat={this.state.location.lat}
          lon={this.state.location.lon}
          mapImage={this.state.mapImageURL}
          weather={this.state.weather}
          movies={this.state.movies}
          searchQuery={this.state.searchQuery}
        />
      </>
    );
  }
}

export default App;
