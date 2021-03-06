export interface IUser {
    id?: number | string
    first_name: string
    second_name: string
    display_name: string
    login: string
    email: string
    phone: string
    avatar: string
}

export interface IPasswordData {
    oldPassword: string
    newPassword: string
}
export interface ILoginData {
    login: string
}
