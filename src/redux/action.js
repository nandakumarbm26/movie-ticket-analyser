import {
  SETMODEL,
  UPDATE_MODEL_INDEX,
  SET_DETECTION_MODEL,
  DELETE_MODEL_INDEX,
  SET_TICKETS_DATA,
} from "./constant";

function createData(name, start, end, maxlength) {
  return { name, start, end, maxlength };
}
export const setModel = (strArr) => async (dispatch) => {
  var model = [];
  strArr.map((d) => model.push(predict(d)));
  let start = 0;
  let end = 0;
  let data = [];
  let result = [];
  model.map((dat, i) => {
    start = 0;
    end = 0;
    data = [];
    dat.map((d) => {
      start = end + 1;
      end = end + d;
      data.push(createData(" ", start, end, d));
    });
    result.push(data);
  });
  dispatch({ type: SETMODEL, params: { model: result } });
};

export const updateModelIndex = (data, index, line) => async (dispatch) => {
  dispatch({
    type: UPDATE_MODEL_INDEX,
    params: { model: data, index: index, line: line },
  });
};
export const setDetectionModelState = (data) => async (dispatch) => {
  dispatch({
    type: SET_DETECTION_MODEL,
    params: { model: data },
  });
};
export const setTicketsData = (data) => async (dispatch) => {
  dispatch({
    type: SET_TICKETS_DATA,
    params: { model: data },
  });
};
export const deleteModelIndex = (index, line) => async (dispatch) => {
  dispatch({
    type: DELETE_MODEL_INDEX,
    params: { index: index, line: line },
  });
};
const predict = (str) => {
  var count = 0;
  var i = 0;
  var length = [];
  var flag = 1;
  while (str[i] == " ") {
    i++;
    count++;
  }
  if (count != 0) {
    length.push(count);
  }
  count = 0;
  for (i = i; i < str.length; i++) {
    if (str[i] != " " && flag == 1) {
      count++;
    } else if (str[i] == " " && flag == 1) {
      flag = 0;
      count++;
    } else if (str[i] == " " && flag == 0) {
      count++;
    } else if (str[i] != " " && flag == 0) {
      length.push(count);
      count = 1;
      flag = 1;
    }
  }
  length.push(count);

  return length;
};
