export default class Chat {
  constructor() {}

  render(container) {
    const chatWidget = document.createElement("div");
    chatWidget.classList.add("widget-chat-container");
    chatWidget.innerHTML = `
          <div class="call-button"></div>
          <div class="chat-container kill">
            <h3 class="chat-hedder">Напишите нам</h3>
            <button class="chat-exit">X</button>
            <form class="chat-form">
              <textarea class="chat-input"></textarea>
              <input type="submit" class="chat-submit">
            </form>
          </div>
        `;
    container.appendChild(chatWidget);
  }

  showChat() {
    const button = document.querySelector(".call-button");
    const chat = document.querySelector(".chat-container");
    const closeButton = document.querySelector(".chat-exit");
    const chatSubmit = document.querySelector(".chat-submit");

    const overListener = function () {
      button.classList.remove("pulse-reverse");
      button.classList.add("pulse");
      button.addEventListener("mouseout", outListener);
      button.removeEventListener("mouseover", overListener);
    };

    const outListener = function () {
      button.classList.remove("pulse");
      button.classList.add("pulse-reverse");
      button.addEventListener("mouseover", overListener);
      button.removeEventListener("mouseout", outListener);
    };

    const clickListener = function () {
      chat.classList.remove("kill");
      chat.classList.toggle("visible");
      button.classList.toggle("hidden");
      setTimeout(() => {
        button.classList.add("kill");
      }, "200"); //Как по мне, костыли какие-то дикие) Наверное через animation можно было сделать лучше
    };

    const closeListener = function () {
      chat.classList.toggle("visible");
      setTimeout(() => {
        chat.classList.add("kill");
      }, "100");
      button.classList.remove("kill");
      button.classList.toggle("hidden");
    };

    button.addEventListener("mouseover", overListener);
    button.addEventListener("click", clickListener);
    closeButton.addEventListener("click", closeListener);
    chatSubmit.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}
