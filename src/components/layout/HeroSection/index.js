import React, { useState} from 'react'
import Video from '../../../assets/videos/video.mp4';

import {Button} from '../../ButtonElement';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Szybkie Aukcje w Szybkim Czasie</HeroH1>
                <HeroP>
                    Zarejestruj się teraz i sprawdż najnowsze oferty w róznych kategoriach
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signin' onMouseEnter={onHover} onMouseLeave={onHover} primary='false' dark='false' fontBig='true'>
                        Rozpocznij zakupy {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;