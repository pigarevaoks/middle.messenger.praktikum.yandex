import ErrorTemplate from "./error.tmpl";
import { renderTemplate } from "../../utils/renderTemplate";
import "./error.less";

export default Error = (props) => renderTemplate(ErrorTemplate, props);
