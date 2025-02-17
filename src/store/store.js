import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { apiSlice } from "../services/api";
import { 
 authReducers, 
 countryReducers, 
 fixtureDetailsReducers, 
 notificationReducers,
 paymentHistoryReducers,
 paymentReducers,
 publicPredictionsReducers,
 subscriptionReducers,
 } from "@/redux/reducers";


// Cart persistence configuration
const notificationsPersistConfig = {
  key: "notifications",
  storage,
  whitelist: ["notifications"],
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  auth: authReducers,
  publicpredictions: publicPredictionsReducers,
  countries: countryReducers,
  fixturedetails: fixtureDetailsReducers,
  payment: paymentReducers,
  subscription: subscriptionReducers,
  paymenthistory: paymentHistoryReducers,
  notifications: persistReducer(notificationsPersistConfig, notificationReducers),
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
