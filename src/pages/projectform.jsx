import { useParams } from "react-router-dom"
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import Profile from '../components/Profile'
import '../styles/projectForm.scss'
import { projectList } from '../datas/projets'


function ProjectForm() {

  const {projectId} = useParams()
  const filteredData = projectList.filter(flat => flat.id === projectId)
  const projectData = filteredData.length === 0 ? "" : filteredData[0]
  
  return (
    <main>
      <Profile projectObject={projectData} />
      <section className="projectFormSection">
        <Collapse title="Contexte" content={projectData.description} collapseType="text" collapseClass="" />
      </section>
      <Slideshow projectImg={projectData.pictures} />
      <section className="projectFormSection">
        <Collapse title="Compétences acquises" content={projectData.skills} collapseType="list" collapseClass="" />
      </section>
      
    </main>
  );
  
}

export default ProjectForm