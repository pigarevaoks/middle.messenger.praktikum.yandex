export const formTemplate = `
  <section class="form">
    <form class="form__content" class="login__form">
      <div>
        <h1 class="form__title">Вход</h1>
        <div class="form__fields">
        {{#each this.context.inputs}}
          {{> input this}}
        {{/each}}
        </div>
      </div>
      <div class="form__buttons">
      {{#each this.context.buttons}}
          {{> button this}}
        {{/each}}
      </div>
    </form>
  </section>`;
