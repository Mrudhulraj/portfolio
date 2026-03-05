import { skillsData } from '../../data/portfolioData'
import './Skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          The tools and technologies I use to bring ideas to life
        </p>

        <div className="skills__grid">
          {skillsData.categories.map((category, catIndex) => (
            <div
              key={category.title}
              className="skills__category"
              style={{ animationDelay: `${catIndex * 0.15}s` }}
            >
              <h3 className="skills__category-title">{category.title}</h3>
              <div className="skills__list">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className="skills__item"
                      style={{ animationDelay: `${(catIndex * 0.15) + (index * 0.05)}s` }}
                    >
                      <div className="skills__item-header">
                        <div className="skills__item-info">
                          <Icon className="skills__item-icon" />
                          <span className="skills__item-name">{skill.name}</span>
                        </div>
                        <span className="skills__item-level">{skill.level}%</span>
                      </div>
                      <div className="skills__progress-bar">
                        <div
                          className="skills__progress-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
