import "./PropertyItem.Module.css"
import {FaWhatsapp} from "react-icons/fa"
import {FaPlusCircle} from "react-icons/fa"

const PropertyItem = () => {
  return (
    <div className="container_propertieItem">
      <img src="https://i.ibb.co/S6cn8Mc/Jardim-Paulista-1.jpg" alt="imagem"/>
      <h4>CASA</h4>
      <div className="container_propertieItem-village">
        <p>Jardim Paulista - Casa Branca - São Paulo</p>
      </div>
      <hr />
      <div className="container_propertieItem-atributes">
        <p>Comodos: 04</p>
        <p>Dormitórios: 02</p>
        <p>Banheiros: 01</p>
      </div>
      <hr />
      <div className="container_propertieItem-price">
        <p><strong>R$ 300,000</strong></p>
      </div>
      <div className="container_propertieItem-buttons">
        <button className="know"><FaPlusCircle/> Informações</button>
        <button className="whats">WhatsAPP <FaWhatsapp/></button>
      </div> 
    </div>
  )
}

export default PropertyItem