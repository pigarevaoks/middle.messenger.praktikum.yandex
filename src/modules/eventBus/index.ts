export default class EventBus {
    protected listeners: {
        [name: string]: Function[]
    }

    constructor() {
        this.listeners = {}
    }

    on(event: string | number, callback: Function): void {
        if (!this.listeners[event]) {
            this.listeners[event] = []
        }

        this.listeners[event].push(callback)
    }

    off(event: string | number, callback: Function): void {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`)
        }

        this.listeners[event] = this.listeners[event].filter(
            (listener: Function) => listener !== callback
        )
    }

    // @ts-ignore
    emit(event: string | number, ...args) {
        if (!this.listeners[event]) {
            throw new Error(`Нет события: ${event}`)
        }

        this.listeners[event].forEach((listener: Function) => listener(...args))
    }
}
