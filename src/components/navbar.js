import React from "react";
import "../css/navStyle.css";
import logo from "../img/Trizlabz_logo__1_-removebg-preview 1.png";
import { ReactComponent as Dashlogo } from "../img/dashpic.svg";
import { ReactComponent as Monlogo } from "../img/monitoring.svg";
import { ReactComponent as Syslogo } from "../img/systemlogo.svg";
import { ReactComponent as Setlogo } from "../img/setuplogo.svg";
import { ReactComponent as Admlogo } from "../img/adminlogo.svg";
import { ReactComponent as Helplogo } from "../img/helplogo.svg";
import { useNavigate } from "react-router-dom";
export default function Navbar({ props }) {
  console.log(props[0]);
  const navigate = useNavigate();
  const [navVis, setNavVis] = React.useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  React.useEffect(() => {
    if (props[0] === "Monitoring") {
      setNavVis((prev) => [false, !prev[1], false, false, false, false]);
    }
    if (props[0] === "System") {
      setNavVis((prev) => [false, false, !prev[2], false, false, false]);
    }
    if (props[0] === "Administration") {
      setNavVis([false, false, false, false, true, false]);
    }
  }, []);
  function handleChange(arg, event) {
    if (arg === "Dash") setNavVis([true, false, false, false, false, false]);
    else if (arg === "Mon")
      setNavVis([false, true, false, false, false, false]);
    else if (arg === "System")
      setNavVis([false, false, true, false, false, false]);
    else if (arg === "Administration")
      setNavVis([false, false, false, false, true, false]);
    else if (arg === "TeleOp") navigate("/teleoperations");
    else if (arg === "Health") navigate("/monitoring/health");
    else if (arg === "customer") navigate("/administration/customer");
    else if (arg === "user") navigate("/administration/user");
    else if (arg === "vehicle") navigate("/administration/vehicle");
    else if (arg === "Home") navigate("/");
    console.log(navVis, arg);
  }

  return (
    <nav className="nav-cont">
      <span className="trizlabz-logo">
        <img
          src={logo}
          alt="Trizlabz-logo"
          onClick={handleChange.bind(this, "Home")}
        />
      </span>
      <div className="nav-items">
        <div
          className="nav-card"
          id="Dash"
          onClick={handleChange.bind(this, "Dash")}
        >
          <span className="nav-content">
            <Dashlogo
              fill={navVis[0] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[0] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
            />{" "}
            <p className={navVis[0] ? "nav-txt color-alt" : "nav-txt"}>
              Dashboard
            </p>
          </span>
          {navVis[0] && (
            <ol className="sub-content">
              <li>Dashboard 1</li>
              <li>Dashboard 2</li>
              <li>Dashboard 3</li>
              <li>Dashboard 4</li>
            </ol>
          )}
        </div>
        <div
          className="nav-card"
          id="Mon"
          onClick={handleChange.bind(this, "Mon")}
        >
          <span className="nav-content">
            <Monlogo
              fill={navVis[1] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[1] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
              fontSize={"4rem"}
            />{" "}
            <p className={navVis[1] ? "nav-txt color-alt" : "nav-txt"}>
              Monitoring
            </p>
          </span>
          {navVis[1] && (
            <ol className="sub-content">
              <li
                className={props[1] === "Health" ? "highlight" : ""}
                onClick={handleChange.bind(this, "Health")}
              >
                Health
              </li>
              <li>Trends</li>
              <li>Mission</li>
              <li>Telementry Log</li>
              <li>System Log</li>
            </ol>
          )}
        </div>
        <div
          className="nav-card"
          id="System"
          onClick={handleChange.bind(this, "System")}
        >
          <span className="nav-content">
            <Syslogo
              fill={navVis[2] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[2] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
            />
            <p className={navVis[2] ? "nav-txt color-alt" : "nav-txt"}>
              System
            </p>
          </span>
          {navVis[2] && (
            <ol className="sub-content">
              <li
                className={props[1] === "TeleOp" ? "highlight" : ""}
                onClick={handleChange.bind(this, "TeleOp")}
              >
                Tele Operation
              </li>
              <li>Over The Air Update</li>
              <li>Backup</li>
              <li>Settings</li>
            </ol>
          )}
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <Setlogo
              fill={navVis[3] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[3] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
            />
            <p className={navVis[3] ? "nav-txt color-alt" : "nav-txt"}>Setup</p>
          </span>
          {navVis[3] && (
            <ol className="sub-content">
              <li>Health</li>
              <li>Trends</li>
              <li>Mission</li>
              <li>Telementry Log</li>
              <li>System Log</li>
            </ol>
          )}
        </div>
        <div
          className="nav-card"
          id="Administration"
          onClick={handleChange.bind(this, "Administration")}
        >
          <span className="nav-content">
            <Admlogo
              fill={navVis[4] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[4] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
            />
            <p className={navVis[4] ? "nav-txt color-alt" : "nav-txt"}>
              Administration
            </p>
          </span>
          {navVis[4] && (
            <ol className="sub-content adm">
              <li
                className={props[1] === "customer" ? "highlight" : ""}
                onClick={handleChange.bind(this, "customer")}
              >
                Customer Management
              </li>
              <li
                className={props[1] === "user" ? "highlight" : ""}
                onClick={handleChange.bind(this, "user")}
              >
                User Management
              </li>
              <li>Variant Management</li>
              <li
                className={props[1] === "vehicle" ? "highlight" : ""}
                onClick={handleChange.bind(this, "vehicle")}
              >
                Vehicle Management
              </li>
              <li>Software Management</li>
              <li>Backups</li>
              <li>Settings</li>
            </ol>
          )}
        </div>
        <div className="nav-card">
          <span className="nav-content">
            <Helplogo
              fill={navVis[5] ? "#FD841F" : "#FFFFFF7F"}
              stroke={navVis[5] ? "#FD841F" : "transparent"}
              className="nav-logo"
              width={"1.5rem"}
            />
            <p className={navVis[5] ? "nav-txt color-alt" : "nav-txt"}>Help</p>
          </span>
        </div>
      </div>
    </nav>
  );
}
