import { Box, BoxContent, BoxContentOne, BoxProducts, BoxContentTwo } from "./style"
import { Banner } from "../../Banner"
import LogoLogin from './../../assets/icons/logarIcon.png'
import LogoComprar from './../../assets/icons/comprarLogo.png'
import LogoChegou from './../../assets/icons/logochegou.png'
import { data } from "../../data/data"
import { useState } from "react"
import { ProductType } from "../../types/product"
import { CardProduct } from "../../Components/CardProduct"
import { Link } from "react-router-dom"

export const Home=()=>{
    const [someProducts,setSomeProducts]=useState<ProductType[]>(data.filter(i=>i.id < 13))

    
    return <Box>
        <Banner />
        <BoxContent>
            <BoxContentOne>
                    <h2>Encontre Agora Tudo o que Você mais Gosta Amigo Nerd</h2>
                    <p>Veja alguns de nossos produtos:</p>
                    <BoxProducts>
                        {
                            someProducts.map((i,k)=>(
                                <CardProduct product={i} key={k} />
                            ))
                        }
                    </BoxProducts>

                <Link to='/products'>Ver Mais</Link>

            </BoxContentOne>
            <BoxContentTwo>
                <h2>Aqui com A gente é :</h2>
                <div className="cx-passos">
                   <div className="cx-passos-itens">
                      <div>Logou<img src={LogoLogin} alt="" /></div>
                      <div>Comprou<img src={LogoComprar} alt="" /></div>
                      <div>Chegou<img src={LogoChegou} alt="" /></div>
                   </div>
                </div>
            </BoxContentTwo>
           

        </BoxContent>
    </Box>
}