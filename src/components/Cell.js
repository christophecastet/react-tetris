import React from 'react'
import {StyledCell} from './styles/StyleCell'
import {TETROMINUS} from '../tetrominos'
const Cell = ({type}) => (

    <StyledCell type={type} color={TETROMINUS[type].color}></StyledCell>
)
   


export default Cell