import {useState, useEffect, useRef} from "react"
import {motion} from 'framer-motion'
import PropertiesData from '../../data/PropertiesData'
import "./Carousel.Module.css"

const Carousel = ({id, img}) => {
  const carousel = useRef()

  const [width, setWidth] = useState(0)

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth (carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  })

  const selectImg = () => {
    const filtered = PropertiesData.filter(propertie => propertie.id === id)
    img = filtered.map(filteredImg => filteredImg.img)
    return img
  }

 const imgFiltered = selectImg()

  return (
    <div className="container_carousel">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div className='carousel_inner'
        drag="x"
        dragConstraints={{ right: 0, left: - width}}
        initial={{x: 300}}
        animate={{x: 0}}
        transition={{duration: 0.8}}
        >
         {imgFiltered[0].map((image, id) => (
          <motion.div className="carousel_item" key={id}>
            <img src={image.img} alt={image.alt} />
          </motion.div>
         ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Carousel 