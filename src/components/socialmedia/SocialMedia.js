import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa" 

import "./socialMedia.Module.css"

const SocialMedia = ({Whatsapp, instagram, facebook}) => {
  return (
    <div className="container_socialmedia" >
      <a href={facebook} rel="noreferrer" target="_blank"><FaFacebook className="facebook"/></a>
      <a href={instagram} rel="noreferrer" target="_blank"><FaInstagram className="instagram"/></a>
      <a href={Whatsapp} rel="noreferrer" target="_blank"><FaWhatsapp className="whats"/></a>
    </div>
  )
}

export default SocialMedia