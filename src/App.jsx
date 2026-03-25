import "./App.css";
import logo from "../src/assets/logo.svg";
import intro from "../src/assets/illustration-intro.png";
import introBgMobile from "../src/assets/bg-curvy-mobile.svg";
import IconAccessAnywhere from "../src/assets/icon-access-anywhere.svg";
import IconSecurity from "../src/assets/icon-security.svg";
import IconCollaboration from "../src/assets/icon-collaboration.svg";
import IconAnyFile from "../src/assets/icon-any-file.svg";
import StayProductive from "../src/assets/illustration-stay-productive.png";
import arrowSvg from "../src/assets/icon-arrow.svg"

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav className="navbar">
          <ul>
            <li>Features</li>
            <li>Team</li>
            <li>Sign In</li>
          </ul>
        </nav>
      </div>

      <section className="intro">
        <img className="introImg" src={intro} alt="intro" />
        <img
          className="introBgMobile"
          src={introBgMobile}
          alt="introBgMobile"
        />

        <div className="introText">
          <h1>
            <span>All your files in one secure</span>
            <br />
            <span>location,accesible</span>
            <br />
            <span>anywhere.</span>
          </h1>
          <p>
            <span>Fylo stores all your most important files</span>
            <br />
            <span>in one secure location.Access them wherever</span>
            <br />
            <span>you need,share and collaborate with friends,</span>
            <br />
            <span>family and co-workers.</span>
          </p>
          <button className="started">Get Started</button>
        </div>
      </section>

      <section className="services">
        <div className="accessAnywhere">
          <img src={IconAccessAnywhere} alt="IconAccessAnywhere" />
          <h4>Access your files,anywhere</h4>
          <p>
            <span>The ability to use a smartphone,tablet,or</span>
            <br />
            <span>computer to access your account means your</span>
            <br />
            <span>files follow you everywhere</span>
          </p>
        </div>

        <div className="accessAnywhere">
          <img src={IconSecurity} alt="IconSecurity" />
          <h4>Security you can trust</h4>
          <p>
            <span>2-factor authentication and user-controlled</span>
            <br />
            <span>encryption are just a couple of the security</span>
            <br />
            <span>features we allow to help secure your files.</span>
          </p>
        </div>

        <div className="accessAnywhere">
          <img src={IconCollaboration} alt="IconCollaboration" />
          <h4>Real-time collaboration</h4>
          <p>
            <span>Securely share files and folders with friends,</span>
            <br />
            <span>family and colleagues with live collaboration.No</span>
            <br />
            <span>email attatchments required</span>
          </p>
        </div>

        <div className="accessAnywhere">
          <img src={IconAnyFile} alt="IconAnyFile" />
          <h4>Store any type of file</h4>
          <p>
            <span>Whether you're sharing holidays photos or work</span>
            <br />
            <span>documents,Fylo has you covered allowing for all</span>
            <br />
            <span>file types to be securely stored and shared.</span>
          </p>
        </div>
      </section>

      <section>
        <div className="stayProductive">
          <img src={StayProductive} alt="StayProductive" />
          <h4>Stay productive, wherever you are</h4>
          <p>
            <span>Never let location be an issue when accessing</span>
            <br />
            <span>your files. Fylo has you covered for all of your file</span>
            <br />
            <span>storage needs</span>
          </p>
          <p>
            <span>Securely share files and folders with friends</span>
            <br />
            <span>family and colleagues for live collaboration. No</span>
            <br />
            <span>email attatchments required.</span>
          </p>
        </div>
        <div className="seeFylo">
              <div className="FyloText">
                  <p>See how Fylo works</p>
                  <img src={arrowSvg} alt="arrowSvg" />
              </div>
              <div className="Line">
                console.log('Debugging');
              </div>
        </div>

       
      </section>
    </div>
  );
}

export default App;
