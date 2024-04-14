export default class Chat {
  constructor() {}

  render(container) {
    const chatWidget = document.createElement("div");
      chatWidget.classList.add("widget-chat-container");
      chatWidget.innerHTML = `
          <div class="call-button"></div>
          <div class="chat-container">
            <h3 class="chat-hedder">Напишите нам</h3>
            <button class="chat-exit">X</button>
            <form class="chat-form">
              <textarea class="chat-input"></textarea>
              <input type="submit" class="chat-submit">
            </form>
          </div>
        `;
        container.appendChild(chatWidget);
  };

  showChat() {
    const button = document.querySelector(".call-button");
    
  };
};
