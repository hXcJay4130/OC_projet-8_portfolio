// import { useEffect, useState } from "react"
import ProjectCard from './ProjectCard'
import '../styles/projectList.scss'
import { projectList } from '../datas/projets'

function ProjectList() {

	return (
		<section className="projectlist">
			<ul className="projectlist__list">
				{projectList.map(({ id, cover, title, tags, frontorback }) => (
					<ProjectCard
						id= {id}
						key={id}
						cover={cover}
						title={title}
						frontorback={frontorback}
						tags={tags}
					/>
				))}
			</ul>
		</section>
	)
}
export default ProjectList