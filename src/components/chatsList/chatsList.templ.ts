import defaultImage from 'url:./images/defaultImage.svg'
import {ROUTES} from 'modules/router'

const template = `
    {{#each chats}}
        <a href="${ROUTES.CHAT}{{ id }}" class="chatListItem" id="{{ id }}">
            <div class="chatListItem__avatar" id="avatar">
                {{#if avatar}}
                <img src={{ avatar }} alt="avatar" class="image__img">
                {{else}}
                    <img class="image__img" alt="img" src=${defaultImage} />
                {{/if}}
            </div>
            <div class="chatListItem__content">
                <div class="chatListItem__title">{{ title }}</div>
                <div class="chatListItem__message">{{ last_message.content }}</div>
            </div>
            <time class="chatListItem__date">{{ last_message.time }}</time>
        </a>
    {{/each}}
`
export default template
