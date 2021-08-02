export const chatsTemplate = `
<section class="chatContainer">
    <div class="chatContainer__list">
        <section class="chatList">
            <div class="chatList__link">
                <a href="./profile.html">
                    Профиль
                    <span class="chatList__arrow"></span>
                </a>
            </div>
            <div class="chatList__searchInput" id="searchInput">{{ searchInput }}</div>
            <div class="chatList__list" id="list">{{ list }}</div>
        </section>
    </div>
    <div class="chatContainer__chat">
        <div class="chat">
            <div class="chatContainer__messages" id="messages">{{ messages }}</div>
            <div class="chatContainer__messageBlock" id="messageBlock">{{ messageBlock }}</div>
        </div>
    </div>
</section>
`
