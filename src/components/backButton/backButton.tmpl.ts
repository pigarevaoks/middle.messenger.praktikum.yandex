import backImage from 'url:./images/backImage.svg'

export const backButtonTemplate = () => `
  <a class="backButton {{class}}" href={{href}}>
    <img class="backButton__img" src=${backImage} />
  </a>
`
