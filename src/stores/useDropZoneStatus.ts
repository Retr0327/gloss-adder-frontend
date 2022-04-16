import { useReducer } from "react";
import { DISABLED, RESET } from "./constants";

type DropZoneState = {
  status: boolean;
};

type DropZoneAction = {
  type: typeof DISABLED;
  payload: boolean;
};

type ResetAction = {
  type: typeof RESET;
};
type ActionType = DropZoneAction | ResetAction;

const initialState: DropZoneState = {
  status: false,
};

const reducer = (state: DropZoneState, action: ActionType) => {
  switch (action.type) {
    case DISABLED:
      return { status: true };
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
