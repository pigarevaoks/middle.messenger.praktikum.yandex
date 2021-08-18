import {ROUTES} from 'modules/router'

export const template = `
	<section class="chatContainer">
		<div class="chatContainer__list">
			<div class="chatContainer__link">
				<a href=${ROUTES.SETTINGS}>
					Профиль
					<span class="chatContainer__arrow"></span>
				</a>
			</div>
			<div class="chatContainer__searchInput" id="searchInput"></div>
			<div id="chatsList"></div>	
		</div>
		<div class="chatContainer__empty">
			<span>Выберете, кому хотели бы написать</span>
			<div class="chatContainer__createChatButton" id="createChatButton"></div>
		</div>
	</section>
`
