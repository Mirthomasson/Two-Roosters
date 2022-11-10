import React, {useState} from 'react';
import Video from '../../videos/popcorn.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroSpan, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import kroger from '../../images/kroger.png'
import earth from '../../images/earth.png'
import coop from '../../images/coop.png'


const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const [hover2, setHover2] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  const onHover2 = () => {
    setHover2(!hover2)
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
        <HeroBtnWrapper>
          <Button onClick={handleClick} onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Order Online {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
          <Button onClick={handleClick} onMouseEnter={onHover2} onMouseLeave={onHover2} primary='true' dark='true'>
            Retail Locations {hover2 ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <HeroSpan>
          <img className='retail' src={earth} alt='earth-fare' />
          <img className='retail' src={kroger} alt='kroger' />
          <img className='retail' src={coop} alt='roanoke co-op' />
        </HeroSpan>
    </HeroContainer>
  );
};


export default HeroSection;
