import './ProfileHeading.css'; 

interface ProfileHeaderProps {
  username: string;
  profilePic: string;
}

function ProfileHeader({ username, profilePic }: ProfileHeaderProps) {
  return (
    <div className="profile-header">
      <div className="profile-pic-container">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="header-info">
        <h2 className="username">{username}</h2>
      </div>
    </div>
  );
}

export default ProfileHeader;