import './App.css'
import logo from "../src/assets/logo.svg"
import intro from "../src/assets/illustration-intro.png";

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
        <img src={intro} alt="intro" />
      </section>
     
    </div>
  )
}

export default App
