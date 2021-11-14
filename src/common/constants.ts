export const MOBILE_RULE = /^((\+7|7|8)+([0-9]){10})$/g
export const EMAIL_RULE = /^[^\s@]+@[^\s@]+$/g
export const PASSWORD_RULE = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/g
export const MESSAGE_RULE = /^[А-ЯЁа-яёA-Za-z0-9\s]+$/g

export const RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources/'

export enum EButtonType {
    Submit = 'submit',
    Button = 'button',
    Reset = 'reset',
}

export enum EFieldType {
    Phone = 'phone',
    Email = 'email',
    Password = 'password',
    Text = 'text',
    Message = 'message',
}

export enum EProfileType {
    Profile = 'profile',
    ProfileEdit = 'profile_edit',
    PasswordEdit = 'password_edit',
}
