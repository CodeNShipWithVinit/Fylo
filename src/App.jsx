import './App.css'
import logo from "../src/assets/logo.svg"
import intro from "../src/assets/illustration-intro.png";
import introBgMobile from "../src/assets/bg-curvy-mobile.svg";

function App() {
  
  return (
    <div className='container'>

      <div className='header'>
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>

          <nav className='navbar'>
            <ul>
              <li>Features</li>
              <li>Team</li>
              <li>Sign In</li>
            </ul>
          </nav>
      </div>

      <section className='intro'>
        <img className="introImg" src={intro} alt="intro" />
        <img className="introBgMobile" src={introBgMobile} alt="introBgMobile" />

        <div className='introText'>
          <h1><span>All your files in one secure</span><br />
              <span>location,accesible</span><br />
              <span>anywhere.</span>
          </h1>
          <p><span>Fylo stores all your most important files</span><br />
             <span>in one secure location.Access them wherever</span><br />
             <span>you need,share and collaborate with friends,</span><br />
             <span>family and co-workers.</span>
          </p>
        </div>
        
      </section>
     
    </div>
  )
}

export default App
