export const chatListTemplate = () => `
<section class="chatList">
    <div class="chatList__link">
        <a href="./profile.html">
            Профиль
            <span class="chatList__arrow"></span>
        </a>
    </div>
    <div class="chatList__searchInput">{{ {searchInput }}}</div>
    <div class="chatList__list">{{ {list }}}</div>
</section>
`
