// eslint-disable-next-line
// @ts-ignore
import user from 'url:../../assets/icons/user.svg'

export const template = Handlebars.compile(`
    <section class="profile" id={{formId}}>
        <div class="profile__content">
            {{childComponent this "backButton"}}
            <form id="avatarForm">
                {{#if avatar}}
                    <img src={{ avatar }} alt="avatar" class="profile__image">
                    {{else}}
                    <img class="profile__image" alt="img" src=${user} />
                {{/if}}
                <input id="avatar" type="file" name="avatar"  class="profile__imageInput"/>
                {{ childComponent this "submitButton" }}
            </form>
            <form method="POST" class="profile__form" id="form">
                <div class="profile__inputs">
                    {{childComponentArray this "inputs"}}
                </div>
                <div class="profile__buttons" id="buttons">
                    {{ childComponent this "saveProfile" }}
                </div>
                <div class="form-error" id="errors"></div>
            </form>
        </div>
    </section>
`)
