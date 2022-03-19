import { Request } from "../request";

class Services {
    constructor(){
        this.config = ""
    }

    characters = () => Request.get("hp-characters")
}

export default new Services();