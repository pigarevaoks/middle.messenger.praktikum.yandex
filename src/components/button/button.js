import ButtonTemplate from "./button.tmpl";
import { renderTemplate } from "../../utils/renderTemplate";

export const Button = (title, className, type = "") =>
  renderTemplate(ButtonTemplate, { title, class: className, type });
