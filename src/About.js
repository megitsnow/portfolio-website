import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from './images/ABOUTME2.jpg'

function AboutSection() {
    return (

    <div class="container mb-3" id = "about">
        <div class="row">
        <div class="col-md-6 d-flex aligns-items-center justify-content-center flex-column"> 
        <div>
                    <h1 className = "text-center display-1">About Me</h1>
                    <p class="text-center text-paragraph">I grew up in sunny Southern California and now reside in the Bay Area.
                  I have always looked for team based roles with a bit of a quantitative tilt, so I started out my career in finance. After 5 years in wealth 
                  management, I decided to explore my passion for mental health access and technology at Lyra Health. 
                  At Lyra I was focused on recruiting strategies and operations for our therapist onboardings 
                  and trainings. To  automate processes, I taught myself to use Google scripts and realized that 
                  I love to code. Always up for a challenge, I decided that I wanted to pivot into software engineering, and enrolled in Hackbright. 
                  I have throughly enjoyed having a mentor through Hackbright and hope to mentor a budding engineer at some point in my engineering career! In my freetime, I love to explore new places with my husband and dog, Arwen.</p>
                </div></div>
                <div class="col-md-6 mb-0"><img src = {AboutMe} className="h-100 w-100"/></div>
        </div>
    </div>
    )
}

export default AboutSection;