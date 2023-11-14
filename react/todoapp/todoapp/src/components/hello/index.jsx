import React from "react";
import { PropTypes  } from "prop-types";
const Hello = ({ name, surname, age, hobbies }) => {
  return (
    <>
      <h1>
        Hello {name} {surname},{age}
      </h1>
      <ul>
        {hobbies.map((hobby, idx) => {
          return <li key={idx}>{hobby}</li>;
        })}
      </ul>
    </>
  );
};

export default Hello;

Hello.propTypes  = {
  name: PropTypes .string,
  surname: PropTypes .string,
  age: PropTypes .number,
  hobbies: PropTypes .array,
};
