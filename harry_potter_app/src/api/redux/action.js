import { constants } from "./constants"
import service from "./service"
export const action = {
    getCharacters
}

function success(type, payload){
    return {type, payload}
}

function getCharacters(){
    return async dispatch => {
        await service.characters().then( response => {
            if(response) dispatch(success(constants.GET_CHARACTERS, response.data))
        }).catch( () => {
            console.log("Error")
        })
    }
}