"use client"; 
import { Provider, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { persistor, store } from "@/store/store";
import { SessionProvider } from "next-auth/react";


export default function ClientProvider({ children }) {


  return (
    <Provider store={store}>
    <SessionProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            theme="light"
          />
   
        </SessionProvider>
    </Provider>
  );
}
