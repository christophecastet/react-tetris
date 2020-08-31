import React from 'react'
import Display from './Display'
import Stage from './Stage'
import StartButton from './StartButton'
import {createStage} from '../gameHelpers'

const Tetris = () => {

    return(
        <div>
            <Stage stage={createStage()}/>
            <asside>
                <div>
                    <Display text='Score' />
                    <Display text='Lignes' />
                    <Display text='Niveau' />
                </div>
                <StartButton />     
            </asside>
        </div>
    )
}

export default Tetris