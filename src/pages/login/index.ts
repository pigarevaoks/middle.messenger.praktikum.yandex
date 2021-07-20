import {MOBILE_REGEXP, EMAIL_REGEXP, PASSWORD_REGEXP} from 'common/consts'
import {EFieldsTypes} from 'common/enums'
import {Form} from 'components/form/index'
import {Button} from 'components/button/index'
import {Input} from 'components/input/index'
import {context} from './context'

const container = document.getElementById('login') as HTMLElement

const buttons = context.buttons?.map((item) => new Button(item).render()).join('')
const inputs = context.inputs?.map((item) => new Input(item).render()).join('')

container.insertAdjacentHTML(
    'afterbegin',
    new Form({
        title: context.title,
        buttons,
        inputs,
    }).render()
)

const errorToggle = (isValid: boolean, input: HTMLInputElement) => {
    const error = input.closest('.input') as HTMLInputElement
    if (isValid) {
        error.classList.remove('with-error')
    } else {
        error.classList.add('with-error')
    }
}

const checkValidation = (input: HTMLInputElement) => {
    const type = input.dataset.validation as EFieldsTypes
    switch (type) {
        case EFieldsTypes.Phone:
            return input.value.search(MOBILE_REGEXP) !== -1
        case EFieldsTypes.Email:
            return input.value.search(EMAIL_REGEXP) !== -1
        case EFieldsTypes.Text:
            return input.value.length > 2
        case EFieldsTypes.Password:
            return input.value.search(PASSWORD_REGEXP) !== -1
        default:
            return true
    }
}

const onSubmitForm = (e: Event, inputs: NodeListOf<HTMLInputElement>) => {
    e.preventDefault()
    const validatedInputs: {[key: string]: string | null} = {}
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
        throw new Error('Заполните логин и пароль')
    } else {
        console.log(validatedInputs)
    }
}

const onValidate = (input: HTMLInputElement) => {
    const isValid = checkValidation(input)
    errorToggle(isValid, input)
}

const validationForm = () => {
    const submitButton = document.getElementById('login') as HTMLFormElement
    const inputs = document.querySelectorAll('input')
    submitButton.addEventListener('submit', (e) => onSubmitForm(e, inputs))
    Array.from(inputs).forEach((input) => {
        input.addEventListener('focus', () => onValidate(input))
        input.addEventListener('blur', () => onValidate(input))
    })
}

validationForm()
