// Write your code here
import Slider from 'react-slick'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div data-testid="planets" className="bg">
      <h1 className="head">PLANETS</h1>
      <div className="c-con">
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem
              key={eachPlanet.id}
              name={eachPlanet.name}
              imageUrl={eachPlanet.imageUrl}
              description={eachPlanet.description}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
