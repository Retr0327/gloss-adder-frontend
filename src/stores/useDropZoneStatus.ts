import { useReducer } from "react";

type DropZoneState = {
  status: boolean;
};

type DropZoneAction = {
  type: "disabled";
  payload: boolean;
};

type ResetAction = {
  type: "reset";
};
type ActionType = DropZoneAction | ResetAction;

const initialState: DropZoneState = {
  status: false,
};

const reducer = (state: DropZoneState, action: ActionType) => {
  switch (action.type) {
    case "disabled":
      return { status: true };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const useDropZoneStatus = () => {
  return useReducer(reducer, initialState);
};

export default useDropZoneStatus;
