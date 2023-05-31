import styled from "styled-components";


export const BoxPage=styled.div`
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
padding: 100px 0;

@media screen and (max-width:950px) {
  padding: 30px 0;

}
`

export const BoxContent=styled.div`
width: 80%;
color: #000;
margin: 30px;
display: flex;
flex-direction: column;


h2{
    color:#0e0f12;
    display: flex;
    margin: 0 35px;
    align-items: center;
    text-shadow: 0 0 3px #000;
    img{
        margin-right: 6px;
        height: 66px;
    }
}


@media screen and (max-width:950px){
    width: 100%;
    padding: 30px 5px;
   
    h2{
        font-size: 19px;
        margin: 0;
        img{
            height: 45px;
        }
    }
}

`

export const BoxProductsCart=styled.div`
display: flex;
justify-content: center;
width: 100%;

.products-list{
    display: flex;
    flex-direction: column;
    width: 80%;
}

@media screen and (max-width:950px) {
    .products-list{
       width: 100%;
       padding: 12px;
    
      
}
}

`

export const ErrorCart=styled.div`
color: #aaa;
font-size: 22px;
padding: 30px;
text-shadow: 0 0  4px #291F50;
border: 1px dashed #291F50;
`

export const DataCart=styled.div`
display: flex;
justify-content: end;
padding-right: 150px;
margin: 45px 0;

.clear-cart{
    display: flex;
    align-items: end;
    margin: 0 30px;
   button{
    background-color: red;
    height: 60px;
    width: 160px;
    background: #aaa;
    border: none;
    cursor: pointer;
    border-radius: 3px;
   }
    
}
.table-cart{
    display: grid;
    background-color:#291F50;
    justify-items: end;
    width: 100%;
    width: 350px;
    border: 1px solid #aaa;
    color: #FFF;
    grid-template-columns: repeat(2,auto);
    .col{
        padding: 18px 5px;
        display: flex;
        border: 1px solid #aaa;
        align-items: center;
        justify-content: center;
    }

    .left{
       font-weight: bold;
       width: 100%;
    }
    .right{
        width: 100%;
    }
}


@media screen  and (max-width:950px){
    justify-content: center;
    padding-right: 5px;
    .table-cart{
        font-size: 13px;
        min-width: 150px;
        
    }
    .clear-cart button{
        margin: 0 5px;
        width: auto;
        font-size: 12px;
        padding: 12px 25px;
    }
}
`