import { Request } from "../request";

class Services {
    constructor(){
        this.config = ""
    }

    characters = () => Request.get("hp-characters")

    addCharacter = (data) => Request.post("hp-characters", data) 
}

export default new Services();