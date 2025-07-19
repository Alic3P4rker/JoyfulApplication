import ProfileHeader from './ProfileHeader';
import ProfileStats from './ProfileStats';

import './ProfileHeading.css'; 

function ProfileHeading() {
  const profileData = {
    username: 'FriendSh4pe',
    profilePic: 'public/vite.svg', 
    posts: 0,
    followers: 95,
    following: 330,
  };

  return (
    <div className="profile-container">
      <ProfileHeader
        username={profileData.username}
        profilePic={profileData.profilePic}
      />
      <ProfileStats
        posts={profileData.posts}
        followers={profileData.followers}
        following={profileData.following}
      />
    </div>
  );
}

export default ProfileHeading;