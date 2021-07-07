export const buttonTemplate = `
  {{#if href}}
    <a class="button {{class}}" href={{href}}>{{title}}</a>
  {{else}}
    <button class="button {{class}}" type={{type}} name={{name}}>{{title}}</button>
  {{/if}}
`
