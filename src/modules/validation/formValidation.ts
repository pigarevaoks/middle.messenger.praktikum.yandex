import {checkValidation, inputValidation} from './inputValidation'

export const formValidation = (e: Event) => {
    e.preventDefault()
    const form = document.querySelector('form') as HTMLElement
    const inputs = form.querySelectorAll('input')

    const validatedInputs: {[key: string]: string | null} = {}
    Array.from(inputs).forEach((input) => {
        const isValid = checkValidation(input)
        if (!isValid) {
            console.log('FORM', input)
            inputValidation(input)
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
