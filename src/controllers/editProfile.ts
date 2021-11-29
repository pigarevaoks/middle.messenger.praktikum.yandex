import {UserAPI} from "../api/user/index";
import {IUser, IPasswordData} from "../api/user/models";
import {router, ROUTES} from "../modules/router/index";
import {userStore} from "../stores/user";
// import {userStore} from 'stores/user'
import {STORE_EVENTS} from "../modules/store/constants";

const userAPI = new UserAPI();

export class EditProfileController {
    async edit(data: IUser, callback: (storeData: any) => void) {
        userStore.on(STORE_EVENTS.UPDATE, callback);
        try {
            const response = await userAPI.put(data);
            userStore.update(response);
            router.go(ROUTES.PROFILE);
        } catch (error) {
            console.log("edit", error);
        }
    }

    async editAvatar(data: FormData) {
        try {
            const userData = await userAPI.putAvatar(data);
            return userData;
        } catch (error) {
            console.log("editAvatar", error);
        }
    }

    async editPassword(data: IPasswordData) {
        try {
            await userAPI.putPassword(data);
            router.go(ROUTES.PROFILE);
        } catch (error) {
            console.log("editPassword", error);
        }
    }
}
