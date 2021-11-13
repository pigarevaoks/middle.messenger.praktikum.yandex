// eslint-disable-next-line
// @ts-ignore
import user from 'url:../../assets/icons/user.svg'

export const template = Handlebars.compile(`
	<section class="chatContainer">
		<aside class="chatContainer__list">
			<div class="chatContainer__top">
				{{ childComponent this "createChatButton" }}
				{{ childComponent this "profileButton" }}
			</div>
			<form method="POST" class="chatContainer__searchInput" id="searchForm">
				{{ childComponent this "searchInput" }}
				{{ childComponent this "submitSearchButton" }}
			</form>
			<div class="chatContainer__chatsList">
				{{childComponentArray this "chats"}}
			</div>	
		</aside>
		<main class="chat">
			<header class="chat__header">
				<div class="chat__headerLeft">
					<div class="avatar__placeholder chat__avatar">
						{{#if avatar}}
							<img src={{ avatar }} alt="avatar" class="chatCard__avatar">
						{{else}}
							<img class="chatCard__avatar" alt="img" src=${user} />
						{{/if}}
					</div>
					<h1 class="chat__title">{{ chatTitle }}</h1>
				</div>
				<div class="chat__headerRight">
					{{ childComponent this "moreButton" }}
					<div class="chat__options hide" id="menuOptions">
                        {{ childComponent this "addUserButton" }}
                        {{ childComponent this "deleteUserButton" }}
                        {{ childComponent this "deleteChatButton" }}
                    </div>
				</div>
            </header>
			<div class="chat__messages">
				{{childComponentArray this "messages"}}
			</div>
				<form class="chat__messageBlock" method="POST" id="messageForm" >
					<input
						class="chat__input"
						name="message"
						type="text"
						id="message"
						placeholder="Сообщение"
					/>
					{{ childComponent this "sendMessageButton" }}
				</form>
		</main>
	</section>
`)
