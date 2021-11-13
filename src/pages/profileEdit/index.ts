import {Block, TChildren, TProps} from '../../modules/block/index'
import {BackButton} from '../../components/backButton/index'
import {router, ROUTES} from '../../modules/router/index'
import {IUser} from '../../api/user/models'
import {AuthController} from '../../controllers/auth'
import {Button} from '../../components/button/index'
import {EButtonType, RESOURCES_URL} from '../../common/constants'
import {Input} from '../../components/input/index'
import {onSubmit, getAvatarData} from '../../modules/validation/index'
import {EditProfileController} from '../../controllers/editProfile'
import {INPUTS} from './const'
import {template} from './profileEdit.tmpl'

const editProfileController = new EditProfileController()
const authController = new AuthController()
const formId = 'profileEdit'

interface IProfileEdit extends TProps {
    user?: IUser
}

export default class ProfileEdit extends Block<IProfileEdit, TChildren> {
    constructor(props: IUser) {
        super(
            {...props},
            {
                backButton: new BackButton({
                    onClick: (event: Event) => {
                        event.preventDefault()
                        router.go(ROUTES.PROFILE)
                    },
                }),
                saveProfile: new Button({
                    type: EButtonType.Submit,
                    name: 'saveProfile',
                    title: 'Сохранить',
                    class: 'primary',
                    onClick: (event: Event) => {
                        event.preventDefault()
                        const user = onSubmit(event)
                        editProfileController.edit(user as IUser, (user: IUser) =>
                            this.setProps({...this.props, user})
                        )
                    },
                }),
                submitButton: new Button({
                    type: EButtonType.Submit,
                    name: 'saveFile',
                    title: 'Сохранить аватар',
                    class: 'secondary',
                    onClick: (event: Event) => {
                        event.preventDefault()
                        const data = getAvatarData()
                        editProfileController
                            .editAvatar(data as FormData)
                            .then((user: IUser) => this.setProps({...this.props, user}))
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
            formId,
            backButton: this.children.backButton.getElement(),
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
            saveProfile: this.children.saveProfile.getElement(),
            submitButton: this.children.submitButton.getElement(),
        })
    }
}
