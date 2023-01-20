import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import PORTFOLIO from './images/PORTFOLIO2.jpg'
import FORMULAONE from './images/F1ClipArt.png'
import ADA from './images/ADALOVELACE.jpeg'

function PersonalPortfolio() {
    return (
    <div id = "personal-portfolio">
        <h1 className = "display-1 text-center">Personal Portfolio</h1>
        <div class = "container mb-3">
            <div class = "row">
                <div className = "col-md-6 d-flex justify-content-center align-items-center">
                    <div className = "text-center">
                        <img src = {PORTFOLIO} className="h-100 w-100"/>
                        <p className = "mt-1 mb-1">Languages: JavaScript (JSX, JSON, NODE), HTML, CSS, ReactJS, Python</p>
                        <p className = "mt-1 mb-1">Frameworks & Libraries: Flask, Bootstrap, Jinja, jQuery, SQLAlchemy</p>
                        <p className = "mt-1 mb-1">Database & Industry Tools: PostgreSQL, Git, GitHub, Command Line</p>
                    </div>
                </div>
                <div className = "col-md-6 personalPortfolioProjects d-flex align-items-center justify-content-center flex-column">
                    <h1 className = "text-center">Formula One Fan App</h1>
                    <img src= {FORMULAONE} alt="Racing Clipart Formula 1" className="h-45 w-75 mb-2"/>
                    <p className = "mt-0 mb-2 text-center"> <span className = "PortfolioParagraphs">Description: </span>Full stack app which enables users to follow F1 drivers, access historical race information, receive tailored F1 news, and search circuits</p>
                    <p className = "mt-0 mb-2 text-center"><span className = "PortfolioParagraphs">Languages, Frameworks & Libraries: </span> Python, Flask, React, JavaScript (AJAX, JSON), HTML, CSS, PostgreSQL</p>
                    <p className = "mt-0 mb-2 text-center"><span className = "PortfolioParagraphs">APIs: </span> Google Maps API, Cloudinary, Newsapi.org, Ergast Developer API</p>
                    <div>
                        <a className = "contactLinks" href="https://github.com/megitsnow/f1-react-app" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg></a>
                        <a className = "contactLinks" href="http://52.10.130.154" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                            <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
                            <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z"/>
                            </svg>
                    </a>
                    </div>
                    
                   
                   
                </div>
            </div>
        </div>
        <div class = "container mb-3">
            <div class = "row">
                <div className = "col-md-6 d-flex align-items-center justify-content-center flex-column">
                    <h1 className = "text-center">More to Come!</h1>
                    <img src= {ADA} alt="Racing Clipart Formula 1" className="h-45 w-75 mb-2"/>
                    <p className = "mt-0 mb-0">Please continue to check back for more projects as I continue to build my portfolio and refine my coding skills! In the meantime, feel free to read about my inspiration, <a class = "link-secondary" target = "_blank" href = "https://en.wikipedia.org/wiki/Ada_Lovelace">Ada Lovelace</a></p>

                </div>
            </div>
        </div>
    </div>



    )
}


export default PersonalPortfolio;
