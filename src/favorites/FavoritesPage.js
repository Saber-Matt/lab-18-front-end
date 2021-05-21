import { Component } from 'react';
import './FavoritesPage.css';
import ShowList from '../common/ShowList';
import { getFavorites, deleteFavorite, postFavorite } from '../utils/show-api.js';


export default class FavoritesPage extends Component {
  state = {
    favorites: []
  }

  async componentDidMount() {
    try {
      const favorites = await getFavorites();
      this.setState({ favorites: favorites });

    }
    catch (err) {
      console.log(err.message);
    }
  }

  handleFavorite = async (show) => {
    const { favorites } = this.state;
    try {
      if (show.deleted) {
        
        const newFavorite = await postFavorite(show);
        console.log('added', newFavorite);
        const updatedShows = favorites.map(f => {
          return f.id === show.id ? newFavorite : f;
        });
        this.setState({ favorites: updatedShows });
      }
      else {
        const deletedShow = await deleteFavorite(show);
        const updatedShows = favorites.map(f => {
          return f.id === show.id ? {
            title: f.title,
            showId: f.showId,
            image: f.image,
            rating: f.rating,
            description: f.description,
            deleted: true

          } :
            f;

        });
        
        this.setState({ favorites: updatedShows });
        console.log('deleted', deletedShow);
        console.log('state', this.state.favorites);

        
      }

    }
    catch (err) {
      console.log(err.message);
    }
   
  }
  render() {
    const { favorites } = this.state;
    return (
      <div className="FavoritesPage">
        <ShowList shows={favorites} onFavorite={this.handleFavorite} />
      </div>
    );
  }

}
