import React from "react";

function LocationChoice({ name, state, country }) {
  return (
    <div>
      <p>
        {name} {state} {country}
      </p>
      <button>Choose</button>
    </div>
  );
}

export default LocationChoice;
