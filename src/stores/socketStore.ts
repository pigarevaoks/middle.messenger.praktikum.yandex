import Store from '../modules/store/index'

export const socketStore = new Store<{socket: WebSocket}>()
