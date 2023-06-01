import { CardProduct } from "../../Components/CardProduct"
import { Modal } from "../../Components/Modal"
import { data } from "../../data/data"
import { ProductType } from "../../types/product"
import { Box, BoxHeader, BoxProducts, Category } from "./style"
import {useEffect, useState} from 'react'



export const Showcase=()=>{
    const [products,setProducts]=useState<ProductType[] | []>(data)
    const [categoryActive,setCategoryActive]=useState(false)
    const [filter,setFilter]=useState<string>('')
    

    useEffect(()=>{
        const filteresList=()=>{
          
            if(filter === 'todos'){
                setProducts(data)
            }else if(filter !== ''){
                const listFilter=data.filter(i=>i.category === filter)
                setProducts(listFilter)
            }else{
                setProducts(data)
            }
        }

        filteresList()
       


    },[filter])


    return <Box>
        <BoxHeader  >
            <h2>Produtos</h2>
            <div className="categories">
                <p>Navegue por :</p>
                <div className="itens-categories">
                    <Category stateCategory={filter === 'todos' || filter == '' ? true : false}  onClick={()=>setFilter('todos')}  >Todos</Category>
                    <Category stateCategory={filter === 'celulares' ? true : false } onClick={()=>setFilter('celulares')}  > Celulares</Category>
                    <Category stateCategory={filter === 'cadeiras gamers' ? true : false } onClick={()=>setFilter('cadeiras gamers')} >Cadeiras Gamers</Category>
                    <Category stateCategory={filter === 'Hardware' ? true : false } onClick={()=>setFilter('Hardware')} >Hardwares</Category>
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