import styled from "styled-components";


export const Box=styled.div`
width: 100%;
min-height: 100%;
padding:0 30px;
margin: 50px;
display: flex;
justify-content: center;
color: #000;

@media screen and (max-width:950px) {
    justify-content:auto;
    margin: 30px 0;
    padding: 12px;
    p{
        font-size: 12px;
    }
}

`


export const BoxContent=styled.div`
width: 80%;
display: flex;
flex-direction: column;
h2{
    color: #160e17;
    text-shadow: 0 0 5px #000;
}
p{
    color: #000;
    margin: 12px 0;
}

@media screen and (max-width:950px) {
   width: 100%;
}
`


export const BoxSection=styled.div`
display: flex;
width: 100%;
margin: 25px 0;
flex-direction: column;

.box-header{
  display: flex;
  align-items: center;
}
 .box-header img{
    height: 55px;
    width: 55px;
    background-color: #291F50;
    border-radius: 100%;
    padding: 12px;
    margin-right:12px;
}

`
