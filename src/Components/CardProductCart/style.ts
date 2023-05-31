import styled from "styled-components";



export const Box=styled.div`
display: flex;
align-items: center;
box-shadow: 0 0 4px #000;
color: #000;
width: 100%;
height: auto;
justify-content: space-between;
margin: 12px 0;


`
export const BoxLeft=styled.div`
display: flex;
padding: 20px;
h2{
    font-size: 15px;
}
.cx-left{
    display: flex;
    margin-left: 7px;
    flex-direction: column;
}

.cx-img{
    width: 90px;
}

.cx-left .qdt-product{
    background-color:#291F50;
    color: #FFF;
    width: max-content;
    padding: 5px 12px;
    border-radius: 3px;
}

img{
    height: 95px;
}

@media screen and (max-width:950px) {
    font-size: 13px;
    img{
        height: 55px;
        width: 45px;
    }
}
`

export const BoxRight=styled.div`
display: flex;
align-items: center;


.right-two{

    height:100%;
    margin-left: 32px;
    cursor: pointer;
  
}

@media screen and (max-width:950px) {
    .right-two {
        margin: 0 5px;
    }
    img{
      height: 25px;
} 
}


`