/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

function ProjectCard({ id, title, cover, tags, frontorback }) {

    return (
        <li key={id} className='card'>
            <Link to={`/project/${id}`}>
                <h2 className="card__text">{title}</h2>
                <img className='card__cover' src={cover} alt={`${title} cover`} />
                <div className='card__tags'>
                    <ul className="tagsList">
                        <li key={frontorback} className="tagType">{frontorback}</li>
                        {tags.map((tag) => (
                            <li key={tag} className="tagSkills">{tag}</li>
                        ))}
                    </ul>
                </div>
            </Link>
        </li>
	)
}

export default ProjectCard