import { CreatorType } from "./Creator"
import { CommunityType } from "./Community"


export type CountsType = { 
    comments: number 
    score: number
}

export type PostType = { 
    id: number 
    name: string 
    url?: string | null | undefined
    body?: string | null
    creator_id: number
    removed: boolean
    locked: boolean
    published: string
    deleted: boolean 
    nsfw: boolean
    thumbnail_url?: string | null
    local: boolean
    featured_local: boolean
    creator: CreatorType
    community: CommunityType
    counts: CountsType
}