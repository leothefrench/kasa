import { NavLink, useParams} from 'react-router-dom'
import housings from '../../datas/datasHousings'
import '../../styles/aboutContent.scss'
import Gallery  from  '../layout/Gallery'
import StarsScale from './StarsScale'
import Collapse from '../layout/Collapse'

const HousingContent = () => {

  const { id } = useParams()
  const housing = housings.find(housing => housing.id === id)
  console.log(housing);

  const tagsInformation = housing.tags.map((tag, index) => (
    <p key={ index }>{ tag }</p>))

  return (

    <section className='housing-section' key={housing.id}>
      <Gallery img={housing.pictures}/>
      <header className='header-housing'>
        <div className='header-housing__info'>
          <h1 className='header-housing__info__title'>{ housing.title}</h1>
          <h2 className='header-housing__info__subtitle'>{ housing.location }</h2>
          <div className="header-housing__info__tags">
            { tagsInformation }
          </div>

          <div className='header-housing__host'>
            <div className='header-housing__host__info'>
              <p className='header-housing__host__info__name'>{housing.host.name}</p>
              <img src={housing.host.picture} alt="host" className='header-housing__host__info__picture'/>
            </div>
            <StarsScale scaleRating={housing.rating}/>
          </div>
        </div>     
      </header>
      <div className="housing-section__collapses">
        <div className="housing-section__collapses__content">
          <Collapse title='Description' content='description'/>
        </div>
        <div className="housing-section__collapses__content">
          <Collapse title='Équipements' content={housing.equipments.map((equipment, index) => (
            <ul key={index}>
              <li>{equipment}</li>
            </ul>
          ))} />
        </div>
      </div>

    </section>
  )
}
export default HousingContent



