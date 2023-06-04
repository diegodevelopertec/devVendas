import { BodyApp } from "./style"
import React from "react"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"
import { Routes } from "./Routes"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react"

export const App=()=>{
 

  return <BodyApp>

    <Header />
    <Routes />
    <Footer />
    <ToastContainer  theme="colored" />
  </BodyApp>

}
export default App
