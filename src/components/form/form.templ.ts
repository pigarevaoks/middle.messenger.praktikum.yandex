export const formTemplate = () => `
  <section class="form">
    <div class="form__content">
      <div>
        <h1 class="form__title">{{{title}}}</h1>
        <div class="form__fields">
          {{{inputs}}}
        </div>
      </div>
      <div class="form__buttons">
        {{{buttons}}}
      </div>
    </div>
  </section>
  `
