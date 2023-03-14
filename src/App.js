import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Account from "./components/Account.js";

import Home from "./components/Home.js";
import Login from "./components/Login.js";
import Register from "./components/Register";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
