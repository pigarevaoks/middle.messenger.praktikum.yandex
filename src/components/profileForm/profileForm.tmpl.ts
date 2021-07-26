export const profileFormTemplate = () => `
  <section class="profile">
    {{{backButton}}}
    <div class="profile__image">
      {{{image}}}
    </div>
    <div class="profile__name">{{{name}}}</div>
    <form class="profile__form">
      <div class="profile__inputs">
        {{{inputs}}}
      </div>
      <div class="profile__buttons">
        {{{buttons}}}
      </div>
    </form>
  </section>`
