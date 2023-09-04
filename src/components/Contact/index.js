import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import './contact.css'
import { useState } from 'react';
import email from '@emailjs/browser'
import sas from './sas.mp3'
import { Howl, Howler } from 'howler';
import good from './good.mp3'
import ju from './ju.mp3'
import obito from './obito.mp3'

import jesus from './jesus.mp3'


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
width: 130%;
margin-bottom: 100px;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
    width: 100%;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: #854CE6;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`
const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: white;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: white;
`



const Contact = () => {
  let audio = new Audio(sas)
  let audio1 = new Audio(good)
  let audio2 = new Audio(ju)
  let audio3 = new Audio(obito)
  let audio4 = new Audio(jesus)
  //hooks
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    let x = document.forms["myForm"]["from_name"].value;
    let y = document.forms["myForm"]["from_email"].value;
    let z = document.forms["myForm"]["subject"].value;
    let w = document.forms["myForm"]["message"].value;
    if(x==""){
      audio.play()
      alert("please enter name");
      return false;
    }else if(y==""){
      audio2.play()
      alert("please enter email");
      return false;
    }else if(z==""){
      audio3.play()
      alert("please enter subject");
      return false;
    }else if(w==""){
      audio4.play()
      alert("please enter message");
      return false;
    }else{
    emailjs.sendForm('service_f71ujfl', 'template_pgfxgel', form.current, '5va3LD9JgvE82_cwM')
      .then((result) => {
          console.log(result.text);
          audio1.play()
          alert('Email Succesfully Sent✓');
      }, (error) => {
          console.log(error.text);
      });
  };
}
  
 

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <form className='ContactForm' ref={form} onSubmit={sendEmail} name='myForm'>
        <ContactTitle>Email Me 🚀</ContactTitle>
        <input className='ContactInput' placeholder="Your Email" type='email' name="from_email" />
        <input className='ContactInput' placeholder="Your Name" type='text' name="from_name" />
        <input className='ContactInput' placeholder="Subject" name="subject" />
        <input className='ContactInputMessage' placeholder="Message" rows="4" name="message" />
        <button className='ContactButton' type="submit" value="Send" >Send</button>
        </form>
      </Wrapper>
    </Container>
  )
}

export default Contact