(function () {
  const GAME_URL = "minijuego_engranajes.html";
  const COMPLETE_MESSAGE = "minijuego_engranajes:complete";

  const state = {
    initialized: false,
    isOpen: false,
    completionDispatched: false,
    allowClose: true,
    lastFocusedElement: null,
    onComplete: null,
    elements: {}
  };

  const gearPuzzleGame = {
    init,
    open,
    close,
    reset
  };

  globalThis.gearPuzzleGame = gearPuzzleGame;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  function init() {
    if (state.initialized) {
      return gearPuzzleGame;
    }

    injectStyles();
    buildOverlay();
    window.addEventListener("message", handleWindowMessage);
    state.initialized = true;
    return gearPuzzleGame;
  }

  function open(options) {
    init();

    const resolvedOptions = options || {};
    state.onComplete = typeof resolvedOptions.onComplete === "function" ? resolvedOptions.onComplete : null;
    state.allowClose = resolvedOptions.allowClose !== false;
    state.completionDispatched = false;
    state.lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    state.isOpen = true;

    if (resolvedOptions.resetOnOpen || !state.elements.frame.getAttribute("src")) {
      reset();
    }

    state.elements.closeButton.hidden = !state.allowClose;
    state.elements.root.classList.remove("hidden");
    state.elements.root.setAttribute("aria-hidden", "false");
    document.body.classList.add("gear-puzzle--open");

    if (state.allowClose) {
      state.elements.closeButton.focus();
    } else {
      state.elements.frame.focus();
    }

    return gearPuzzleGame;
  }

  function close() {
    if (!state.initialized) {
      return gearPuzzleGame;
    }

    state.isOpen = false;
    state.elements.root.classList.add("hidden");
    state.elements.root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gear-puzzle--open");

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }

    return gearPuzzleGame;
  }

  function reset() {
    if (!state.elements.frame) {
      return gearPuzzleGame;
    }

    state.elements.frame.src = GAME_URL + "?embedded=1&t=" + String(Date.now());
    return gearPuzzleGame;
  }

  function buildOverlay() {
    const root = document.createElement("div");
    root.className = "gear-puzzle__overlay hidden";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML =
      '<div class="gear-puzzle__backdrop" data-action="close"></div>' +
      '<div class="gear-puzzle__panel" role="dialog" aria-modal="true" aria-labelledby="gear-puzzle-title">' +
      '<header class="gear-puzzle__header">' +
      '<div>' +
      '<h1 id="gear-puzzle-title" class="gear-puzzle__title">PUERTA SUBTERRANEA DE RABBITA</h1>' +
      '<p class="gear-puzzle__subtitle">coloca cada engranaje en su eje correcto</p>' +
      "</div>" +
      '<button class="gear-puzzle__close" type="button" data-action="close">Cerrar</button>' +
      "</header>" +
      '<iframe class="gear-puzzle__frame" title="PUERTA SUBTERRANEA DE RABBITA" src="about:blank"></iframe>' +
      "</div>";

    document.body.appendChild(root);

    state.elements = {
      root,
      frame: root.querySelector(".gear-puzzle__frame"),
      closeButton: root.querySelector(".gear-puzzle__close")
    };

    root.addEventListener("click", handleRootClick);
    document.addEventListener("keydown", handleDocumentKeyDown);
  }

  function injectStyles() {
    if (document.getElementById("gear-puzzle-styles")) {
      return;
    }

    const style = document.createElement("style");
    style.id = "gear-puzzle-styles";
    style.textContent =
      "body.gear-puzzle--open{overflow:hidden;}" +
      ".gear-puzzle__launch{display:grid;gap:.7rem;margin-top:1rem;justify-items:center;}" +
      ".gear-puzzle__launch-copy{max-width:680px;margin:0;color:#f8e7be;text-align:center;text-shadow:0 2px 10px #000;}" +
      ".gear-puzzle__overlay{position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:clamp(10px,2.4vw,26px);}" +
      ".gear-puzzle__backdrop{position:absolute;inset:0;background:rgba(2,3,4,.82);backdrop-filter:blur(8px);}" +
      ".gear-puzzle__panel{position:relative;z-index:1;display:grid;grid-template-rows:auto minmax(0,1fr);width:min(1280px,100%);height:min(880px,96vh);overflow:hidden;border:1px solid rgba(255,207,120,.42);border-radius:12px;background:#090b0d;box-shadow:0 34px 90px rgba(0,0,0,.72),0 0 46px rgba(226,151,54,.18);}" +
      ".gear-puzzle__header{display:grid;grid-template-columns:1fr auto;gap:1rem;align-items:center;padding:clamp(12px,2vw,18px);background:linear-gradient(180deg,rgba(45,35,22,.96),rgba(13,15,16,.96));border-bottom:1px solid rgba(255,207,120,.22);}" +
      ".gear-puzzle__title{margin:0;color:#fff2ce;font-size:clamp(1.35rem,3.6vw,2.35rem);line-height:1.05;text-shadow:0 2px 12px #000;}" +
      ".gear-puzzle__subtitle{margin:.35rem 0 0;color:#d9c7a1;font-size:1rem;}" +
      ".gear-puzzle__close{border:0;border-radius:8px;padding:.78rem 1rem;color:#1f160a;font:inherit;font-weight:800;cursor:pointer;background:linear-gradient(180deg,#ffe0a2 0%,#c89138 58%,#845518 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.62),0 10px 18px rgba(0,0,0,.38);}" +
      ".gear-puzzle__frame{width:100%;height:100%;border:0;background:#090b0d;}" +
      "@media(max-width:640px){.gear-puzzle__panel{height:97vh;border-radius:8px;}.gear-puzzle__header{grid-template-columns:1fr;align-items:start;}.gear-puzzle__close,.gear-puzzle__launch-button{width:100%;}}";
    document.head.appendChild(style);
  }

  function handleRootClick(event) {
    const actionTarget = event.target.closest("[data-action]");

    if (!actionTarget) {
      return;
    }

    const action = actionTarget.getAttribute("data-action");
    if (action === "close" && state.allowClose) {
      close();
    }
  }

  function handleDocumentKeyDown(event) {
    if (!state.isOpen || event.key !== "Escape" || !state.allowClose) {
      return;
    }

    event.preventDefault();
    close();
  }

  function handleWindowMessage(event) {
    if (!state.isOpen || !state.elements.frame || event.source !== state.elements.frame.contentWindow) {
      return;
    }

    const data = event.data || {};
    if (!data || data.type !== COMPLETE_MESSAGE) {
      return;
    }

    dispatchCompletion(data.payload || {});
  }

  function dispatchCompletion(payload) {
    if (state.completionDispatched) {
      return;
    }

    state.completionDispatched = true;

    if (typeof state.onComplete === "function") {
      state.onComplete({
        solved: true,
        ...(payload || {})
      });
    }
  }
})();
