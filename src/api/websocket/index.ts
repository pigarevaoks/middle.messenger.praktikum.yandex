import {WEBSOCKET_URL} from "../consts";

class WSAPI {
    connect = (params: {userId: number; chatId: number; token: string}) => {
        return new WebSocket(
            `${WEBSOCKET_URL}/chats/${params.userId}/${params.chatId}/${params.token}/`
        );
    }
}

export default WSAPI;
