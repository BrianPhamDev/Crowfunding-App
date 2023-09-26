import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage.js";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    </Routes>
  );
}

export default App;
