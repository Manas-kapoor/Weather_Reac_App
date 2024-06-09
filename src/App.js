import './App.css';

import Card from './components/card';
import Input from './components/input';
import Button from './components/button';
import { useWeather } from './context/weather';

function App() {
  const weather = useWeather();
  console.log(weather);
  return (
    <div className="App">
      <h1>"Weather Forecast"</h1>
      <Input/>

      
      <Button onClick={weather.fetchData} value="search"/>
      
      

      <Card/>
      <Button value="Refresh"/>

    </div>
  );
}

export default App;
