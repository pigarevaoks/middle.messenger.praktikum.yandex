import { Block, IBlock, TChildren, TProps } from "../../modules/block/index";
import { BackButton } from "../../components/backButton/index";
import { EButtonType, RESOURCES_URL } from "../../common/constants";
import { IUser } from "../../api/user/models";
import { router, ROUTES } from "../../modules/router/index";
import { AuthController } from "../../controllers/auth";
import { Button } from "../../components/button/index";
import { Input } from "../../components/input/index";
import { getFormValidation, onSubmit } from "../../modules/validation/index";
import { EditProfileController } from "../../controllers/editProfile";
import { INPUTS } from "./const";
import template from "./template.handlebars";

const editPasswordController = new EditProfileController();

const authController = new AuthController();
const formId = "passwordEdit";

interface IPasswordEdit extends TProps {
    user?: IUser;
}

export default class PasswordEdit extends Block<IPasswordEdit, TChildren> {
    constructor(props: IBlock) {
        super(
            { ...props },
            {
                backButton: new BackButton({
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.PROFILE);
                    },
                }),
                savePassword: new Button({
                    type: EButtonType.Submit,
                    name: "savePassword",
                    title: "Сохранить",
                    class: "primary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        const isValid = getFormValidation(formId);
                        if (isValid) {
                            const data = onSubmit(event);
                            const { oldPassword, newPassword } = data as any;
                            editPasswordController.editPassword({
                                oldPassword,
                                newPassword,
                            });
                        }
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
            description:
                "Пароль должен состоять из заглавных и обычных букв, цифр, доп символов и длиной более 6 символов",
            backButton: this.children.backButton.getElement(),
            avatar: this.props?.user?.avatar
                ? RESOURCES_URL + this.props?.user?.avatar
                : null,
            savePassword: this.children.savePassword.getElement(),
            oldPassword: new Input({
                ...INPUTS.oldPassword,
            }).getElement(),
            newPassword: new Input({
                ...INPUTS.newPassword,
            }).getElement(),
            repeatNewPassword: new Input({
                ...INPUTS.repeatNewPassword,
            }).getElement(),
        });
    }
}
