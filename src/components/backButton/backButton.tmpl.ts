import {EButtonType} from 'common/enums'
import backImage from 'url:./images/backImage.svg'

export const backButtonTemplate = `
<button class="backButton" type="${EButtonType.Button}" name="back" id="backButton">
    <img class="backButton__img" src="${backImage}" />
</button>
`
