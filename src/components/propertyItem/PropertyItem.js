import "./PropertyItem.Module.css"
import {FaWhatsapp} from "react-icons/fa"

const PropertyItem = () => {
  return (
    <div className="container_propertieItem">
      <img src="https://i.ibb.co/S6cn8Mc/Jardim-Paulista-1.jpg" alt="imagem"/>
      <div className="container_propertieItem-atributes">
        <p>Comodos: 04</p>
        <p>Dormitórios: 02</p>
        <p>Banheiros: 01</p>
        <p>A. Aberta: Sim</p>
      </div>
      <hr />
      <div className="container_propertieItem-village">
        <p>Jardim Paulista - Casa Branca - São Paulo</p>
      </div>
      <hr />
      <div className="container_propertieItem-price">
        <p>R$ 300,000</p>
      </div>
      <div className="container_propertieItem-button">
        <button className="knowmore"><p> Saiba mais &gt; &gt; </p></button>
        <button className="whats"><p><FaWhatsapp/></p></button>
      </div>
    </div>
  )
}

export default PropertyItem