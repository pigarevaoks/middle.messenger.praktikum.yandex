export const errorTemplate = () => `
  <div class="error">
    <div class="error__title">{{{title}}}</div>
    <div class="error__description">{{{description}}}</div>
    <a href={{{link.href}}} class="error__link">{{{link.title}}}</a>
  </div>
`
