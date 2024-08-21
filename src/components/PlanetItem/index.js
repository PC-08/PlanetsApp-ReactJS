// Write your code here

import './index.css'

const PlanetItem = props => {
  const {name, imageUrl, description} = props

  return (
    <div className="p-con">
      <img className="p-img" alt={`planet ${name}`} src={imageUrl} />
      <h1 className="p-head">{name}</h1>
      <p className="p-para">{description}</p>
    </div>
  )
}

export default PlanetItem
