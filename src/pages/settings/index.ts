import Block, {IBlock} from 'modules/block'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import template from 'templates/profileForm'
import {Avatar} from 'components/avatar'
import {BackButton} from 'components/backButton'
import {userController} from 'controllers/user'
import {IUser} from 'api/user/models'
import {EProfileType} from 'common/enums'
import {router, ROUTES} from 'modules/router'
import Profile from 'templates/profile'
import 'templates/profileForm/profileForm.less'

export default class Settings extends Block {
    constructor(props: IBlock) {
        const backButton = new BackButton({
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    router.go(ROUTES.MESSENGER)
                }
            }
        })
        const avatar = new Avatar({})
        super({
            tagName: 'main',
            children: {
                ...props?.children,
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
                        type: EProfileType.Profile,
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
