import React, { useState} from 'react';
import Navbar from '../components/layout/Navbar';
import Sidebar from '../components/layout/Sidebar';
import HeroSection from '../components/layout/HeroSection';
import InfoSection from '../components/layout/InfoSection';
import NewestAuctions from '../components/layout/NewestAuctions';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/layout/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <NewestAuctions />
            <InfoSection {...homeObjThree} />
        </>
    );
}

export default Home;