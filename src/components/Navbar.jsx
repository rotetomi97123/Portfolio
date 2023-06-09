import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import {BsCodeSquare,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
import {RiMenu3Fill} from 'react-icons/ri'
import { motion} from 'framer-motion';
import {Link} from 'react-router-dom'



const Navbar = ({ scrollToProjects, scrollToContact }) => {
    
    const [active, setActive] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 800){
                setActive(false);
            }else{ 
            }
        };
        window.addEventListener('resize', handleResize);
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  
  return (
    <Wrapper>
        <Logo />
        <span>
            <NavWrap>
                <ul>
                    <li>HOME</li>
                    <li onClick={scrollToProjects} >PROJECTS</li>
                    <li onClick={scrollToContact}>CONTACT</li>
                </ul>
            </NavWrap>
            <Social>
                    <Link to='https://www.instagram.com/tot.tamas04/?igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR0MfXe_Y3grK2HP1aVD9ZDYv8NFWNeemkNkrlv3fSwq-3vMo34lKXaD3XA'><li><BsInstagram /></li></Link>
                    <Link to='https://www.linkedin.com/in/tam%C3%A1s-t%C3%B3th-179897254?fbclid=IwAR0b_mkxRnwvBRZZO69xccAuE9KkPcbFfFKbmC_YZrJhDCf-mS_wS5Vr-RQ&original_referer=https%3A%2F%2Fl.facebook.com%2F'><li><BsLinkedin /></li></Link>
                    <Link to='https://github.com/rotetomi97123'><li><BsGithub /></li></Link>
            </Social>
        </span>
        <Hamburger onClick={()=>(setActive(!active))}/>
        {active === true ?
        <NavMobile
            variants={menuVariants}
            initial="closed"
            animate={active ? 'open' : 'closed'}
            exit="exit"
        >
            <ul>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>CONTACT</li>
                <Link to='https://www.instagram.com/tot.tamas04/?igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR0MfXe_Y3grK2HP1aVD9ZDYv8NFWNeemkNkrlv3fSwq-3vMo34lKXaD3XA'><li><BsInstagram /></li></Link>
                <Link to='https://www.linkedin.com/in/tam%C3%A1s-t%C3%B3th-179897254?fbclid=IwAR0b_mkxRnwvBRZZO69xccAuE9KkPcbFfFKbmC_YZrJhDCf-mS_wS5Vr-RQ&original_referer=https%3A%2F%2Fl.facebook.com%2F'><li><BsLinkedin /></li></Link>
                <Link to='https://github.com/rotetomi97123'><li><BsGithub /></li></Link>
            </ul>
        </NavMobile>: ''}
    </Wrapper>
  )
}
const menuVariants = {
    open: {
        x: 0,
        transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    },
    closed: {
      x: '100%',
      transition: {
        duration: 0.5,
        type: 'spring',
        stiffness: 120,
        damping: 10
      }
    },
    exit: {
        x: '150%',
        transition: {
          duration: 0.5,
          type: 'spring',
          stiffness: 120,
          damping: 10
        }
      }
  };

const Wrapper = styled.div`
    width: 100%;
    height: 13vh;
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:relative;
    span{
        display:flex;
    }
`
const Logo = styled(BsCodeSquare)`
    font-size: 3rem;
    color:#0C2D48;
`
const Social = styled.ul`
    
    display:flex;
    li{
        list-style-type:none;
        font-size: 2rem;
        margin-right:1.5rem;
        font-weight:600;
        cursor:pointer;
        color:#0C2D48;
        a{
            list-style-type:none;
            text-decoration:none;
        }
        &:hover{
            color:#2E8BC0;
            transition: 0.1s ease;
        }
    }
    @media (max-width: 800px){
        display:none;
    }
`
const NavWrap = styled.div`
    margin-right: 4rem;
    ul{
        display:flex;
    }
    li{
        list-style-type:none;
        font-size: 1.5rem;
        margin-right:1.5rem;
        font-weight:600;
        cursor:pointer;
        color:#0C2D48;
        &:hover{
            color:#2E8BC0;
            transition: 0.1s ease;
        }
    }
    @media (max-width: 800px){
        display:none;
    }
`
const Hamburger = styled(RiMenu3Fill)`
    display:none;
    font-size:3rem;
    color:#0C2D48;
    cursor:pointer;
    @media (max-width: 800px){
        display:flex;
    }
`
const NavMobile = styled(motion.div)`
    z-index:30;
    padding: 1rem 1rem;
    position:absolute;
    top:8rem;
    right:2rem;
    border-radius: 1rem;
    border: 1px solid darkgray;
    display:flex;
    justify-content:center;
    align-items:center;
    ul{
        display:flex;
        flex-direction:column;
        display:flex;
        justify-content:center;
        align-items:flex-start;
    }
    li{
        list-style-type:none;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        font-weight:600;
        cursor:pointer;
        color:#0C2D48;
        margin-bottom: 1rem;
        &:hover{
            color:#2E8BC0;
            transition: 0.1s ease;
        }
        
    }
`

export default Navbar