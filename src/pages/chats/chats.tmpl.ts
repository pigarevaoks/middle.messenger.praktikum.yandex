export const chatsTemplate = `
<section class="chatContainer">
    <section class="chatContainer__list">
        <div class="chatContainer__link">
            <a href="./profile">
                Профиль
                <span class="chatContainer__arrow"></span>
            </a>
        </div>
        <div class="chatContainer__searchInput" id="searchInput">{{ searchInput }}</div>
        <div class="chatContainer__list" id="list">{{ list }}</div>
    </section>
    <div class="chatContainer__chat">
        <div class="chatContainer__messages" id="messages">{{ messages }}</div>
        <div class="chatContainer__messageBlock" id="messageBlock">{{ messageBlock }}</div>
    </div>
</section>
`
