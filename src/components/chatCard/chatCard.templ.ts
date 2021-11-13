// eslint-disable-next-line
// @ts-ignore
import user from 'url:../../assets/icons/user.svg'

export const template = Handlebars.compile(`
    <div class="chatCard" id="{{ id }}">
        {{#if avatar}}
            <img src={{ avatar }} alt="avatar" class="chatCard__avatar">
        {{else}}
            <img class="chatCard__avatar" alt="img" src=${user} />
        {{/if}}
        <div class="chatCard__content">
            <h2 class="chatCard__title">{{ title }}</h2>
            {{#if description}}
                <div class="chatCard__message">{{ description }}</div>
            {{/if}}
        </div>
        {{#if time}}
            <time class="chatCard__date">{{ time }}</time>
        {{/if}}
        {{#if unread_count}}
            <mark class="chatCard__count">{{ unread_count }}</mark>
        {{/if}}
        {{ childComponent this "goToChatButton" }}
    </div>
`)
