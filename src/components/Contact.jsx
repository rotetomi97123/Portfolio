import React, { useRef } from 'react'
import styled from 'styled-components'

const Contact = ({ sectionRef }) => {
  return (
    <Wrapper ref={sectionRef}>
      <Box>
        <h1>Leave a message!</h1>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Textarea placeholder="Message" />
        <Btn>Send message</Btn>
      </Box>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Box = styled.div`
  width:50%;
  height:80%;
  background: darkgray;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius: 0.5rem;
  h1{
    color:#145DA0;
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 800px){
    width:90%;
    height:90%;
    h1{
      font-size:2rem;
    }
  }
`
const Input = styled.input`
  width: 70%;
  height: 50px;
  padding-left: 1rem;
  font-size: 1.5rem;
  border: none;
  margin: 1rem 0;
  border-radius: 0.5rem;
  @media (max-width: 800px){
    width:90%;
  }
`
const Textarea = styled.textarea`
  resize: none;
  width: 70%;
  height: 250px;
  padding-left: 1rem;
  font-size: 1.5rem;
  border: none;
  margin: 1rem 0;
  border-radius: 0.5rem;
  @media (max-width: 800px){
    width:90%;
  }
`
const Btn = styled.button`
  width: 30%;
  height:60px;
  font-size: 2rem;
  color: white;
  border-radius: 0.5rem;
  border: none;
  background: #145DA0;
  cursor: pointer;
  margin-top: 2rem;
  @media (max-width: 800px){
    width:70%;
  }
  transition: transform 0.3s ease, translateY 0.3s ease;
    transform-origin: center center;
    &:hover {
        transform: scale(1.05);
    }
`
export default Contact