import {Block, IBlock, TChildren, TProps} from '../../modules/block/index'
import {BackButton} from '../../components/backButton/index'
import {Button} from '../../components/button/index'
import {router, ROUTES} from '../../modules/router/index'
import {AuthController} from '../../controllers/auth'
import {EButtonType, RESOURCES_URL} from '../../common/constants'
import {IUser} from '../../api/user/models'
import {LogoutController} from '../../controllers/logout'
import {Input} from '../../components/input/index'
import {template} from './profile.tmpl'
import {INPUTS} from './const'

const authController = new AuthController()
const logoutController = new LogoutController()

export default class Profile extends Block<TProps & IBlock, TChildren> {
    constructor(props: IBlock) {
        super(
            {...props},
            {
                backButton: new BackButton({
                    onClick: (event: Event) => {
                        event.preventDefault()
                        router.go(ROUTES.HOME)
                    },
                }),
                changeProfile: new Button({
                    type: EButtonType.Button,
                    class: 'secondary',
                    name: 'changeProfile',
                    title: 'Изменить данные',
                    onClick: (event: Event) => {
                        event.preventDefault()
                        router.go(ROUTES.PROFILE_EDIT)
                    },
                }),
                changePassword: new Button({
                    type: EButtonType.Button,
                    class: 'secondary',
                    name: 'changePassword',
                    title: 'Изменить пароль',
                    onClick: (event: Event) => {
                        event.preventDefault()
                        router.go(ROUTES.PASSWORD_EDIT)
                    },
                }),
                logoutButton: new Button({
                    type: EButtonType.Button,
                    class: 'danger',
                    name: 'logout',
                    title: 'Выйти',
                    onClick: (event: Event) => {
                        event.preventDefault()
                        logoutController.logout()
                    },
                }),
            }
        )
    }

    componentDidMount() {
        authController.auth((user: IUser) => this.setProps({...this.props, user}))
    }

    render(): string {
        return template({
            backButton: this.children.backButton.getElement(),
            changeProfile: this.children.changeProfile.getElement(),
            changePassword: this.children.changePassword.getElement(),
            logoutButton: this.children.logoutButton.getElement(),
            // eslint-disable-next-line
            // @ts-ignore
            avatar: this.props?.user.avatar ? RESOURCES_URL + this.props?.user.avatar : null,
            inputs: INPUTS.map((input) =>
                new Input({
                    ...input,
                    // eslint-disable-next-line
                    // @ts-ignore
                    value: this.props?.user[input.name] || '',
                }).getElement()
            ),
        })
    }
}
