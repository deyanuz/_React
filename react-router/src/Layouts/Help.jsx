import { NavLink, Outlet } from "react-router-dom";

export default function Help() {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p className="help-sub-title">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, nam.
      </p>
      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
