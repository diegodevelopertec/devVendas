import { Box, BoxContent } from "./style"
import { Link } from "react-router-dom"

export const Footer=()=>{
    return <Box>
         <BoxContent>
            <div className="cx-content">
               <h2>Sobre Nós</h2>
               <p>Somos uma empresa focada em produtos de alta qualidade,na qual estão inclusos:celulares,
                cadeirasGamers,hardwares,acessorios e etc.
              </p>
            </div>
            <div className="cx-content mapa">
                 <h2>Mapa</h2>
                <div className="mapa-links">
                   <Link to=''>Inicio</Link>
                   <Link to=''>Produtos</Link>
                   <Link to=''>Seu Carrinho</Link>
                </div>
            </div>
            <div className="cx-content newllerters">
              <div className="cx-netw">
                <p>Se increva para não perder novidades:</p>
                 <input type="text" />
              </div>
            </div>
         </BoxContent>
         <div>Desenvolvido por Diego Morais</div>
    </Box>
}