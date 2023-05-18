import React, { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import styled from 'styled-components'
import background2 from './assets/background2.mp4'
import {MdKeyboardArrowDown} from 'react-icons/md'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { motion } from 'framer-motion';

const HomePage = () => {
    const sectionRef = useRef(null);

    const scrollToNextSection = () => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
        <>
          <Wrapper>
            <Navbar sectionRef={sectionRef} />
            <Hero />
              <Video autoPlay loop muted>
                  <source src={background2} type="video/mp4" />
              </Video>
              <Arrow  onClick={scrollToNextSection} />
          </Wrapper>
          <Projects sectionRef={sectionRef} />
          <Contact />
        </>
      )
    }
    const Wrapper = styled.div`
      position:relative;
    `
    const Video = styled.video`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -10;
    `;
    const Arrow = styled(MdKeyboardArrowDown)`
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      font-size:3rem;
      color: #0C2D48;
      cursor:pointer;
    `
export default HomePage