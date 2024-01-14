"use client";
import { ReactNode } from "react";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import store from "../../redux/store/store";

const Loading = () => <div>Loading....</div>;

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
