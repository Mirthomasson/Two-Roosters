import styled from "styled-components";
import {Link} from "react-scroll";


export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#E74C3C' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '10px 42px' : '8px 26px')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '22px')};
    outline: none;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease-in-out;
    box-shadow: 1px 2px 4px 0px rgba(var(--brz-global-color2),0.35);

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#e74d3c84' : '#E74C3C')};
        color: ${({dark}) => (dark ? 'white' : 'white')};
    }
`;