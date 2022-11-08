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

export const HeroLogo = styled.div`
    display: flex;
    align-self: center;
    justify-self: center;
    margin-top: 11em;
`;

export const Img = styled.img`
    height: 100%;
    width: 500px;

    @media screen and (max-width: 768px) {
        height: 100%;
        width: 400px;
        margin-top: -3em;
    }

    @media screen and (max-width: 480px) {
        height: 100%;
        width: 300px;
        margin-top: -.5em;
    }
`;

export const HeroP = styled.p`
    margin-top: -2.5em;

    @media screen and (max-width: 768px) {
        margin-top: 1em;
    }

    @media screen and (max-width: 480px) {
        margin-top: -.5em;
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
    margin-top: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



