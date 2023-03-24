import React from "react";

function LocationName({ name, country }) {
  return (
    <React.Fragment>
      <p>{name && name}</p>
      <small>{country && `[Country: ${country}]`}</small>
    </React.Fragment>
  );
}

export default LocationName;
