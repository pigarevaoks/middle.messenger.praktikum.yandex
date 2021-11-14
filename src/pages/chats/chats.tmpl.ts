export const template = Handlebars.compile(`
	<section class="chatContainer">
		<aside class="chatContainer__list">
			<div class="chatContainer__top">
				{{ childComponent this "createChatButton" }}
				{{ childComponent this "profileButton" }}
			</div>
			<form class="chatContainer__searchInput" id="searchForm">
				{{ childComponent this "searchInput" }}
				{{ childComponent this "submitSearchButton" }}
			</form>
			<div class="chatContainer__chatsList">
				{{childComponentArray this "chats"}}
			</div>
		</aside>
		<main class="chatContainer__empty">
			<span>Выберете, кому хотели бы написать</span>
		</main>
	</section>
`)
