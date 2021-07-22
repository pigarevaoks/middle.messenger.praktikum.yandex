import fileImage from 'url:./images/fileImage.svg'
import arrowImage from 'url:./images/arrowImage.svg'

export const messageBlockTemplate = () => `
  <form class="messageBlock">
    <button class="messageBlock__button-file">
      <img src=${fileImage} />
    </button>
      <input
        class="messageBlock__input"
        name={{name}}
        type={{type}}
        id={{name}}
        placeholder={{placeholder}}
      >
      <button class="messageBlock__button-action" type="submit">
        <img src=${arrowImage} />
      </button>
    </form>
`
