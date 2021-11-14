export const template = Handlebars.compile(`
    <button class="button {{#if class}}{{ class }}{{/if}}" type="{{ type }}">
        {{ title }}
    </button>
`)
