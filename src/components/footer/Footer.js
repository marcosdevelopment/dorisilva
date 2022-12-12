import "./Footer.Module.css"
import Mtech from "../../img/mtech.png"
import PubliqueMais from "../../img/publiquemais.png"
import SocialMedia from "../socialmedia/SocialMedia"

const Footer = () => {
  return (
    <div className="container_footer">
      <div className="container_footer-content">
        <div className="container_footer-title">
          <span>Desenvolvido por</span>
        </div>
        <div className="container_footer-data">
          <p>imagem</p>
          <p>email@email.com</p>
          <p>teste</p>
        </div> 
      </div>
      <div className="container_footer-content">
        <div className="container_footer-title">
          <span>Em parceria com</span>
        </div>
        <div className="container_footer-data">
          <p>imagem</p>
          <p>email@email.com</p>
          <p>teste</p>
        </div> 
      </div>
    </div>
  )
}

export default Footer