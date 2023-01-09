import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import City from './City';

function App() {
  const key = "6fea3ea61e1fac5cfade22087bb979d1";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search])
  return (
    <div className="App">
      <div class="mb-3 pt-32">
        <input onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Please, Enter The City!"
          class="w-48 px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring " />
        <City city={city} />
      </div>
    </div>
  );
}

export default App;
