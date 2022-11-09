import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
        <SidebarLink to='about' onClick={toggle}>
                Our Story
            </SidebarLink>
            <SidebarLink to='kettle' onClick={toggle}>
                Kettle Corn
            </SidebarLink>
            <SidebarLink to='coffee' onClick={toggle}>
                Coffee
            </SidebarLink>
            <SidebarLink to='bulk' onClick={toggle}>
                Bulk
            </SidebarLink>
            <SidebarLink to='contact' onClick={toggle} offset={-80}>
                Contact
            </SidebarLink>
            <SidebarLink to='location' onClick={toggle} offset={-120}>
                Location
            </SidebarLink>

        <SideBtnWrap>
             <SidebarRoute to='../square.html'>Order Online</SidebarRoute> 
        </SideBtnWrap>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
