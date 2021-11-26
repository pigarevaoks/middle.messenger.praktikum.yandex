import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
import {IUser, ILoginData} from "../../api/user/models";
import {IChat, ISendedMessage, IMessage} from "../../api/chat/models";
import {SearchInput} from "../../components/searchInput/index";
import {EButtonType, RESOURCES_URL} from "../../common/constants";
import {ChatCard} from "../../components/chatCard/index";
import {IconButton, EIconButtonType} from "../../components/iconButton/index";
import {Message} from "../../components/message/index";
import {ChatController} from "../../controllers/chat";
import {AuthController} from "../../controllers/auth";
import {router, ROUTES} from "../../modules/router/index";
import {UserController} from "../../controllers/user";
import {onSubmit} from "../../modules/validation/index";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import "./chat.less";

interface IChatPage extends TProps {
    chat?: IChat
    chats?: IChat[]
    user?: IUser
}

const chatController = new ChatController();
const authController = new AuthController();
const userController = new UserController();

export default class Chat extends Block<IChatPage, TChildren> {
    constructor(props: IBlock) {
        super(
            {...props},
            {
                searchInput: new SearchInput({
                    name: "login",
                    type: "text",
                    placeholder: "Поиск",
                }),
                submitSearchButton: new IconButton({
                    iconName: EIconButtonType.Search,
                    type: EButtonType.Submit,
                    onClick: (e: Event) => {
                        const data = onSubmit(e) as ILoginData;
                        userController
                            .findUser(data)
                            .then((chats: IChat[]) => this.setProps({...this.props, chats}));
                    },
                }),
                createChatButton: new IconButton({
                    iconName: EIconButtonType.Plus,
                    text: "Создать чат",
                    onClick: () => chatController.createChat(),
                }),
                profileButton: new IconButton({
                    iconName: EIconButtonType.Profile,
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.PROFILE);
                    },
                }),
                moreButton: new IconButton({
                    iconName: EIconButtonType.More,
                    onClick: () => {
                        const menuOptions = document.getElementById("menuOptions") as HTMLElement;
                        menuOptions.classList.toggle("hide");
                    },
                }),
                addUserButton: new IconButton({
                    iconName: EIconButtonType.Plus,
                    text: "Добавить пользователя",
                    onClick: () => chatController.addUsersToChat(),
                }),
                deleteUserButton: new IconButton({
                    iconName: EIconButtonType.Minus,
                    text: "Удалить пользователя",
                    onClick: () => chatController.deleteUsersFromChat(),
                }),
                deleteChatButton: new IconButton({
                    iconName: EIconButtonType.Delete,
                    text: "Удалить чат",
                    onClick: () => chatController.deleteChat(),
                }),
                sendMessageButton: new IconButton({
                    iconName: EIconButtonType.Send,
                    type: EButtonType.Submit,
                    onClick: (e: Event) => {
                        const data = onSubmit(e);
                        chatController.sendMessage(data as ISendedMessage);
                    },
                }),
            }
        );
    }

    componentDidMount() {
        authController.auth((user: IUser) => this.setProps({...this.props, user}));
        chatController.subscribeChatsUpdate((chats: IChat[]) =>
            this.setProps({...this.props, chats})
        );
        chatController.subscribeChatUpdate((chat: IChat) => this.setProps({...this.props, chat}));
        chatController.getChats();
        chatController.getChatData();
        chatController.openWS(
            (userId: number) => {
                this.setProps({userId});
            },
            (messages: IMessage[]) => {
                const newMessages = Array.isArray(messages) ? messages : [messages];
                this.setProps({
                    messages: this.props.messages
                        ? [...(this.props.messages as IMessage[]), ...newMessages].reverse()
                        : ([...newMessages] as IMessage[]),
                });
            }
        );
    }

    render(): string {
        console.log("!!!!", this.props?.chat);
        return template({
            chatTitle: this.props.chat?.title,
            profileButton: this.children.profileButton.getElement(),
            createChatButton: this.children.createChatButton.getElement(),
            moreButton: this.children.moreButton.getElement(),
            deleteUserButton: this.children.deleteUserButton.getElement(),
            addUserButton: this.children.addUserButton.getElement(),
            deleteChatButton: this.children.deleteChatButton.getElement(),
            sendMessageButton: this.children.sendMessageButton.getElement(),
            avatar: this.props?.chat?.avatar ? RESOURCES_URL + this.props?.chat.avatar : null,
            searchInput: this.children.searchInput.getElement(),
            submitSearchButton: this.children.submitSearchButton.getElement(),
            chats: this.props.chats
                ? this.props.chats.map((chat) => new ChatCard(chat).getElement())
                : [],
            messages: this.props.messages
                ? // eslint-disable-next-line
                  // @ts-ignore
                  this.props.messages.map((message: IMessage) =>
                      new Message({
                          id: message.id,
                          text: message.content,
                          time: message.time,
                          isMyMessage: message.user_id === this.props.userId,
                      }).getElement()
                  )
                : [],
        });
    }
}
