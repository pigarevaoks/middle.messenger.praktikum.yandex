export const inputTemplate = () => `
  <div class="input">
    <div class="input__field">
      <input
        class="input__input"
        name={{name}}
        type={{type}}
        id={{name}}
        data-validation={{validation}}
      >
      <label for={{name}} class="input__label">{{label}}</label>
    </div>
    <div class="input__error">{{error}}</div>
  </div>
`
