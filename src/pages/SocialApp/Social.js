import React, { useEffect } from "react";
import LeftBox from "../../components/LeftComp/LeftBox";
import RightBox from "../../components/RightComp/RightBox";
import Middle from "../../components/MiddleComp/MiddleBox";
import Navbar from "../../components/Navbar/Navbar";
import "../SocialApp/Social.css";
import { useNavigate } from "react-router-dom";
import {auth} from "../../Firebase"
const Social = (props) => {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!props.user){
  //     navigate('/login')
  //   }
  // },[])
  // console.log(props.user);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if(!user) {
        navigate('/')
      }
    });
  });

  return (
    <div className="main">
      <Navbar />

      <div className="main-body">
        <div className="left-section">
          <LeftBox />
        </div>
        <div className="middle-section">
          <Middle />
        </div>
        <div className="right-section">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default Social;
