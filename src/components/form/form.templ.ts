export const formTemplate = () => `
  <section class="form">
    <form class="form__content">
      <div>
        <h1 class="form__title">{{this.title}}</h1>
        <div class="form__fields">
        {{{inputs}}}
        </div>
      </div>
      <div class="form__buttons">
      {{{buttons}}}
      </div>
    </form>
  </section>
  `
