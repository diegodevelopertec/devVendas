import styled from "styled-components";


export const Box=styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
color: #000;
margin-bottom: 60px;
height: max-content;
padding: 100px 0;
`
export const BoxContent=styled.div`
width: 80%;
margin: 130px 0;
.cx-info{
    display: flex;
}
.cx-image{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #FFF;
  img{
    height: 340px;
  }
}

.cx-details{
    flex: 1;
    padding: 12px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 22px;
        text-shadow: 0 0 5px #000;
    }

    .cx-details-product{
        display: flex;
        color: #919294;
        margin: 30px 0;
        justify-content: space-around;
    }
    .price{
        span{
            font-size: 13px;
            color: #919294;
            text-shadow: none;
        }
        font-size: 22px;
        margin: 50px 0;
        font-weight: bold;
        text-shadow: 0 0 2px #000;
    }
}
@media screen and (max-width:950px){
    width: 100%;
    .cx-info{
        flex-direction: column;
        h3{
            font-size: 14px;
        }
    }
    .cx-image{
        width: 100%;
        height: 300px;
        img{
            height: 80%;
        }
    }
}


`

export const BoxAction=styled.div`
display: flex;
justify-content: center;
align-items: center;

button{
    padding: 18px 45px;
    box-shadow: 0 0 5px #000;
    color: #FFF;
    background-color: #3174e0;
    border: none;
    transition: all ease .5s;
    &:Hover{
        cursor: pointer;
        background-color: #0d5dde;
    }
}
`


