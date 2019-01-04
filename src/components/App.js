import React from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../store'

const store = makeStore()

export const App = () =>(
    <div>
        <Provider store={store}>
            <p>Hello</p>
        </Provider>
    </div>
)
