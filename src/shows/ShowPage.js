import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';
import { getShows, postFavorite, getFavorites, deleteFavorite } from '../utils/show-api';

export default class ShowPage extends Component {
  state = {
    shows: [],
    favorites: []
  }

  async componentDidMount() {
    const favorites = await getFavorites();
    this.setState({ favorites: favorites });
  }
  handleSearch = async (search) => {
    

    try {
      const { favorites } = this.state;
      const shows = await getShows(search);
      const updatedShows = shows.map((show) => {
        const matchingShow = favorites.find(favorite => favorite.showId === show.showId);
        //find returns undefined if no match is found!!!!
        console.log('matching', matchingShow, 'show', show);
        return matchingShow ? matchingShow : show;
      });
      console.log(updatedShows);
   
      this.setState({ shows: updatedShows });
    }

    catch (err) {
      console.log(err.message);
    }
    
  }
  handleFavorite = async (show) => {
    const { shows } = this.state;
    try {
      if (!show.id) {
        
        const newFavorite = await postFavorite(show);
        console.log('added', newFavorite);
        const updatedShows = shows.map(s => {
          return s.showId === show.showId ? newFavorite : s;
        });
        this.setState({ shows: updatedShows });
      }
      else {
        const deletedShow = await deleteFavorite(show);
        const updatedShows = shows.map(f => {
          return f.id === show.id ? {
            title: f.title,
            showId: f.showId,
            image: f.image,
            rating: f.rating,
            description: f.description,
           

          } :
            f;

        });
        
        this.setState({ shows: updatedShows });
        console.log('deleted', deletedShow);
        console.log('state', this.state.favorites);

        
      }

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
        <ShowList onFavorite={this.handleFavorite} shows={shows}/>
        
      </div>
    );
  }

}