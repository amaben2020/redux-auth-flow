"use client";
import { ReactNode } from "react";
import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
import { PersistGate } from "redux-persist/integration/react";

import store from "../../redux/store/store";

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  let persistor = persistStore(store);
  return <PersistGate persistor={persistor}>{children}</PersistGate>;
};

export default ReduxProvider;
