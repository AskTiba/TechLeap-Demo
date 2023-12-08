import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./pages/About";
import Instructors from "./pages/Instructors";
import Layout from "./Layout";
import CourseList from "./pages/CourseList";
import Auth from "./components/Auth";
import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="instructors" element={<Instructors />} />
      <Route path="courselist" element={<CourseList />} />
      <Route path="auth" element={<Auth />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
