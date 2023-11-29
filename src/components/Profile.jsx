/* eslint-disable react/prop-types */
// import RatingScale from './RatingScale'
import '../styles/projectForm.scss'

function Profile({projectObject}) {
    
    return (
        <section className="projectFormSection">
                <div className='projectFormSection__left'>
                    <h1>{projectObject.title}</h1>
                    <p>{projectObject.location}</p>
                    
                </div>
                <div className='projectFormSection__rigth'>
                <ul className="tagsList">
                    <li key={projectObject.link} className="tagType"><a href={projectObject.link}>Github</a></li>
                    <li key={projectObject.frontorback} className="tagType">{projectObject.frontorback}</li>
                </ul>
                <ul className="tagsList">
                    {projectObject.tags.map((tag) => (
                        <li key={tag} className="tagSkills">{tag}</li>
                    ))}
                </ul>
                    {/* <div className="profil__rating">
                        <RatingScale ratingType='activeStar' scaleValue={projectObject.rating} />
                        <RatingScale ratingType='inactiveStar' scaleValue={5-(projectObject.rating)} />
                    </div> */}
                </div>
            </section>
    )
}

export default Profile