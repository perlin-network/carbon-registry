import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoPng from '../../Assets/Images/logo.png';

const menuItems = [
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Nationally Determined Contributions',
    link: '/nationally-determined-contributions',
  },
];

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 5C2 4.44772 2.44772 4 3 4H21C21.5523 4 22 4.44772 22 5C22 5.55228 21.5523 6 21 6H3C2.44772 6 2 5.55228 2 5Z"
      fill="white"
    />
    <path
      d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
      fill="white"
    />
    <path
      d="M3 18C2.44772 18 2 18.4477 2 19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H3Z"
      fill="white"
    />
  </svg>
);

const Header = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-logo">
            <Button
              className="menu-opener"
              type="text"
              icon={<MenuIcon />}
              onClick={() => setVisible(true)}
            />
            <Drawer
              className="mobile-menu"
              placement="left"
              onClick={() => setVisible(false)}
              onClose={() => setVisible(false)}
              open={visible}
            >
              {menuItems.map(({ link, text }) => (
                <NavLink
                  key={text}
                  to={link}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {text}
                </NavLink>
              ))}
            </Drawer>
            <NavLink to="/">
              <img src={LogoPng} alt="National Emission Registry" />
            </NavLink>
          </div>
          <div className="header-menu">
            {menuItems.map(({ link, text }) => (
              <NavLink
                key={text}
                to={link}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {text}
              </NavLink>
            ))}
          </div>
          <div className="header-signin">
            <Button type="primary" onClick={() => navigate('/login')}>
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
