import React, { useEffect } from "react";
import Login from "./Login";
import { Browse } from "./Browse";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

export default function Body() {
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

 
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}
