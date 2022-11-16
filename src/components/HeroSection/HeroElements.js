import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'; 

export const HeroContainer = styled.div`
    background: #0c0c0c;
    diplay: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 950px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        height: 800px;
    }
`;


export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0; 
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;


export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: relative;
    padding-top: 300px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding-top: 150px;
    }
`;


export const HeroP = styled.p`
    text-shadow: rgb(35 31 32 / 35%) 5px 5px 5px;
    color: #faf7ef;
    text-transform: uppercase; 
    font-size: 5.5em;
    width: 40%;
    margin-right: 1.25em;

    @media screen and (max-width: 768px) {
        font-size: 4em;
        width: 80%;
    }

    @media screen and (max-width: 480px) {
        font-size: 2.75em;
    }
`;

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        margin-right: 8em;
    }

    @media screen and (max-width: 480px) {
        margin-right: 1.5em;
        margin-top: 2em; 
    }
`;

export const HeroSpan = styled.p`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    gap: 2em;
    margin-top: 4em;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowForward2 = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight2 = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



