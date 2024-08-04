/** @format */

import { Component } from 'react';
import { motion } from 'framer-motion';
import { headerVariants } from '@/types/motion';
import React from 'react';

type MenuItem = {
  title: string;
  url: string;
  cName: string;
  icon: string;
};

type NavbarState = {
  clicked: boolean;
  menuItems: MenuItem[];
};

class Navbar extends Component<{}, NavbarState> {
  state: NavbarState = {
    clicked: false,
    menuItems: [],
  };

  async componentDidMount() {
    const response = await fetch('/menuItems.json'); // Adjust the path if needed
    const menuItems: MenuItem[] = await response.json();
    this.setState({ menuItems });
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const { menuItems, clicked } = this.state;

    const menuItemStyle = {
      margin: '0 1rem',
    };

    const menuIconsStyle = {
      cursor: 'pointer',
      fontSize: '1.5rem',
    };

    return (
      <motion.nav
        variants={headerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.01 }}
        className='navbarItems flex flex-row justify-between items-center bg-black text-white fixed w-full top-0 left-0 px-12 shadow-black shadow-sm py-8 tracking-widest z-50'>
        <h1 className='navbarLogo text-xl cursor-pointer text-white z-20'>@KSVRD</h1>

        <ul className={clicked ? 'navbarMenu active' : 'navbarMenu'}>
          {menuItems.map((item, index) => (
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              key={index}
              style={menuItemStyle}>
              <a
                className={`${item.cName} text-lg`}
                href={item.url}>
                <i className={`${item.icon} px-2`}></i>
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <div
          className='menuIcons float-right'
          onClick={this.handleClick}
          style={menuIconsStyle}>
          <i className={`${clicked ? 'fas fa-times' : 'fas fa-bars'}`}></i>
        </div>

        <style jsx>{`
          nav {
            z-index: 1000 !important;
          }
          .navbarItems {
            background-color: black;
            color: white;
          }
          .navbarMenu.active {
            display: flex;
          }
          .navbarMenu {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          @media (max-width: 768px) {
            .navbarMenu {
              z-index: -10;
              position: absolute;
              width: 100%;
              top: 100%;
              left: 50%;
              transform: translate(-50%, -50%);
              padding: 120px 1.5em;
              padding-bottom: 20px;
              line-height: 3rem;
              align-items: start;
              flex-direction: column;
              background-color: #181818;
              box-shadow: 0 10px 10px 0 rgb(20 20 20, 0.25);

              display: ${clicked ? 'flex' : 'none'};
            }
          }
          .menuIcons {
            display: none;
          }
          @media (max-width: 768px) {
            .menuIcons {
              display: block;
            }
          }
        `}</style>
      </motion.nav>
    );
  }
}

export default Navbar;
