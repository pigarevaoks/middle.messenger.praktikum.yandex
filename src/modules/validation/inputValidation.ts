import {MOBILE_RULE, EMAIL_RULE, PASSWORD_RULE, MESSAGE_RULE} from 'common/consts'
import {EFieldType} from 'common/enums'

const errorToggle = (isValid: boolean, input: HTMLInputElement) => {
    const error = input.closest('#input') as HTMLInputElement
    if (isValid) {
        error.classList.remove('withError')
    } else {
        error.classList.add('withError')
    }
}

export const checkValidation = (input: HTMLInputElement) => {
    const type = input.dataset.validation as EFieldType
    switch (type) {
        case EFieldType.Phone:
            return input.value.search(MOBILE_RULE) !== -1
        case EFieldType.Email:
            return input.value.search(EMAIL_RULE) !== -1
        case EFieldType.Text:
            return input.value.length > 2
        case EFieldType.Password:
            return input.value.search(PASSWORD_RULE) !== -1
        case EFieldType.Message:
            return input.value.search(MESSAGE_RULE) !== -1
        default:
            return true
    }
}

export const inputValidation = (event: HTMLInputElement | InputEvent) => {
    const input = event.target ?? event
    const isValid = checkValidation(input)
    errorToggle(isValid, input)
}
