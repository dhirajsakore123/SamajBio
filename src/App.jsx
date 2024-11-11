import React, { useEffect, useState } from "react";
import GoogleSheetPushData from "./Pages/GoogleSheetPushData";
import GoogleSheetFetch from "./components/GoogleSheetFetch";
import HomeCompo from "./components/HomeCompo";
import AddressAndContacts from "./components/AddressAndContacts";
import Notice from "./components/Notice";
import toast, { Toaster } from "react-hot-toast";
import Bios from "./components/Bios";
import logo from "/logo.png";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div >
      <HomeCompo />
      <Bios />
      <AddressAndContacts />
      <GoogleSheetPushData />
      <Notice />
      <Toaster />
      {loading && (
        <div className=" z-[100] fixed flex justify-center items-center w-full h-screen top-0 left-0 bottom-0  bg-gradient-to-tr from-orange-300 to-yellow-100">
         <img src={logo} alt="not found" className="  h-32 w-32 animate-bounce " />
        </div>
      )}
    </div>
  );
};

export default App;
