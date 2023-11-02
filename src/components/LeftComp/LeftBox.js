import React from 'react'
import '../LeftComp/LeftBox.css';
import {Link} from 'react-router-dom';
import { IoNotificationsOutline} from "react-icons/io5";
import { AiOutlineHome,AiOutlineHeart,AiOutlineSetting} from "react-icons/ai";
import {BiConversation,BiLogOutCircle} from "react-icons/bi";
import {BsWallet} from "react-icons/bs";
import {CgProfile} from 'react-icons/cg';
const LeftBox = () => {
  return (
    <div className='left-main'>
      <div className='left-navigation'>
        <div className='left-logo'><div><Link>
      <AiOutlineHome/></Link></div><p>Home</p></div>
        <div className='left-logo'><div><Link><IoNotificationsOutline/></Link></div><p>Notification</p></div>
        <div className='left-logo'><div><Link><AiOutlineHeart/></Link></div><p>Shop</p></div>
        <div className='left-logo'><div><Link><BiConversation/></Link></div><p>Conversation</p></div>
        <div className='left-logo'><div><Link><BsWallet/></Link></div><p>Wallet</p></div>
        <div className='left-logo'><div><Link><CgProfile/></Link></div><p>Subscription</p></div>
        <div className='left-logo'><div><Link><CgProfile/></Link></div><p>My Profile</p></div>
        <div className='left-logo'><div><Link><AiOutlineSetting/></Link></div><p>Setting</p></div>

      </div>
      <div className='logout'>
      <div className='left-logo'><div><Link><BiLogOutCircle/></Link></div><p>Log out</p></div>

      </div>
    </div>
  )
}

export default LeftBox