export default class Collapse {
    constructor() {}
  
    render(container) {
        const collapseWidget = document.createElement("div");
        collapseWidget.classList.add("collapse-container");
        collapseWidget.innerHTML = `
            <button class="collapse-button">Collapse</button>
            <div class="collapse-content">
                <p class="collapse-text">
                В рамках реализации большого портала вам необходимо сделать виджет "collapsible"-контейнеров, который может разворачиваться и сворачиваться.
                </p>
            </div>
        `;
        container.appendChild(collapseWidget);
    };
  
    collapse() {
        const height = document.querySelector(".collapse-container").clientHeight;
        const button = document.querySelector(".collapse-button");
        const content = document.querySelector(".collapse-content");
        const listener = function () {
            content.classList.toggle("collapse");
            if (content.classList.contains("collapse")) {
                content.style.maxHeight = "0px";
            } else {
                content.style.maxHeight = `${height}px`;
            }
        };
        button.addEventListener("click", listener);

        //Решение подсмотрел на Хабр Q&A, сам не смог подобрать нормально стили, чтобы всё правильно работало. Однако всё равно есть проблема с тем, что при первом надатии на кнопку переход осуществялется мнговенно. Я не смог разобраться, в чём причина
    };
  };