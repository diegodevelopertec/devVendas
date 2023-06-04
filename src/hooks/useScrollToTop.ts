
import { useEffect } from "react";
export const useScrollToTop=()=>{
   
    useEffect(() => {
        const { hash } = location;
        const targetElement = hash ? document.querySelector(hash) : null;
    
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView();
          }, 100);
        } else {
          window.scrollTo(0, 0);
        }
      }, [location]);



}