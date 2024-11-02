import "./MyProfileCard.css";
import profiledp from "../../assets/profiledp.webp";

function MyProfileCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="profile-image">
            <img src={profiledp} alt="saksham jain" className="rounded-full" />
          </div>
          <div className="text-gray-300 mb-3">Developer</div>
          <div className="name">Saksham Jain</div>
          <div className="text-gray-300">Batch of &apos;27 SST</div>
        </div>
        <div className="flip-card-back flex items-center justify-center">
          <div className="Description">
            <p className="description">
              CS UnderGrad at Scaler School of Technology, specializing
              in <br />Java & full-stack development.
              <br />
              Beyond tech, I&apos;ve successfully grown a Facebook page to 93k followers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileCard;
