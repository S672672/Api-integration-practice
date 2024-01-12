import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
      setJoke(response.data[0]);
    } catch (error) {
      console.error('Error fetching jokes:', error);
    }
  };

  const handleNextJoke = () => {
    fetchJoke();
  };

  return (
    <div className="main">
      <div className="content">
        <div className="text-white font-bold text-2xl">
          Q: {joke.setup}
        </div>
        <div className="text-blue-400 font-semibold text-2xl">A: {joke.punchline}</div>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleNextJoke}>
          Next Joke
        </button>
      </div>
    </div>
  );
}

export default App;
