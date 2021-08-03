export const profileFormTemplate = `
<section class="profile">
    <div class="profile__content">
        <div id="backButton">{{ backButton }}</div>
        <div class="profile__image" id="image">{{ image }}</div>
        <div class="profile__name">{{ name }}</div>
        <form class="profile__form">
            <div class="profile__inputs" id="inputs">{{ inputs }}</div>
            <div class="profile__buttons" id="buttons">{{ buttons }}</div>
        </form>
    </div>
</section>
`
