import ButtonGeneral from "../../components/buttonGeneral/buttonGeneral.js";

const container = document.getElementById("chats");

container.insertAdjacentHTML("afterbegin", ButtonGeneral({ title: "Чаты" }));
