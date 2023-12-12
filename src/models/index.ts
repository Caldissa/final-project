export interface Post {
    content: string
    media: string
    email: string
    name: string
    profilePic: string
    timestamp: string
}

export interface User {
    email: string
    firstName: string
    lastName: string
    password: string
    profilePic: string
    bio: string
}
