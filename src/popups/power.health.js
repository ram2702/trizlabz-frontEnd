import React from "react";
import { useNavigate } from "react-router-dom";

import "../css/powerPopup.css";
import powerIcon from "../img/powerIcon.png";
import ppupop1 from "../img/ppopup1.svg";
import ppupop2 from "../img/ppopup2.svg";
import ppupop3 from "../img/ppopup3.svg";
import ppupop4 from "../img/ppopup4.svg";
import ppupop5 from "../img/ppopup5.svg";
import ppupop6 from "../img/ppopup6.svg";

const baseKaaPlatformUrl = "https://cloud.kaaiot.com";
const endpointID = "851b64bd-9298-49be-9169-096c7d1e60a4";
const applicationID = "cc3kq5idblahfr7uq3q0";

export default function PowerPop(props) {
  const [error, setError] = React.useState(null);
  const [posts, setPosts] = React.useState();
  const token = props.props;
  const [tags, setTags] = React.useState([false, false, false]);
  const [visible, setVisible] = React.useState(true);
  const [key, setKey] = React.useState();
  const navigate = useNavigate();
  let powerPar;

  function handleChange(event) {
    if (
      (event.target.className === "rail" ||
        event.target.className === "border rail") &&
      tags
    ) {
      setTags((prev) => [!prev[0], false, false]);
    } else if (
      (event.target.className === "subsys" ||
        event.target.className === "border subsys") &&
      tags
    ) {
      setTags([false, !tags[1], false]);
    }
    if (
      (event.target.className === "bms" ||
        event.target.className === "border bms") &&
      tags
    ) {
      setTags([false, false, !tags[2]]);
    }
  }
  console.log(tags);

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
    powerPar = posts[key].power_parameters[0].values;
    // console.log(powerPar);
  }

  function handleClick() {
    props.showPop("Power", false);
    navigate("/monitoring/health");
  }
  return (
    <>
      {visible && powerPar && (
        <div className="pop-cont">
          <article className="pop-box">
            <span className="pop-head">
              <img src={powerIcon} alt="Icon" width={26.53} height={30.7} />
              <h4>Power System</h4>
              <button onClick={handleClick}></button>
            </span>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={ppupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.PckVolt} V</h6>
                    <p>Pack Voltage</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.SoC} %</h6>
                    <p>SoC</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop6}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.SoH} rpm</h6>
                    <p>SoH</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={ppupop3}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.PckCurrent} A</h6>
                    <p>Pack Current</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop4}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.PckTemp} &#176; C</h6>
                    <p>Pack Temparature</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop5}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.NoofChrCycle} </h6>
                    <p>Charge Cycle</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats">
                <span className="stat-one">
                  <img
                    src={ppupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.MaxCellVoltID} V</h6>
                    <p>Max Cell Volt ID</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop1}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.MinCellVoltID} %</h6>
                    <p>Min Cell Volt ID</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop6}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.BMSFault} </h6>
                    <p>BMS</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-card">
              <article className="card-stats last-stat">
                <span className="stat-one">
                  <img
                    src={ppupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.BatState} V </h6>
                    <p>Battery State</p>
                  </span>
                </span>
                <span className="stat-one">
                  <img
                    src={ppupop2}
                    alt="stat icon"
                    width={36.03}
                    height={36.03}
                  />
                  <span className="stat-txt">
                    <h6>{powerPar.CellBalStat} %</h6>
                    <p>Cell balancing State</p>
                  </span>
                </span>
              </article>
            </div>
            <div className="pop-tag">
              <span className="tag-items">
                <p
                  className={tags[0] ? "border rail" : "rail"}
                  onClick={handleChange.bind(this)}
                >
                  Power Rail 1 & 2
                </p>
                <p
                  className={tags[1] ? "border subsys" : "subsys"}
                  onClick={handleChange.bind(this)}
                >
                  Subsystem
                </p>
                <p
                  className={tags[2] ? "border bms" : "bms"}
                  onClick={handleChange.bind(this)}
                >
                  BMS
                </p>
              </span>
            </div>
            {tags[0] && (
              <span className="railTag">
                <p>5 v Rail</p>
                <p>12 v Rail</p>
                <p>48 v Rail</p>
                <p>CPU 1</p>
                <p>CPU 2</p>
                <p>CPU 3</p>
                <p>CPU 4</p>
                <p>Reserve 1</p>
              </span>
            )}
            {tags[1] && (
              <span className="railTag subTag">
                <p>IdealtLight</p>
                <p>LidarMtr</p>
                <p>Addon5V</p>
                <p>Addon12V</p>
                <p>MtrCtrl48V</p>
                <p>EtherSW</p>
                <p>VMOT1&2</p>
                <p>Reserve 2</p>
              </span>
            )}
            {tags[2] && (
              <span className="railTag bmstag">
                <p>OverVoltC</p>
                <p>UnderVoltC</p>
                <p>OvrCurChr</p>
                <p>OvrCurDis</p>
                <p>ShortCkt</p>
                <p>LowVolt</p>
                <p>CellOutBal&2</p>
                <p>FETFault</p>
              </span>
            )}
          </article>
        </div>
      )}
    </>
  );
}
