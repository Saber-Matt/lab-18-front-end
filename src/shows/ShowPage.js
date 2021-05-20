import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';
import { getMovies } from '../utils/show-api';

export default class ShowPage extends Component {
  state = {
    movies: []
  }
  handleSearch = async (search) => {
    console.log(search);

    try {
      const movies = await getMovies(search);
      console.log(movies);

      this.setState(movies);
    }

    catch (err) {
      console.log(err.message);
    }
    
  }

  render() {
    return (
      <div className="ShowPage">
        <ShowSearch onSearch={this.handleSearch}/>
        <ShowList/>
        
      </div>
    );
  }

}