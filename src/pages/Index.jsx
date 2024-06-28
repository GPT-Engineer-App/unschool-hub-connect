import React from 'react';
import { FaBook, FaUsers, FaFolderOpen, FaClipboardList, FaCalendarAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-4xl font-bold text-center">Unschool Hub</h1>
      </header>
      <main className="flex flex-col items-center mt-10 space-y-6">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/learning-paths" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaBook size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Learning Paths</p>
          </a>
          <a href="/community" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Community</p>
          </a>
          <a href="/resources" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaFolderOpen size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Resources</p>
          </a>
          <a href="/logs" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaClipboardList size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Logs</p>
          </a>
          <a href="/events" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaCalendarAlt size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Events</p>
          </a>
          <a href="/parent-profile" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Parent Profile</p>
          </a>
          <a href="/child-profile" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Child Profile</p>
          </a>
          <a href="/mentor-profile" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaUsers size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Mentor Profile</p>
          </a>
          <a href="/daily-log" className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <FaClipboardList size={40} className="mx-auto mb-4 text-blue-600" />
            <p className="text-lg font-semibold text-blue-600">Daily Log</p>
          </a>
        </section>
        <section className="text-center mt-10">
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