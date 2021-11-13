import {EButtonType} from '../../common/constants'
// eslint-disable-next-line
// @ts-ignore
import plus from 'url:../../assets/icons/circle-plus.svg'
// eslint-disable-next-line
// @ts-ignore
import minus from 'url:../../assets/icons/circle-minus.svg'
// eslint-disable-next-line
// @ts-ignore
import del from 'url:../../assets/icons/circle-x.svg'
// eslint-disable-next-line
// @ts-ignore
import user from 'url:../../assets/icons/user.svg'
// eslint-disable-next-line
// @ts-ignore
import arrowLeft from 'url:../../assets/icons/arrow-left.svg'
// eslint-disable-next-line
// @ts-ignore
import profile from 'url:../../assets/icons/profile.svg'
// eslint-disable-next-line
// @ts-ignore
import send from 'url:../../assets/icons/send.svg'
// eslint-disable-next-line
// @ts-ignore
import more from 'url:../../assets/icons/more.svg'
// eslint-disable-next-line
// @ts-ignore
import search from 'url:../../assets/icons/search.svg'
// eslint-disable-next-line
// @ts-ignore
import goChat from 'url:../../assets/icons/go-chat.svg'

export const template = Handlebars.compile(`
    <button type={{type}} class="iconButton" type="${EButtonType.Button}">
        {{#if (isEqual iconName "plus")}}
            <img src="${plus}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "minus")}}
            <img src="${minus}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "user")}}
            <img src="${user}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "del")}}
            <img src="${del}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "arrowLeft")}}
            <img src="${arrowLeft}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "profile")}}
            <img src="${profile}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "send")}}
            <img src="${send}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "more")}}
            <img src="${more}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "search")}}
            <img src="${search}" class="circle-button"/>
        {{/if}}
        {{#if (isEqual iconName "goChat")}}
            <img src="${goChat}" class="circle-button"/>
        {{/if}}
        {{#if text}}<span class="iconButton__text">{{ text }}</span>{{/if}}
    </button>
`)
