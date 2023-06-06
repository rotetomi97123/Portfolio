import React from 'react'
import styled from 'styled-components'
import {Experience} from './data'
import { motion } from 'framer-motion';

const Skills = () => {

  
  return (
    <Wrapper >
        <h1>{'<Experience />'}</h1>
        <span>
            {Experience.map((item,index)=>{
                return(
                    <Box>
                            <img src={item.img} alt={item.id}/>
                            <Bg>{item.name}</Bg>
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
    position: relative;
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
const Bg = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    border-radius: 1rem;
    border:none;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 1.3rem;
    color: white;
    cursor: pointer;
    &:hover{
        opacity:1;
        transition: 0.3s ease;
    }
    
`
export default Skills