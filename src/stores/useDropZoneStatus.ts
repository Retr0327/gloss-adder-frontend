import { useReducer } from "react";
import { DISABLED, RESET } from "./constants";

type DropZoneState = {
  status: boolean;
  process: string;
};

type DropZoneAction = {
  type: typeof DISABLED;
  payload: string;
};

type ResetAction = {
  type: typeof RESET;
};
type ActionType = DropZoneAction | ResetAction;

const initialState: DropZoneState = {
  status: false,
  process: "upload",
};

const reducer = (state: DropZoneState, action: ActionType) => {
  switch (action.type) {
    case DISABLED:
      return { status: true, process: action.payload };
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
