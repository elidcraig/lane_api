import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import AuthPage from "./components/AuthPage";
import VehiclesPage from "./components/VehiclesPage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      {/* Login / signup
      Reservation forms
      Reservation list */}
      <Route
        path="/login"
        element={<AuthPage />}
        action={async ({ request }) => {
          let formData = await request.formData();
          let username = formData.get('username');
          let password = formData.get('password');
          return fetch('http://localhost:9494/login', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({username, password})
          })
        }}
      />
      <Route
        path="/vehicles"
        element={<VehiclesPage />}
        loader={async () => {
          return fetch('http://localhost:9494/vehicles')
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
