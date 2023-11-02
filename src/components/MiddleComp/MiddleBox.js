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
            <img src={allImports.profile} rel="not" />
            <div>
              <h6>Lara Leones</h6>
              <p>@thewallart</p>
            </div>
          </div>
          <div className="three-dot">
            <allImports.BsThreeDotsVertical />
          </div>
        </div>
        <div className="post-text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Read More
          </p>
        </div>
        <div className="post-photo">
          <img className="post-image" src={allImports.post} />
        </div>
        <div className="post-like-and-share">
          <div className="like"></div>
          <div className="comment"></div>
          <div className="share"></div>
        </div>
      </div>

      {/* // Second Card */}

      <div className="middle-card">
        <div className="middle-profile">
          <div className="profile">
            <img  src={allImports.profile2} />
            <div>
              <h6>Thomas J.</h6>
              <p>@thecustomcreater</p>
            </div>
          </div>
          <div className="three-dot">
            <allImports.BsThreeDotsVertical />
          </div>
        </div>
        <div className="post-text">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. Read More
          </p>
        </div>
        <div className="post-photo">
          <img className="post-image" src={allImports.post2} />
        </div>
        <div className="post-like-and-share">
          <div className="like"></div>
          <div className="comment"></div>
          <div className="share"></div>
        </div>
      </div>

      <PaintingCard />
    </div>
  );
};

export default MiddleBox;
