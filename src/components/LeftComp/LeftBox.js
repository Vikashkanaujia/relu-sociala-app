import React from "react";
import "../LeftComp/LeftBox.css";
import { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import {
  AiOutlineHome,
  AiOutlineHeart,
  AiOutlineSetting,
} from "react-icons/ai";
import { BiConversation, BiLogOutCircle } from "react-icons/bi";
import { BsWallet } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
const LeftBox = () => {
  const navigate = useNavigate();
  const [userauth, setUserAuth] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserAuth(user);
      } else {
        setUserAuth("");
      }
    });
  });
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUserAuth("");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="left-main">
      <div className="left-navigation">
        <div className="left-logo active">
          <div>
            <Link>
              <AiOutlineHome className="logo" />
            </Link>
          </div>
          <p>Home</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <IoNotificationsOutline className="logo" />
            </Link>
          </div>
          <p>Notification</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <AiOutlineHeart className="logo" />
            </Link>
          </div>
          <p>Shop</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <BiConversation className="logo" />
            </Link>
          </div>
          <p>Conversation</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <BsWallet className="logo" />
            </Link>
          </div>
          <p>Wallet</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <CgProfile className="logo" />
            </Link>
          </div>
          <p>Subscription</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <CgProfile className="logo" />
            </Link>
          </div>
          <p>My Profile</p>
        </div>
        <div className="left-logo">
          <div>
            <Link>
              <AiOutlineSetting className="logo" />
            </Link>
          </div>
          <p>Setting</p>
        </div>
      </div>
      <div className="logout">
        <div onClick={logout} className="left-logo">
          <div>
            <Link>
              <BiLogOutCircle className="logo1" />
            </Link>
          </div>
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBox;
