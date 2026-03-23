import { openSourceData } from '../../data/portfolioData'
import './OpenSource.css'

const OpenSource = () => {
  return (
    <section id="opensource" className="opensource section">
      <div className="container">
        <h2 className="section-title">Open Source Contributions</h2>
        <p className="section-subtitle">Communities contributed to: Redhat Inference LLM-D Framework</p>
        <div className="opensource__list">
          {openSourceData.map((item, idx) => (
            <div key={idx} className="opensource__item">
              <h3 className="opensource__project">{item.project}</h3>
              <p className="opensource__desc">{item.description}</p>
              {item.link && (
                <a href={item.link} className="opensource__link" target="_blank" rel="noopener noreferrer">
                  View Contribution
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OpenSource
