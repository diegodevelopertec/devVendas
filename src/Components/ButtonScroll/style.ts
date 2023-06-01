import styled from "styled-components";


export const Button=styled.button`
height: 70px;
z-index: 2;
display: flex;
justify-content: center;
align-items: center;
width: 70px;
background-color:#54167a;
position: fixed;
box-shadow: 0 0 11px #000;
top: 80vh;
right: 3vw;
cursor: pointer;
border: none;
border-radius: 100%;
img{
    height: 60px;
    width: 45px;
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