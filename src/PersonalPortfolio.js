import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutMe from './images/ABOUTME2.jpg'

function PersonalPortfolio() {
    return (
        <div style = {{height: 500}} id = "personal-portfolio">
            <h1 className = "display-1 text-center">Personal Portfolio</h1>
            <div className = "h-75 w-100 d-flex">
                <div className = "h-100 w-50 text-center">
                    <img src = {AboutMe} className="h-75 w-75"/>
                    <p>Languages: JavaScript (JSX, JSON, NODE), HTML, CSS, ReactJS, Python</p>
                    <p>Frameworks & Libraries: Flask, Bootstrap, Jinja, jQuery, SQLAlchemy</p>
                    <p>Database & Industry Tools: PostgreSQL, Git, GitHub, Command Line</p>
                </div>
                <div className = "h-100 w-50 personalPortfolioProjects">
                    <h1>Project 1</h1>
                </div>
            </div>
        </div>
    )
}

export default PersonalPortfolio;