import defaultImage from 'url:./images/defaultImage.svg'

export const imageTemplate = `
  <div class="image">
    {{#if avatar}}
        <img src={{ avatar }} alt="avatar" class="image__img">
    {{else}}
      <img class="image__img" alt="img" src=${defaultImage} />
    {{/if}}
  </div>
`
