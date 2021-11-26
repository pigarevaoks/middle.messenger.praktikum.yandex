import "jsdom-global";
import {expect} from "chai";
import {router} from "../index";

global.DOMParser = window.DOMParser;

describe("Router", () => {
    it("Добавление роутов должно обновлять массив routes", () => {
        router.use("/profile", class Settings {});
        router.use("/sign-up", class Signup {});
        expect(router.routes.length).to.eq(2);
    });
});
