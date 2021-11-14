import {EventBus} from '../eventBus/index'
import {STORE_EVENTS} from './constants'

export default class Store<T> extends EventBus {
    state: T | null

    constructor(initialData: T | null = null) {
        super()
        this.state = initialData
    }

    get() {
        return this.state
    }

    update(newData: T): void {
        this.state = {...this.state, ...newData}
        this.emit(STORE_EVENTS.UPDATE, newData)
    }
}
