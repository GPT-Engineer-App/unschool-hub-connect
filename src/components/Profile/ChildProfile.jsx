import React from 'react';

const ChildProfile = ({ bio, learningInterests, achievements }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Child Profile</h2>
      <p className="text-gray-700 mb-2"><strong>Bio:</strong> {bio}</p>
      <p className="text-gray-700 mb-2"><strong>Learning Interests:</strong> {learningInterests.join(', ')}</p>
      <p className="text-gray-700 mb-2"><strong>Achievements:</strong> {achievements.join(', ')}</p>
    </div>
  );
};

export default ChildProfile;