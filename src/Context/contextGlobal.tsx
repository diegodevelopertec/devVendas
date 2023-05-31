import { createContext } from "react"
import { useState,ReactNode } from "react"
import { ProductType, userType } from "../types/product"

type UserData={
    name: string;
    password: string;
    email: string;
    photo?: string | undefined;
    phone: string;
}

type Props={
    children:ReactNode
}

type ContextType={
    shareProduct:ProductType,
    setShareProduct:(pr:ProductType)=>void,
    stateMenuMobile:boolean,
    setMenuMobile:(state:boolean)=>void,
    user:userType | null,
    loginUser:(email:string,password:string)=>void,
    registerUser:(data:UserData)=>void,

}

export const ContextGlobal=createContext<ContextType>({
    stateMenuMobile:false,
    setMenuMobile:(state:boolean)=>{},
    shareProduct:{} as ProductType,
    setShareProduct:(pr:ProductType)=>{},
    user:null,
    loginUser:(email:string,password:string)=>{},
    registerUser:(data:UserData)=>{},
})

export const GlobalContextProvider=({children}:Props)=>{
    const [ stateMenuMobile,setMenuMobile]=useState(false)
    const [user,setUser]=useState<userType | null>({
        id: 1,
        name: 'Diego',
        password: 'string;',
        email: 'diegodev@gmail.com',
        photo: '',
        phone:''
    })
    const [shareProduct,setShareProduct]=useState<ProductType>({} as ProductType)

    const loginUser=(email:string,password:string)=>{

    }
    const registerUser=(data:UserData)=>{
        
    }
    return <ContextGlobal.Provider value={{ shareProduct,setShareProduct, loginUser,registerUser,user,stateMenuMobile,setMenuMobile}}>
        {children}
    </ContextGlobal.Provider>
}

