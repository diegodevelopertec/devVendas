import { useDispatch } from "react-redux"
import { useGlobalRedux } from "../../hooks/useGlobalRedux"
import { ProductType } from "../../types/product"
import { Box,BoxBottom,BoxTop } from "./style"
import { useNavigate } from "react-router-dom"
import { useGlobalContext } from "../../hooks/useGlobalContext"


type props={
    product:ProductType
}
export const CardProduct=({product}:props)=>{
  const {setShareProduct}=useGlobalContext()
  const Navigate=useNavigate()


  const setProductToPage=()=>{
      setShareProduct(product)
      Navigate(`/products/${product.id}`)
 
  }


    return <Box>
        <BoxTop>
           <img src={product.image} alt="" /> 
        </BoxTop>
        <BoxBottom>
           <h3>{product.name}</h3>
          <div className="cx-details">
             <span>{product.category}</span>
             <span>{product.marca}</span>
          </div>
          <div className="cx-btn-product">
            <button onClick={setProductToPage}>ver produto</button>
          </div>
        </BoxBottom>
        
    
    </Box>
}