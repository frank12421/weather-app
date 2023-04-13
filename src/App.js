import "./App.css";
import Form from "./components/Form.js";

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

function App() {
  function handelActivity(newActivity) {
    console.log("App_", newActivity);
  }

  return (
    <div className="App">
      <h1>Add New Activity:</h1>
      <Form onAddActivity={handelActivity} />
    </div>
  );
}

export default App;
