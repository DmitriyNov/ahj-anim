import Collapse from "./collapse";
import Chat from "./chat";

const container = document.querySelector(".container");

const collapse = new Collapse();
const chat = new Chat();

collapse.render(container);
chat.render(container);

collapse.collapse();
chat.showChat();