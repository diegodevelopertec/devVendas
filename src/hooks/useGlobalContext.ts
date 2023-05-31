import { useContext } from "react";
import { ContextGlobal } from "../Context/contextGlobal";

export const useGlobalContext=()=>useContext(ContextGlobal)