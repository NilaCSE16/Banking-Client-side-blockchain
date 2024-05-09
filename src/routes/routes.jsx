import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Connect from "../components/Connect";
import AccountLayout from "../components/AccountLayout";
import Home from "../components/Home";
import AllAccount from "../components/AllAccount";
import ViewAccountInfo from "../components/ViewAccountInfo";
import MobilePay from "../components/MobilePay";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/account",
        element: <AccountLayout />,
      },
      {
        path: "/all-account",
        element: <AllAccount />,
      },
      {
        path: "/viewaccount/:id",
        element: <ViewAccountInfo></ViewAccountInfo>,
      },
      {
        path: "/mobile",
        element: <MobilePay></MobilePay>,
      },
    ],
  },
]);
export default routes;
