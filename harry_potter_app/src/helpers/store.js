import { persistReducer, persistStore } from 'redux-persist'
import ThunkMiddleware from 'redux-thunk' 
import storage from 'redux-persist/lib/storage'
import rootReducer from "../api/redux/reducer"
import { applyMiddleware, compose, createStore } from "redux"

const persistConfig = {
    key: "root",
    storage: storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeE = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer, composeE(applyMiddleware(ThunkMiddleware)))
export const persistor = persistStore(store)

