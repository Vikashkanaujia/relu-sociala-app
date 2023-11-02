import React from 'react'
import '../PaintingCard/PaintingCard.css'
import {AiFillStar} from 'react-icons/ai'
import img1 from '../../Assets/photo/Image 39.png'
import img2 from '../../Assets/photo/Image 40.png'
import img3 from '../../Assets/photo/pexels-max-vakhtbovych-6782342.png'
import img4 from '../../Assets/photo/pexels-pixabay-164455.png'
const PaintingCard = () => {
  return (
    <div className='painting-main'>
      <div className='painting-card'>
        <div className='painting-img'><img src={img3} /></div>
        <div className='painting-text'>Modern Wall Decor Framed Painting</div>
        <div className='painting-rating'>
          <div className='painting-price'>$199.99</div>
          <div className='painting-star'><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></div>
        </div>
      </div>
      <div className='painting-card'>
        <div className='painting-img'><img src={img2} /></div>
        <div className='painting-text'>Modern Wall Decor Framed Painting</div>
        <div className='painting-rating'>
          <div className='painting-price'>$199.99</div>
          <div className='painting-star'><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></div>
        </div>
      </div>
      <div className='painting-card'>
        <div className='painting-img'><img src={img1} /></div>
        <div className='painting-text'>Modern Wall Decor Framed Painting</div>
        <div className='painting-rating'>
          <div className='painting-price'>$199.99</div>
          <div className='painting-star'><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></div>
        </div>
      </div>
      <div className='painting-card'>
        <div className='painting-img'><img src={img4} /></div>
        <div className='painting-text'>Modern Wall Decor Framed Painting</div>
        <div className='painting-rating'>
          <div className='painting-price'>$199.99</div>
          <div className='painting-star'><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/><AiFillStar className='star'/></div>
        </div>
      </div>

    </div>
  )
}

export default PaintingCard