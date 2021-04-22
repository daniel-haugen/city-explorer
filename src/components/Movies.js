import React from "react";
import { Container } from 'react-bootstrap'


class Movies extends React.Component {
  render() {
    return (
      <Container>
      <h4>Movies About {this.props.searchQuery}: </h4>
        <ul className="">
        {this.props.movies.map(e => {
        return <li style={{fontSize:"15px"}}>{e}</li>
        })}
        </ul>

      </Container>
    );
  }
}

export default Movies;
