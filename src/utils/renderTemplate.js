import Handlebars from "handlebars";

export default renderTemplate = (tmpl, context) => {
  const template = Handlebars.compile(tmpl());
  return template(context);
};
