import ContactsIcon from "@mui/icons-material/Contacts";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#0F172A] p-4 shadow-md w-[100vw] h-20">
      <div className="container mx-auto flex justify-between items-center h-full ">
        <div className="text-[#38BDF8] text-xl roboto-regular flex gap-2 items-center">
          <ContactsIcon className="h-full w-8 text-[#ff2b2b] " />
          <span>Contact Management System</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
