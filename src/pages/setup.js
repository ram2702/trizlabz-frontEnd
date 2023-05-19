import React from "react";
import Customer from "../components/customer.admin";
import Navbar from "../components/navbar";
import Vehicle from "../components/vehicle.admin";
import UserSetup from "../components/user.setup";
import Deployment from "../components/deploy.setup";
import Fleet from "../components/fleet.setup";

export default function Setup({ props }) {
  console.log(props);
  if (props === "deployment") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["setup", "deployment"]} />
          <Deployment props={false} />
        </div>
      </>
    );
  }
  if (props === "fleet") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["setup", "fleet"]} />
          <Fleet props={false} />
        </div>
      </>
    );
  }
  if (props === "userManagement") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["setup", "userManagement"]} />
          <UserSetup props={false} />
        </div>
      </>
    );
  }
}
