import React from "react";
import Customer from "../components/customer.admin";
import Navbar from "../components/navbar";
import Vehicle from "../components/vehicle.admin";
import User from "../components/user.admin";

export default function Administration({ props }) {
  console.log(props);
  if (props === "Customer") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["Administration", "customer"]} />
          <Customer props={false} />
        </div>
      </>
    );
  }
  if (props === "user") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["Administration", "user"]} />
          <User props={false} />
        </div>
      </>
    );
  }
  if (props === "Vehicle") {
    return (
      <>
        <div className="page-cont">
          <Navbar props={["Administration", "vehicle"]} />
          <Vehicle props={false} />
        </div>
      </>
    );
  }
}
