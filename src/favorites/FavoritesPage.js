import { Component } from 'react';
import './FavoritesPage.css';
import ShowList from '../common/ShowList';
import { getFavorites } from '../utils/show-api.js';


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
  render() {
    const { favorites } = this.state;
    return (
      <div className="FavoritesPage">
        <ShowList shows={favorites}/>
      </div>
    );
  }

}
