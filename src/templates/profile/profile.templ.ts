const template = `
    <form class="profile__form" id="form">
    {{type}}
        <div class="profile__inputs">
            <div id="email"></div>
            <div id="login"></div>
            <div id="firstName"></div>
            <div id="secondName"></div>
            <div id="displayName"></div>
            <div id="phone"></div>
            <div id="oldPassword"></div>
            <div id="newPassword"></div>
            <div id="repeatNewPassword"></div>
        </div>
        <div class="profile__buttons" id="buttons">
            <div id="changeProfile"></div>
            <div id="changePassword"></div>
            <div id="logout"></div>
            <div id="saveProfile"></div>
            <div id="savePassword"></div>
        </div>
        <div class="profile__errors" id="errors"></div>
    </form>
`
export default template
