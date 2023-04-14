import "./App.css";
import Form from "./components/Form.js";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";
import { useState, useEffect } from "react";

const initialActivtis = [
  {
    id: "28djdh72",
    name: "Reading inside",
    WeatherActivity: false,
  },
  {
    id: "dknseu2",
    name: "Go for a walk",
    WeatherActivity: true,
  },
  {
    id: "dkwi02ksk",
    name: "Have a veagan barbecue",
    WeatherActivity: true,
  },
];

export default function App() {
  // const [activity, setActivity] = useState(initialActivtis);
  const [weather, setWeather] = useState([]);

  async function fetchWeather() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();

    setWeather(data);
  }

  useEffect(() => {
    fetchWeather();
    const timer = setInterval(() => {
      fetchWeather();
    }, 5000);

    // cleanup function
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: initialActivtis,
  });

  function handelActivity(newActivity) {
    setActivity([...activity, { id: uid(), ...newActivity }]);
  }

  function onDeleteActivity(id) {
    setActivity(activity.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <div className="weather-header">
        <h3 className="weather-condition">{weather.condition}</h3>
        <h3 className="weather-temperature">{weather.temperature} °C</h3>
      </div>
      {weather.isGoodWeather ? (
        <div>The weather is awesome! Go outside and:</div>
      ) : (
        <div>Bad weather outside! Here's what you can do now:</div>
      )}
      <List
        activitys={activity.filter((activity) => {
          return activity.WeatherActivity === weather.isGoodWeather;
        })}
        onDeleteActivity={onDeleteActivity}
      />
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}
