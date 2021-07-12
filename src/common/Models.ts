import { EButtonType } from './Enums'

export interface IInput {
    name: string
    label: string
    type: string
    value?: string
    placeholder?: string
    error?: string
    required?: boolean
    disabled?: boolean
}

export interface IButton {
    type: EButtonType
    name?: string
    title: string
    class?: string
    category?: string
    href?: string
}

export interface ILinkedButton {
    type?: EButtonType
    name?: string
    title?: string
    class?: string
    category?: string
    href: string
}
