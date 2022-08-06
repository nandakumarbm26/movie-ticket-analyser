import {
  SETMODEL,
  UPDATE_MODEL_INDEX,
  SET_DETECTION_MODEL,
  DELETE_MODEL_INDEX,
  SET_TICKETS_DATA,
} from "./constant";

const initialState = {
  model: [
    [
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
    ],
    [
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
      { attribute: "movie", start: 1, end: 21, maxlength: 21 },
    ],
  ],
  detectionModel: "",
  ticketsData: [],
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case SETMODEL: {
      return {
        ...state,
        model: action.params.model,
      };
    }
    case UPDATE_MODEL_INDEX: {
      state.model[action.params.line][action.params.index] =
        action.params.model;
      return {
        ...state,
      };
    }
    case DELETE_MODEL_INDEX: {
      delete state.model[action.params.line][action.params.index];
      return {
        ...state,
      };
    }
    case SET_DETECTION_MODEL: {
      return {
        ...state,
        detectionModel: action.params.model,
      };
    }
    case SET_TICKETS_DATA: {
      return {
        ...state,
        ticketsData: action.params.model,
      };
    }
    default:
      return state;
  }
}
