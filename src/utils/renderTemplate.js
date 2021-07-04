import Handlebars from "handlebars";

export const renderTemplate = (tmpl, context) => {
  const template = Handlebars.compile(tmpl());
  return template(context);
};
