import React from "react";
import Customer from "../components/customer.admin";
import Navbar from "../components/navbar";
import Vehicle from "../components/vehicle.admin";
import User from "../components/user.admin";

export default function Setup({ props }) {
  console.log(props);
  if (props === "userManagement") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["setup", "userManagement"]} />
          <User props={false} />
        </div>
      </>
    );
  }
}
