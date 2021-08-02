// import {EButtonType} from 'common/enums'

// export interface IButton {
//     type: EButtonType
//     name?: string
//     title: string
//     class?: string
//     category?: string
//     href?: string
// }

interface IButton {
    title: string
    events?: Record<string, (event: Event) => void>
    settings?: Record<string, boolean>
}
