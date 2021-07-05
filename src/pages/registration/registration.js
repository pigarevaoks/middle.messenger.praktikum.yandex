import Button from "../../components/button/button.js";

const container = document.getElementById("registration");

container.insertAdjacentHTML(
  "afterbegin",
  Button({ title: "Зарегистрироваться" })
);
