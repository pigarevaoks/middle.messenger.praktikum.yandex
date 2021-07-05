import buttonSecondaryTemplate from "./buttonSecondary.tmpl";
import renderTemplate from "../../utils/renderTemplate";
import "./buttonSecondary.less";

export default buttonSecondary = (props) =>
  renderTemplate(buttonSecondaryTemplate, props);
