import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa'
import './ProjectCard.css'

const ProjectCard = ({ project, index }) => {
  return (
    <article
      className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-card__image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="project-card__image-placeholder">
            <FaFolder size={48} />
          </div>
        )}
        <div className="project-card__overlay">
          <div className="project-card__links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                aria-label="View source code"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card__link"
                aria-label="View live site"
              >
                <FaExternalLinkAlt size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__header">
          <h3 className="project-card__title">{project.title}</h3>
          {project.featured && <span className="project-card__badge">Featured</span>}
        </div>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-card__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
