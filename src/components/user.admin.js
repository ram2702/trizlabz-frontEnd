import React from "react";
import "../css/customer.css";
import {
  vehicleIcon,
  customerIcon,
  computerIcon,
  searchIcon,
  profilePic,
} from "../img/monitoringImg";
import { alpha, styled } from "@mui/material/styles";
import {
  faFilter,
  faSearch,
  faUpload,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TextField,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import BasicTable from "./cusTable";
import { Link } from "react-router-dom";
import UserTable from "./userTable";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#b3b3b3",
  },
  "& .MuiFormLabel-root": {
    color: "#b3b3b3",
  },
  "& .MuiFormLabel-disabled": {
    color: "#b3b3b3",
    borderColor: "#b3b3b3",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#b3b3b3",
  },

  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "#b3b3b3",
    },

    "& fieldset": {
      borderColor: "#b3b3b3",
      color: "#b3b3b3",
    },
    "&:hover fieldset": {
      borderColor: "#b3b3b3",
      color: "#b3b3b3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#b3b3b3",
      color: "#b3b3b3",
    },
  },
});

export default function User({ props }) {
  console.log(props);
  const [showPassword, setShowPassword] = React.useState(false);
  const [form, setForm] = React.useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const searchIcon = (
    <FontAwesomeIcon className="search-icon" icon={faSearch} />
  );
  const filterIcon = <FontAwesomeIcon icon={faFilter} />;
  const uploadIcon = <FontAwesomeIcon icon={faUpload} />;
  const trashIcon = <FontAwesomeIcon icon={faTrash} />;
  const tick = <FontAwesomeIcon icon={faCheck} className="tick" />;
  const [vis, setVis] = React.useState(props);
  const [modVis, setmodVis] = React.useState(false);

  function handleChange(event) {
    event.preventDefault();

    setForm((prevForm) => {
      return {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
    });
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  function handleClick(event, arg) {
    event.preventDefault();
    // console.log(arg);

    if (arg === "addVis") setVis((vis) => !vis);
    else if (arg === "modVis") setmodVis((vis) => !vis);
    else setVis((vis) => !vis);
  }

  const callbackfun = (val) => {
    setmodVis(val);
  };

  return (
    <div className="cus-subcont">
      <article className="cus-sub-head">
        <span className="cus-main-txt">
          <h1>iFLEET</h1>
          <h3>Welcome to Trizlabz</h3>
        </span>
        <article className="cus-cards">
          <div className="cus-card-items">
            <h3 className="cus-card-title">Vehicles</h3>
            <span className="cus-card-label">
              <img
                className="cus-label-icon"
                src={vehicleIcon}
                alt="Vehicle Icon"
                height={42.7}
                width={42.7}
              />
              <h4 className="cus-label-text">7</h4>
            </span>
            <p className="cus-card-desc">No of Vehicles Deployed</p>
          </div>
          <div className="cus-card-items">
            <h3 className="cus-card-title">Users</h3>
            <span className="cus-card-label">
              <img
                className="cus-label-icon cus-label-icon-six"
                src={customerIcon}
                alt="Vehicle Icon"
                height={60}
                width={60}
              />
              <h4 className="cus-label-text">7</h4>
            </span>
            <p className="cus-card-desc">Total No. of Customers</p>
          </div>
        </article>
      </article>
      {vis && <h2 className="add-cus-head">Add User</h2>}
      {modVis && <h2 className="add-cus-head">Modify User</h2>}
      <div className="cus-box">
        {!vis && !modVis && (
          <>
            <article className="cus-box-no-cus">
              <h2>Users</h2>
              <div>
                <span>
                  {searchIcon}
                  <input
                    type={"text"}
                    placeholder={`Search`}
                    className="search-input"
                  />
                  <button className="search-filter">{filterIcon} Filter</button>
                  <button
                    name="addCustomer"
                    className="add-cus-button"
                    onClick={handleClick}
                  >
                    {" "}
                    + Add User{" "}
                  </button>
                </span>
              </div>
            </article>
            <article className="cus-box-content">
              {/* <p className="Empty-box">No Customers Added</p> */}
              <UserTable showModify={callbackfun} />
            </article>
          </>
        )}
        {vis && (
          <form className="add-cus-form">
            <div className="image-input">
              <img
                src={profilePic}
                alt="Profile Picture"
                width={103}
                height={103}
              />
              <span>
                <button className="upload-button">{uploadIcon} Upload</button>
                <button className="delete-button">{trashIcon} Delete</button>
              </span>
            </div>
            <span className="flex-row">
              <CssTextField
                label="User ID"
                className="text-field disabled-text"
                value={"CUS1001"}
                InputProps={{
                  readOnly: true,
                }}
              />
              <CssTextField
                label="Name"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="User Name"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="text-field"
                id="custom-css-outlined-input"
              />
              <CssTextField
                className="text-field"
                label="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                key={10}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="Email"
                type="email"
                className="text-field"
                id="custom-css-outlined-input"
              />
              <CssTextField
                label="Mobile"
                type="number"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="Role"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="form-button">
              <button
                className="upload-button cancel"
                onClick={handleClick.bind(this, "addVis")}
              >
                Cancel
              </button>
              <button
                className="delete-button submit"
                onClick={handleClick.bind(this, "addVis")}
              >
                &#10003; Submit
              </button>
            </span>
          </form>
        )}
        {modVis && (
          <form className="add-cus-form">
            <div className="image-input">
              <img
                src={profilePic}
                alt="Profile Picture"
                width={103}
                height={103}
              />
              <span>
                <button className="upload-button">{uploadIcon} Upload</button>
                <button className="delete-button">{trashIcon} Delete</button>
              </span>
            </div>
            <span className="flex-row">
              <CssTextField
                label="User ID"
                className="text-field disabled-text"
                value={"CUS1001"}
                InputProps={{
                  readOnly: true,
                }}
              />
              <CssTextField
                label="Name"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="User Name"
                name="username"
                value={form.username}
                onChange={handleChange}
                className="text-field"
                id="custom-css-outlined-input"
              />
              <CssTextField
                className="text-field"
                label="Password"
                name="password"
                value={form.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                key={10}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="Email"
                type="email"
                className="text-field"
                id="custom-css-outlined-input"
              />
              <CssTextField
                label="Mobile"
                type="number"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="flex-row">
              <CssTextField
                label="Role"
                className="text-field"
                id="custom-css-outlined-input"
              />
            </span>
            <span className="form-button">
              <button
                className="upload-button cancel"
                onClick={handleClick.bind(this, "addVis")}
              >
                Cancel
              </button>
              <button
                className="delete-button submit"
                onClick={handleClick.bind(this, "addVis")}
              >
                &#10003; Submit
              </button>
            </span>
          </form>
        )}
      </div>
    </div>
  );
}
