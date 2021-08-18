export const profileInputTemplate = `
  <div class="profileInput" id="input">
	 	<div class="profileInput__field">
      <label for={{name}} class="profileInput__label">{{label}}</label>
      <input
        class="profileInput__input"
        {{#if value}}
        value={{value}}
        {{/if}}
        name="{{name}}"
        type="{{type}}"
        id="{{name}}"
        placeholder="{{placeholder}}"
        data-validation="{{validation}}"
        {{#if disabled}}
        disabled={{disabled}}
        {{/if}}
      >
		</div>
	 	<div class="profileInput__error">{{error}}</div>
	</div>
`
