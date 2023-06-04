import { CartPage } from "../Pages/Cart"
import { Home } from "../Pages/Home"
import { LoginPage } from "../Pages/Login"
import { ProductPage } from "../Pages/ProductPage"
import { RegisterPage } from "../Pages/Register"
import { Showcase } from "../Pages/Showcase"
import { Box } from "./style"
import { Routes as Rotas,Route } from "react-router-dom"
import { ButtonScroll } from "../Components/ButtonScroll"
import { AccountPage } from "../Pages/Account"
import { useEffect } from "react"


export const Routes=()=>{
   

    return  <Box>
        <Rotas>
            <Route path="/" element={<Home />}   />
            <Route path="/products" element={<Showcase />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="login" element={<LoginPage/>} />
            <Route path="register" element={<RegisterPage/>} />
            <Route path="/account" element={<AccountPage/>} />
        </Rotas>
        <ButtonScroll />
    </Box>

}