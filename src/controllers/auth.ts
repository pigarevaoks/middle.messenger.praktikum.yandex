import {router, ROUTES} from "../modules/router/index";
import {AuthAPI} from "../api/auth/index";
import {userStore} from "../stores/user";
import {STORE_EVENTS} from "../modules/store/constants";

const authAPI = new AuthAPI();

export class AuthController {
    async auth(callback: (storeData: any) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);
        try {
            const response = await authAPI.auth();
            userStore.update(response);
        } catch (error) {
            console.error("auth", error);
            router.go(ROUTES.SIGNIN);
        }
    }

    async redirectToChat() {
        try {
            await authAPI.auth();
            router.go(ROUTES.HOME);
        } catch (error) {
            console.error("redirectToChat", error);
        }
    }
}
