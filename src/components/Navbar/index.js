import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import Logo from '../../images/Two_Roosters_vector.png';
import { animateScroll as scroll } from 'react-scroll';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop()
  };

  function handleClick() {
    window.open("https://thetworoosters.square.site/");
  };


  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          <img src={Logo} alt="logo" height="70" width="70"/>
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
        <NavItem>
            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Our Story
            </NavLinks>
          </NavItem>
        <NavItem>
            <NavLinks to="kettle" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Kettle Corn
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="coffee" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Coffee
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="bulk" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Bulk
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Contact
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="location" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
              Location
            </NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink onClick={handleClick} smooth={true} duration={500} spy={true} exact='true' >
            Order Online
            </NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
