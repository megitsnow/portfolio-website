import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavBar from './NavBar.js';
import AboutSection from './About.js'
import WelcomeSection from './Welcome.js'
import PersonalPortfolio from "./PersonalPortfolio.js"
import ContactSection from "./Contact.js"
import Email from "./Email.js"
import './Style.css';

function App() {
  return (
    <div>
      <head>
          <link rel="stylesheet" href = "./Style.css"/>

          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Josefin+Sans:ital,wght@0,200;0,300;0,400;0,600;1,200&display=swap" rel="stylesheet"/>

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossorigin="anonymous"
            />
      </head>
      <body>
            <AppNavBar/>
            <WelcomeSection/>
            <AboutSection/>
            <PersonalPortfolio/>
            <Email/>
            <ContactSection/>
      </body>
    </div>
  );
}

export default App;
