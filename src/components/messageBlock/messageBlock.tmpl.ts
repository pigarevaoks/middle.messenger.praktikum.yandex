import fileImage from 'url:./images/fileImage.svg'
{{/* prettier-ignore */}}
import arrowImage from 'url:./images/arrowImage.svg'
{{/* prettier-ignore */}}
export const messageBlockTemplate = `
<form class="messageBlock" id="messageForm">
    <button class="messageBlock__buttonFile">
        <img src="${fileImage}" />
    </button>
    <div class="messageBlock__messageInput" id="messageInput">
        {{ messageInput }}
    </div>
    <button class="messageBlock__buttonAction" type="submit" id="sendMessage">
        <img src="${arrowImage}" />
    </button>
</form>
`
