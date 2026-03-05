import { personalInfo } from '../../data/portfolioData'
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToProjects = (e) => {
    e.preventDefault()
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__bg">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
      </div>

      <div className="hero__container container">
        <div className="hero__content">
          <p className="hero__greeting">
            <span className="hero__wave">👋</span> Hi there, I'm
          </p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <h2 className="hero__title">{personalInfo.title}</h2>
          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
              View My Work
              <FaArrowDown />
            </a>
            <a href="#contact" className="btn btn-outline" onClick={scrollToContact}>
              Get In Touch
            </a>
          </div>

          <div className="hero__socials">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href={personalInfo.socialLinks.twitter}
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="Twitter"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__code-block">
            <div className="hero__code-header">
              <span className="hero__code-dot hero__code-dot--red" />
              <span className="hero__code-dot hero__code-dot--yellow" />
              <span className="hero__code-dot hero__code-dot--green" />
              <span className="hero__code-filename">developer.js</span>
            </div>
            <pre className="hero__code-content">
              <code>{`const developer = {
  name: "${personalInfo.name}",
  role: "${personalInfo.title}",
  skills: ["React", "Node.js",
           "TypeScript", "Python"],
  passion: "Building amazing
            web experiences",
  available: true
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <a href="#about" onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}>
          <span>Scroll Down</span>
          <FaArrowDown className="hero__scroll-arrow" />
        </a>
      </div>
    </section>
  )
}

export default Hero
