import {MOBILE_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP} from 'common/consts'
import {EFieldType} from 'common/enums'

const validatedInputs: {[key: string]: string | null} = {}

const errorToggle = (isValid: boolean, input: HTMLInputElement) => {
    const error = input.closest('.input') as HTMLInputElement
    if (isValid) {
        error.classList.remove('withError')
    } else {
        error.classList.add('withError')
    }
}

const checkValidation = (input: HTMLInputElement) => {
    const type = input.dataset.validation as EFieldType
    switch (type) {
        case EFieldType.Phone:
            return input.value.search(MOBILE_REGEXP) !== -1
        case EFieldType.Email:
            return input.value.search(EMAIL_REGEXP) !== -1
        case EFieldType.Text:
            return input.value.length > 2
        case EFieldType.Password:
            return input.value.search(PASSWORD_REGEXP) !== -1
        default:
            return true
    }
}

const onSubmitForm = (e: Event, inputs: NodeListOf<HTMLInputElement>) => {
    e.preventDefault()

    Array.from(inputs).forEach((input) => {
        const isValid = checkValidation(input)
        if (!isValid) {
            onValidate(input)
            validatedInputs[input.name] = null
        } else {
            validatedInputs[input.name] = input.value
        }
    })
    if (Object.values(validatedInputs).includes(null)) {
        console.log(validatedInputs)
        throw new Error('Заполните форму')
    } else {
        console.log(validatedInputs)
    }
}

const onValidate = (input: HTMLInputElement) => {
    const isValid = checkValidation(input)
    errorToggle(isValid, input)
}

const formValidation = (submitButton: HTMLFormElement, inputs: NodeListOf<HTMLInputElement>) => {
    submitButton.addEventListener('submit', (e) => onSubmitForm(e, inputs))
    Array.from(inputs).forEach((input) => {
        input.addEventListener('focus', () => onValidate(input))
        input.addEventListener('blur', () => onValidate(input))
    })
}

export default formValidation
