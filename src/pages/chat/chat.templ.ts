import {ROUTES} from 'modules/router'
import fileImage from 'url:./images/fileImage.svg'
import arrowImage from 'url:./images/arrowImage.svg'

const template = `
	<section class="chatContainer">
		<section class="chatContainer__list">
			<div class="chatContainer__link">
				<a href=${ROUTES.SETTINGS}>
					Профиль
					<span class="chatContainer__arrow"></span>
				</a>
			</div>
			<div class="chatContainer__searchInput" id="searchInput"></div>
			<div id="chatsList"></div>	
			<div class="chatContainer__createChatButton" id="createChatButton"></div>
		</section>
		<div class="chat">
			<div id="messagesList"></div>
			<div class="chat__messageBlock">
				<form class="messageBlock" id="messageForm" >
					<button class="messageBlock__buttonFile" type="button" >
						<img src="${fileImage}" />
					</button>
					<div class="messageBlock__messageInput" id="messageInput"></div>
					<button class="messageBlock__buttonAction" type="submit" id="sendMessage">
						<img src="${arrowImage}" />
					</button>
				</form>
			</div>
		</div>
	</section>
`

export default template
