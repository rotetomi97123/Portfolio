import React, { useEffect } from 'react'
import styled from 'styled-components'
import {Experience} from './data'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
    if (inView) {
        controls.start('visible');
    }
    }, [controls, inView]);

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
      };
  return (
    <Wrapper ref={ref}>
        <h1>Experience</h1>
        <span>
            {Experience.map((item,index)=>{
                return(
                    <Box 
                       
                        
                        >
                            <img src={item.img} alt={item.id}/>
                    </Box>
                )
                })}
        </span>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin: 2rem 0;
    span{
        display:flex;
        width: 70%;
        flex-wrap: wrap;
    }
    h1{
        margin-top: 2rem;
        font-size: 3rem;
        color:#0C2D48;
        text-align:center;
        font-weight:600;
    }
    
`
const Box = styled(motion.div)`
    width: 250px;
    height: 250px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid darkgray;
    border-radius:1rem;
    margin: 2rem 2rem;
    img{
        width: 150px;
    }
    transition: transform 0.3s ease, translateY 0.3s ease;
    transform-origin: center center;
    &:hover {
        transform: scale(1.05) translateY(-5px);
    }
`
export default Skills