import { CartPage } from "../Pages/Cart"
import { Home } from "../Pages/Home"
import { ProductPage } from "../Pages/ProductPage"
import { Showcase } from "../Pages/Showcase"
import { Box } from "./style"
import { Routes as Rotas,Route } from "react-router-dom"


export const Routes=()=>{
    return  <Box>
        <Rotas>
            <Route path="/" element={<Home />}   />
            <Route path="/products" element={<Showcase />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="cart" element={<CartPage />} />
        </Rotas>
    </Box>

}