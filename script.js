
    function createElements() {
        const container = document.querySelector(".container");
        const element = document.createElement("span");
        const size = Math.random() * 60;

        element.style.width = 20 + size + "px";
        element.style.height = 20 + size + "px";
        element.style.left = Math.random() * innerWidth + "px";
        container.appendChild(element);

        setTimeout(()=>{
            element.remove();
        }, 4000)

    }
    setInterval(createElements,50);