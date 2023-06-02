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
                <p>Built with <span>React </span>,<span>Vite</span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> ,<span> React Redux </span>, and <span>React Router DOM</span>. With a functional shopping cart
                     and a products page with filters.</p>
                <h3>Building this project i learned many thing about state management tools, and how to use <span>React Redux</span> on a real projects.   </h3>
                <Flex>
                    <Link to='https://audiohive-shop.netlify.app/' target="_blank"><DemoBtn>Demo</DemoBtn></Link>
                    <Link to='https://github.com/rotetomi97123/Ecommerce_Shop.git' target="_blank"><GitBtn><BsGithub /></GitBtn></Link>
                </Flex>
            </TextDiv>
        </Box>
        <Box>
            <ImageDiv4></ImageDiv4>
            <TextDiv>
                <h2>Wheels</h2>
                <h4>car rental website</h4>
                <p>Built with <span>React </span>,<span>Vite</span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> , and <span>React Router DOM</span>.  </p>
                <h3>Building this project helped me to practice routing trough pages, passing props with <span>react-router-dom</span>, practice <span>responsive design</span> with <span>styled components</span>.</h3>
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
                <p>Built with <span>React </span>,<span>Vite</span>, <span>Styled Components</span>, <span>Framer Motion</span> ,
                <span> React Splide </span> , and <span>React Router DOM</span>. Elegant restaurant website, with a home page, a menu page with filters, and a book a table page.</p>
                     <h3>This was my first project, i learned how to use <span>React-router-dom</span>, to rout to different pages, to use libaries like <span>React Splide</span>, for sliders and practicing <span>responsive design</span> and<span> styled components. </span></h3>                <Flex>
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
    margin: 3rem 0;
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
    @media (max-width: 1600px){
        flex-direction:column;
        height: 100vh;
        justify-content:center;
        align-items:center;
    }
    `
    const ImageDiv = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep1});
    background-size: cover;
    @media (max-width: 1600px){
        width: 80%;
        height:50%;
    }
    @media (max-width: 1200px){
        width: 100%;
        height: 400px;
    }

`
const ImageDiv2 = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep2});
    background-size: cover;
    @media (max-width: 1600px){
        width: 80%;
        height:50%;
        display:none;
    }
`
const ImageDiv4 = styled.div`
    display:none;
    width: 50%;
    height:100%;
    background-image: url(${kep2});
    background-size: cover;
    @media (max-width: 1600px){
        width: 80%;
        height:50%;
        display:flex;
    }
`
const ImageDiv3 = styled.div`
    width: 50%;
    height:100%;
    background-image: url(${kep3});
    background-size: cover;
    @media (max-width: 1600px){
        width: 80%;
        height:50%;
    }
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
    @media (max-width: 1600px){
        width: 100%;
        height: 50%;
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
    transition: transform 0.3s ease, translateY 0.3s ease;
    transform-origin: center center;
    &:hover {
        transform: scale(1.05) translateY(-5px);
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
    transition: transform 0.3s ease, translateY 0.3s ease;
    transform-origin: center center;
    &:hover {
        transform: scale(1.05) translateY(-5px);
    }
`
export default Projects