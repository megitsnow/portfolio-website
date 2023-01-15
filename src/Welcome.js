import React from 'react'
import WelcomeImage from './images/WelcomeImage.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function WelcomeSection() {
    return (
        <div style = {{height: 500}} className = "d-flex welcome-section">
            <div className="h-100 w-50">
                <img src = {WelcomeImage} className="h-100 w-100"/>
            </div>
            <div className="h-100 w-50 max-auto d-flex aligns-items-center justify-content-center flex-column">
                <div>
                    <h1 className = "text-center display-1">Bienvenidos!</h1>
                    <p class="text-center text-paragraph">Hi, I am Megan. I am a full stack software engineer with a keen eye for the details.</p>
                </div>
            </div>
        
            
        </div>
    )
}

export default WelcomeSection;