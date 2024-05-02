import React from "react";
import { Tilt } from "react-tilt";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Contact = () => {

  const imagePath = '/Users/cherryyang/Desktop/school/trying/web/src/assets/tripguide.png'; // Replace with your image path

  return (
    <>
        
        <p className={`${styles.sectionSubText} text-left`}>
          Continuously learning and innovating...
        </p>
        <h2 className={`${styles.sectionHeadText} text-left`}>
          Contact Me! 
        </h2>

      <br></br>
      <div className="contact-footer">
        <div className="contact-container">
          <FaPhone className="contact-icon" />
          <a href="tel:+12345678900" className="contact-text">+1-234-567-8900</a>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:email@example.com" className="contact-text">email@example.com</a>
          <FaGithub className="contact-icon" />
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="contact-text">yourusername</a>
          <FaLinkedin className="contact-icon" />
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="contact-text">yourusername</a>
        </div>


        <div className="contact-image-container">
          <img src={imagePath} alt="Your Alt Text" className="contact-image" />
        </div>

    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contacts");