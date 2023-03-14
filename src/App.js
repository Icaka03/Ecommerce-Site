import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home.js";
import Register from "./components/Register.js";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
