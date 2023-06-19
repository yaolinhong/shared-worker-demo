const messages = document.querySelector("#messages")
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
if (!!window.SharedWorker) {
    const myWorker = new SharedWorker("./src/worker/index.js");
    myWorker.port.onmessage = function (event) {
        messages.innerHTML = event.data;
        console.log("Message received from worker", event);
    };
    input.oninput = () => {
        myWorker.port.postMessage(input.value);
        console.log("Message posted to worker");
    }
}
btn.onclick = () => {
    window.open(window.origin);
}