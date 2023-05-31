import { BoxPage, CardInput, FormBox, FormBoxBottom } from "./style"
import { Link } from "react-router-dom"

export const LoginPage=()=>{







    return <BoxPage>
        <FormBox>
            <h2>Entrar</h2>
            <form action="">
                <CardInput>
                    <input type="email" placeholder="Digite seu email" />
                </CardInput>  
                <CardInput>
                    <input type="passsword" placeholder="Digite sua senha" />
                </CardInput> 
                <CardInput className="card-sub">
                    <input value={'Entrar'} type="submit" placeholder="Digite sua senha" />
                </CardInput> 
            </form>
            <FormBoxBottom>
                <p>Não tem uma conta?<Link to='/register'>Clique aqui</Link></p>
            </FormBoxBottom>
        </FormBox>
    
    </BoxPage>
}