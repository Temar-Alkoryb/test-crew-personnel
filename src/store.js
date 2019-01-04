import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

export const makeStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware()
    )

    return store
}
