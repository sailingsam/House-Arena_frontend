import React from "react";
import "./MyProfileCard.css";
import profiledp from "../../assets/profiledp.png";

function MyProfileCard() {
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div class="profile-image">
            <img src={profiledp} alt="" className="rounded-full" />
          </div>
          <div className="text-gray-300 mb-3">Developer</div>
          <div class="name">Saksham Jain</div>
          <div className="text-gray-300">Batch of '27 SST</div>
        </div>
        <div class="flip-card-back flex items-center justify-center">
          <div class="Description">
            <p class="description">
              CS UnderGrad at Scaler School of Technology, specializing
              in <br />Java & full-stack development.
              <br />
              Beyond tech, I've successfully grown a Facebook page to 93k followers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileCard;
