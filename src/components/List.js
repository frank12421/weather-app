import "./List.css";

export default function List({ activitys, onDeleteActivity }) {
  return (
    <ul className="list">
      {activitys.map((activity) => (
        <li className="list-items" key={activity.id}>
          {" "}
          {activity.name}
          {activity.isForGoodWeather}
          <button
            onClick={() => onDeleteActivity(activity.id)}
            className="button-delete-activity"
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
