import Creci from "../../components/creci/Creci"
import {useState} from "react"
import "./Properties.Module.css"
import PropertiesData from "../../data/PropertiesData"
import PropertyItem from "../../components/propertyItem/PropertyItem"

const Properties = () => {
 const [city, setCity] = useState("Todas")
//  const [price, setPrice] = useState(0)

  const indexReverse = () => {
    let propertiesFilter = PropertiesData.filter(Properties => Properties.status === true )
    return propertiesFilter.reverse()
  }

  const cityFilter = () => {
    if (city === "Todas") {
      return indexReverse()
    }else{
      let propertieCity = indexReverse().filter(properties => properties.city === city )
      return propertieCity
    }
  }
  return (
    <div className="container_propertie">
      <h2 className='title'>Escolha seu imóvel!</h2>
      <p className='subtitle'>Escolha um imóvel de sua prefêrencia e que caiba no seu bolso!</p>
      <div className="select">
        <select className="select_option" onChange={(e) => setCity(e.target.value)} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled selected>Escolha uma cidade</option>
          <option value="Todas">Todas</option>
          <option value="Casa Branca">Casa Branca</option>
          <option value="Pirassununga">Pirassununga</option>
        </select>
        {/* <select className="select_option" onChange={(e) => setPrice(e.target.value)} defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled selected>Ordenar por</option>
          <option value="Maior preço">Maior Preço</option>
          <option value="Menor preço">Menor Preço</option>
        </select> */}
      </div>
      <div className="propertie_item">
        {cityFilter().map((propertie,id) => (
        <PropertyItem
            key = {id}
            id = {propertie.id}
            mainImg = {propertie.mainImg.img}
            type = {propertie.type}
            district = {propertie.district}
            city = {propertie.city}
            state = {propertie.state}
            rooms = {propertie.rooms}
            bedrooms = {propertie.bedrooms}
            restroom = {propertie.restroom}
            price = {propertie.price}
          />
        ))}
      </div>
      <Creci/>
    </div>
  ) 
}

export default Properties