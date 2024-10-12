import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import RootLayout from "./Layouts/RootLayout";
import Help from "./Layouts/Help";
import Contact, { contactAction } from "./Pages/Help/Contact";
import FAQ from "./Pages/Help/FAQ";
import NotFound from "./Pages/NotFound";
import CareerLayout from "./Layouts/CareerLayout";
import Careers, { loader } from "./Pages/careers/careers";
import CareerDetails, { careerLoader } from "./Pages/Careers/CareerDetails";
import CareerError from "./Pages/Careers/CareerError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/* <Route path="/" element={<Home></Home>} /> 
       above line is equivalent to the line below */}

      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      {/* /help */}
      <Route path="help" element={<Help />}>
        {/* /help/faq */}
        <Route path="faq" element={<FAQ />}></Route>

        {/* /help/contact */}
        <Route
          path="contact"
          element={<Contact />}
          action={contactAction}
        ></Route>
      </Route>
      <Route
        path="careers"
        element={<CareerLayout />}
        errorElement={<CareerError />}
      >
        {/*loader function */}
        <Route index element={<Careers />} loader={loader}></Route>
        {/*changable parameter route */}
        <Route path=":id" element={<CareerDetails />} loader={careerLoader} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
