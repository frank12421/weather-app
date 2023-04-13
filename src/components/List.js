import "./List.css";

export default function List({ activitys }) {
  return (
    <ul className="list">
      {activitys.map((activity) => (
        <li className="list-items" key={activity.id}>
          {" "}
          {activity.name}
          {activity.isForGoodWeather}
        </li>
      ))}
    </ul>
  );
}
