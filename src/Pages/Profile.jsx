import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/contextapi';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    // ... other profile fields
  });

  useEffect(() => {
    if (user) {
      // Fetch user profile data from the backend
      fetchUserProfile(user.id)
        .then(data => setProfileData(data)) // Replace with actual data structure
        .catch(error => console.error('Error fetching profile data:', error));
    }
  }, [user]);

  const handleUpdate = (updatedData) => {
    updateUser({ ...profileData, ...updatedData }) // Merge existing and updated data
      .then(() => {
        // Update profile data in state
        setProfileData(updatedData);
        // Show success message
      })
      .catch(error => {
        // Handle update error
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div>
      <h2>Profile</h2>
      {/* Profile details */}
      <form onSubmit={handleUpdate}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={profileData.firstName}
          onChange={e => setProfileData({ ...profileData, firstName: e.target.value })}
        />

        {/* Add similar fields for other profile data */}

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;