import Collapse from '../components/Collapse'
import { aboutSection } from '../datas/about'

function AboutMe() {
  return (
    <main>
     {aboutSection.scholarship.map(({ title, content }) => (
        <Collapse key={title} title={title}	content={content} />
      ))}  
    </main>
  )
}

export default AboutMe