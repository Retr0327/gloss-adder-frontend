import { DropZoneState } from "types";
import { DISABLED, RESET } from "src/constants";
import React, { createContext, useContext } from "react";
import useDropZoneStatus from "src/hooks/useDropZoneStatus";

type ContextProviderProps = {
  children: React.ReactNode;
};

type DropZoneAction = {
  type: typeof DISABLED;
  payload: string;
};

type ResetAction = {
  type: typeof RESET;
};
type ActionType = DropZoneAction | ResetAction;

type DropZoneContextType = {
  dropZone: DropZoneState;
  dispatch: React.Dispatch<ActionType>;
};

const DropZoneContext = createContext({} as DropZoneContextType);

const useDropZone = () => {
  return useContext(DropZoneContext);
};

const DropZoneProvider = ({ children }: ContextProviderProps) => {
  const [dropZone, dispatch] = useDropZoneStatus();

  return (
    <DropZoneContext.Provider value={{ dropZone, dispatch }}>
      {children}
    </DropZoneContext.Provider>
  );
};

export { useDropZone, DropZoneProvider };
