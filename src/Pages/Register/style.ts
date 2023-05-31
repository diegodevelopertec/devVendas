import styled from "styled-components";


export const BoxPage=styled.div`
width: 100%;
min-height: 100%;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:800px) {
    padding: 10px;
}
`

export const FormBox=styled.div`
background-color: #2f0940;
width:60%;
padding: 30px;
h2{
    margin: 20px;
    text-shadow: 0 0 6px #aaa;
}

.card-sub{
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  input{
    cursor: pointer;
    background-color: #0ba133;
    width: 40%;
    color: #FFF;
    font-weight: bold;
    align-self: center;
    box-shadow: 0 0 5px #000;
    &:hover{
        background-color: #12c742;
    }
  }
}

@media screen and (max-width:800px) {
    width: 90%;
    padding: 30px;
}
`

export const CardInput=styled.div`
width: 100%;
input{
    width: 100%;
    padding: 16px 34px;
    margin: 12px 0;
    border-radius: 3px;
    border: none;
    transition: all ease .4s;
    box-shadow: 0 0 5px #000;
    font-size: 14px;
    &:focus{
        outline: 2px solid #0b8564;
    }
}

`

export const FormBoxBottom=styled.div`
a{
  margin-left: 13px;
  color: #123fc7;
}
`