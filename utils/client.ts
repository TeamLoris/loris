import { LemmyHttp } from "lemmy-js-client"


function BuildURL(url: string): string{ 
    if(url === "lemmy.world"){ 
        return "https://lemmy.world"
    }

    return `${location.origin}/api/${url}`
}

export function getClient(url: string): LemmyHttp{ 
    return new LemmyHttp(BuildURL(url))
}

