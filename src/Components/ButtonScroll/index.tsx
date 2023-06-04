import styled from "styled-components";
import { Button } from "./style";
import Topo from './../../assets/icons/topo.png'
import { Link, animateScroll as scroll } from "react-scroll";

export const ButtonScroll=()=>{
  const ClickScrollTop=()=>{
    scroll.scrollToTop(); 
  }
    return <Button onClick={ClickScrollTop}>
      <img src={Topo} alt="" />
    </Button>
}