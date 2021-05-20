import { Component } from 'react';
import ShowList from '../common/ShowList';
import './ShowPage.css';
import ShowSearch from './ShowSearch';


export default class ShowPage extends Component {

  handleSearch = async (search) => {
    console.log(search);
  }
  render() {
    return (
      <div className="ShowPage">
        <ShowSearch onSearch={this.handleSearch}/>
        <ShowList/>
        
      </div>
    );
  }

}