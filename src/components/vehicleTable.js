import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cusIcon, customerIcon, profilePic } from "../img/monitoringImg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faWarning } from "@fortawesome/free-solid-svg-icons";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1F1E25",
    color: "white",
    fontFamily: "Montserrat",
    border: 0,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: "white",
    border: 0,
    fontFamily: "Montserrat",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#232228",
    color: "white",
    border: 0,
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#1F1E25",
    color: "white",
    border: 0,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "ABC", "Conveyor", "Celer", 4.0),
  createData("Ice cream sandwich", "DEF", "Robotic Arm", "Celer", 4.3),
  createData("Eclair", "GHI", "Food Delivery", "Celer", 6.0),
  createData("Cupcake", "JKL", "Shelf Mover +1", "Ira", 4.3),
  createData("Gingerbread", "MNO", "Pallette Box", "Celer", 3.9),
];

export default function VehicleTable(props) {
  let i = 1;
  const trash = <FontAwesomeIcon icon={faTrash} />;
  const edit = <FontAwesomeIcon icon={faEdit} style={{ color: "#16151A" }} />;
  const warning = <FontAwesomeIcon icon={faWarning} style={{ color: "red" }} />;
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    props.showModify(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Table sx={{ minWidth: 700, border: 0 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Vehicle ID</StyledTableCell>
            <StyledTableCell align="center">Customer Name</StyledTableCell>
            <StyledTableCell align="center">Attachment Type</StyledTableCell>
            <StyledTableCell align="center">Variant</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <div className="name-cell">
                  <span>
                    {" "}
                    <img src={cusIcon} width={50} height={50} />
                  </span>
                  <span style={{ margin: "auto 0" }}>
                    <h3>AMR100{i++}</h3>
                  </span>
                </div>
              </StyledTableCell>
              <StyledTableCell align="center">{row.calories}</StyledTableCell>
              <StyledTableCell align="center">{row.fat}</StyledTableCell>
              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
              <StyledTableCell align="center">
                <button onClick={handleClick} className="delete-button submit">
                  {edit} Modify
                </button>
                <button
                  onClick={handleClickOpen}
                  className="upload-button cancel"
                >
                  {trash} Delete
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={open}
        className="delete-box"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          className="delete-box"
          sx={{
            backgroundColor: "#16151A",
            color: "white",
            borderColor: "transparent",
          }}
          id="alert-dialog-title"
        >
          {warning}&nbsp;
          {"Delete Customer"}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#16151A",
            border: "solid 0px transparent",
          }}
        >
          <DialogContentText
            sx={{ color: "grey" }}
            id="alert-dialog-description"
          >
            Are you sure you want to
            delete&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </DialogContentText>
        </DialogContent>
        <DialogActions
          sx={{
            backgroundColor: "#16151A",
            border: "4",
          }}
        >
          <Button
            sx={{ borderColor: "red", color: "white" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{ backgroundColor: "red", color: "white" }}
            onClick={handleClose}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </>
  );
}
