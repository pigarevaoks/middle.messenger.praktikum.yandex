import Block from 'modules/block'
// import {IUser, IAvatartData} from 'api/user/models'
import {makeHtmlFromTemplate} from 'utils/makeHtmlFromTemplate'
import {EButtonType} from 'common/enums'
import {Button} from 'components/button'
import {FileInput} from 'components/fileInput'
import {avatarFormValidation} from 'modules/validation'
import {editAvatarController} from 'controllers/editProfile'
// import {userController} from 'controllers/user'
import template from './avatar.templ'
import './avatar.less'
interface IAvatar {
    isEdit?: boolean
    id?: string
    src?: string
    name?: string
}

class Avatar extends Block {
    constructor(props: IAvatar) {
        const fileInput = new FileInput({})
        const submitButton = new Button({
            type: EButtonType.Submit,
            class: 'secondary',
            name: 'sendAvatar',
            title: 'Отправить',
            events: {
                click: (event: Event) => {
                    event.preventDefault()
                    const data = avatarFormValidation(event)
                    console.log('Avatar', data)
                    editAvatarController(data)
                }
            }
        })
        super({tagName: 'div', children: {fileInput, submitButton}, ...props})
    }

    render(): string {
        return makeHtmlFromTemplate(template, this.props)
    }
}

export {Avatar, IAvatar}
