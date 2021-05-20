import { Component } from 'react';
import './ShowSearch.css';

export default class ShowSearch extends Component {
  
    state = {
      search: ''
    }
    handleSearchChange = (e) => {
      this.setState({ search: e.target.value });
    }
    handleSubmit = e => {
      const { onSearch } = this.props;
      const { search } = this.state;
      e.preventDefault();
      onSearch(search);
    }
    render() {
      const { search } = this.state;
      return (
        <form className="ShowSearch" onSubmit={this.handleSubmit}>
          <input value={search} onChange={this.handleSearchChange}>

          </input>
          <button>Search</button>
        </form>
      );
    }

}