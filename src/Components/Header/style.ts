import styled from "styled-components";

type Props={
    stateMenuMobile:boolean;
}

export const Box=styled.div`
background-color: #1d1233;
padding: 15px 30px;
width: 100%;
color: #FFF;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow:  0 0 5px #000;




@media screen and  (max-width:950px) {
    padding: 25px 10px;
    height: 65px;
}
`

export const BoxLeft=styled.div`

.logo{
    font-size: 22px;
    text-shadow: 0 0 5px #000;
    font-weight: bold;
}

`
export const BoxRight=styled.div<Props>`

.cx-btn{
    display: none;
    button{
        height:35px;
        width: 35px;
        img{
            height: 100%;
            width: 100%;
        }
    }

}
nav{
  
   display:flex;
   align-items:center;
   .btn-top-close{
        display: none;
   }
    a{
        text-decoration:none;
        margin: 12px;
        color: #FFF;
        transition: all ease .5s;
        &:hover{
            color: #21B1D8;
            text-decoration: underline;
        }
    }
}



@media screen and (Max-width:950px){
    .cx-btn{
        display:${Props=>!Props.stateMenuMobile ? 'flex' : 'none'};
    }

    nav{
        display: ${Props=>Props.stateMenuMobile ? 'flex' : 'hidden'};
        flex-direction: column;
        padding:160px 0;
        position: fixed;
        right: 0;
        top: 0;
        left: ${Props=>Props.stateMenuMobile ? 'auto' : '999px'};
        bottom: 0;
        transition: all ease .3s;
        background-color:#323137;
        width: ${Props=>Props.stateMenuMobile ? '60vw' : '0'};
        .btn-top-close{
            position: absolute;
            padding:18px 10px;
            width: 100%;
            justify-content: flex-end;
            top: 0;
            display: ${Props=>Props.stateMenuMobile ? 'flex' : 'hidden'};
            button{

            height:35px;
            width: 35px;
            border: none;
            background-color: transparent;
                img{
                    height: 100%;
                    width: 100%;
                }
             }
        }

    }
}
`

