import {router, ROUTES} from "./modules/router/index";
import Signin from "./pages/signin/index";
import Chat from "./pages/chat/index";
import Chats from "./pages/chats/index";
import Profile from "./pages/profile/index";
import Signup from "./pages/signup/index";
import ProfileEdit from "./pages/profileEdit/index";
import PasswordEdit from "./pages/passwordEdit/index";
import Error404 from "./pages/error404/index";
import Error500 from "./pages/error500/index";

router
    .use(ROUTES.CHAT, Chat)
    .use(ROUTES.SIGNIN, Signin)
    .use(ROUTES.SIGNUP, Signup)
    .use(ROUTES.PROFILE_EDIT, ProfileEdit)
    .use(ROUTES.PASSWORD_EDIT, PasswordEdit)
    .use(ROUTES.PROFILE, Profile)
    .use(ROUTES.SERVER_ERROR, Error500)
    .use(ROUTES.NOT_FOUND, Error404)
    .use(ROUTES.HOME, Chats)
    .start();
