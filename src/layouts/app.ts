import {router, ROUTES} from 'modules/router'
import Login from 'pages/login'
import Chats from 'pages/chats'

router.use(ROUTES.CHAT, Chats).use(ROUTES.LOGIN, Login).start()
