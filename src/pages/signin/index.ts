import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
import {Button} from "../../components/button/index";
import {Input} from "../../components/input/index";
import {EButtonType} from "../../common/constants";
// eslint-disable-next-line
// @ts-ignore
import template from "../../templates/form/template.handlebars";
import {AuthController} from "../../controllers/auth";
import {router, ROUTES} from "../../modules/router/index";
import {SigninController} from "../../controllers/signin";
import {getFormValidation, onSubmit} from "../../modules/validation/index";
import {INPUTS} from "./const";
import "../../templates/form/form.less";

const authController = new AuthController();
const signinController = new SigninController();
const formId = "signinForm";

export default class Signin extends Block<TProps & IBlock, TChildren> {
    constructor(props: IBlock) {
        super(
            {...props},
            {
                primaryButton: new Button({
                    type: EButtonType.Submit,
                    title: "Авторизоваться",
                    class: "primary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        const isValid = getFormValidation(formId);
                        if (isValid) {
                            const data = onSubmit(event);
                            signinController.signin(data as any);
                        }
                    },
                }),
                secondaryButton: new Button({
                    type: EButtonType.Button,
                    title: "Нет аккаунта?",
                    class: "secondary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.SIGNUP);
                    },
                }),
            }
        );
    }

    componentDidMount() {
        authController.redirectToChat();
    }

    render(): string {
        return template({
            title: "Вход",
            formId,
            inputs: INPUTS.map((input) =>
                new Input({
                    value: "",
                    ...input,
                }).getElement()
            ),
            primaryButton: this.children.primaryButton.getElement(),
            secondaryButton: this.children.secondaryButton.getElement(),
        });
    }
}
