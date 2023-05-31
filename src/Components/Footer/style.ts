import styled from "styled-components";


export const Box=styled.div`
background-color: #000;
padding: 55px 0px;
color: #FFF;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

`

export const BoxContent=styled.div`
display: grid;
width: 80%;
margin: 160px 0;
justify-items: center;
grid-template-columns: repeat(3,1fr);
gap: 12px;
.cx-content{


}

.mapa{
        .mapa-links{
            margin: 15px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            a{
                text-decoration: none;
                margin: 5px 0;
            }
        }
    }

.newllerters{


    input{
        padding: 12px;
        width: 100%;
        border-radius: 4px;
        box-shadow:  0 0 5px blue;
        outline: none;
    }
}

@media screen and (max-width:700px){
    width: 100%;
    font-size: 13px;
    padding: 20px;
    gap: 20px;
    grid-template-columns: repeat(2,1fr);
   
    
}
`