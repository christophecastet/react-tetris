import React from 'react'
import {StyledDisplay} from './styles/StyledDisplay'

const Dipslay = ({gameover, text }) => (
    <StyledDisplay gameOver={gameover}>{text}</StyledDisplay>
)

export default Dipslay