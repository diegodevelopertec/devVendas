import { Box, BoxLeft, BoxRight } from "./style"
import { Link } from "react-router-dom"
import BurguerMobile from './../../assets/icons/burguermenu.png'
import CloseMobile from './../../assets/icons/closemneu.png'
import { useGlobalContext } from "../../hooks/useGlobalContext"


export const Header=()=>{
    const {setMenuMobile,stateMenuMobile,user}=useGlobalContext()


    return <Box>
    <BoxLeft>
        <div className="logo">
          NerdDev
        </div>
    </BoxLeft>
    <BoxRight stateMenuMobile={stateMenuMobile}>
        <div className="cx-btn">
            <button onClick={()=>setMenuMobile(true)} >
                <img src={BurguerMobile} alt="" />
            </button>
        </div>
        
            <nav>
                <div className="btn-top-close">
                <button onClick={()=>setMenuMobile(false)} >
                    <img src={CloseMobile} alt="" />
                </button>
                </div>
                <Link to={'/'} onClick={()=>setMenuMobile(false)} >Inicio</Link>
                <Link to={'/products'} onClick={()=>setMenuMobile(false)} >Produtos</Link>
                <Link to={'/sobre'} onClick={()=>setMenuMobile(false)} >Sobre</Link>
                <Link to={'/footer'} onClick={()=>setMenuMobile(false)} >Contatos</Link>
                {
                    user == null && <>
                     <Link to={'/login'}>Entrar</Link>
                    </>
                }
                {
                    user !== null && <>
                     <Link to={'/cart'}>Carrinho</Link>
                     <Link to={'/login'}>Conta</Link>
                    </>
                }
            </nav>
        
    </BoxRight>
    
    
    </Box>
}