import fileImage from 'url:./images/fileImage.svg'
import arrowImage from 'url:./images/arrowImage.svg'
import {ROUTES} from 'modules/router'

export const chatsTemplate = `
<section class="chatContainer">
	<section class="chatContainer__list">
		<div class="chatContainer__link">
			<a href=${ROUTES.SETTINGS}>
				Профиль
				<span class="chatContainer__arrow"></span>
			</a>
		</div>
		<div class="chatContainer__searchInput" id="searchInput">{{ searchInput }}</div>
		<div class="chatContainer__list" id="list">{{ list }}</div>
	</section>
	<div class="chatContainer__chat">
		<div class="chatContainer__messages" id="messages">{{ messages }}</div>
		<div class="chatContainer__messageBlock">
			<form class="messageBlock" id="messageForm">
				<button class="messageBlock__buttonFile">
					<img src="${fileImage}" />
				</button>
				<div class="messageBlock__messageInput" id="messageInput">
					{{ messageInput }}
				</div>
				<button class="messageBlock__buttonAction" type="submit" id="sendMessage">
					<img src="${arrowImage}" />
				</button>
			</form>
		</div>
	</div>
</section>
`
