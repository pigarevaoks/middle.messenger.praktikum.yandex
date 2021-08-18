import {sanitizeHtml} from 'utils/sanitizeHtml'
import {checkValidation, inputValidation} from './inputValidation'

export const formValidation = (e: Event) => {
    e.preventDefault()
    const form = document.querySelector('#form') as HTMLElement
    const errors = form.querySelector('#errors') as Element
    const inputs = form.querySelectorAll('input')

    const validatedInputs: {[key: string]: string | null} = {}
    Array.from(inputs).forEach((input) => {
        const isValid = checkValidation(input)
        if (!isValid) {
            inputValidation(input)
            validatedInputs[input.name] = null
        } else {
            validatedInputs[input.name] =
                typeof input.value === 'string' ? sanitizeHtml(input.value) : input.value
        }
    })

    if (Object.values(validatedInputs).includes(null)) {
        errors.textContent = 'Заполните форму'
        throw new Error('Заполните форму')
    } else {
        return validatedInputs
    }
}

export const avatarFormValidation = (e: Event) => {
    e.preventDefault()
    const avatarForm = document.querySelector('#avatarForm') as HTMLElement
    const fileInput = avatarForm.querySelector('input') as HTMLInputElement
    const formData = new FormData()
    // @ts-ignore
    formData.append('avatar', fileInput?.files[0])

    return formData
}

export const passwordFormValidation = (e: Event) => {
    e.preventDefault()
    const form = document.querySelector('#form') as HTMLElement
    const errors = form.querySelector('#errors') as Element
    const inputs = form.querySelectorAll('input')
    const inputsArray = Array.from(inputs)
    const newPassword = inputsArray.find((item) => item.id === 'newPassword')?.value
    const repeatNewPassword = inputsArray.find((item) => item.id === 'repeatNewPassword')?.value

    if (repeatNewPassword !== newPassword) {
        errors.textContent = 'Пароли не совпадают'
        throw new Error('Пароли не совпадают')
    }

    const validatedInputs: {[key: string]: string | null} = {}
    inputsArray.forEach((input) => {
        const isValid = checkValidation(input)
        if (!isValid) {
            inputValidation(input)
            validatedInputs[input.name] = null
        } else {
            validatedInputs[input.name] =
                typeof input.value === 'string' ? sanitizeHtml(input.value) : input.value
        }
    })

    if (Object.values(validatedInputs).includes(null)) {
        errors.textContent = 'Заполните форму'
        throw new Error('Заполните форму')
    } else {
        return validatedInputs
    }
}
