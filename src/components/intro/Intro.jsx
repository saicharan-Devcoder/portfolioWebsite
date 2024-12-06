import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/Floating';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
function Intro() {
  return (
    <div class="intro">
        <div class="i-left">
        <div class="i-name">
        <span>Hi ! I Am</span> 
        <span>Charan</span>
        <span>Web Developer, highly expertised 
        in develpment,testing and product delivery  </span>
        </div>
        <button class="button i-button">Hire Me</button>
        <div class="i-icons">
            <a href="https://www.linkedin.com/in/gampa-saicharan/"><img src={LinkedIn} alt=""/></a>
            <a href="https://github.com/sai-charan-Devcoder"><img src={Github} alt=""/></a>
            <a href="https://www.instagram.com/knowledge_with_charan/"><img src={Instagram} alt=""/></a>
        </div>
        </div>
       
        <div class="i-right">
         
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={boy} alt=""/>
            <img src={glassesimoji} alt=""/>
         <div style={{top:'-4%',left:'68%'}}>
           <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
         </div>
         <div style={{top:'18rem',left:'0.7rem'}} >
           <FloatingDiv image={thumbup} txt1='Excellent' txt2='coding'/>
         </div>
        </div>
    </div>
  )
}

export default Intro