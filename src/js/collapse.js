export default class Collapse {
    constructor() {}
  
    render(container) {
        const collapseWidget = document.createElement("div");
        collapseWidget.classList.add("collapse-widget-container");
        collapseWidget.innerHTML = `
            <button class="collapse-button">Collapse</button>
            <div class="collapse-container">
                <div class="collapse-content">
                    <p class="collapse-text">
                    В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.
                    </p>
                </div>
            </div>
        `;
        container.appendChild(collapseWidget);
    };
  
    collapse() {
        const button = document.querySelector(".collapse-button");
        const container = document.querySelector(".collapse-container");
        const listener = function () {
            if (container.classList.contains("collapse")) {
                container.classList.remove("collapse");
                container.classList.add("collapse-reverse");
            } else if (container.classList.contains("collapse-reverse")) {
                container.classList.remove("collapse-reverse");
                container.classList.add("collapse");
            } else {
                container.classList.add("collapse");
            }
        };
        button.addEventListener("click", listener);
    };
  };
  