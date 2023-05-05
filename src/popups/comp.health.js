import React from "react";
import { useNavigate } from "react-router-dom";
import Health from "../components/health.monitoring";
import Navbar from "../components/navbar";
import "../css/compPopup.css";
import computerIcon from "../img/computerIcon.png";
import cpupop1 from "../img/cpupop1.svg";
import cpupop2 from "../img/cpupop2.svg";
import cpupop3 from "../img/cpupop3.svg";
import cpupop4 from "../img/cpupop4.svg";
import Keycloak from "keycloak-js";
import keycloakConfig from "../auth/keycloak.json";

const baseKaaPlatformUrl = "https://cloud.kaaiot.com";
const endpointID = "851b64bd-9298-49be-9169-096c7d1e60a4";
const applicationID = "cc3kq5idblahfr7uq3q0";

export default function CompPop(props) {
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState();
  const token = props.props;
  const keycloak = new Keycloak(keycloakConfig);
  const [visible, setVisible] = React.useState(true);
  const [key, setKey] = React.useState();
  const navigate = useNavigate();
  let compPar;

  React.useEffect(() => {
    if (token) fetchData();
  }, [token]);

  const fetchData = async () => {
    if (token) {
      try {
        const url = `${baseKaaPlatformUrl}/epts/api/v1/applications/${applicationID}/time-series/last?endpointId=${endpointID}&timeSeriesName=computer_parameters, motor_parameters, power_parameters`;
        const response = await fetch(url, {
          headers: {
            Accept: "application/json",
            Authorization: `bearer ${token}`,
          },
        });
        const data = await response.json();
        console.log(data);
        for (let key1 in data) {
          setKey(key1);
        }
        setPosts(data);
      } catch (err) {
        setError(err);
      }
    } else {
      setError("Not authenticated");
      console.log("Hi");
    }
  };

  if (key) {
    compPar = posts[key].computer_parameters[0].values;
    console.log(compPar);
  }

  function handleClick() {
    props.showPop("Comp", false);
    navigate("/monitoring/health");
  }
  return (
    <>
      {visible && compPar && (
        <div className="comp-pop-cont">
          <article className="comp-pop-box">
            <span className="comp-pop-head">
              <img src={computerIcon} alt="Icon" width={38.53} height={30.7} />
              <h4>Computer</h4>
              <button onClick={handleClick}></button>
            </span>
            <div className="comp-pop-card">
              <h5>CPU 1</h5>
              <article className="comp-card-stats">
                <span className="comp-stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="comp-stat-txt">
                    <h6>{compPar.Cr1CPUUtil}%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className="comp-stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="comp-stat-txt">
                    <h6>{compPar.Cr1CPUTemp}&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className="comp-stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="comp-stat-txt">
                    <h6>{compPar.Cr1FanSpeed} rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className="comp-stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="comp-stat-txt">
                    <h6>{compPar.Cr1Memory} GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="comp-pop-card">
              <h5>CPU 2</h5>
              <article className=" comp-card-stats">
                <span className=" comp-stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr2CPUUtil}%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr2CPUTemp}&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr2FanSpeed} rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr2Memory} GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className=" comp-pop-card">
              <h5>CPU 3</h5>
              <article className=" comp-card-stats">
                <span className=" comp-stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr3CPUUtil}%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr3CPUTemp}&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr3FanSpeed} rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr3Memory} GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
            <div className=" comp-pop-card">
              <h5>CPU 4</h5>
              <article className=" comp-card-stats">
                <span className=" comp-stat-one">
                  <img
                    src={cpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr4CPUUtil}%</h6>
                    <p>Utilization</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr4CPUTemp}&#176; C</h6>
                    <p>CPU Temp</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr4FanSpeed} rpm</h6>
                    <p>Fan Speed</p>
                  </span>
                </span>
                <span className=" comp-stat-one">
                  <img
                    src={cpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className=" comp-stat-txt">
                    <h6>{compPar.Cr4Memory} GB</h6>
                    <p>Memory</p>
                  </span>
                </span>
              </article>
            </div>
          </article>
        </div>
      )}
      <div className="page-cont">
        {/* <Navbar />
        <Health /> */}
      </div>
    </>
  );
}
