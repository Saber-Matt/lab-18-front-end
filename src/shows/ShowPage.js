import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';
import { getShows, postFavorite } from '../utils/show-api';

export default class ShowPage extends Component {
  state = {
    shows: []
  }
  handleSearch = async (search) => {
    

    try {
      const shows = await getShows(search);

      this.setState({ shows: shows });
    }

    catch (err) {
      console.log(err.message);
    }
    
  }

  handleFavorite = async (show) => {
    const favorite = await postFavorite(show);
    console.log('added', favorite);
    
  }

  render() {
    const { shows } = this.state;
    
    return (
      <div className="ShowPage">
        <ShowSearch onSearch={this.handleSearch}/>
        <ShowList onFavorite={this.handleFavorite} shows={shows}/>
        
      </div>
    );
  }

}