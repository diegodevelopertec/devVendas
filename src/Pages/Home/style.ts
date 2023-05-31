import styled from "styled-components";


export const Box=styled.div`
width: 90%;
background-color:#cccfcd;
height: auto;
padding:0;

@media screen and (max-width:950px) {
    width: 100vw;
  
}
`

export const BoxContent=styled.div`
padding:100px 12px;
display: flex;
background-color: #FFF;
//box-shadow: 0 0 5px #000;
flex-direction: column;
`

export const BoxContentOne=styled.section`
margin: 80px 0;
flex-direction: column;
display: flex;
align-items: center;
h2{
  color: #3E395A;
  text-align: center;
  text-shadow:0 0 5px #aaa;
}
p{
  margin:12px 0;
  font-size: 17px;
  color: #3E395A;
}

a{
  font-size: 22px;
  margin-top: 30px;
  font-weight: bolder;
  text-decoration: none;
  padding:20px  100px;
  transition: all ease .3s;
  &:hover{
    background-color: #3E395A;
    color: #FFF;
    text-shadow: 0 0 5px #000;
    
  }
}

@media screen and (max-width:950px){
  align-items:auto;
  width: 100%;
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

export const BoxContentTwo=styled.section`
margin: 100px 0;
h2{
  color: #3E395A;
  text-align: center;
  text-shadow:0 0 5px #aaa;
}
.cx-passos{
margin: 50px 0;
display: flex;
justify-content: center;
  .cx-passos-itens{
      display: flex;
      font-size: 22px;
      div{
          background-color: #3E395A;
          display: flex;
          padding: 30px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 30px;
          height: 180px;
          border-radius: 5px;
          box-shadow:0 0 13px #000;
          width: 180px;
          img{
            margin: 30px 0;
          }
      }
  }
}

@media screen and (max-width:950px){
 .cx-passos .cx-passos-itens{
    flex-direction: column;
    div{
      width:70vw;
     
    }
  }
}
`
