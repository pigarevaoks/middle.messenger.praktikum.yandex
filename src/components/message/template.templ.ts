export const template = Handlebars.compile(`
    <div class="message {{#if isMyMessage}}myMessage{{else}}authorMessage{{/if}}" id={{id}}>
        <p class="message__text">{{text}}</p>
        {{#if time}}<time class="message__time">{{time}}</time>{{/if}}
    </div>
`);
