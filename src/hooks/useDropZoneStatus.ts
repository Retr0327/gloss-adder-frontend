import { useReducer } from "react";
import { DISABLED, RESET } from "src/constants";
import { DropZoneState, ActionType } from "types";

const initialState: DropZoneState = {
  status: false,
  process: "upload",
};

const reducer = (state: DropZoneState, action: ActionType) => {
  switch (action.type) {
    case DISABLED:
      return { ...state, status: true, process: action.payload };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

const useDropZoneStatus = () => {
  return useReducer(reducer, initialState);
};

export default useDropZoneStatus;
