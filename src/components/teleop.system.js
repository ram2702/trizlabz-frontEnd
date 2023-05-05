import React from "react";
import "../css/teleop.css";
import {
  Box,
  Stack,
  Slider,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Map from "../img/map1.png";
import Placeholder from "../img/livefeed.png";
import { Joystick } from "react-joystick-component";
import stick from "../img/stick.png";
import base from "../img/base.png";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

const selectStyles = {
  height: "35px",
  color: "white",
  marginRight: "2vw",
  ".MuiOutlinedInput-notchedOutline": {
    borderRadius: "0.5rem",
    borderColor: "rgba(228, 219, 233, 1)",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0.5rem",
    borderColor: "rgba(228, 219, 233, 1)",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0.5rem",
    borderColor: "rgba(228, 219, 233, 1)",
  },
  ".MuiSvgIcon-root ": {
    fill: "white !important",
  },
};

export default function TeleOp() {
  const [personName, setPersonName] = React.useState([]);

  const theme = createTheme({
    palette: {
      neutral: {
        main: "#FD841F",
        contrastText: "#fff",
      },
    },
  });

  const [value, setValue] = React.useState(30);
  const [age, setAge] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tele-subcont">
      <article className="tele-drop-cont">
        <FormControl
          className="tele-drop tele-drop-one"
          sx={{ padding: "none", minWidth: 230, maxHeight: 10 }}
        >
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={selectStyles}
          >
            <MenuItem value="">Select Deployment</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className="tele-drop tele-drop-one"
          sx={{ padding: "none", minWidth: 190, maxHeight: 10 }}
        >
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={selectStyles}
          >
            <MenuItem value="">Select Fleet</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          className="tele-drop tele-drop-one"
          sx={{ minWidth: 190, maxHeight: 10 }}
        >
          <Select
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={selectStyles}
          >
            <MenuItem value="">Select Vehicle</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </article>

      <article className="tele-map">
        <span className="map-cont">
          <img src={Map} alt={"Map Image"} />
        </span>
        <span className="map-desc">
          <h3>Robot Description</h3>
          <p>
            Robot Id:
            <span style={{ color: "rgba(255,255,255,0.5)" }}> Celer 12 </span>
            <br />
            Velocity: <span style={{ color: "#FD841F" }}>1.56m&#47;s</span>{" "}
            <br />
            Yaw Rate: <span style={{ color: "#FD841F" }}>0.5m&#47;s</span>
          </p>
          <h4 className="desc">Max Yaw Rate</h4>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "49px",
                    marginTop: "-1.25vh",
                  }}
                >
                  -
                </span>
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                  color="neutral"
                />
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "29px",
                    marginTop: "-1vh",
                    fontWeight: "600",
                  }}
                >
                  +{" "}
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontFamily: "Source Sans Pro",
                    marginTop: "-0.5vh",
                  }}
                >
                  0.75m&#47;s
                </span>
              </Stack>
            </Box>
          </ThemeProvider>
          <h4 className="desc">Max Velocity</h4>
          <ThemeProvider theme={theme}>
            <Box sx={{ width: 300 }}>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
                style={{ width: "100%" }}
              >
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "49px",
                    marginTop: "-1.25vh",
                  }}
                >
                  -
                </span>
                <Slider
                  aria-label="Volume"
                  value={value}
                  onChange={handleChange}
                  color="neutral"
                />
                <span
                  style={{
                    color: "#fd841f",
                    fontSize: "29px",
                    marginTop: "-1vh",
                    fontWeight: "600",
                  }}
                >
                  +{" "}
                </span>
                <span
                  style={{
                    color: "white",
                    fontSize: "15px",
                    fontFamily: "Source Sans Pro",
                    marginTop: "-0.5vh",
                  }}
                >
                  1.75m&#47;s
                </span>
              </Stack>
            </Box>
          </ThemeProvider>
        </span>
      </article>
      <article className="livefeed-cont">
        <img className="livefeed-video" src={Placeholder} alt="Livefeed" />
        <p>Live</p>

        <span className="joy">
          <Joystick size={200} baseImage={base} stickImage={stick} />
        </span>
      </article>
    </div>
  );
}
