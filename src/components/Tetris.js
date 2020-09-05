import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import {createStage} from '../gameHelpers'
import {StyledTetrisWrapper, StyledTetris} from './styles/StyleTetris'

const Tetris = () => {

    return(
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text='Score' />
                        <Display text='Lignes' />
                        <Display text='Niveau' />
                    </div>
                    <StartButton />     
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris