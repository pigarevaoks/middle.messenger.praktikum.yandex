export const template = Handlebars.compile(`
  <div class="field {{#if isLined}}field__lined{{/if}}">
      <label for={{name}} class="field__label ">{{label}}</label>
        <input
          class="field__input"
          type="{{type}}"
          name="{{name}}"
          {{#if value}}
          value={{value}}
          {{/if}}
          {{#if placeholder}}
          placeholder="{{placeholder}}"
          {{/if}}
          {{#if disabled}}
          disabled={{disabled}}
          {{/if}}
          autocomplete="on"
        >
        {{#if error}}<div class="field__error">{{error}}</div>{{/if}}
        {{#if description}}<div class="field__description">{{description}}</div>{{/if}}
  </div>
`)
