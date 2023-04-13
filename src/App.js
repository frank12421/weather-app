import "./App.css";
import Form from "./components/Form.js";
import { useState } from "react";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

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
  // const [activity, setActivity] = useState(initialActivtis);
  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: [initialActivtis],
  });

  console.log("Hier:", initialActivtis);

  function handelActivity(newActivity) {
    setActivity([...activity, { id: uid(), ...newActivity }]);
    console.log("App_", newActivity);
  }

  return (
    <div className="App">
      <List activitys={activity} />
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}
