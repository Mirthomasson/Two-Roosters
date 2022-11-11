import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {

  function handleClick() {
    window.open("https://thetworoosters.square.site/");
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='about' onClick={toggle} offset={-20}>
                Our Story
            </SidebarLink>
            <SidebarLink to='kettle' onClick={toggle} offset={180}>
                Kettle Corn
            </SidebarLink>
            <SidebarLink to='coffee' onClick={toggle} offset={250}>
                Coffee
            </SidebarLink>
            <SidebarLink to='bulk' onClick={toggle} offset={300}>
                Bulk
            </SidebarLink>
            <SidebarLink to='contact' onClick={toggle} offset={440}>
                Contact
            </SidebarLink>
            <SidebarLink to='locations' onClick={toggle} offset={0}>
                Locations
            </SidebarLink>

        <SideBtnWrap>
             <SidebarRoute onClick={handleClick}>Order Online</SidebarRoute> 
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
