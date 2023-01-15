import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from './images/ABOUTME2.jpg'

function AboutSection() {
    return (
        <div style = {{height: 500}} className = "d-flex" id = "about">
        <div className="h-100 w-50 max-auto d-flex aligns-items-center justify-content-center flex-column">
            <div>
                <h1 className = "text-center display-1">About Me</h1>
                <p class="text-center">I grew up in sunny Southern California and now reside in the Bay Area.
                  After college, I wanted to work in an area in which I could work with clients but also had a 
                  quantitiative tilt, so I started out my career in wealth management. After 5 years in wealth 
                  management, I decided to explore my passion for mental health access and technology at Lyra Health. 
                  At Lyra I was focused on recruiting strategies and operations for our therapist onboardings 
                  and trainings. To  automate processes, I taught myself to use Google scripts and realized that 
                  I love to code. Wanting to learn different coding languages, I enrolled in Hackbright. 
                  I am excited to some day mentor others and continue to learn and refine my coding skills. In my freetime, I love to explore new places with my husband and dog, Arwen.</p>
            </div>
        </div>
        <div className="h-100 w-50">
            <img src = {AboutMe} className="h-100 w-100"/>
        </div>
    </div>
    )
}

export default AboutSection;