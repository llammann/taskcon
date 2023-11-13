import React from "react";
import studentcomp from "./studentcomp";

function Students() {
  return (
    <div>
      <ul>
        {studentcomp.map((elem) => {
          return <li>{elem.name}</li>;
        })}
      </ul>
    </div>
  );
}
export default Students;
