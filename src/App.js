import './App.css';
import profileImg from './resumePicture.JPG'
import linkedinIcon from './linkedinIcon.svg'
import linkedinIcon2 from './linkedinIcon2.svg'
import githubIcon from './githubIcon.svg'

function App() {
  return (
    <div className='mainBox'>
      <div className='mainContent'>
        <div className='imgDiv'>
          <img src={profileImg} className='profileImg'></img>
        </div>
        <div className='textContent'>
          <h1>Omar Siddiqui</h1>
          <h2>Frontend Developer</h2>
          <div className='links'>
            <a href='mailto:OSOmar120@gmail.com' className='linkEmail'>
              <span class="material-symbols-outlined">mail</span>
              Email</a>
            <a href='https://www.linkedin.com/in/omar-siddiqui954/' className='linkLinkedin'>
            <img src={linkedinIcon} className='linkedinIcon'></img>
            Linkedin</a>
          </div>
          <div className='aboutAndInterestsDiv'>
            <h3>About</h3>
            <p>A frontend developer with a interest in learning all things technology.
              Currently honing his skills in react and then progressing to backend technologies 
              and later cloud technologies.
            </p>
            <h4>Interests</h4>
            <p>Playing, recording and creating music. Pickleball. Volleyball. Gym. Overwatch. 
              Fortnite. Yugioh. Trying new resturants. 
            </p>
          </div>
        </div>
        <div className='footer'>
          <a href='https://github.com/OmarSidds?tab=repositories'>
            <img src={githubIcon} className='githubIcon'></img>
          </a>
          <a href='https://www.linkedin.com/in/omar-siddiqui954/'>
            <img src={linkedinIcon2} className='linkedinIconFooter'></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App;

{/* <img src={profileImg} className='profileImg'></img> */}