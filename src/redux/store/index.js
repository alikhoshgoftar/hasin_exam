import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import rootReduser from "./../redusers/index"
import {persistStore,persistReducer} from 'redux-persist'

//persist data in Session storage
import storage from 'redux-persist/lib/storage/session'

//persist data to Local storage
// import storage from 'redux-persist/lib/storage'



const initialState={}
const Middleware=[thunk]

const persistConfig={
    key:'root',
    storage,
}

const persistedReducer=persistReducer(persistConfig,rootReduser)

const store =createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(...Middleware)),
    )
    const persistor=persistStore(store)
export  {store,persistor}