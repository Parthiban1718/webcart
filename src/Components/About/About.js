import Navbar  from "../Navbar/Navbar";
import "./About.css";

function About (){
    return(
        <>
        <Navbar/>
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p className="tagline">Aspiring Full Stack Developer | Quick Learner | Problem Solver</p>

        <div className="about-details">
         <p>
         Hello! I'm <strong>Parthiban V</strong>, a passionate and dedicated fresher eager to begin my journey as a <strong>Full Stack Developer</strong>. 
         I have hands-on experience building projects using <strong>HTML, CSS, JavaScript, React.js, Java, Spring Boot, RESTful APIs, and MySQL</strong>. 
         I’m continuously learning and improving my skills to stay up-to-date with modern development practices.
          </p>

          <p>
            My strength lies in learning quickly, solving problems logically, and building clean, user-friendly interfaces and back-end systems.
            I enjoy turning ideas into code and am excited about opportunities to collaborate, learn, and grow in the tech industry.
          </p>

          <p>
            I'm open to internships or entry-level roles where I can contribute, improve, and work with experienced developers to build great products.
          </p>
        </div>

        <div className="skills-box">
          <h3>My Skills</h3>
          <ul>
            <li>✅ Frontend: HTML, CSS,Bootstrap,JavaScript, React.js,Axios (API calls) </li>
            <li>✅ Backend: Java,SpringBoot, REST APIs</li>
            <li>✅ Database:  MySQL</li>
            <li>✅ Tools: Github, VS Code, Postman</li>
          </ul>
        </div>
      </div>
    </div>

    
        </>
    )
}

export default About;