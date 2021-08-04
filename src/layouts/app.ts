import {router, ROUTES} from 'modules/router'
import Login from 'pages/login'
import Messenger from 'pages/messenger'
import Settings from 'pages/settings'
import Error404 from 'pages/error404'
import Error500 from 'pages/error500'
import Signup from 'pages/signup'
import ChangeProfile from 'pages/changeProfile'
import ChangePassword from 'pages/changePassword'

router
    .use(ROUTES.SIGNUP, Signup)
    .use(ROUTES.SETTINGS, Settings)
    .use(ROUTES.MESSENGER, Messenger)
    .use(ROUTES.NOT_FOUND, Error404)
    .use(ROUTES.SERVER_ERROR, Error500)
    .use(ROUTES.CHANGE_PROFILE, ChangeProfile)
    .use(ROUTES.CHANGE_PASSWORD, ChangePassword)
    .use(ROUTES.LOGIN, Login)
    .start()
