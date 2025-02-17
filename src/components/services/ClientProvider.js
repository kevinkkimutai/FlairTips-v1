"use client"; 
import { Provider, useDispatch } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from "@/store/store";


export default function ClientProvider({ children }) {


  return (
    <Provider store={store}>
    
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
      
    </Provider>
  );
}
