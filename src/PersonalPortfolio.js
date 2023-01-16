import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PORTFOLIO from './images/PORTFOLIO.jpg'
import FORMULAONE from './images/F1ClipArt.png'

function PersonalPortfolio() {
    return (
        <div style = {{height: 500}} id = "personal-portfolio">
            <h1 className = "display-1 text-center">Personal Portfolio</h1>
            <div className = "h-75 w-100 d-flex justify-content-center align-items-center">
                <div className = "h-100 w-50 text-center">
                    <img src = {PORTFOLIO} className="h-75 w-75"/>
                    <p>Languages: JavaScript (JSX, JSON, NODE), HTML, CSS, ReactJS, Python</p>
                    <p>Frameworks & Libraries: Flask, Bootstrap, Jinja, jQuery, SQLAlchemy</p>
                    <p>Database & Industry Tools: PostgreSQL, Git, GitHub, Command Line</p>
                </div>
                <div className = "h-100 w-50 personalPortfolioProjects d-flex align-items-center justify-content-center flex-column">
                    <h1 className = "text-center">Formula One Fan App</h1>
                    <img src= {FORMULAONE} alt="Racing Clipart Formula 1" className="h-45 w-75 mb-2"/>
                    <p className = "mt-0 mb-0"> Description:<span className="font-italic"> Hello</span></p>
                    <p className = "mt-0 mb-0">Languages, Frameworks & Libraries: </p>
                    <p className = "mt-0 mb-0">APIs: </p>
                    <p className = "mt-0 mb-0">Deployed Website: </p>

                </div>
            </div>
        </div>
    )
}

export default PersonalPortfolio;