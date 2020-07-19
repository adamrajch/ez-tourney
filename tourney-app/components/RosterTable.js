import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  custom: {
    background: "black",
    color: "white",
    // overflow: "hidden",
  },
  header: {
    color: "#32e0c4",
  },
});

function createData(name, loc, dob, email) {
  return { name, loc, dob, email };
}

export default function SimpleTable(props) {
  const classes = useStyles();
  let players = props.players;
  return (
    <TableContainer
      className={classes.custom}
      component={Paper}
      // overflow="hidden"
    >
      <Table
        className={classes.table}
        aria-label="simple table"
        // overflow="hidden"
      >
        <TableHead className={classes.header}>
          <TableRow className={classes.header}>
            <TableCell className={classes.header}>ID</TableCell>
            <TableCell className={classes.header}>Name</TableCell>
            <TableCell className={classes.header} align="right">
              Country
            </TableCell>
            <TableCell className={classes.header} align="right">
              D.O.B
            </TableCell>
            <TableCell className={classes.header} align="right">
              Email
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.custom}>
          {players.map((row) => (
            <TableRow className={classes.custom} key={row.id}>
              <TableCell className={classes.custom} component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className={classes.custom} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={classes.custom} align="right">
                {row.country}
              </TableCell>
              <TableCell className={classes.custom} align="right">
                {row.dob}
              </TableCell>
              <TableCell className={classes.custom} align="right">
                {row.email}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
