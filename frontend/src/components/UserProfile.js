import React from 'react';

const UserProfile = ({ name, age, email, avatar = 'default-avatar.jpg' }) => {
  return (
    <div className="user-profile-card">
      <h2>{name}</h2>
      {age ? <p>Age: {age}</p> : <p>No age provided</p>}
      <p>Email: {email}</p>
      <img src={avatar} alt="User Avatar" />
    </div>
  );
};

export default UserProfile;