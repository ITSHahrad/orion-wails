import { useState } from 'react';
import { Greet } from '../wailsjs/go/main/App'


const App = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  if (!submitted) {
    return (
      <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-zinc-800 rounded-xl p-8 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500/30 transition-all hover:shadow-emerald-500/30 hover:ring-emerald-500/50">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-400 mb-2">
              Welcome to Orion-Wails
            </h1>
            <p className="text-emerald-300">
              Let's get started by telling us your name
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-emerald-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(() => e.target.value)}
                className="w-full px-4 py-2 bg-zinc-700 text-white border border-emerald-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-zinc-400"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <button
              onClick={(e) => Greet(e.target.value).then(() => handleSubmit(e))}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-[1.02] shadow hover:shadow-emerald-500/20"
            >
              Continue
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center text-emerald-400 text-sm">
          <p>Orion-Wails Boilerplate - The perfect starting point for your project</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-zinc-800 rounded-xl p-10 text-center shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-500/30">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">
            Welcome, <span className="text-emerald-300">{name}</span>!
          </h1>
          <p className="text-lg text-emerald-300 mb-6">
            Thank you for choosing the Orion-Wails Boilerplate
          </p>
        </div>
        
        <div className="bg-zinc-700/50 border-l-4 border-emerald-500 p-4 mb-8 text-left rounded-r-lg">
          <p className="text-emerald-200">
            You're now ready to start building your amazing application with:
          </p>
          <ul className="list-disc pl-5 mt-2 text-emerald-300 space-y-1">
            <li>React for your frontend</li>
            <li>Wails for desktop integration</li>
            <li>Tailwind CSS for beautiful styling</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-zinc-700/50 p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <h3 className="font-semibold text-emerald-400 mb-2">Quick Start</h3>
            <p className="text-sm text-emerald-300">
              Run <code className="bg-emerald-900/50 px-1 rounded text-emerald-200">wails dev</code> to begin
            </p>
          </div>
          <div className="bg-zinc-700/50 p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <h3 className="font-semibold text-emerald-400 mb-2">Documentation</h3>
            <p className="text-sm text-emerald-300">
              Check the README for setup
            </p>
          </div>
          <button onClick={() => handleCopy("https://discord.me/bitroot")} className="bg-zinc-700/50 p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <h3 className="font-semibold text-emerald-400 mb-2">Community</h3>
            <p className="text-sm text-emerald-300 py-1 rounded-xl">
              Click to copy discord invite url
            </p>
          </button>
        </div>
        
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow hover:shadow-emerald-500/20"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default App;
