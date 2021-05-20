import { Component } from 'react';
import './ShowItem.css';

export default class ShowItem extends Component {
  
  handleFavoriteClick = () => {
    const { onFavorite, show } = this.props;
    onFavorite(show);

      
  };
  render() {
    const { show } = this.props;
    
    return (
      <li className="ShowItem">
        <h2>{show.title}</h2>
        <img src={show.image} alt={show.title}></img>
        <h3> {show.rating && `rating: ${show.rating}`}</h3>
        <button onClick={this.handleFavoriteClick}>Favorite</button>
      </li>
    );
  }

}