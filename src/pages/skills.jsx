import Collapse from '../components/Collapse'
import { aboutSection } from '../datas/about'
// import RatingSkills from '../components/RatingSkills'

function AboutMe() {
  const filteredData = aboutSection.skills;
  const devSkills = filteredData.filter(s => s.type == "dev");
  const ingSkills = filteredData.filter(s => s.type == "ing");
  return (
    <main>
      <section className='projectFormSection'>
        <section className='projectFormSection__left'>
          {devSkills.map(({ title, content }) => (
              <Collapse key={title} title={title}	content={content} />
            ))}  
        </section>
        <section className='projectFormSection__right'>
          {ingSkills.map(({ title, content }) => (
              <Collapse key={title} title={title}	content={content} />
            ))} 
        </section>
      </section>
    </main>
  )
}

export default AboutMe