import { useState } from 'react'
import { projectsData } from '../../data/portfolioData'
import ProjectCard from './ProjectCard'
import './Projects.css'

const categories = ['all', 'frontend', 'backend']

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory)

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3)

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one was built to solve a real problem or explore new technologies.
        </p>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`projects__filter ${activeCategory === category ? 'projects__filter--active' : ''}`}
              onClick={() => {
                setActiveCategory(category)
                setShowAll(false)
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length > 3 && !showAll && (
          <div className="projects__more">
            <button className="btn btn-outline" onClick={() => setShowAll(true)}>
              Show More Projects
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <p className="projects__empty">No projects found in this category yet.</p>
        )}
      </div>
    </section>
  )
}

export default Projects
