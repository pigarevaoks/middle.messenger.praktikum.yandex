export const chatListItemTemplate = () => `
<a class="chatListItem" id="{{ {id }}}">
    <div class="chatListItem__avatar">{{ {avatar }}}</div>
    <div class="chatListItem__content">
        <div class="chatListItem__title">{{ {title }}}</div>
        <div class="chatListItem__message">{{ {message }}}</div>
    </div>
    <time class="chatListItem__date">{{ {date }}}</time>
    {{ #if count }}
    <div class="chatListItem__count">{{ {count }}}</div>
    {{ /if }} </a
>`
