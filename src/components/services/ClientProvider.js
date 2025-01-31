"use client"; 
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from "@/store/store";
import { SocketProvider } from "@/services/SocketContext";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <SocketProvider>
        {/* You can add a loading spinner or any fallback UI here */}
        <PersistGate loading={null} persistor={persistor}>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            theme="light"
          />
        </PersistGate>
      </SocketProvider>
    </Provider>
  );
}
