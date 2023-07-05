export type CommunityType = { 
    id: number
    name: string
    title: string
    description: string | null
    removed: boolean 
    published: string 
    updated?: string | null 
    deleted: boolean
    nsfw: boolean
    actor_id: string | null
    local: boolean
    banner: string | null
    icon: string  | undefined | null
    hidden: boolean
    posting_restricted_to_mods: boolean
    instance_id: number
}