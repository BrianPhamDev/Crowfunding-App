import LayoutDashboard from "layout/LayoutDashboard.js";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import LayoutPayment from "layout/LayoutPayment.js";

const SignUpPage = lazy(() => import("./pages/SignUpPage.js"));
const SignInPage = lazy(() => import("./pages/SignInPage.js"));
const DashboardPage = lazy(() => import("./pages/DashboardPage.js"));
const CampaignPage = lazy(() => import("./pages/CampaignPage.js"));
const StartCampaignPage = lazy(() => import("./pages/StartCampaignPage.js"));
const CampaignView = lazy(() => import("modules/campaign/CampaignView.js"));
const PaymentPage = lazy(() => import("./pages/PaymentPage.js"));
const WithdrawPage = lazy(() => import("./pages/WithdrawPage.js"));
const ShippingPage = lazy(() => import("./pages/ShippingPage.js"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage.js"));

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");
Modal.defaultStyles = {};

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayoutDashboard />}>
          <Route path="/" element={<DashboardPage></DashboardPage>}></Route>
          <Route
            path="/campaign"
            element={<CampaignPage></CampaignPage>}
          ></Route>
          <Route
            path="/start-campaign"
            element={<StartCampaignPage></StartCampaignPage>}
          ></Route>
          <Route
            path="/campaign/:slug"
            element={<CampaignView></CampaignView>}
          ></Route>
          <Route
            path="/withdraw"
            element={<WithdrawPage></WithdrawPage>}
          ></Route>
          <Route path="/payment" element={<PaymentPage></PaymentPage>}></Route>
        </Route>
        <Route element={<LayoutPayment></LayoutPayment>}>
          <Route
            path="/checkout"
            element={<CheckoutPage></CheckoutPage>}
          ></Route>
          <Route
            path="/shipping-address"
            element={<ShippingPage></ShippingPage>}
          ></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  );
}

export default App;
