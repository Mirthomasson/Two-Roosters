import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    position: sticky;
    top: 0; 
    z-index: 10;
    box-shadow: 0px 2.98256px 7.4564px rgba(244, 244, 244, 0.2);

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: 0.2s ease;
    border-radius: 50%;
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
        transition: 0.2s ease;
        background-color: lightgray;
        color: black;
    }

    &.active {
        border-bottom: 3px solid #E74C3C;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    white-space: nowrap;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    color: white;
    font-size: 22px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: lightgray;
        color: #000;
    }
`;

