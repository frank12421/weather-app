export default function List({ activitys }) {
  return (
    <ul className="list">
      {activitys.map((activity) => (
        <li key={activity.id}>
          {" "}
          {activity.name}
          {activity.isForGoodWeather}
        </li>
      ))}
    </ul>
  );
}
