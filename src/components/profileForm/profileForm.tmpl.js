export const profileFormTemplate = `
  <section class="profile">
    <div class="profile__image">
      {{> image this}}
    </div>
    <div class="profile__name">{{this.context.name}}</div>
    <form>
      <div class="profile__inputs">
        {{#each this.context.inputs}}
          {{> input this}}
        {{/each}}
      </div>
      <div class="profile__buttons">
        {{#each this.context.buttons}}
          {{> button this}}
        {{/each}}
      </div>
    </form>
  </section>`;
