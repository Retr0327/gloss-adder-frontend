import React, { createContext, useContext } from "react";
import useDropZoneStatus from "src/stores/useDropZoneStatus";

type ChildrenType = {
  children: React.ReactNode;
};

const DropZoneContext = createContext(null as any);

const useDropZone = () => {
  return useContext(DropZoneContext);
};

const DropZoneProvider = ({ children }: ChildrenType) => {
  const [dropZone, dispatch] = useDropZoneStatus();

  return (
    <DropZoneContext.Provider value={{ dropZone, dispatch }}>
      {children}
    </DropZoneContext.Provider>
  );
};

export { useDropZone, DropZoneProvider };
