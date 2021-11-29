import { ChatCard } from "../../components/chatCard/index";
import { IconButton, EIconButtonType } from "../../components/iconButton/index";
import { EButtonType } from "../../common/constants";
import { Block, IBlock, TChildren, TProps } from "../../modules/block/index";
import { IUser, ILoginData } from "../../api/user/models";
import { router, ROUTES } from "../../modules/router/index";
import { IChat } from "../../api/chat/models";
import { SearchInput } from "../../components/searchInput/index";
import { ChatController } from "../../controllers/chat";
import { AuthController } from "../../controllers/auth";
import { UserController } from "../../controllers/user";
import { onSubmit } from "../../modules/validation/index";
import template from "./template.handlebars";
import "./chats.less";

const chatController = new ChatController();
const authController = new AuthController();
const userController = new UserController();

interface IChats extends TProps {
    chats?: IChat[];
}

export default class Chats extends Block<IChats & IBlock, TChildren> {
    constructor(props: IBlock) {
        super(
            { ...props },
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
                        const data = onSubmit(e);
                        userController
                            .findUser(data as ILoginData)
                            .then((chats: IChat[]) =>
                                this.setProps({ ...this.props, chats })
                            );
                    },
                }),
                createChatButton: new IconButton({
                    iconName: EIconButtonType.Plus,
                    type: EButtonType.Button,
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
                goToChatButton: new IconButton({
                    iconName: EIconButtonType.GoChat,
                    type: EButtonType.Button,
                    onClick: (event) => {
                        event.preventDefault();
                        // eslint-disable-next-line
                        // @ts-ignore
                        const id = event.currentTarget?.parentElement?.id;
                        router.go(`${ROUTES.CHAT}${id}`);
                    },
                }),
            }
        );
    }

    componentDidMount() {
        authController.auth((user: IUser) =>
            this.setProps({ ...this.props, user })
        );
        chatController.subscribeChatsUpdate((chats: IChat[]) =>
            this.setProps({ ...this.props, chats })
        );
        chatController.getChats();
    }

    render(): string {
        return template({
            profileButton: this.children.profileButton.getElement(),
            searchInput: this.children.searchInput.getElement(),
            submitSearchButton: this.children.submitSearchButton.getElement(),
            createChatButton: this.children.createChatButton.getElement(),
            chats: this.props.chats
                ? this.props?.chats.map((chat) =>
                      new ChatCard(chat).getElement()
                  )
                : [],
        });
    }
}
