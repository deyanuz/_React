import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [user, setUser] = useState("kala");
  //conditional redirecting
  //replace= {true} --> replaces this page with previous page in the history
  if (!user) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque esse
        assumenda iusto dolorem voluptatum odio neque dolore consequuntur fuga
        eligendi illum quam pariatur possimus numquam accusantium, eaque
        aspernatur doloribus exercitationem!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque esse
        assumenda iusto dolorem voluptatum odio neque dolore consequuntur fuga
        eligendi illum quam pariatur possimus numquam accusantium, eaque
        aspernatur doloribus exercitationem!
      </p>
      <button onClick={() => setUser(null)}>Log out</button>
    </div>
  );
};

export default About;
