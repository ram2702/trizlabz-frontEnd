import React from "react";
import Navbar from "../components/navbar";
import TeleOp from "../components/teleop.system";

export default function System() {
  return (
    <>
      <div className="page-cont">
        <Navbar props={["System", "TeleOp"]} />
        <TeleOp />
      </div>
    </>
  );
}
