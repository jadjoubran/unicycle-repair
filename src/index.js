import "./app-tasks.js";

import("./app-stock.js");

window.customElements.whenDefined("app-stock").then(() => {
  document.querySelector("app-stock").activate();
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js");
}

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();

  const a2hs = document.querySelector("#a2hs");
  a2hs.classList.add("show");
  a2hs.addEventListener("click", () => {
    event.prompt();
    event.userChoice.then(result => {
      // dismissed/accepted
      // send this to analytics
      console.log(result.outcome);
    });
  });
});
