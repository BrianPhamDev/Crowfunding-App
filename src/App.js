import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.js"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
