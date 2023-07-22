import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

const star = <FontAwesomeIcon icon={faStar} />

const StarsScaleLike = (props) => {
  const scaleRating = props.rating
  const levelOfStars = [1, 2, 3, 4, 5]
  const numberStarsLike = levelOfStars.map(number => scaleRating >= number ? <i key={number.toString()}>{ star }</i>
        : <i key={number.toString()}>{ star }</i>)

  return (
    <div className='stars'>
      { numberStarsLike }
    </div>
  )
}
export default StarsScaleLike