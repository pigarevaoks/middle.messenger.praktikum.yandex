const WEBSOCKET_URL = 'wss://ya-praktikum.tech/ws'

class WSAPI {
    public connect = (params: {userId: number; chatId: number; token: string}) => {
        return new WebSocket(
            `${WEBSOCKET_URL}/chats/${params.userId}/${params.chatId}/${params.token}/`
        )
    }
}

export default WSAPI
