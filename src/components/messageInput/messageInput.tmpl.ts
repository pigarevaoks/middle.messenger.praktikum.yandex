export const messageInputTemplate = () => `
  <div class="messageInput" id="input">
    <input
      class="messageInput__input"
      name={{name}}
      type={{type}}
      id={{name}}
      placeholder={{placeholder}}
      data-validation={{validation}}
    />
    <div class="messageInput__error">{{error}}</div>
  </div>
`
