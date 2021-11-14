// eslint-disable-next-line
// @ts-ignore
import user from 'url:../../assets/icons/user.svg'

export const template = Handlebars.compile(`
    <section class="profile" id="profile">
        <div class="profile__content">
            {{childComponent this "backButton"}}
            {{#if avatar}}
                <img src={{ avatar }} alt="avatar" class="profile__image">
                {{else}}
                <img alt="img" src=${user} class="profile__image" />
            {{/if}}
            <div class="profile__form">
                <div class="profile__inputs">
                    {{childComponentArray this "inputs"}}
                </div>
                <div class="profile__buttons" id="buttons">
                    {{ childComponent this "changeProfile" }}
                    {{ childComponent this "changePassword" }}
                    {{ childComponent this "logoutButton" }}
                </div>
            </div>
        </div>
    </section>
`)
