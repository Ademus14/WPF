import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-100 text-gray-800 flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-700 drop-shadow-sm">
          World Peace Forum
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8">
          A global platform for dialogue, education, and action to build a peaceful world together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded-2xl shadow-md">
            Join the Movement
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 text-lg rounded-2xl">
            Explore Projects
          </button>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🌍 Global Dialogue</h2>
          <p>Engage in meaningful discussions with peace advocates across the world.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">📅 Peace Events</h2>
          <p>Join workshops, forums, and international summits dedicated to peacebuilding.</p>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-blue-700 mb-2">🤝 Projects & Partnerships</h2>
          <p>Discover grassroots projects and global initiatives you can support or join.</p>
        </div>
      </div>
    </div>
  );
}

export default App;