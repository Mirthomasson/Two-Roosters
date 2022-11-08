import styled from "styled-components";
import {Link} from "react-scroll";


export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#99DFF9' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '10px 42px' : '8px 26px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '22px')};
    font-family: 'Lobster', cursive;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#99DFF9')};
        color: ${({dark}) => (dark ? '#010606' : '#000')};
    }
`;