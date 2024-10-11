import {
  createBrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      {/* <Route path="/" element={<Home></Home>} /> */}
      {/* above line is equivalent to the line below */}
      <Route index element={<Home></Home>} />
      <Route path="about" element={<About></About>} />
    </Routes>
  )
);

function App() {
  return (
    // <header>
    //   <nav>
    //     <h1>Job Router</h1>
    //     <NavLink to="/">Home</NavLink>
    //     <NavLink to="about">About</NavLink>
    //   </nav>
    // </header>
    <RouterProvider></RouterProvider>
  );
}

export default App;
