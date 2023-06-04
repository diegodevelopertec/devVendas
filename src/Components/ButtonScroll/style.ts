import styled from "styled-components";


export const Button=styled.button`
width: 65px;
height: 65px;
padding: 10px;
z-index: 2;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:#54167a;
position: fixed;
box-shadow: 0 0 11px #000;
top: 80vh;
right: 3vw;
cursor: pointer;
border: none;
border-radius: 100%;
padding: 20px;

img{
   height: 25px;
   width: 25px;
}


@media screen and (max-width:950px){
    height: 45px;
    width: 45px;
    img{
        height: 25px;
        width: 25px;
} 
}
`