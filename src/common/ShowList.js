import { Component } from 'react';
import './ShowList.css';
import ShowItem from './ShowItem';

export default class ShowList extends Component {
  
  render() {
    const { shows } = this.props;
    console.log(shows);
    return (
      <ul className="ShowList">
        {shows.map((show) => {
          return <ShowItem key={show.showId} show={show}></ShowItem>;
        })}
      </ul>
    );
  }

}