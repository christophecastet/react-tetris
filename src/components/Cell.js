import React from 'react'
import {StyledCell} from './styles/StyleCell'
import {TETROMINUS} from '../tetrominos'
const Cell = ({type}) => (

    <StyledCell type={'L'} color={TETROMINUS['L'].color}></StyledCell>
)
   


export default Cell