// {{!-- import TextInputTemplate from "../textInput/textInput.tmpl";
// import Handlebars from "handlebars";
// export default FormTemplate = (context) => {
//   console.log(this);
//   Handlebars.registerPartial("myPartial", "{{label}}");
//   return `
//     <div class="form">
//         <h1 class="form__title">{{ title }}</h1>
//         <div class="form__fields" id="fields">{{ >myPartial fields }}</div>
//         <div class="form__buttons">{{ buttons }}</div>
//     </div>`;
// }; --}}

export const formTemplate = `
  <section class="form">
    <form class="form__content" class="login__form">
      <div>
        <h1 class="form__title">Вход</h1>
        <div class="form__fields">
          {{> input this.context.inputs.login}}
          {{> input this.context.inputs.password}}
        </div>
      </div>
      <div class="form__buttons">
        {{> button this.context.buttons.submit}}
        {{> button this.context.buttons.signIn}}
      </div>
    </form>
  </section>`;
