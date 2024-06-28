import React from 'react';
import LearningPath from '../components/LearningPaths/LearningPath';

const learningPathsData = [
  {
    title: 'Mathematics',
    description: 'Learn the fundamentals of mathematics.',
    progress: 70,
    milestones: ['Algebra', 'Geometry', 'Calculus'],
  },
  {
    title: 'Science',
    description: 'Explore the world of science.',
    progress: 50,
    milestones: ['Physics', 'Chemistry', 'Biology'],
  },
  {
    title: 'History',
    description: 'Dive into the past and learn about history.',
    progress: 30,
    milestones: ['Ancient History', 'Medieval History', 'Modern History'],
  },
];

const LearningPaths = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-6">
        <h1 className="text-4xl font-bold text-center">Learning Paths</h1>
      </header>
      <main className="flex flex-col items-center">
        {learningPathsData.map((path, index) => (
          <LearningPath
            key={index}
            title={path.title}
            description={path.description}
            progress={path.progress}
            milestones={path.milestones}
          />
        ))}
      </main>
    </div>
  );
};

export default LearningPaths;