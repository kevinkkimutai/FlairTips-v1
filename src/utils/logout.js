"use client"
import { clearUser } from "@/redux/reducers/AuthReducers";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";

export const logout = () => {
  const dispatch = useDispatch();
  Cookies.remove("token");
  dispatch(clearUser());

};
