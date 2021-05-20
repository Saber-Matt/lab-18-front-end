import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';


export default class ShowPage extends Component {
  
  render() {
    return (
      <div className="ShowPage">
        <ShowSearch/>
        <ShowList/>
        
      </div>
    );
  }

}