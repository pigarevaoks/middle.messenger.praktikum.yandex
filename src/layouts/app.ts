import {Router} from 'modules/router'
import Login from 'pages/login'
import Chats from 'pages/chats'

const router = new Router('#app')

router.use('/', Login)
router.use('/chats', Chats)
router.start()
