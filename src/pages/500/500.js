import Error from "../../components/error/error.js";

const container = document.getElementById("500");

container.insertAdjacentHTML(
  "afterbegin",
  Error({ title: "500", description: "Мы уже фиксим" })
);
