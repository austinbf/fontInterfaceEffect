const rootElement = document.documentElement;
const directionHandler = document.getElementById("flex-direction");

directionHandler.addEventListener("change", (etv) => {
    rootElement.style.setProperty("--direction", etv.target.value);
});
