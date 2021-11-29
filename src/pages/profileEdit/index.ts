import { Block, TChildren, TProps } from "../../modules/block/index";
import { BackButton } from "../../components/backButton/index";
import { router, ROUTES } from "../../modules/router/index";
import { IUser } from "../../api/user/models";
import { AuthController } from "../../controllers/auth";
import { Button } from "../../components/button/index";
import { EButtonType, RESOURCES_URL } from "../../common/constants";
import { Input } from "../../components/input/index";
import { onSubmit, getAvatarData } from "../../modules/validation/index";
import { EditProfileController } from "../../controllers/editProfile";
import { INPUTS } from "./const";
import template from "./template.handlebars";
import "../../styles/profile.less";

const editProfileController = new EditProfileController();
const authController = new AuthController();
const formId = "profileEdit";

interface IProfileEdit extends TProps {
    user?: IUser;
}

export default class ProfileEdit extends Block<IProfileEdit, TChildren> {
    constructor(props: IUser) {
        super(
            { ...props },
            {
                backButton: new BackButton({
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.PROFILE);
                    },
                }),
                saveProfile: new Button({
                    type: EButtonType.Submit,
                    name: "saveProfile",
                    title: "Сохранить",
                    class: "primary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        const user = onSubmit(event);
                        editProfileController.edit(
                            user as IUser,
                            (user: IUser) =>
                                this.setProps({ ...this.props, user })
                        );
                    },
                }),
                submitButton: new Button({
                    type: EButtonType.Submit,
                    name: "saveFile",
                    title: "Сохранить аватар",
                    class: "secondary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        const data = getAvatarData();
                        editProfileController
                            .editAvatar(data as FormData)
                            .then((user: IUser) =>
                                this.setProps({ ...this.props, user })
                            );
                    },
                }),
            }
        );
    }

    componentDidMount() {
        authController.auth((user: IUser) =>
            this.setProps({ ...this.props, user })
        );
    }

    render(): string {
        return template({
            formId,
            backButton: this.children.backButton.getElement(),
            avatar: this.props?.user?.avatar
                ? RESOURCES_URL + this.props?.user?.avatar
                : null,
            saveProfile: this.children.saveProfile.getElement(),
            submitButton: this.children.submitButton.getElement(),
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
