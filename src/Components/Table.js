import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRowC from "./TableRowC";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

export default function BasicTable({ data, sample }) {
  const state = useSelector((state) => state.store);
  const [model, setModel] = React.useState([]);
  React.useEffect(() => {
    setModel(state.model);
  }, [state]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: "90vw" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>sample value</TableCell>
            <TableCell align="right">line</TableCell>
            <TableCell align="right">start</TableCell>
            <TableCell align="right">end</TableCell>
            <TableCell align="right">maxlength</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {model.map((row, line) =>
            row.map((data, index) => (
              <TableRowC
                key={index}
                data={data}
                index={index}
                line={line}
                sample={sample}
              />
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
