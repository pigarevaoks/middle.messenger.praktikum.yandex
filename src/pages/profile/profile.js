import ButtonGeneral from "../../components/buttonGeneral/buttonGeneral.js";

const container = document.getElementById("profile");

container.insertAdjacentHTML("afterbegin", ButtonGeneral({ title: "Профиль" }));
