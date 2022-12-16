import "./PropertyItem.Module.css"
import {FaWhatsapp} from "react-icons/fa"
import {FaPlusCircle} from "react-icons/fa"
import { useState } from "react"

const PropertyItem = ({id, mainImg ,type, district, city, state, rooms, bedrooms, restroom, price, idPropertie}) => {
  const [idCard, setIdCard] = useState()

  idPropertie(idCard)
  return (
    <div className="container_propertieItem">
      <img src={mainImg} alt="imagem"/>
      <h4>{type}</h4>
      <div className="container_propertieItem-village">
        <p>{district} - {city} - {state} - {idCard}</p>
      </div>
      <hr />
      <div className="container_propertieItem-atributes">
        <p>Comodos: {rooms}</p>
        <p>Dormitórios: {bedrooms}</p>
        <p>Banheiros: {restroom}</p>
      </div>
      <hr />
      <div className="container_propertieItem-price">
        <p><strong>R$ {price}</strong></p>
      </div>
      <div className="container_propertieItem-buttons">
        <button className="know" onClick={() => setIdCard(id)}><FaPlusCircle/> Informações</button>
        <button className="whats">WhatsAPP <FaWhatsapp/></button>
      </div> 
    </div>
  )
}

export default PropertyItem