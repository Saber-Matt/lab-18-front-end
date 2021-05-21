import { Component } from 'react';
import './ShowItem.css';

export default class ShowItem extends Component {
  state = {
    isFavorite: this.props.show.id ? true : false
  }
  handleFavoriteClick = async () => {
    const { onFavorite, show } = this.props;
    await onFavorite(show);
    //soo this needs to be async??? or it wont register updates fast enough...
    this.setState({ isFavorite: this.props.show.id ? true : false });
    //more consistent method for conditionaly rendering fav / unfav, 100% based on wether or not the props passed down have an id vs just toggling state locally
  };
  render() {
    const { show } = this.props;
    const { isFavorite } = this.state;
    
    return (
      <li className="ShowItem">
        <h2>{show.title}</h2>
        <img src={show.image} alt={show.title}></img>
        <h3>rating: {show.rating !== null ? show.rating : 'No rating'}</h3>
        
        <button onClick={this.handleFavoriteClick}>{isFavorite ? 'Un-favorite' : 'favorite'}</button>
      </li>
    );
  }

}