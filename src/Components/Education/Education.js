import Navbar  from "../Navbar/Navbar";
import "./Education.css";

function Education (){
    return(
        <>
        <Navbar/>
        <div className="Education-container">
      <h1>Education Qualifications</h1>

      
      <div className="education-item">
        <h2>Bachelor of Commerce (GENERAL)</h2>
        <p><strong>Guru Nanak College, Tamil Nadu</strong></p>
        <p>Graduated: 2024</p>
        <p>CGPA: 8.0/ 10</p>
      </div>

      <div className="education-item">
        <h2>Higher Secondary (HSC)</h2>
        <p><strong>Shri natesan vidyasala matric higher secondary school</strong></p>
        <p>Year: 2021</p>
        <p>Percentage: 79%</p>
      </div>

      <div className="education-item">
        <h2>SSLC</h2>
        <p><strong>JOSHUA MATRICULATION HIGHER SECONDARY SCHOOL</strong></p>
        <p>Year: 2020</p>
        <p>Percentage: 65%</p>
      </div>
   

    <div className="education-item">
        <h2>Intership Experience</h2>
        <p><strong>IIT Madras (ISCR)</strong></p>
        <p>Billing : Invoice Processing</p>
      </div>
      </div>
    
        </>
    )
}

export default Education;