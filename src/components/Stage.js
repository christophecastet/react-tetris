import React from 'react'
import Cell from './Cell'

const Stage = ({stage}) => (
    <div>
        {
            stage.map(row => row.map((k, cell) => <Cell key={k} type={cell}/>))
        }
    </div>
)

export default Stage

