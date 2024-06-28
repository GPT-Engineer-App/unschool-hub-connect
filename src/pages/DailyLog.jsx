import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const DailyLog = () => {
  const [log, setLog] = useState('');
  const [logs, setLogs] = useState([]);
  const [progressData, setProgressData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Daily Progress',
        data: [],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  });

  const handleLogChange = (e) => {
    setLog(e.target.value);
  };

  const handleLogSubmit = (e) => {
    e.preventDefault();
    const newLogs = [...logs, log];
    setLogs(newLogs);
    setLog('');

    const newLabels = newLogs.map((_, index) => `Day ${index + 1}`);
    const newData = newLogs.map((_, index) => (index + 1) * 10); // Example progress data

    setProgressData({
      labels: newLabels,
      datasets: [
        {
          ...progressData.datasets[0],
          data: newData,
        },
      ],
    });
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <header className="w-full bg-blue-600 text-white py-4 shadow-md mb-6">
        <h1 className="text-4xl font-bold text-center">Daily Log & Progress Tracker</h1>
      </header>
      <main className="flex flex-col items-center">
        <form onSubmit={handleLogSubmit} className="w-full max-w-2xl mb-6">
          <textarea
            value={log}
            onChange={handleLogChange}
            placeholder="Document your daily learning activities..."
            className="w-full bg-white shadow-md rounded-lg p-4 mb-4"
            rows="4"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg shadow-md">
            Add Log
          </button>
        </form>
        <div className="w-full max-w-2xl mb-6">
          <Line data={progressData} />
        </div>
        <div className="w-full max-w-2xl">
          {logs.map((log, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
              <p className="text-gray-700">{log}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DailyLog;