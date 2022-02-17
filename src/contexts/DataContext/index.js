import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";
import { createDataStore } from "../../stores/dataStore";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const dataStore = useLocalObservable(createDataStore);

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
}

export const useDataStore = () => useContext(DataContext);
