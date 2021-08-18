import Block, {IBlock} from 'modules/block'
import {IUser} from 'api/user/models'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import template from 'templates/profileForm'
import {Avatar} from 'components/avatar'
import Profile from 'templates/profile'
import {BackButton} from 'components/backButton'
import {EProfileType} from 'common/enums'
import {userController} from 'controllers/user'
import 'templates/profileForm/profileForm.less'

export default class ChangePassword extends Block {
    constructor(props: IBlock) {
        const backButton = new BackButton({})
        const avatar = new Avatar({})

        super({
            tagName: 'main',
            children: {
                backButton,
                avatar
            },
            ...props
        })
    }

    // @ts-ignore
    componentDidMount() {
        userController((user: IUser) =>
            this.setProps({
                ...this.props,
                children: {
                    ...this.props.children,
                    profile: new Profile({
                        type: EProfileType.PasswordEdit,
                        ...user
                    })
                }
            })
        )
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}
