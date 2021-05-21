import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import AuthPage from '../auth/AuthPage.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import ShowPage from '../shows/ShowPage';
import FavoritesPage from '../favorites/FavoritesPage';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN')
    //we may have to set state here later. But it works now... :p
  }
  handleUser = (user) => (
    window.localStorage.setItem('TOKEN', user.token)
  )
  render() {
    const { token } = this.state;
    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser} />
                )}
              />

              <Route path="/shows" exact={true}
                render={routerProps => (
                  token 
                    ? <ShowPage {...routerProps}/>
                    : <Redirect to='/auth' />
                )}
              />

              <Route path="/favorites" exact={true}
                render={routerProps => (
                  token 
                    ? <FavoritesPage {...routerProps}/>
                    : <Redirect to='/auth' />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
