import { Box } from "./styled"
import {ReactNode} from 'react'


type Props={
    children:ReactNode
}
export const Modal=({children}:Props)=>{
    return <Box>
        {children}
    </Box>
}