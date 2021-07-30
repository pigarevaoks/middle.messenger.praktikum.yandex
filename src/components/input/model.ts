export interface IInput {
    name: string
    label: string
    type: string
    placeholder?: string
    error?: string
    validation?: string
    settings?: Record<string, boolean>
    events?: Record<string, (event: Event) => void>
}
