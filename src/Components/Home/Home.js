import Navbar from "../Navbar/Navbar";
import "./Home.css";
import photo from "../Projects/Ecomcomp/images/photo.jpg";

export default function Home() {

  
  return (
    <>
      <Navbar />  
      <div className="parent">
        <div className="child">
          <div className="img">
          <img src={photo} alt="Profile" />
          </div>
          <div className="card">
  <h2>👨‍💻 PARTHIBAN.V</h2>
  <h4>💼 FULL STACK DEVELOPER</h4>
  <ol>
    <li>📧 Email: mr.parthiban1718@gmail.com</li>
    <li>📞 Number: 9840181614</li>
    <li>📍 Location: Nandanam</li>
  </ol>
</div>

        </div>
      </div>
    </>
  )
}

 
