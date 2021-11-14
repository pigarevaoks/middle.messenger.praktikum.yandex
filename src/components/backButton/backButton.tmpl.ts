import {EButtonType} from '../../common/constants'
// eslint-disable-next-line
// @ts-ignore
import arrowLeft from 'url:../../assets/icons/arrow-left.svg'

export const template = Handlebars.compile(`
    <button class="backButton" type="${EButtonType.Button}" name="back">
        <img src="${arrowLeft}" class="circle-button"/>
    </button>
`)
