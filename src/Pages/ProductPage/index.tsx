import { useDispatch } from "react-redux"
import { addProductCart } from "../../Redux/slices/cartSlice"
import { useGlobalContext } from "../../hooks/useGlobalContext"
import { Box,BoxAction,BoxContent } from "./style"
import { toast } from 'react-toastify'
import { ProductType } from "../../types/product"
import { useEffect } from "react"



export const ProductPage=()=>{
    const {shareProduct,user}=useGlobalContext()
    const dispacth=useDispatch()

   useEffect(() => {
    const { hash } = location;
    const targetElement = hash ? document.querySelector(hash) : null;

    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView();
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

 
const setProductToCart=(product:ProductType)=>{
    if(user !== null){
        dispacth(addProductCart(product))
  
    }else{
        toast.error('Ops!Voce não tem uma conta')
    }
}

    return <Box>
   <BoxContent>
       <div className="cx-info">
        <div className="cx-image">
            <img src={shareProduct.image} alt="" />
        </div>
        <div className="cx-details">
            <h2>{shareProduct.name}</h2>
            <div className="cx-details-product">
                <span className="detail" >categoria : {shareProduct.category}</span>
                <span className="details" >Marca :{shareProduct.marca}</span>
            </div>
            <span className="price"><span>Por apenas</span> R$ {shareProduct.price.toFixed(2).replace('.',',')}</span>
        </div>
       </div>
   </BoxContent>
     <BoxAction>
          <button onClick={()=>setProductToCart(shareProduct)}>Adicionar ao Carrinho + </button>
     </BoxAction>
    </Box>
}