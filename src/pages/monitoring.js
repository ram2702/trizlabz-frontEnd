import React from "react";
import Navbar from "../components/navbar";
import Health from "../components/health.monitoring";
import CompPop from "../popups/comp.health";
import Keycloak from "keycloak-js";
import keycloakConfig from "../auth/keycloak.json";
import "../css/monitoring.css";
import "../css/core.css";
export default function Monitoring(props) {
  console.log(props);
  const keycloak = new Keycloak(keycloakConfig);
  const [token, setToken] = React.useState();
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    keycloak
      .init({ onLoad: "login-required", promiseType: "native" })
      .then((authenticated) => {
        if (authenticated) {
          console.log("user is authenticated");
          setToken(keycloak.token);
        } else {
        }
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="page-cont">
        <Navbar props={["Monitoring", "Health"]} />
        <Health props={token} />
      </div>
    </>
  );
}
