import Collapse from '../components/Collapse'
import { aboutSection } from '../datas/about'
// import '../fontawesome';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function AboutMe() {
  return (
    <main>
      {/* <div>
      <FontAwesomeIcon icon={faHome} />
    </div> */}
     {/* {aboutSection.whoami.map(({ icon, title, content }) => ( */}
     {aboutSection.whoami.map(({icon, title, content }) => (
        // <Collapse key={title} title={title}	content={content} collapseClass="collapse about__" collapseType="text" />
        <Collapse key={title} icon={icon} title={title}	content={content} />
        // <Collapse key={title} title={title}	content={content} />
      ))}  
    </main>
  )
}

export default AboutMe