import { BoxContent, BoxPage, BoxProductsCart, DataCart } from "./style"
import CartIcon from './../../assets/icons/cart.png'
import { useGlobalRedux } from "../../hooks/useGlobalRedux"
import { ProductType } from "../../types/product"
import { useEffect, useState } from "react"
import { CartProductCart } from "../../Components/CardProductCart"
import { ErrorCart } from "./style"
import {toast} from 'react-toastify'
import { clearCart } from "../../Redux/slices/cartSlice"
import { useDispatch } from "react-redux"

export const CartPage=()=>{
    const {cart}=useGlobalRedux(state=>state)
   const dispacth=useDispatch()

    const ClearProductsTheCart=()=>{    
        if(cart.totalCart === 0){
            toast.error('Carrinho já está vazio');
            
        }else{
            dispacth(clearCart())
            toast.success('Carrinho está vazio');
        }
    }

    useEffect(()=>{
        console.log(cart.productsCart)
    },[cart])
    return <BoxPage>
        <BoxContent>
                <h2>
                    <img src={CartIcon} alt="" /> Carrinho
                </h2>
        </BoxContent>
        <BoxProductsCart>

            <div className="products-list">
               {cart.productsCart.length > 0 && cart.productsCart.map((i,k)=>(
                    <CartProductCart product={i} />
                ))}
                {
                    cart.productsCart.length <= 0 && <ErrorCart>
                        Seu Carrinho está vazio
                    </ErrorCart>
                }
            </div>

        </BoxProductsCart>
        <DataCart>
            <div className="clear-cart">
               <button onClick={ClearProductsTheCart}>Limpar</button>
            </div>
            <div className="table-cart">
                <div className="left">
                    <div className="col">Taxa Entrega</div>
                    <div className="col">Descontos</div>
                    <div className="col">Total</div>
                </div>
                <div className="right">
                    <div className="col">R$ 0</div>
                    <div className="col">R$ 0</div>
                    <div className="col">R$ {cart.totalCart.toFixed(2)}</div>
                </div>
            </div>
        </DataCart>

    </BoxPage>
}