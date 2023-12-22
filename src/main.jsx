import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Layout/Home";
import AuthProvider from "./Provider/AuthProvider";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Dashboard from "./Layout/Dashboard";
import AddTask from "./Dashboard/AddTask";
import EditTask from "./Dashboard/EditTask";
import AboutUs from "./Layout/AboutUs";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import TaskList from "./Dashboard/TaskList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "about",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addtask",
        element: <AddTask></AddTask>,
      },
      {
        path: "edittask/:id",
        element: <EditTask></EditTask>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/task/${params.id}`),
      },
      {
        path: "tasklist",
        element: <TaskList></TaskList>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
