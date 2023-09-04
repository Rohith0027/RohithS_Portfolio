import React from 'react'
import IonIcon from '@reacticons/ionicons';
import './footer.css'
import { Bio } from '../../data/constants';
function index() {
  return (
    <div className='start'>
        <div className='waves'>
            <div className='wave' id='wave1'></div>
            <div className='wave' id='wave2'></div>
            <div className='wave' id='wave3'></div>
            <div className='wave' id='wave4'></div>
        </div>
        <ul className='social-icons'>
            <li><a href={Bio.linkedin}><IonIcon name="logo-linkedin" size="large" /></a></li>
            <li><a href='#'><IonIcon name="logo-instagram" size="large" /></a></li>
            <li><a href={Bio.github}><IonIcon name="logo-github" size="large" /></a></li>
        </ul>
        
        <p>©2023 VELAGAPUDI ROHITH | All Rights Reserved</p>
    </div>
  )
}

export default index