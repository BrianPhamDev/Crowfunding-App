import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.js"));
const CampaignPage = lazy(() => import("./pages/CampaignPage.js"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage.js"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/campaign" element={<CampaignPage></CampaignPage>}></Route>
        <Route
          path="/start-campaign"
          element={<StartCampaignPage></StartCampaignPage>}
        ></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
