import {EFieldType} from "../../common/constants";

export const INPUTS = {
    email: {
        name: "email",
        label: "Почта",
        type: EFieldType.Text,
        isLined: true,
    },
    login: {
        name: "login",
        label: "Логин",
        type: EFieldType.Text,
        isLined: true,
    },
    first_name: {
        name: "first_name",
        label: "Имя",
        type: EFieldType.Text,
        isLined: true,
    },
    second_name: {
        name: "second_name",
        label: "Фамилия",
        type: EFieldType.Text,
        isLined: true,
    },
    display_name: {
        name: "display_name",
        label: "Имя в чате",
        type: EFieldType.Text,
        isLined: true,
    },
    phone: {
        name: "phone",
        label: "Телефон",
        type: EFieldType.Text,
        isLined: true,
    },
};
