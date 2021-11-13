// eslint-disable-next-line
// @ts-ignore
import user from "url:../../assets/icons/user.svg";

export const template = Handlebars.compile(`
    <section class="profile" id={{formId}}>
        <div class="profile__content">
            {{childComponent this "backButton"}}
            {{#if avatar}}
                <img src={{ avatar }} alt="avatar" class="profile__image">
                {{else}}
                <img alt="img" src=${user} class="profile__image" />
            {{/if}}
            <form method="POST" class="profile__form" id="form">
            <div class="profile__inputs">
            {{childComponentArray this "inputs"}}
            </div>
            {{#if description}}<div class="profile__description">{{description}}</div>{{/if}}
            <div class="profile__buttons" id="buttons">
            {{ childComponent this "savePassword" }}
            </div>
                <div class="form-error" id="errors"></div>
            </form>
        </div>
    </section>
`);
