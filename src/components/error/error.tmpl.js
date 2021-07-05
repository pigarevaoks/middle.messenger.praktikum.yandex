export default ErrorTemplate = () => {
  return `
          <div class="error">
            <div class="error__title">{{title}}</div>
            <div class="error__description">{{description}}</div>
            <a href="./chats.html" class="error__link">Назад к чатам</a>
          </div>
  `;
};
