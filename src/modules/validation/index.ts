import {sanitizeHtml} from '../../utils/sanitizeHtml'

const validations: {[key: string]: RegExp} = {
    email: /^\S+@\S+$/i,
    phone: /(\+7|7|8)[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}/i,
    login: /\w+/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i,
    newPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i,
    oldPassword: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/i,
}

const validateDoublePassword = (field: Element) => {
    // eslint-disable-next-line
    // @ts-ignore
    const passwordValue = document.querySelector('[name="password"]')?.value || ''
    const doublePasswordValue = field.querySelector('input')?.value || ''
    const isValid = passwordValue === doublePasswordValue
    if (!isValid) {
        field.classList.add('field-error')
        return false
    }
    field.classList.remove('field-error')
    return true
}
const validateRepeatNewPassword = (field: Element) => {
    // eslint-disable-next-line
    // @ts-ignore
    const newPasswordValue = document.querySelector('[name="newPassword"]')?.value || ''
    const repeatNewPasswordValue = field.querySelector('input')?.value || ''
    const isValid = newPasswordValue === repeatNewPasswordValue
    if (!isValid) {
        field.classList.add('field-error')
        return false
    }
    field.classList.remove('field-error')
    return true
}

function validateInput(field: Element): boolean {
    const input = <HTMLInputElement>field.querySelector('input')
    const {name} = input
    const {value} = input

    let regexp = /[^+\d]/
    if (name in validations) {
        regexp = validations[name]
    }

    const isValid = regexp.test(value)

    if (name === 'doublePassword') {
        return validateDoublePassword(field)
    }

    if (name === 'repeatNewPassword') {
        return validateRepeatNewPassword(field)
    }

    if (isValid) {
        field.classList.remove('field-error')
        return true
    }
    field.classList.add('field-error')
    return false
}

export function onSubmit(event: Event): unknown {
    event.preventDefault()

    const element = <HTMLFormElement>event.target
    const form = element.closest('form')
    if (!form) {
        return
    }
    const formData = new FormData(form)
    const hasErrors = document.querySelectorAll('.field-error').length > 0

    if (!hasErrors) {
        const dataObj: any = {}
        for (const [name, value] of formData) {
            dataObj[name] = typeof value === 'string' ? sanitizeHtml(value) : value
        }
        return dataObj
    }
}

export const getFormValidation = (formId: string) => {
    const result = []
    const avatarForm = document.getElementById(formId) as HTMLFormElement
    const fields = avatarForm.querySelectorAll('.field')
    for (const field of fields) {
        const isValid = validateInput(field)
        result.push(isValid)
    }
    return result.every((item) => item === true)
}

export const getAvatarData = () => {
    const avatarForm = document.getElementById('avatarForm') as HTMLFormElement
    const form = new FormData(avatarForm)
    return form
}

export const getDateToFormat = (date: string) => {
    return new Date(date).toLocaleDateString('en-US')
}

export const dispalyFormError = (error: string) => {
    const el = document.querySelector('.form-error') as HTMLElement
    el.textContent = error
}
