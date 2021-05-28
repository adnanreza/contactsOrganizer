import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <>
      <Menu.Item>Hello {user && user.name}</Menu.Item>
      <Menu.Item>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt' />
          <span className='hide-sm'>Logout</span>
        </a>
      </Menu.Item>
    </>
  );

  const guestLinks = (
    <>
      <Menu.Item>
        <Link to='/register'>Register</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to='/login'>Login</Link>
      </Menu.Item>
    </>
  );

  return (
      <div>
        <Menu secondary inverted color='blue'>
          <Menu.Item>
            <i className={icon} />&nbsp;&nbsp;{title}
          </Menu.Item>
          <Menu.Menu position='right'>
              {isAuthenticated ? authLinks : guestLinks}
          </Menu.Menu>
        </Menu>
      </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Organizer',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
