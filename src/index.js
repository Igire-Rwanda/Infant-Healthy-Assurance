import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Doctordashboard from "./Pages/Doctordashboard";
import Healthcare from "./Pages/Healthcare";
import Registration from "./Pages/register.jsx";
import Healthinfo from './Pages/Healthinfo';
import Highlightspage from "./Pages/Bloadcastpage"
import Page2 from "./Components/Bloadcast-page/page2"
import Appointments from "./Pages/Appointment";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Doctordashboard />,
  },
  {
    path: "/register",
    element: <Registration />,
  },
  {
    path:"/healthcareinfo",
    element:<Healthcare/>
  },
  {
    path:"/healthcare",
    element:<Healthinfo/>
  },
  {
  path:"/highlights",
  element:<Highlightspage/>
},
{
  path:"/page2",
  element:<Page2/>
},
{
  path:"/appointments",
  element:<Appointments/>
},
])
root.render(
 <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
