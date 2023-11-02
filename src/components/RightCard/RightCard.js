import React from 'react'
import '../RightCard/RightCard.css'
import pro1 from '../../Assets/photo/pexels-anastasia-shuraeva-4406721.png'
import pro2 from '../../Assets/photo/pexels-andrea-piacquadio-3771118.png'
import pro3 from '../../Assets/photo/pexels-antoni-shkraba-4442005.png'
import pro4 from '../../Assets/photo/pexels-anastasia-shuraeva-4406721.png'
const RightCard = () => {
  return (
      <div className='right-main '>
        <div className='right-card one'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro1} rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>
        <div className='right-card two'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro2}  rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>


        <div className='right-card three'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro3}  rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>


        <div className='right-card four'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro1}  rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>


        <div className='right-card five'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro1}  rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>

        <div className='right-card six'>
          <div className='right-profile'>
            <div className='right-p'><img src={pro1}  rel='not'/></div>
            <div className='right-p-text'>
              <h6>Thomas Edward</h6>
              <p>@thewildwithyou</p>
            </div>
          </div>
        </div>

      </div>
  
  )
}

export default RightCard