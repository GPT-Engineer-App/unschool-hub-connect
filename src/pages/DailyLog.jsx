import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DailyLog = () => {
  const [logs, setLogs] = useState([]);
  const [activity, setActivity] = useState('');
  const [hours, setHours] = useState('');

  const handleAddLog = () => {
    setLogs([...logs, { activity, hours: parseFloat(hours) }]);
    setActivity('');
    setHours('');
  };

  const data = {
    labels: logs.map((log, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: 'Hours Spent',
        data: logs.map(log => log.hours),
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-6">
        <h1 className="text-4xl font-bold text-center">Daily Log & Progress Tracker</h1>
      </header>
      <main className="flex flex-col items-center">
        <div className="w-full max-w-2xl mb-6 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Add Daily Activity</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Activity</label>
            <input
              type="text"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-gray-100 p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Hours Spent</label>
            <input
              type="number"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              className="w-full bg-gray-100 p-2 rounded-lg"
            />
          </div>
          <button
            onClick={handleAddLog}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add Log
          </button>
        </div>
        <div className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Progress Chart</h2>
          <Line data={data} />
        </div>
      </main>
    </div>
  );
};

export default DailyLog;