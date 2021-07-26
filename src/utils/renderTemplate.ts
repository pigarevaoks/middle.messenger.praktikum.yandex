import Handlebars from 'handlebars'

export default function renderTemplate(tmpl: Function, context: object) {
  const compiled_template = Handlebars.compile(tmpl(), { noEscape: true })
  return compiled_template(context)
}
