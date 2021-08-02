import searchIcon from 'url:./images/searchIcon.svg'
{{/* prettier-ignore */}}
export const searchInputTemplate = `
<div class="searchInput">
    <input
        class="searchInput__input"
        name="{{ name }}"
        type="{{ type }}"
        id="{{ name }}"
        placeholder="{{ placeholder }}"
    />
    <img class="searchInput__icon" src="${searchIcon}" />
</div>
`
