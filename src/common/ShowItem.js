import { Component } from 'react';
import './ShowItem.css';

export default class ShowItem extends Component {
  state = {
    isFavorite: Boolean(this.props.show.id)
  }
  handleFavoriteClick = () => {
    const { onFavorite, show } = this.props;
    onFavorite(show);
    this.setState({ isFavorite: !this.state.isFavorite });
  };
  render() {
    const { show } = this.props;
    const { isFavorite } = this.state;
    
    return (
      <li className="ShowItem">
        <h2>{show.title}</h2>
        <img src={show.image} alt={show.title}></img>
        <h3> {show.rating && `rating: ${show.rating}`}</h3>
        <button onClick={this.handleFavoriteClick}>{isFavorite ? 'Un-favorite' : 'favorite'}</button>
      </li>
    );
  }

}