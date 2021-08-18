const template = `
    {{#each messages}}
        <div class="message" id="{{ this.id }}">
            <div class="message__text">{{ content }}</div>
        </div>
    {{/each}}
`
export default template
