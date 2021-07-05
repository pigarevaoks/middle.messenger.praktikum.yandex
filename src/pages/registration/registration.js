import ButtonGeneral from "../../components/buttonGeneral/buttonGeneral.js";

const container = document.getElementById("registration");

container.insertAdjacentHTML(
  "afterbegin",
  ButtonGeneral({ title: "Зарегистрироваться" })
);
