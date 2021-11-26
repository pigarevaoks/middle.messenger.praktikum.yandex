import {Block, IBlock, TChildren, TProps} from "../../modules/block/index";
import {ISignUpData} from "../../api/auth/models";
import {Button} from "../../components/button/index";
import {Input} from "../../components/input/index";
// eslint-disable-next-line
// @ts-ignore
import template from "../../templates/form/template.handlebars";
import {AuthController} from "../../controllers/auth";
import {SignupController} from "../../controllers/signup";
import {router, ROUTES} from "../../modules/router/index";
import {getFormValidation, onSubmit} from "../../modules/validation/index";
import {EButtonType} from "../../common/constants";
import {INPUTS} from "./const";
import "../../templates/form/form.less";

const authController = new AuthController();
const signupController = new SignupController();
const formId = "signupForm";

export default class Signup extends Block<TProps & IBlock, TChildren> {
    constructor(props: IBlock) {
        super(
            {...props},
            {
                primaryButton: new Button({
                    type: EButtonType.Submit,
                    name: "registrationButton",
                    title: "Зарегистрироваться",
                    class: "primary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        const isValid = getFormValidation(formId);
                        if (isValid) {
                            const data = onSubmit(event);
                            signupController.signup(data as ISignUpData);
                        }
                    },
                }),
                secondaryButton: new Button({
                    type: EButtonType.Button,
                    name: "login",
                    title: "Войти",
                    class: "secondary",
                    onClick: (event: Event) => {
                        event.preventDefault();
                        router.go(ROUTES.HOME);
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
            title: "Регистрация",
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
