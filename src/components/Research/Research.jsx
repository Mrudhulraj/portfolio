import { researchData } from '../../data/portfolioData'
import './Research.css'

const Research = () => {
  return (
    <section id="research" className="research section">
      <div className="container">
        <h2 className="section-title">Research</h2>
        <p className="section-subtitle">Selected research projects and publications</p>
        <div className="research__list">
          {researchData.map((item, idx) => (
            <div key={idx} className="research__item">
              <h3 className="research__title">{item.title}</h3>
              <p className="research__desc">{item.description}</p>
              {item.link && (
                <a href={item.link} className="research__link" target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research
