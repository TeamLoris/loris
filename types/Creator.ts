export type CreatorType = { 
    id: number
    name: string 
    display_name: string | null
    avatar?: string | null
    published: string
    updated?: string | null
    actor_id?: string | null
    bio?: string | null 
    local: boolean
    banner: string | null
    deleted: boolean
    inbox_url: string 
    shared_inbox_url: string
    matrix_user_id?: string | null
    admin: boolean
    bot_account: boolean
    banned: boolean
    ban_expires?: string | null
    instance_id: number

}