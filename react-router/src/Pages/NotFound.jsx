import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus unde
        itaque rem ducimus provident consequatur, vitae accusamus vel fugiat
        quos quo magnam quasi nam soluta alias. Aliquid similique consequuntur
        esse.
      </p>
      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
