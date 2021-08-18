export interface IUser {
    id?: number
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

export interface IAvatartData {
    avatar: string
}

export interface IPasswordData {
    oldPassword: string
    newPassword: string
}
