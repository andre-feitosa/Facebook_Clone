import { createStore, combineReducers} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import user from './user'
import post from './post'

const persistedReducer = {
    key: 'root',
    storage
}

const reducersConfigure = combineReducers({
    loginUser: user,
    loginPost: post
})

const store = createStore(persistReducer(persistedReducer, reducersConfigure))
const persistor = persistStore(store)

export {store, persistor}