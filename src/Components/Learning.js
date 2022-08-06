import {
  Box,
  TextareaAutosize,
  Radio,
  FormControlLabel,
  RadioGroup,
  Stack,
  Button,
  TextField,
} from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material";
import React from "react";
import Table from "./Table";
import Header from "./Header";
import { setModel } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function Learning() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.store);
  const [method, setMethod] = React.useState("");
  const textRef = React.useRef();
  const [sample, setSample] = React.useState("");
  const [file, setFile] = React.useState();
  const [theater, setTheater] = React.useState("");
  const [lineCount, setLineCount] = React.useState(1);

  return (
    <Box>
      <Header />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "10%",
          columnGap: "2vw",
        }}
      >
        <TextField
          onChange={(e) => setTheater(e.target.value)}
          label="Theater Name"
          sx={{ display: "block" }}
        />
        <TextField
          onChange={(e) => setLineCount(e.target.value)}
          label="line count in ticket"
          type="number"
          sx={{ display: "block" }}
        />
        <Box>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => setMethod(e.target.value)}
          >
            <FormControlLabel
              value="upload"
              control={<Radio />}
              label="Upload"
            />
            <FormControlLabel value="input" control={<Radio />} label="Input" />
          </RadioGroup>
        </Box>
      </Box>
      <Stack sx={{ alignItems: "center" }}>
        {method == "input" && (
          <Box>
            <TextareaAutosize
              ref={textRef}
              minRows={10}
              maxRows={10}
              aria-label="maximum height"
              placeholder="Enter ticket data"
              defaultValue=""
              style={{ width: "90vw", display: "block" }}
            />
            <Button
              onClick={() => {
                setFile(textRef.current.value);
                setSample(
                  textRef.current.value.split("\n").slice(0, lineCount)
                );
                dispatch(
                  setModel(
                    textRef.current.value.split("\n").slice(0, lineCount)
                  )
                );
              }}
              sx={{ width: "40vw", margin: "auto" }}
            >
              Submit
            </Button>
          </Box>
        )}
        {method === "upload" && (
          <Button
            variant="contained"
            component="label"
            fullWidth
            startIcon={<UploadFileRounded />}
            sx={{ color: "white", width: "50%", marginLeft: 10 }}
          >
            UPLOAD FILE
            <input
              onChange={async (e) => {
                setFile(e.currentTarget.files[0]);
                var text = await e.currentTarget.files[0].text();
                await dispatch(setModel(text.split("\n").slice(0, lineCount)));
                await setSample(text.split("\n").slice(0, lineCount));
              }}
              type="file"
              hidden
            />
          </Button>
        )}
        {file !== undefined && (
          <Box sx={{ width: "90vw" }}>
            <Table sample={sample} />
            <Button
              onClick={() => {
                axios
                  .post("http://localhost:5050/learning", {
                    model: state.model.map((n) => n.filter((f) => f)),
                    theater: theater,
                  })
                  .then((res, req) => alert(res.data.msg))
                  .catch((err) => console.log(err));
              }}
            >
              Learn
            </Button>
          </Box>
        )}
      </Stack>
    </Box>
  );
}

export default Learning;
