import styled from "styled-components";


export const Box=styled.div`
box-shadow:0 0 12px #000;
display: flex;
flex-direction:column;
`

export const BoxTop=styled.div`
background-color: #FFF;
display: flex;
justify-content: center;
align-items: center;
padding: 55px 0;
img{
    height:250px;
    width:140px;
}

`
export const BoxBottom=styled.div`
padding: 12px;
flex: 1;
background-color: #34154f;
h3{
    font-size: 15px;
    text-shadow: 0 0 5px #000;
}

.cx-details{
    display: flex;
    margin: 15px 0;
    justify-content: space-around;
   
}

.cx-btn-product{
    display: flex;
    justify-content: center;
    margin: 30px 0;
    button{
        border: none;
        border-radius: 6px;
        height: 50px;
        width: 50%;
        cursor: pointer;
        box-shadow:  0 0 12px #000;
        font-weight: bold;
        transition: all ease .3s;
        &:hover{
            background-color:#188aed;
            color: #FFF;
        }
    }

}
@media screen and (max-width:950px) {
    h3{
        font-size: 13px;
        text-shadow: 0 0 5px #000;
        height: 90px;
   }
   .cx-details{
   font-size: 11px;
   
  }

  .cx-btn-product button{
    font-size: 12px;
    width: 80%;
  }

}
`