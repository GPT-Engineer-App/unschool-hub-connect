import React from 'react';
import { FaBook, FaUsers, FaFolderOpen, FaClipboardList, FaCalendarAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-4xl font-bold text-center">Unschool Hub</h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-6">
        <nav className="flex space-x-4">
          <a href="/learning-paths" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaBook size={40} />
            <p>Learning Paths</p>
          </a>
          <a href="/community" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaUsers size={40} />
            <p>Community</p>
          </a>
          <a href="/resources" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaFolderOpen size={40} />
            <p>Resources</p>
          </a>
          <a href="/logs" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaClipboardList size={40} />
            <p>Logs</p>
          </a>
          <a href="/events" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaCalendarAlt size={40} />
            <p>Events</p>
          </a>
          <a href="/parent-profile" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaUsers size={40} />
            <p>Parent Profile</p>
          </a>
          <a href="/child-profile" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaUsers size={40} />
            <p>Child Profile</p>
          </a>
          <a href="/mentor-profile" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            <FaUsers size={40} />
            <p>Mentor Profile</p>
          </a>
        </nav>
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-blue-700">Welcome to Unschool Hub</h2>
          <p className="mt-4 text-lg text-gray-700">Your personalized learning journey starts here.</p>
        </section>
      </main>
      <footer className="w-full bg-blue-600 text-white py-4 mt-auto">
        <p className="text-center">&copy; 2023 Unschool Hub. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;