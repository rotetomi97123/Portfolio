import React, { useRef } from 'react'
import styled from 'styled-components'
import {BsCode,BsCodeSlash} from 'react-icons/bs'

const Hero = () => {
  return (
    <Wrapper>
        <LeftSide>
            <div>
                <p>Hello, I'm</p>
                <h1>Tamás</h1>
                <h4>React Front-End Developer</h4>
            </div>
        </LeftSide>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height: 87vh;
    font-family: 'Lato', sans-serif;
    position:relative;
`
const LeftSide = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    p{
        font-size: 3rem;
        color:#0C2D48;
        margin-left:4.5rem;
        font-weight: 600;
    }
    h1{
        font-size: 10rem;
        font-family: 'Pacifico', cursive;
        color: #145DA0;
    }
    h4{
        font-size: 3rem;
        color: #0C2D48;
        margin-left:4.5rem;
    }
`


export default Hero