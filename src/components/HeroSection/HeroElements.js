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
    padding: 8px 24px;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


export const HeroP = styled.p`
    text-shadow: rgb(35 31 32 / 35%) 5px 5px 5px;
    color: #faf7ef;
    text-transform: uppercase; 
    font-size: 2.5em;
    margin-top: 5.5em;

    @media screen and (max-width: 768px) {
        font-size: 1.75em;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3em
    }
`;

export const HeroSpan = styled.p`
    color: #ccff02;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
`

export const HeroBtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4em;

    @media screen and (max-width: 768px) {
        margin-right: 8em;
    }

    @media screen and (max-width: 480px) {
        margin-right: 1.5em;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



