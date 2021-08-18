import defaultImage from 'url:./images/defaultImage.svg'

const template = `
  <form class="avatar" id="avatarForm">
    <div class="avatar__container">
      {{#if avatar}}
        <img src={{ avatar }} alt="avatar" class="avatar__img">
        {{else}}
        <img class="avatar__img" alt="img" src=${defaultImage} />
      {{/if}}
      </div>
      {{#if isEdit}}
        <div id="fileInput"></div>
        <div id="submitButton"></div>
      {{/if}}
  </form>
`

export default template
