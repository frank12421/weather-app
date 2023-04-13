import "./App.css";
import Form from "./components/Form.js";
import { uid } from "uid";
import List from "./components/List";
import useLocalStorageState from "use-local-storage-state";

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

const isGoodWeather = true;

export default function App() {
  // const [activity, setActivity] = useState(initialActivtis);

  const [activity, setActivity] = useLocalStorageState("activity", {
    defaultValue: initialActivtis,
  });

  console.log("Hier:", initialActivtis);

  function handelActivity(newActivity) {
    setActivity([...activity, { id: uid(), ...newActivity }]);
    console.log("App_", newActivity);
  }

  function onDeleteActivity(id) {
    setActivity(activity.filter((activity) => activity.id !== id));
  }

  return (
    <div className="App">
      <List
        activitys={activity.filter((activity) => {
          return activity.WeatherActivity === isGoodWeather;
        })}
        onDeleteActivity={onDeleteActivity}
      />
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}
