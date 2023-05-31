import { Box, BoxContent, BoxSection } from "./style"
import User from './../../assets/icons/user.png'
import pay from './../../assets/icons/pay.png'
import address from './../../assets/icons/address.png'




export const AccountPage=()=>{
    return <Box>
        <BoxContent>
            <h2>Seus Dados</h2>
            <p>Aqui você pode alterar e/ou visualizar seus Dados:</p>
            <BoxSection>
              <div className="box-header">
                   <img src={User} alt="" />
                    <h3>Sua Conta</h3>
              </div>
                
               
            </BoxSection>
            <BoxSection>
                <div className="box-header">
                    <img src={pay} alt="" />
                    <h3>Seus Cartões</h3>
                </div>
            </BoxSection>
            <BoxSection>
               <div className="box-header">
                    <img src={address} alt="" />
                    <h3>Seu Endereço</h3>
                </div>
            </BoxSection>
        </BoxContent>
    </Box>
}