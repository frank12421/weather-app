export default function Form({ onAddActivity }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    console.log("Form:", data);
    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label-name" name="label-name" htmlFor="name">
        Name
      </label>
      <input className="input-name" type="text" name="name" id="name"></input>
      <input
        className="checkbox"
        type="checkbox"
        name="WeatherActivity"
        id="WeatherActivity"
      />
      <label htmlFor="WeatherActivity">Good-weather activity </label>
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
}
