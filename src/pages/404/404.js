import Error from "../../components/error/error.js";

const container = document.getElementById("404");

container.insertAdjacentHTML(
  "afterbegin",
  Error({ title: "404", description: "Не туда попали" })
);
