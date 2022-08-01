import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const fetchData = await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())

    setDataFetch(fetchData);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div className="App p-5">
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {isLoading && <p>Loading...</p>}
        {dataFetch && dataFetch.map((index, key) => (
          <div
            key={`index-key-${key}`}
            className='bg-white shadow-md p-4 mb-5 rounded-md text-left'>
            <h1 className='text-4xl mb-3 capitalize'>{index.title}</h1>
            <p className='text-xl'>{index.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
