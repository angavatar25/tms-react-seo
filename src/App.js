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

  const borderColorList = {
    'blue': 'border-blue-600',
    'red': 'border-red-600',
    'green': 'border-green-600',
    'purple': 'border-purple-600',
  }

  const backgroundColorList = {
    'blue': 'bg-blue-600',
    'red': 'bg-red-600',
    'green': 'bg-green-600',
    'purple': 'bg-purple-600',
  }

  const randomColor = (rand) => {
    let array  = Object.keys(rand);
    let randomNumber = Math.random();
    let index  = Math.floor(randomNumber * array.length);

    let randomKey    = array[index];
    let randomValue  = rand[randomKey];

    return randomValue;
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
            className={`bg-white shadow-md p-4 mb-5 rounded-md text-left border-b-8 ${randomColor(borderColorList)}`}>
            <h1 className='text-3xl capitalize'>{index.title}</h1>
            <div className={`w-full h-1 my-5 ${randomColor(backgroundColorList)}`}></div>
            <p className='text-xl'>{index.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
