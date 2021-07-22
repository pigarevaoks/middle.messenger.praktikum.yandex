export const chatListItemTemplate = () => `
  <div class="chatListItem" id={{{id}}}>
    <div class="chatListItem__avatar">{{{avatar}}}</div>
    <div class="chatListItem__content">
      <div class="chatListItem__title">{{{title}}}</div>
      <div class="chatListItem__message">{{{message}}}</div>
    </div>
    <div class="chatListItem__date">{{{date}}}</div>
    {{#if count}}
      <div class="chatListItem__count">{{{count}}}</div>  
    {{/if}}
  </div>`
