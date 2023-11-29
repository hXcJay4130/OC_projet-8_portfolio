/* eslint-disable react/prop-types */
// import ActiveStar from '../assets/star-active.png'
// import InactiveStar from '../assets/star-inactive.png'
import '../styles/rating.scss'

function RatingSkills({ scaleValue }) {
	const range = [1, 2, 3, 4, 5]
	// const scaleType =
		// ratingType === 'activeSkill' ? (
		// 	// <img src={ActiveStar} alt='activeStar-icon' />
		// 	<div className='activeSkill'></div>
		// ) : (
		// 	// <img src={InactiveStar} alt='inactiveStar-icon' />
		// 	<div className='inactiveSkill'></div>
		// )
	if (scaleValue != "0") {
		return (
			<ul className = "rating__list">
				{range.map((rangeElem) =>
					scaleValue >= rangeElem ? (
						<li key={rangeElem.toString()} className = "rating__item"><div className='activeSkill'></div></li>
					) : <li key={rangeElem.toString()} className = "rating__item"><div className='inactiveSkill'></div></li>
				)}
			</ul>
		)
	}
}

export default RatingSkills
