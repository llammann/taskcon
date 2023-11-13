import React from "react";
import employeearr from "./assets/components";
function Students() {
  let sum = 0;
  employeearr.forEach((element) => {
    sum += element.salary;
  });
  let averagesalary = sum / employeearr.length;
  return (
    <>
      <ul>
        {employeearr.map((elem) => {
          return <li>{elem.name}</li>;
        })}
      </ul>
      <span>Average salary: {averagesalary}</span>
    </>
  );
}
export default Students;
