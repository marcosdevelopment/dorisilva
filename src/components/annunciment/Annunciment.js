import './Annunciment.Module.css'
import SocialMedia from '../socialmedia/SocialMedia'
import Happy from '../../img/happy3.jpeg'

const Annunciment = () => {
  return (
    <div className="container_annunciment">
      <div className="annunciment_text">   
        <h2>Venha adquirir o imóvel dos seus sonhos!</h2>
        <p>Falei conosco, temos um imóvel perfeito para você!</p>
        <SocialMedia/>
      </div>
      <img src={Happy} alt="" />
    </div>
  )
}

export default Annunciment