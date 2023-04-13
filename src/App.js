import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";

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

  function onDeleteActivity(id) {
    setActivity(activity.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <List activitys={activity} onDeleteActivity={onDeleteActivity} />
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}
