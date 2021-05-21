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

    try {
      if (show.deleted) {
        const { favorites } = this.state;
        const newFavorite = await postFavorite(show);
        const updatedShows = favorites.map(f => {
          return f.id === show.id ? newFavorite : f;
        });
        this.setState({ favorites: updatedShows });
      }
      else {
        await deleteFavorite(show);
        show.deleted = true;
      }

    }
    catch (err) {
      console.log(err.message);
    }
    console.log(show);
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
