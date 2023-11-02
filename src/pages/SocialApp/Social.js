import React from 'react'
import LeftBox from "../../components/LeftComp/LeftBox"
import RightBox from "../../components/RightComp/RightBox"
import Middle from "../../components/MiddleComp/MiddleBox"
import Navbar from '../../components/Navbar/Navbar'
import "../SocialApp/Social.css"
const Social = () => {
  return (
    <div className='main'>
  
      <Navbar />
      
      
      <div className='main-body'>

        <div className='left-section'>
          <LeftBox />
        </div>
        <div className='middle-section'>
          <Middle />
        </div>
        <div className='right-section'>
          <RightBox />
        </div>
      </div>

    </div>

  )
}

export default Social