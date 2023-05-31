import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/store";

export const useGlobalRedux:TypedUseSelectorHook<RootState>=useSelector


