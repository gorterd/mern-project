import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './navbar.css';
import { logout } from '../../actions/session_actions';
import { BsPlusCircleFill } from 'react-icons/bs';

class NavBar extends React.Component {
  render() {
    const { currentUser, logout } = this.props;
    const navbarRight = !currentUser ? (
      <>
        <Link className="signupButton sessionButton" to="/signup">
          Sign Up
        </Link>
        <Link className="loginButton sessionButton" 
          to={{
            pathname: '/login',
            state: { 'prevPath': `${this.props.prevPath}` }
          }}>
          Log In
        </Link>
      </>
    ) : (
      <>
        <div className="nbr-uploadContainer">
          <Link to="/new-recipe">
            <BsPlusCircleFill className="nbr-uploadButton" size={25} />
            <span className="nbr-uploadText">Upload a recipe</span>
          </Link>
        </div>
        <p>
          Welcome,{" "}
          <Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
        </p>
          <button onClick={logout}>Logout</button>
      </>
    );

    return (
      <div className="navbar-main">
        <div className="navbar-left">
          <Link className="nbl-homeLink" to="/">
            <div className="nbl-logo"></div>
            openFridge
          </Link>
        </div>

        <div className="navbar-right">
          {navbarRight}
        </div>
      </div>
    );
  }
}

const mSTP = ({ session }) => {
  return ({
  currentUser: session.user,
  })
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NavBar);


