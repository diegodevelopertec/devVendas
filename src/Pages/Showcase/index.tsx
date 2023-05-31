import { CardProduct } from "../../Components/CardProduct"
import { Modal } from "../../Components/Modal"
import { data } from "../../data/data"
import { ProductType } from "../../types/product"
import { Box, BoxHeader, BoxProducts } from "./style"
import {useState} from 'react'



export const Showcase=()=>{
    const [products,setProducts]=useState<ProductType[] | []>(data)



    return <Box>
        <BoxHeader>
            <h2>Produtos</h2>
            <div className="categories">
                <p>Navegue por :</p>
                <div className="itens-categories">
                    <span>
                        Celulares
                    </span>
                    <span>
                        Cadeiras Gamers
                    </span>
                    <span>
                        Hardwares
                    </span>
                </div>
            </div>
        </BoxHeader>
        <BoxProducts>
            {products.map((i,k)=>(
                <CardProduct product={i} key={k} />
            ))}
        </BoxProducts>
      
    </Box>
}