import React, { ReactNode } from "react";
import { PersistGate } from "redux-persist/integration/react";
import store from "../../../redux/store/store";
import { persistStore } from "redux-persist";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  let persistor = persistStore(store);
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
};

export default ReduxProvider;
