import {router, ROUTES} from "../modules/router/index";
import {AuthAPI} from "../api/auth/index";
import {ChatAPI} from "../api/chat/index";
import WSAPI from "../api/websocket/index";
import {IChat, ISendedMessage} from "../api/chat/models";
import {chatsStore} from "../stores/chats";
import {chatStore} from "../stores/chat";
import {socketStore} from "../stores/socketStore";
import {STORE_EVENTS} from "../modules/store/constants";

const authAPI = new AuthAPI();
const chatAPI = new ChatAPI();
const wsAPI = new WSAPI();

export class ChatController {
    subscribeChatsUpdate(callback: (storeData: any) => void) {
        chatsStore.on(STORE_EVENTS.UPDATE, callback);
    }

    subscribeChatUpdate(callback: (storeData: any) => void) {
        chatStore.on(STORE_EVENTS.UPDATE, callback);
    }

    subscribeSocketUpdate(callback: (storeData: any) => void) {
        socketStore.on(STORE_EVENTS.UPDATE, callback);
    }

    async getChats() {
        try {
            const chatsList = await chatAPI.getChats();
            chatsStore.update(chatsList);
        } catch (error) {
            console.log("getChats", error);
        }
    }

    async createChat() {
        try {
            const id = new Date().valueOf();
            await chatAPI.createChat(`Chat ${id}`);
            this.getChats();
        } catch (error) {
            console.log("createChat", error);
        }
    }

    async deleteChat() {
        try {
            const chatID = router.getUrlParam();
            await chatAPI.deleteChat(chatID);
            router.go(ROUTES.HOME);
        } catch (error) {
            console.log("deleteChat", error);
        }
    }

    async getChatData() {
        try {
            const chatID = router.getUrlParam();
            const chatsList = await chatAPI.getChats();
            const chat = chatsList.find((chat: IChat) => chat.id.toString() === chatID);
            chatStore.update(chat);
        } catch (error) {
            console.log("getChatData", error);
        }
    }

    async addUsersToChat() {
        try {
            const chatId = router.getUrlParam();
            chatAPI.addUsersToChat({
                users: [1],
                chatId: parseInt(chatId),
            });
        } catch (error) {
            console.log("addUsersToChat", error);
        }
    }

    async deleteUsersFromChat() {
        try {
            const chatId = router.getUrlParam();
            chatAPI.deleteUserFromChat({
                users: [1],
                chatId: parseInt(chatId),
            });
        } catch (error) {
            console.log("deleteUsersFromChat", error);
        }
    }

    async sendMessage(data: ISendedMessage) {
        // eslint-disable-next-line
        // @ts-ignore
        const {socket} = socketStore.get();
        socket.send(
            JSON.stringify({
                content: data.message,
                type: "message",
            })
        );
    }

    async getChatWithUserById() {
        try {
            const chatID: string = router.getUrlParam();
            const chat = await chatAPI.getChatWithUserById(chatID);
            chatStore.update(chat);
            return chat;
        } catch (error) {
            console.log("getChatWithUserById", error);
        }
    }

    async openWS(onGetUser: (userId: number) => void, onGetMessage: (data: any) => void) {
        try {
            const chatId = parseInt(router.getUrlParam());
            const userIdResponse = await authAPI.getUser();
            const tokenResponse = await chatAPI.getToken(chatId);

            if (tokenResponse && userIdResponse && chatId) {
                const {token} = tokenResponse;
                const userId = userIdResponse.id as number;
                onGetUser(userId);
                const socketInstance = wsAPI.connect({userId, chatId, token});

                this.subscribeSocketUpdate((socket: WebSocket) => socket);
                socketStore.update({socket: socketInstance});
                // eslint-disable-next-line
                // @ts-ignore
                const {socket} = socketStore.get();

                socket.addEventListener("open", () => {
                    console.log("Открыт");
                    socket.send(
                        JSON.stringify({
                            content: "0",
                            type: "get old",
                        })
                    );
                });

                socket.addEventListener("message", (event: any) => {
                    console.log("Получены данные", JSON.parse(event.data));
                    onGetMessage(JSON.parse(event.data));
                });
            }
        } catch (error) {
            console.log("openWS", error);
        }
    }
}
