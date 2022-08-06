import axios from "axios";
import React from "react";
import Header from "./Header";
import { setModel, setTicketsData } from "../redux/action";
import ModelSelection from "./ModelSelection";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  TextareaAutosize,
  Radio,
  FormControlLabel,
  RadioGroup,
  Stack,
  Button,
  TextField,
  Table,
} from "@mui/material";
import { UploadFileRounded } from "@mui/icons-material";
import Card from "./Card";

function Detection() {
  const state = useSelector((state) => state.store);
  const [modelsList, setModelsList] = React.useState([]);
  const dispatch = useDispatch();
  const [method, setMethod] = React.useState("");
  const textRef = React.useRef();
  const [file, setFile] = React.useState();
  const [tickets, setTickets] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(" http://127.0.0.1:5050/list")
      .then((res) => {
        setModelsList(res.data.models);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useEffect(() => setTickets(state.ticketsData), [state.ticketsData]);
  return (
    <Box>
      <Header />

      <Stack sx={{ alignItems: "center", marginTop: "5%" }} spacing={3}>
        <ModelSelection modelsList={modelsList} />
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
        </Box>{" "}
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
                setFile(await e.currentTarget.files[0].text());
              }}
              type="file"
              hidden
            />
          </Button>
        )}
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "20vw" }}
          onClick={async () => {
            setLoading(true);
            if (method === "input") {
              await setTimeout(2000);
              await setFile(textRef.current.value);
            }
            axios
              .post("http://127.0.0.1:5050/detection", {
                data: file,
                model: state.detectionModel,
              })
              .then((res) => dispatch(setTicketsData(res.data.data)))
              .then(setLoading(false))
              .catch((err) => console.log(err));
          }}
        >
          Process
        </Button>
        {tickets !== [] &&
          tickets !== undefined &&
          tickets.map((d, i) => {
            console.log(JSON.stringify(d, null, 2));
            return (
              <div>
                <textarea
                  rows={2}
                  style={{ width: "80vw" }}
                  key={i}
                  value={JSON.stringify(d)}
                />
              </div>
            );
          })}
      </Stack>
    </Box>
  );
}

export default Detection;
