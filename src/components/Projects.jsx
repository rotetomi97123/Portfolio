import React, { useRef } from 'react'
import styled from 'styled-components'
import kep1 from '../assets/kep1.png'
import kep2 from '../assets/kep2.png'
import kep3 from '../assets/kep3.png'
import { BsGithub } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Projects = ({ sectionRef }) => {
  return (
    <Wrapper ref={sectionRef} >
        <h1>Projects</h1>
        <Box>
            <ImageDiv></ImageDiv>
            <TextDiv>
                <h2>Audiohive</h2>
                <h4>e-commerce website</h4>
                <p>Built with <span>React </span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> ,<span> React Redux </span>, and <span>React Router DOM</span>. With a functional shopping cart
                     and products page with filters.</p>
                <h3>Building this project i learned many thing about state management tools, and how to use <span>React Redux</span> on a real projects.   </h3>
                <Flex>
                    <Link to='https://audiohive-shop.netlify.app/' target="_blank"><DemoBtn>Demo</DemoBtn></Link>
                    <Link to='https://github.com/rotetomi97123/Ecommerce_Shop.git' target="_blank"><GitBtn><BsGithub /></GitBtn></Link>
                </Flex>
            </TextDiv>
        </Box>
        <Box>
            <TextDiv>
                <h2>Wheels</h2>
                <h4>car rental website</h4>
                <p>Built with <span>React </span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> ,<span> React Redux </span>, and <span>React Router DOM</span>. With a functional shopping cart
                     and products page with filters.</p>
                <h3>Building this project i learned many thing about state management tools, and how to use <span>React Redux</span> on a real projects.   </h3>
                <Flex>
                    <Link to='https://wheels-car-rent.netlify.app//' target="_blank"><DemoBtn>Demo</DemoBtn></Link>
                    <Link to='https://github.com/rotetomi97123/Wheels-car-rent.git' target="_blank"><GitBtn><BsGithub /></GitBtn></Link>
                </Flex>
            </TextDiv>
            <ImageDiv2></ImageDiv2>
        </Box>
        <Box>
            <ImageDiv3></ImageDiv3>
            <TextDiv>
                <h2>Gusto</h2>
                <h4>restaurant website</h4>
                <p>Built with <span>React </span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> ,<span> React Redux </span>, and <span>React Router DOM</span>. With a functional shopping cart
                     and products page with filters.</p>
                <h3>Building this project i learned many thing about state management tools, and how to use <span>React Redux</span> on a real projects.   </h3>
                <Flex>
                    <Link to='https://gusto-restaurant.netlify.app/' target="_blank"><DemoBtn>Demo</DemoBtn></Link>
                    <Link to='https://github.com/rotetomi97123/Gusto-Restaurant.git' target="_blank"><GitBtn><BsGithub /></GitBtn></Link>
                </Flex>
            </TextDiv>
        </Box>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height: 100%;
    margin-bottom:5rem;
    h1{
        margin-top: 2rem;
        font-size: 3rem;
        color:#0C2D48;
        text-align:center;
        font-weight:600;
    }
`
const Box = styled.div`
    width: 100%;
    height: 50vh;
    display:flex;
    margin-top:4rem;
    padding: 0rem 3rem;
    margin-bottom: 4rem;
    `
    const ImageDiv = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep1});
    background-size: cover;


`
const ImageDiv2 = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep2});
    background-size: cover;
`
const ImageDiv3 = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep3});
    background-size: cover;
`
const TextDiv = styled.div`
    width: 50%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    h2{
        font-size:3rem;
        color:#0C2D48;
    }
    h4{
        font-size: 1.3rem;
        font-weight:100;
        margin-bottom: 2rem;
        color:#0C2D48;
    }
    p{
        max-width: 550px;
        margin-bottom: 1.3rem;
        font-size: 1.1rem;
        font-weight:100;
        color:#0C2D48;
    }
    h3{
        max-width: 550px;
        font-size: 1.1rem;
        font-weight:100;
        color:#0C2D48;
    }
    span{
        font-weight:600;
    }
`
const Flex = styled.div`
    display:flex;
    margin-top: 2rem;
    a{
        text-decoration:none;
        list-style-type:none;
    }
`
const DemoBtn = styled.button`
    font-size: 1.5rem;
    background: none;
    border-radius: 1rem;
    border: 1px solid #0C2D48;
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    font-weight: 600;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#0C2D48;
    &:hover{
        color:#2E8BC0;
        transition: 0.1s ease;
        border: 1px solid #2E8BC0;
    }

`
const GitBtn = styled.button`
    font-size: 2rem;
    background: none;
    border-radius: 1rem;
    border: 1px solid #0C2D48;
    padding: 0.5rem 1rem;
    cursor: pointer;
    display:flex;
    justify-content:center;
    align-items:center;
    color:#0C2D48;
    &:hover{
        color:#2E8BC0;
        transition: 0.1s ease;
        border: 1px solid #2E8BC0;
    }

`
export default Projects