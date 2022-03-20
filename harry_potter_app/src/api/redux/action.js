import { constants } from "./constants"
import service from "./service"
export const action = {
    getCharacters,
    favoritos,
    addCharacter,
}

function success(type, payload){
    return {type, payload}
}

function getCharacters(){
    return async dispatch => {
        await service.characters().then( response => {
            if(response) {
                dispatch(clearCharacters())
                dispatch(success(constants.GET_CHARACTERS, response.data))
            }
        }).catch( () => {
            console.log("Error")
        })
    }
}

function addCharacter(data){
    return async dispatch => {
        await service.addCharacter(data).then( () => {
             dispatch(success(constants.ADD_CHARACTER, true))
        }).catch( () => {
            console.log("Error")
        }).finally(() => {
            dispatch(success(constants.ADD_CHARACTER, false))
            dispatch(getCharacters())
        })
    }
}

function clearCharacters(){
    return dispatch => {
        dispatch(success(constants.GET_CHARACTERS, null))
    }
}
function favoritos(data){
    return dispatch => {
        dispatch(success(constants.FAVORITOS, data))
    }
}