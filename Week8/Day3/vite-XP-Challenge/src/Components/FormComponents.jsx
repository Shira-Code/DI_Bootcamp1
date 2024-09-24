import React from 'react';

const FormComponent = ({ data, handleChange, handleSubmit }) => {
  return (
    <div className="inputForm">
      <h1>Sample form</h1>
      <form onSubmit={handleSubmit}>
        <label className="text">
          First Name:
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            className="text"
          />
        </label>
        <br />
        <label className="text">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            className="text"
          />
        </label>
        <br />
        <label className="text">
          Age:
          <input
            type="number"
            name="age"
            value={data.age}
            onChange={handleChange}
            className="text"
          />
        </label>
        <br />
        <label className="radiobutton">
          Gender:
          <input
            type="radio"
            name="gender"
            value="male"
            checked={data.gender === 'male'}
            onChange={handleChange}
            className="radiobutton"
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={data.gender === 'female'}
            onChange={handleChange}
            className="radiobutton"
          /> Female
        </label>
        <br />
        <label className="destination-header">Your Destination:</label>
        <select
          name="destination"
          value={data.destination}
          onChange={handleChange}
          className="destination-input"
        >
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <br />
        <label className="restrictions-title">Dietary Restrictions:</label>
        <br />
        <label className="restrictions">
          <input
            type="checkbox"
            name="nutsFree"
            checked={data.nutsFree}
            onChange={handleChange}
          /> Nuts Free
        </label>
        <br />
        <label className="restrictions">
          <input
            type="checkbox"
            name="lactoseFree"
            checked={data.lactoseFree}
            onChange={handleChange}
          /> Lactose Free
        </label>
        <br />
        <label className="restrictions">
          <input
            type="checkbox"
            name="vegan"
            checked={data.vegan}
            onChange={handleChange}
          /> Vegan Meal
        </label>
        <br />
        <button type="submit" className="submit">Submit</button>
      </form>

      <div className="entered-info">
        <h2>Entered information:</h2>
        <p>Your Name: {data.firstName} {data.lastName}</p>
        <p>Your Gender: {data.gender}</p>
        <p>Your Destination: {data.destination}</p>
        <p>Your Dietary Restrictions:</p>
        <p>**Nuts Free: {data.nutsFree ? "YES" : "NO"}</p>
        <p>**Lactose Free: {data.lactoseFree ? "YES" : "NO"}</p>
        <p>**Vegan Meal: {data.vegan ? "YES" : "NO"}</p>
      </div>
    </div>
  );
};

export default FormComponent;
