import { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>React App</h1>
        <nav>
          <NavLink to='/auth'>SignIn</NavLink>
          <NavLink to='/'>Home</NavLink>
        </nav>

      </header>
    );
  }

}

export default Header;