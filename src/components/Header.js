import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container d-flex flex-column flex-md-row">
          <div className="container-md-left">
            <Link className="navbar-brand ml-md-5" to="/">HaveFun</Link>
          </div>
          <div className="pl-md-5 flex-1">
            <form style={{maxWidth: "400px"}}>
              <div style={{position: "relative"}}>
                <i className="fas fa-search" style={{color: "#fff", position: "absolute", top: "10px"}} />
                <input className="form-control mr-sm-2 pl-4 bg-primary search-1" type="search" placeholder="Search" aria-label="Search" />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
