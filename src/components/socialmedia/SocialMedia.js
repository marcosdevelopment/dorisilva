import {FaFacebook} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaWhatsapp} from "react-icons/fa" 

import "./socialMedia.Module.css"

const SocialMedia = () => {
  return (
    <div className="container_socialmedia" >
      <FaFacebook className="facebook"/>
      <FaInstagram className="instagram"/>
      <FaWhatsapp className="whats"/>
    </div>
  )
}

export default SocialMedia