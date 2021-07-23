import fileImage from 'url:./images/fileImage.svg'
import arrowImage from 'url:./images/arrowImage.svg'

export const messageBlockTemplate = () => `
  <form class="messageBlock" id="messageForm">
    <button class="messageBlock__buttonFile">
      <img src=${fileImage} />
    </button>
    {{{messageInput}}}
    <button class="messageBlock__buttonAction" type="submit" id="sendMessage">
      <img src=${arrowImage} />
    </button>
  </form>
`
