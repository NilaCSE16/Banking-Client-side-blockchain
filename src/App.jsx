import Connect from "./components/Connect";
import img1 from "../src/assets/img-1.jpg";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import GetBalance from "./components/GetBalance";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";

function App() {
  return (
    <>
      <Mainlayout />
    </>
  );
}
export default App;
