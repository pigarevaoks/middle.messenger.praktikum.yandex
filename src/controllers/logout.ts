import {AuthAPI} from "../api/auth/index";
import {router, ROUTES} from "../modules/router/index";

const authAPI = new AuthAPI();

export class LogoutController {
    async logout() {
        try {
            await authAPI.logout();
            router.go(ROUTES.SIGNIN);
        } catch (error) {
            console.log("logout", error);
        }
    }
}
