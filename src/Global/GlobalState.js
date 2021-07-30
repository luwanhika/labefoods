import GlobalStateContext from './GlobalStateContext'
import React from 'react'

const GlobalState = (props) => {
    return(
        <div>
            <GlobalStateContext>
                {props.children}
            </GlobalStateContext>
        </div>
    )
}
export default GlobalState