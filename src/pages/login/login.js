import Button from "../../components/button/button.js";

const container = document.getElementById("login");

container.insertAdjacentHTML("afterbegin", Button({ title: "Логин" }));
