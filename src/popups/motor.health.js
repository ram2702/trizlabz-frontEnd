import React from "react";
import { useNavigate } from "react-router-dom";
import Health from "../components/health.monitoring";
import Navbar from "../components/navbar";
import "../css/motorPopup.css";
import motorsIcon from "../img/motorsIcon.png";
import mpupop1 from "../img/mpopup1.svg";
import mpupop2 from "../img/mpopup2.svg";
import mpupop3 from "../img/mpopup3.svg";
import mpupop4 from "../img/mpopup4.svg";
import mpupop5 from "../img/mpopup5.svg";
import Keycloak from "keycloak-js";
import keycloakConfig from "../auth/keycloak.json";

const baseKaaPlatformUrl = "https://cloud.kaaiot.com";
const endpointID = "851b64bd-9298-49be-9169-096c7d1e60a4";
const applicationID = "cc3kq5idblahfr7uq3q0";

export default function MotorPop(props) {
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState();
  const token = props.props;
  const keycloak = new Keycloak(keycloakConfig);
  const [visible, setVisible] = React.useState(true);
  const [key, setKey] = React.useState();
  const navigate = useNavigate();
  let motorPar;

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
    motorPar = posts[key].motor_parameters[0].values;
    console.log(motorPar);
  }

  function handleClick() {
    props.showPop("Motor", false);
    navigate("/monitoring/health");
  }
  return (
    <>
      {visible && motorPar && (
        <div className="pop-cont">
          <article className="pop-box">
            <span className="pop-head">
              <img src={motorsIcon} alt="Icon" width={38.53} height={30.7} />
              <h4>Motor</h4>
              <button onClick={handleClick}></button>
            </span>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={mpupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.BatVoltage} V</h6>
                    <p>Battery Voltage</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Mtr1Amp} A</h6>
                    <p>Motor Amp1</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Mtr2Amp} A</h6>
                    <p>Motor Amp2</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={mpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Mtr1Speed} rpm</h6>
                    <p>Speed 1</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Mtr2Speed} rpm</h6>
                    <p>Speed 2</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Enc1Speed} rpm</h6>
                    <p>Enc Speed</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={mpupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.Enc2Speed} rpm</h6>
                    <p>Enc Speed 1</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.DigVoltage} V</h6>
                    <p>Digital Voltage</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.CtrlrVoltage} V</h6>
                    <p>Controller Voltage</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats last-stat">
                <span className="stat-one">
                  <img
                    src={mpupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.MCUTemp}&#176; C</h6>
                    <p>MCU Temperature</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={mpupop5}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{motorPar.HeatsinkTemp}&#176; C</h6>
                    <p>Heatsink Temperature</p>
                  </span>
                </span>
              </article>
            </div>
          </article>
        </div>
      )}
    </>
  );
}
