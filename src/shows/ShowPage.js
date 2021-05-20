import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';
import { getShows } from '../utils/show-api';

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

  render() {
    const { shows } = this.state;
    
    return (
      <div className="ShowPage">
        <ShowSearch onSearch={this.handleSearch}/>
        <ShowList shows={shows}/>
        
      </div>
    );
  }

}