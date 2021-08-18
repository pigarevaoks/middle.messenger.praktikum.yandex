export const formTemplate = `
  <section class="form">
    <form class="form__container" id="form">
      <div class="form__content">
        <div>
          <h1 class="form__title">{{title}}</h1>
          <div class="form__fields">
            <div id="email"></div>
            <div id="login"></div>
            <div id="firstName"></div>
            <div id="secondName"></div>
            <div id="phone"></div>
            <div id="password"></div>
            <div id="doublePassword"></div>
          </div>
        </div>
        <div>
          <div class="form__buttons">
            <div id="registrationButton"></div>
            <div id="loginButton"></div>
            <div id="signInButton"></div>
          </div>
          <div class="form__errors" id="errors"></div>
        </div>
      </div>
    </form>
  </section>
`
