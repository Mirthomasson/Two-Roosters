import React, {useState} from 'react';
import Video from '../../videos/popcorn.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroLogo, HeroP, HeroSpan, HeroBtnWrapper, ArrowForward, ArrowRight, Img } from './HeroElements';
import { Button } from '../ButtonElement';
import  Logo  from '../../images/twoRoosters.jpeg';

const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  function message(e) {
    e.preventDefault();
    
    if (navigator.userAgent.match(/(Android)/i|/(iPhone)/i)) {
       window.open('sms://5405216141');
    }
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroLogo>
          <Img src={Logo} alt="Logo" />
        </HeroLogo>
        <HeroP>
          <h1>blank</h1>
        </HeroP>
        <HeroSpan>
         <p>Open 7 days a week</p>
         <p>6AM - 9PM</p>
        </HeroSpan>
        <HeroBtnWrapper>
          <Button onClick={message} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Message Us {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};


export default HeroSection;
