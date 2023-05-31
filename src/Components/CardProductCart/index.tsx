import { ProductType } from "../../types/product"
import { Box, BoxLeft, BoxRight } from "./style"
import LixeiraIcon from './../../assets/icons/lixeira.png'
import { removeProductCart } from "../../Redux/slices/cartSlice"
import { useDispatch } from "react-redux"
import {toast}from 'react-toastify'



type Props={
    product:ProductType
}


export const CartProductCart=({product}:Props)=>{
    const dispatcth=useDispatch()


    const removeProducToCart=()=>{
        dispatcth(removeProductCart(product.id))
        toast.success('removido do carrinho')
    }
    return <Box>
        <BoxLeft>
            <div className="cx-img">
               <img src={product.image} alt="" />
            </div>
            <div className="cx-left">
                <h2>{product.name}</h2>
                <span className="qdt-product">Quantidade:{product.qdt}</span>
            </div>
        </BoxLeft>
        <BoxRight>
            <div className="righ-one">
                <span >R${product.price.toFixed(2).replace('.',',')}</span>
            </div>
            <div className="right-two">
                <img src={LixeiraIcon} alt="" onClick={removeProducToCart} />
            </div>
        </BoxRight>
    
    </Box>
}