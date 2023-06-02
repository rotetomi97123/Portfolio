import React from 'react'
import styled from 'styled-components'
import {BsCodeSquare,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <Wrapper>
        <span>
            <li><AiOutlineCopyrightCircle /></li>
            <p>2023 designed by Tóth Tamás.</p> 
        </span>
        <Social>
                    <li><BsInstagram /></li>
                    <li><BsLinkedin /></li>
                    <li><BsGithub /></li>
        </Social>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    width:100%;
    height: 20vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    span{
        display:flex;
    }
    p{
        font-size: 1.5rem;
        margin-right: 2rem;
    }
    li{
        list-style-type:none;
        font-size: 2rem;
        margin-right:1.5rem;
        font-weight:600;
        color:#0C2D48;
    }
    @media (max-width: 800px){
        flex-direction: column;
        p{
            margin-bottom:1rem;
        }
      
    }
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
        &:hover{
            color:#2E8BC0;
            transition: 0.1s ease;
        }
    }
`
export default Footer