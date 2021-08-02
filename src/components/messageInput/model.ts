import {EFieldType} from 'common/enums'

export interface IMessageInput {
    name: string
    type: string
    placeholder?: string
    error?: string
    validation: EFieldType
}
