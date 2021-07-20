export const buttonTemplate = () => `
  {{#if href}}
    <a class="button {{class}}" href={{href}} id={{name}}>{{title}}</a>
  {{else}}
    <button class="button {{class}}" type={{type}} name={{name}} id={{name}}>{{title}}</button>
  {{/if}}
`
