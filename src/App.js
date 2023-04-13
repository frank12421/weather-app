import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";

const initialActivtis = [
  {
    id: "28djdh72",
    name: "Reading inside",
    isForGoodWeather: false,
  },
  {
    id: "dknseu2",
    name: "Go for a walk",
    isForGoodWeather: true,
  },
  {
    id: "dkwi02ksk",
    name: "Have a veagan barbecue",
    isForGoodWeather: true,
  },
];

export default function App() {
  const [activity, setActivity] = useState(initialActivtis);

  console.log(initialActivtis);

  function handelActivity(newActivity) {
    setActivity([...activity, { id: uid(), ...newActivity }]);
    console.log("App_", newActivity);
  }

  return (
    <div className="App">
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}
