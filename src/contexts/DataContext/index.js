import React, { createContext, useContext } from "react";
import { useLocalObservable } from "mobx-react";
import { createDataStore } from "../../stores/dataStore";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const dataStore = useLocalObservable(createDataStore);

  // const [data, dispatch] = useReducer(dataReducer, initialState, () => {
  //   const localData = localStorage.getItem("data");
  //   return localData ? JSON.parse(localData) : initialState;
  // });

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(dataStore));
  // }, [dataStore]);

  return (
    <DataContext.Provider value={dataStore}>{children}</DataContext.Provider>
  );
}

export const useDataStore = () => useContext(DataContext);
