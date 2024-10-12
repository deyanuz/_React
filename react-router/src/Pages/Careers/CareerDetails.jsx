import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

//loader function to access career data
export const careerLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  // chaeck if response is OK
  if (!res.ok) {
    throw Error("Could not find that career");
  }
  return res.json();
};

export default function CareerDetails() {
  /*access route parameter using useParams hook. The variable name must
  match the path name */
  const { id } = useParams();
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary} </p>
      <p>Location: {career.location} </p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
          consequuntur aspernatur nostrum quis et perspiciatis reprehenderit
          fuga quasi, tempore incidunt, reiciendis obcaecati sint dolorem earum
          deleniti aliquid ipsum recusandae vitae.
        </p>
      </div>
    </div>
  );
}
