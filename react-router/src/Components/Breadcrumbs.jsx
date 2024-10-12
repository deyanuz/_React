import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((c) => c != "")
    .map((c) => {
      currentLink += `/${c}`;
      return (
        <div className="crumbs" key={c}>
          <Link to={currentLink}>{c}</Link>
        </div>
      );
    });
  return <div className="breadcrumbs">{crumbs}</div>;
}
