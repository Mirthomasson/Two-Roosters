import React, {useState} from 'react';
import Video from '../../videos/popcorn.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroSpan, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';


const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  function handleClick() {
      window.open("https://thetworoosters.square.site/");
    };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroP>
          <h1>Our business is POPPING!
          </h1>
        </HeroP>
        <HeroSpan>
        </HeroSpan>
        <HeroBtnWrapper>
          <Button onClick={handleClick} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Order Online {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroSection;
