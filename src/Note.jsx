import React, { useState } from "react";
import axios from "axios";

function Note() {
  const [generated, setGenerated] = useState("");

  const fetchActivity = (type, participants) => {
    axios
      .get(
        `https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`
      )
      .then((res) => {
        setGenerated(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching activity:", error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const type = form.elements.type.value;
    const participants = form.elements.participants.value;
    fetchActivity(type, participants);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} id="form" className="form">
        <select name="type" className="form-select">
          <option value="">Select</option>
          <option value="education">Education</option>
          <option value="charity">Charity</option>
          <option value="recreational">Recreational</option>
          <option value="relaxation">Relaxation</option>
          <option value="busywork">Busywork</option>
          <option value="social">Social</option>
          <option value="diy">DIY</option>
          <option value="music">Music</option>
        </select>
        <select name="participants" className="form-select">
          <option value="">Any number of people</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button type="submit" className="form-submit">
          Go
        </button>
      </form>
      {generated && (
        <div className="activity-result">
          <p>{generated}</p>
        </div>
      )}
    </div>
  );
}

export default Note;
