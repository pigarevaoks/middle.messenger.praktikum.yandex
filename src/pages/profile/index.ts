import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
import {BackButton} from "../../components/backButton/index";
import {Button} from "../../components/button/index";
import {router, ROUTES} from "../../modules/router/index";
import {AuthController} from "../../controllers/auth";
import {EButtonType, RESOURCES_URL} from "../../common/constants";
import {IUser} from "../../api/user/models";
import {LogoutController} from "../../controllers/logout";
import {Input} from "../../components/input/index";
// eslint-disable-next-line
// @ts-ignore
import template from "./template.handlebars";
import {INPUTS} from "./const";

const authController = new AuthController();
const logoutController = new LogoutController();

interface IProfile extends TProps {
    user?: IUser
}

export default class Profile extends Block<IProfile, TChildren> {
    constructor(props: IBlock) {
        super(
            {...props},
            {
                backButton: new BackButton({
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.HOME);
                    },
                }),
                changeProfile: new Button({
                    type: EButtonType.Button,
                    class: "secondary",
                    name: "changeProfile",
                    title: "Изменить данные",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.PROFILE_EDIT);
                    },
                }),
                changePassword: new Button({
                    type: EButtonType.Button,
                    class: "secondary",
                    name: "changePassword",
                    title: "Изменить пароль",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.PASSWORD_EDIT);
                    },
                }),
                logoutButton: new Button({
                    type: EButtonType.Button,
                    class: "danger",
                    name: "logout",
                    title: "Выйти",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        logoutController.logout();
                    },
                }),
            }
        );
    }

    componentDidMount() {
        authController.auth((user: IUser) => this.setProps({...this.props, user}));
    }

    render(): string {
        return template({
            backButton: this.children.backButton.getElement(),
            changeProfile: this.children.changeProfile.getElement(),
            changePassword: this.children.changePassword.getElement(),
            logoutButton: this.children.logoutButton.getElement(),
            avatar: this.props?.user?.avatar ? RESOURCES_URL + this.props?.user?.avatar : null,
            emailInput: new Input({
                ...INPUTS.email,
                value: this.props?.user?.email || "",
            }).getElement(),
            loginInput: new Input({
                ...INPUTS.login,
                value: this.props?.user?.login || "",
            }).getElement(),
            firstNameInput: new Input({
                ...INPUTS.first_name,
                value: this.props?.user?.first_name || "",
            }).getElement(),
            secondNameInput: new Input({
                ...INPUTS.second_name,
                value: this.props?.user?.second_name || "",
            }).getElement(),
            displayNameInput: new Input({
                ...INPUTS.display_name,
                value: this.props?.user?.display_name || "",
            }).getElement(),
            phoneInput: new Input({
                ...INPUTS.phone,
                value: this.props?.user?.phone || "",
            }).getElement(),
        });
    }
}
