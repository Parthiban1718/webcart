import Navbar  from "../Navbar/Navbar";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileDownload, FaWhatsapp } from "react-icons/fa";

function Contact (){
    return(
        <>
        <Navbar/>
        <div className="contact-full-page">
      <h1>Get in Touch</h1>

      <div className="contact-details">
        <p><FaEnvelope /> Email: <a href="mailto:mr.parthiban1718@gmail.com">mr.parthiban1718@gmail.com</a></p>
        <p><FaPhone /> Phone: <a href="tel:+919840181614">+91 9840181614</a></p>
        <p><FaWhatsapp /> <a href="https://wa.me/919840181614" target="_blank">Chat on WhatsApp</a></p>
        <p><FaMapMarkerAlt /> Location: Nandanam, Chennai, Tamil Nadu</p>
      </div>

      <div className="contact-actions">
        <a
          href="/Parthiban_Resume.pdf"
          download
          className="download-btn"
        >
          <FaFileDownload /> Download My Resume
        </a>
      </div>

      <div className="map-container">
        <iframe
          title="My Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0189256962413!2d80.23969131482185!3d13.03334779081288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f07dd6e50d%3A0x20217a5a8e94a174!2sNandanam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '10px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    
        </>
    )
}

export default Contact;