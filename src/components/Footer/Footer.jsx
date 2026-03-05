import { personalInfo, navLinks } from '../../data/portfolioData'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => handleNavClick(e, '#home')}>
              <span className="footer__logo-bracket">&lt;</span>
              {personalInfo.name.split(' ')[0]}
              <span className="footer__logo-bracket"> /&gt;</span>
            </a>
            <p className="footer__description">{personalInfo.description}</p>
          </div>

          <div className="footer__links">
            <h4 className="footer__links-title">Quick Links</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__social">
            <h4 className="footer__links-title">Connect</h4>
            <div className="footer__social-links">
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} {personalInfo.name}. Built with{' '}
            <FaHeart className="footer__heart" /> and React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
