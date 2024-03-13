import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateLayout from "./layout/private";
import PublicRoutes from "./routes/public";
import PrivateRoutes from "./routes/private";
import PublicLayout from "./layout/public";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { isUserLoggedIn } = useSelector((state) => state.auth)

  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/app" element={isUserLoggedIn ? <PrivateLayout /> : <Navigate to='/login' />} >
            <Route index element={<Navigate to={`/app/admindashboard`} />} />
            {PrivateRoutes.map((route, i) => {
              return (
                  <Route
                    key={i}
                    path={route.path}
                    element={<route.component />}
                  />
              )
            })}
            <Route path="/app/*" element={<Navigate to={`/login`} />} />
          </Route>

          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Navigate to={`/home`} />} />
            {PublicRoutes.map((route, i) => {
              return (
                <Route
                  key={i}
                  path={route.path}
                  element={<route.component />}
                />
              )
            })}
            <Route path="/*" element={<Navigate to={`/home`} />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  );
}

export default App;