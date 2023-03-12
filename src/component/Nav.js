import React, { Component } from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            
             
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                <Link className="nav-link" to="/">shop</Link>
                <Link className="nav-link" to="/cart">cart</Link>
            
                {
                            this.props.user.apitoken
                            ?
                            <>
                             <Link className="nav-link" to="/login" onClick={this.props.logMeOut}>Log Out</Link>
                             <p className='nav-link'>Hello, {this.props.user.username}</p>
                             </>
                            :
                            
                            <>

                            
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                            <Link className="nav-link" to="/login">Log In</Link>
                            
                            </>

        
                            }
            
          </div>
        </div>
      </nav>
    )
  }
}

