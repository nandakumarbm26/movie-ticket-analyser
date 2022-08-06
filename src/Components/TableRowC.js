import React, { useState } from "react";
import { TableRow, TableCell, TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateModelIndex, deleteModelIndex } from "../redux/action";

function App({ index, data, line, sample }) {
  const [model, setModel] = useState(data);
  const dispatch = useDispatch();
  const [attribute, setAttribute] = useState("");
  const [sam, setSam] = useState(
    sample[line].slice(model.start - 1, model.end)
  );
  React.useEffect(() => {
    setSam(sample[line].slice(model.start - 1, model.end));
  }, [model]);
  function createData(name, start, end, maxlength) {
    return { name, start, end, maxlength };
  }
  return (
    <TableRow
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <TextField maxRows={1} onChange={(e) => setAttribute(e.target.value)} />
      </TableCell>
      <TableCell align="right">{sam}</TableCell>

      <TableCell align="right">{line + 1}</TableCell>

      <TableCell align="right">
        <TextField
          type="number"
          defaultValue={model.start}
          onChange={(e) => setModel({ ...model, maxlength: e.target.value })}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          type="number"
          defaultValue={model.end}
          onChange={(e) => setModel({ ...model, end: e.target.value })}
        />
      </TableCell>
      <TableCell align="right">
        <TextField
          type="number"
          defaultValue={model.maxlength}
          onChange={(e) => setModel({ ...model, maxlength: e.target.value })}
        />
      </TableCell>

      <TableCell align="right">
        <Button
          onClick={() => {
            dispatch(
              updateModelIndex(
                createData(attribute, model.start, model.end, model.maxlength),
                index,
                line
              )
            );
            setModel(
              createData(attribute, model.start, model.end, model.maxlength),
              index,
              line
            );
          }}
        >
          Update
        </Button>
      </TableCell>
      <TableCell align="right">
        <Button
          color="error"
          onClick={() => dispatch(deleteModelIndex(index, line))}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}

export default App;
