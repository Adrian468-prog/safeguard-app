import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';  // This connects to your App.css for styling

function App() {
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Update the URL to match your backend API endpoint
        const response = await axios.get('http://localhost:5000/centers');
        setCenters(response.data);  // Assuming backend returns data in response.data
        setLoading(false);  // Set loading to false once data is fetched
      } catch (err) {
        setError('Error fetching data');  // Set error message
        setLoading(false);  // Stop loading on error
      }
    };

    fetchData();
  }, []);  // Empty dependency array ensures useEffect runs only once

  if (loading) {
    return <div className="loading">Loading data...</div>;  // Show loading message while fetching data
  }

  if (error) {
    return <div className="error">{error}</div>;  // Show error message if data fetching fails
  }

  return (
    <div className="App">
      <h1>Evacuation Centers</h1>
      <ul className="center-list">
        {centers.map((center) => (
          <li key={center.id} className="center-item">
            <strong>{center.name}</strong> - {center.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
