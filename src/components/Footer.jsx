import React from 'react'
import styled from 'styled-components'
import {BsCodeSquare,BsInstagram,BsLinkedin,BsGithub} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <Wrapper>
        <span>
            <li><AiOutlineCopyrightCircle /></li>
            <p>2023 designed by Tóth Tamás.</p> 
        </span>
        <Social>
                    <Link to='https://www.instagram.com/tot.tamas04/?igshid=MzNlNGNkZWQ4Mg%3D%3D&fbclid=IwAR0MfXe_Y3grK2HP1aVD9ZDYv8NFWNeemkNkrlv3fSwq-3vMo34lKXaD3XA'><li><BsInstagram /></li></Link>
                    <Link to='https://www.linkedin.com/in/tam%C3%A1s-t%C3%B3th-179897254?fbclid=IwAR0b_mkxRnwvBRZZO69xccAuE9KkPcbFfFKbmC_YZrJhDCf-mS_wS5Vr-RQ&original_referer=https%3A%2F%2Fl.facebook.com%2F'><li><BsLinkedin /></li></Link>
                    <Link to='https://github.com/rotetomi97123'><li><BsGithub /></li></Link>
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