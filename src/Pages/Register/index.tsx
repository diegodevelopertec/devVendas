import { BoxPage, CardInput, FormBox, FormBoxBottom } from "./style"
import { Link } from "react-router-dom"

export const RegisterPage=()=>{







    return <BoxPage>
        <FormBox>
            <h2>Cadastrar</h2>
            <form action="">
               <CardInput>
                    <input type="text" placeholder="Digite seu nome" />
                </CardInput>
                <CardInput>
                    <input type="tel" placeholder="Digite seu telefone" />
                </CardInput>  

                <CardInput>
                    <input type="email" placeholder="Digite seu email" />
                </CardInput>  
                <CardInput>
                    <input type="passsword" placeholder="Digite sua senha" />
                </CardInput> 
                <CardInput className="card-sub">
                    <input type="submit" placeholder="Digite sua senha" />
                </CardInput> 
            </form>
            <FormBoxBottom>
                <p>Já tem uma conta?<Link to='/login'>Clique aqui</Link></p>
            </FormBoxBottom>
        </FormBox>
    
    </BoxPage>
}