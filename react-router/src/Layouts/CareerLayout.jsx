import { Outlet } from "react-router-dom";

export default function CareerLayout() {
  return (
    <div className="career-layout">
      <h2>Careers</h2>
      <p className="career-layout-sub-title">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
        distinctio.
      </p>
      <Outlet />
    </div>
  );
}
