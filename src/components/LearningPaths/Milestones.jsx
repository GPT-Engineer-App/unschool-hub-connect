import React from 'react';

const Milestones = ({ milestones }) => {
  return (
    <ul className="list-disc list-inside">
      {milestones.map((milestone, index) => (
        <li key={index} className="text-gray-700 mb-2">
          {milestone}
        </li>
      ))}
    </ul>
  );
};

export default Milestones;