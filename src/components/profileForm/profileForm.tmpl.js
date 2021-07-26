export const profileFormTemplate = `
  <section class="profile">
    {{> backButton this.context}}
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
          {{#if_eq this.category 'linkButton'}}
            {{> linkedbutton this}}
          {{else}}
            {{> button this}}
          {{/if_eq}}
        {{/each}}
      </div>
    </form>
  </section>`
