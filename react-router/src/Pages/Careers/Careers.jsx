import React from "react";
import { useLoaderData, Link } from "react-router-dom";

/*
run the following commands in the terminal

-> to install json server
npm install -g json-server

->to serve json at an API endpoint on hte browser at port 4000
json-server -p 4000 -w ./data/db.json
*/
//loader function: can be created elsewhere
export const loader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json();
};

export default function Careers() {
  const careerList = useLoaderData();
  return (
    <div className="careers">
      {/* in a map the arrow function should wrap the component 
      in paranthesis to implicitly return the element. Using 
      braces require explicit return statement */}
      {careerList.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}
