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
          <img src={Mtech} alt="Mtech"/>
          <p>mtech.devtech@gmail.com</p>
          <SocialMedia Whatsapp="https://wa.me/5519994300555"/>
        </div> 
      </div>
      <div className="container_footer-content">
        <div className="container_footer-title">
          <span>Em parceria com</span>
        </div>
        <div className="container_footer-data">
          <img src={PubliqueMais} alt="Publique +"/>
          <p>email@email.com</p>
          <SocialMedia Whatsapp="https://wa.me/5519992941366" facebook="https://www.facebook.com/profile.php?id=100072929070585"/>
        </div> 
      </div>
    </div>
  )
}

export default Footer