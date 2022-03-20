import { combineReducers } from "redux"
import { constants } from "./constants"

const initState = {
    characters: null,
    favoritos: [],
    isAdded: false
}

const rootReducer = combineReducers({
    characters
})


function characters( state = initState, action = {} ) {
    switch( action.type ) {
        case constants.GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }
        case constants.FAVORITOS:
            return {
                ...state,
                favoritos: action.payload
            }
        case constants.ADD_CHARACTER:
            return {
                ...state,
                isAdded: action.payload
            }
        default: return state
    }
}

export default rootReducer