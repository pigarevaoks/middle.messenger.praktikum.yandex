import defaultImage from 'url:./images/defaultImage.svg'
{{/* prettier-ignore */}}
export const chatListItemTemplate = `
<a class="chatListItem" id="{{ id }}">
    <div class="chatListItem__avatar" id="avatar">
        <img class="image__img" src="${defaultImage}" />
    </div>
    <div class="chatListItem__content">
        <div class="chatListItem__title" id="title">{{ title }}</div>
        <div class="chatListItem__message">{{ message }}</div>
    </div>
    <time class="chatListItem__date">{{ date }}</time>
</a>
`
