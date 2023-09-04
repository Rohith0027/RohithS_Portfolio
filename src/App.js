import './App.css';
import Design from './components/Design';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { styled } from 'styled-components';
import Skills from './components/Skills';
import Education from "./components/Education";
import Projects from "./components/Projects";
import { useState, useEffect } from "react";
import ProjectDetails from './components/ProjectDetails'
import Contact from './components/Contact';
import Footer from './components/Footer'
import {BrowserRouter as Router} from 'react-router-dom'
import ContactSide from './components/ContactSide'
import Achieve from './components/Achieve'



const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
`
const SideBySide = styled.div`
  display: flex;
  @media only screen and (max-width: 600px){
    flex-direction: column;
    height: 600px;
    margin-top: -80px;
    align-items: center;
    justify-content: center;
  }
`
const App = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <div className='App'>
      <Router>
        <Design />
        <Body>
        <Navbar />
          <HeroSection />
          <Wrapper>
           <Education />
          </Wrapper>
          <Wrapper>
            <Skills />
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          </Wrapper>
          <Wrapper>
            <Achieve />
          </Wrapper>
          <Wrapper>
            <SideBySide>
              <ContactSide />
            </SideBySide>
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
        </Router>
    </div>
  );
}

export default App;
