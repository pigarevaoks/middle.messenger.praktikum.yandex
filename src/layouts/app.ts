import {router, ROUTES} from 'modules/router'
import Login from 'pages/login'
import Chats from 'pages/chats'
import Profile from 'pages/profile'
import Error404 from 'pages/error404'
import Error500 from 'pages/error500'
import Registration from 'pages/registration'
import ChangeProfile from 'pages/changeProfile'
import ChangePassword from 'pages/changePassword'

router
    .use(ROUTES.REGISTRATION, Registration)
    .use(ROUTES.PROFILE, Profile)
    .use(ROUTES.CHAT, Chats)
    .use(ROUTES.NOT_FOUND, Error404)
    .use(ROUTES.SERVER_ERROR, Error500)
    .use(ROUTES.CHANGE_PROFILE, ChangeProfile)
    .use(ROUTES.CHANGE_PASSWORD, ChangePassword)
    .use(ROUTES.LOGIN, Login)
    .start()
