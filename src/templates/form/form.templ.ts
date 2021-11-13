export const template = Handlebars.compile(`
  <section class="form">
    <form method="POST" class="form__container" id={{formId}}>
      <div class="form__content">
        <div>
          <h1 class="form__title">{{title}}</h1>
          <div class="form__fields">
            {{childComponentArray this "inputs"}}
          </div>
        </div>
        <div>
          <div class="form__buttons">
            {{childComponent this "primaryButton"}}
            {{childComponent this "secondaryButton"}}
          </div>
          <div class="form-error" id="errors"></div>
        </div>
      </div>
    </form>
  </section>
`);
