import { combineReducers } from "redux"
import { constants } from "./constants"

const initState = {
    characters: null
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
        
        default: return state
    }
}

export default rootReducer