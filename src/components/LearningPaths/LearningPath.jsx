import React from 'react';
import ProgressBar from './ProgressBar';
import Milestones from './Milestones';

const LearningPath = ({ title, description, progress, milestones }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <ProgressBar progress={progress} />
      <Milestones milestones={milestones} />
    </div>
  );
};

export default LearningPath;