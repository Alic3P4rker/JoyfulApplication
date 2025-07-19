import React from 'react';
import './ProfileHeading.css';

interface ProfileStatsProps {
  posts: number;
  followers: number;
  following: number;
}

function ProfileStats({ posts, followers, following }: ProfileStatsProps) {
  const StatItem: React.FC<{ count: number; label: string }> = ({ count, label }) => (
    <div className="stat-item">
      <span className="stat-count">{count}</span>
      <span className="stat-label">{label}</span>
    </div>
  );

  return (
    <div className="profile-stats">
      <StatItem count={posts} label="posts" />
      <StatItem count={followers} label="friends" />
      <StatItem count={following} label="following" />
    </div>
  );
}

export default ProfileStats;