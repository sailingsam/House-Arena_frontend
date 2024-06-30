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
        <div class="flip-card-back">
          <div class="Description">
            <p class="description">
              First-year CS student at Scaler School of Technology, specializing
              in Java, full-stack development, and Flutter.
              <br />
              I'm dedicated to learning new tech and driving innovation. Beyond
              tech, I've successfully grown a Facebook page to 93k followers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileCard;
