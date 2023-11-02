import React from "react";
import "../MiddleComp/MiddleBox.css";
import PaintingCard from "../PaintingCard/PaintingCard";
import allImports from "../export";
const MiddleBox = () => {
  return (
    <div className="middle-main">
      <div className="middle-card">
        <div className="middle-profile">
          <div className="profile">
            <img src={allImports.profile} alt=""/>
            <div className="user-name">
              <h6>Lara Leones</h6>
              <p>@thewallart</p>
            </div>
          </div>
          <div className="three-dot">
            <allImports.BsThreeDotsVertical />
          </div>
        </div>
        <div className="post-div">
          <div className="post-text">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Read
              More
            </p>
          </div>

          <div className="post-photo">
            <img className="post-image" src={allImports.post} alt=""/>
          </div>
        </div>
        <div className="activity-sec">
          <div className="like-d">
            <div>
              <allImports.AiOutlineHeart className="like" />
            </div>
            <div>
              <span>9.8k</span>
            </div>
          </div>
          <div className="like-d">
            <div>
              <allImports.FaRegComment className="comment" />
            </div>
            <div>
              <span>8.6k</span>
            </div>
          </div>
          <div className="like-d">
            <div>
              <allImports.PiShareFatBold className="share" />
            </div>
            <div>
              <span>7.2k</span>
            </div>
          </div>
        </div>
      </div>

      {/* // Second Card */}

      <div className="middle-card">
        <div className="middle-profile">
          <div className="profile">
            <img src={allImports.profile2}  alt=""/>
            <div className="user-name">
              <h6>Thomas J.</h6>
              <p>@thecustomcreater</p>
            </div>
          </div>
          <div className="three-dot">
            <allImports.BsThreeDotsVertical />
          </div>
        </div >
        <div className="post-div">
        <div className="post-text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Read More
          </p>
        </div>
        <div className="post-photo">
          <img className="post-image" src={allImports.post2}  alt=""/>
        </div>
        </div>
        <div className="activity-sec">
          <div className="like-d">
            <div>
              <allImports.AiOutlineHeart className="like" />
            </div>
            <div>
              <span>9.8k</span>
            </div>
          </div>
          <div className="like-d">
            <div>
              <allImports.FaRegComment className="comment" />
            </div>
            <div>
              <span>8.6k</span>
            </div>
          </div>
          <div className="like-d">
            <div>
              <allImports.PiShareFatBold className="share" />
            </div>
            <div>
              <span>7.2k</span>
            </div>
          </div>

          {/* <div className="like-d"><allImports.AiOutlineHeart className="like"/><div className="span"><span >9.8k</span></div></div>
          <div className="comment-d"><allImports.FaRegComment className="comment"/><div className="span"><span >8.6k</span></div></div>
          <div className="share"><allImports.PiShareFatBold className="share"/><div className="span"><span >7.2k</span></div></div> */}
        </div>
      </div>

      <PaintingCard />
    </div>
  );
};

export default MiddleBox;
