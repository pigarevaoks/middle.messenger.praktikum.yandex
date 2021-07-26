export const errorTemplate = `
          <div class="error">
            <div class="error__title">{{this.context.title}}</div>
            <div class="error__description">{{this.context.description}}</div>
            <a href={{this.context.link.href}} class="error__link">{{this.context.link.title}}</a>
          </div>
  `
