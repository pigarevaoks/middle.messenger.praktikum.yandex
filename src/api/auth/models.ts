export interface ISignUpData {
    login: string
    first_name: string
    email: string
    password: string
    second_name: string
    phone: string
    confirm_password: string
}

export interface ISignUpResponce {
    id: string
}

export interface ISignInData {
    login: string
    password: string
}
