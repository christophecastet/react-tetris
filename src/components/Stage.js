import React from 'react'
import Cell from './Cell'
import {StyleStage} from './styles/StyleStage'

const Stage = ({stage}) => (
    <StyleStage width={stage[0].length} height={stage.length}>
        {
            stage.map(row => row.map((cell, k) => <Cell key={k} type={cell[0]}/>))
        }
    </StyleStage>
)

export default Stage

