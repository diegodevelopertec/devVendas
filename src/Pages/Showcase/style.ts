import styled from "styled-components";


export const Box=styled.div`
width: 100%;
min-height: 100%;
padding:  100px 0;
margin-bottom: 100px;
`

export const BoxHeader=styled.div`
padding: 100px;
h2{
    color: #34154f;
    font-size: 28px;
    text-shadow: 0 0 5px #000;
}


.categories{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;

    .itens-categories{
        display: flex;
    }
   .itens-categories span{
        margin: 20px;
        padding: 20px 15px;
        width: 180px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: all ease .3s;
        &:hover{
            cursor: pointer;
            background-color: #34154f;
            color: #FFF;
            box-shadow:0 0 4px #000;
        }
    }
}

@media screen  and (max-width:950px){
    padding: 12px;
    .categories{
        margin: 20px 0;
        flex-direction: column;
    }
    .itens-categories{
        padding: 0;
        width: 100%;
       
         span{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5px;
            width:auto;
            height: auto;
            padding: 12px;
            font-size: 11px;
         }
    }
}
`
export const BoxProducts=styled.section`

display: grid;
grid-template-columns: repeat(4,1fr);
gap: 16px;
padding: 40px;

@media screen and (max-width:950px) {
   grid-template-columns: repeat(2,1fr);
   gap: 13px;
   padding: 5px;
   
}

`