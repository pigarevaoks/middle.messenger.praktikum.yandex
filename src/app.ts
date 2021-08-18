import {router, ROUTES} from 'modules/router'
import Login from 'pages/login'
import Chat from 'pages/chat'
import Messenger from 'pages/messenger'
import Settings from 'pages/settings'
import Signup from 'pages/signup'
import ChangeSettings from 'pages/changeSettings'
import ChangePassword from 'pages/changePassword'
import Error404 from 'pages/error404'
import Error500 from 'pages/error500'

router
    .use(ROUTES.CHAT, Chat)
    .use(ROUTES.SIGNUP, Signup)
    .use(ROUTES.MESSENGER, Messenger)
    .use(ROUTES.SETTINGS, Settings)
    .use(ROUTES.CHANGE_SETTINGS, ChangeSettings)
    .use(ROUTES.CHANGE_PASSWORD, ChangePassword)
    .use(ROUTES.HOME, Login)
    .use(ROUTES.NOT_FOUND, Error404)
    .use(ROUTES.SERVER_ERROR, Error500)
    .start()
