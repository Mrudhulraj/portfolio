import { aboutData, personalInfo } from '../../data/portfolioData'
import { FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>

        <div className="about__grid">
          <div className="about__image-wrapper">
            <div className="about__image-container">
              {aboutData.image ? (
                <img src={aboutData.image} alt={personalInfo.name} className="about__image" />
              ) : (
                <div className="about__image-placeholder">
                  <span>{personalInfo.name.charAt(0)}</span>
                </div>
              )}
              <div className="about__image-decoration" />
            </div>

            <div className="about__info-cards">
              <div className="about__info-card">
                <FaMapMarkerAlt className="about__info-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__info-card">
                <FaBriefcase className="about__info-icon" />
                <span>{personalInfo.title}</span>
              </div>
              <div className="about__info-card">
                <FaEnvelope className="about__info-icon" />
                <span>{personalInfo.email}</span>
              </div>
            </div>
          </div>

          <div className="about__content">
            <div className="about__text">
              {aboutData.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="about__highlights">
              {aboutData.highlights.map((item, index) => (
                <div key={index} className="about__highlight">
                  <span className="about__highlight-value">{item.value}</span>
                  <span className="about__highlight-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
