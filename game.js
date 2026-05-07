const introScreen = document.getElementById("intro-screen");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const introButton = document.getElementById("intro-button");
const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const backgroundLayer = document.getElementById("background-layer");
const characterLayer = document.getElementById("character-layer");
const inspectPrompt = document.getElementById("inspect-prompt");
const inspectOverlay = document.getElementById("inspect-overlay");
const inspectPanel = document.getElementById("inspect-panel");
const inspectImage = document.getElementById("inspect-image");
const inspectClose = document.getElementById("inspect-close");
const dialogueBox = document.getElementById("dialogue-box");
const speakerName = document.getElementById("speaker-name");
const dialogueText = document.getElementById("dialogue-text");
const choiceBox = document.getElementById("choice-box");
const START_SCREEN_MUSIC = "One_Piece_tantantan_tantantanta.mp3";
const START_GAME_MUSIC = "One_Piece_aventura.mp3";

const characterState = new Map();
const defaultSpeakerStyles = {
  narrador: {
    accent: "#9ac7d8",
    accentDark: "#406678"
  },
  decision: {
    accent: "#f4cc6f",
    accentDark: "#8e6026"
  },
  fin: {
    accent: "#f8d98b",
    accentDark: "#9b682b"
  }
};

let currentScene = [];
let currentStepIndex = 0;
let isTyping = false;
let currentFullText = "";
let typingInterval = null;
let activeAudio = null;
let backgroundRequestId = 0;
let speakingAnimation = null;

introButton.addEventListener("click", showStartScreen);
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", nextStep);
inspectClose.addEventListener("click", finishInspectStep);
inspectOverlay.addEventListener("click", handleInspectBackdropClick);

function showStartScreen() {
  introScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  playMusicFile(START_SCREEN_MUSIC, { loop: true, volume: 0.45 });
}

function startGame() {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetGameState();
  playMusicFile(START_GAME_MUSIC, { loop: true, volume: 0.55 });
  loadScene("start");
}

function resetGameState() {
  stopTyping();
  clearChoices();
  clearInspectPrompt();
  closeInspectOverlay();
  setSpeakerStyle("");
  setSpeakingCharacter("");
  characterState.clear();
  characterLayer.innerHTML = "";
  backgroundLayer.style.backgroundImage = "";
  speakerName.textContent = "";
  speakerName.classList.add("hidden");
  dialogueText.textContent = "";
  nextButton.classList.remove("hidden");
  currentScene = [];
  currentStepIndex = 0;

  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }
}

function nextStep() {
  if (isTyping) {
    finishTyping();
    return;
  }

  currentStepIndex += 1;
  showCurrentStep();
}

function loadScene(sceneId) {
  const scene = story[sceneId];

  if (!Array.isArray(scene)) {
    showEnd();
    return;
  }

  stopTyping();
  clearChoices();
  setSpeakingCharacter("");
  nextButton.classList.remove("hidden");
  currentScene = scene;
  currentStepIndex = 0;
  showCurrentStep();
}

function showCurrentStep() {
  if (currentStepIndex >= currentScene.length) {
    showEnd();
    return;
  }

  const step = currentScene[currentStepIndex];

  switch (step.type) {
    case "background":
      showBackground(step);
      advanceStep();
      break;
    case "character":
      showCharacter(step);
      advanceStep();
      break;
    case "dialogue":
      showDialogue(step);
      break;
    case "choice":
      showChoices(step);
      break;
    case "goto":
      jumpToScene(step.nextScene);
      break;
    case "effect":
      applyEffect(step);
      advanceStep();
      break;
    case "sound":
      playSound(step);
      advanceStep();
      break;
    case "inspect":
      showInspect(step);
      break;
    default:
      advanceStep();
      break;
  }
}

function advanceStep() {
  currentStepIndex += 1;
  showCurrentStep();
}

function jumpToScene(sceneId) {
  if (!sceneId) {
    showEnd();
    return;
  }

  loadScene(sceneId);
}

function showBackground(step) {
  const imagePath = step.image ? "assets/backgrounds/" + step.image : "";
  const requestId = ++backgroundRequestId;

  if (!imagePath) {
    backgroundLayer.style.backgroundImage = "";
    return;
  }

  const testImage = new Image();

  testImage.onload = () => {
    if (requestId !== backgroundRequestId) {
      return;
    }

    backgroundLayer.style.backgroundImage =
      'linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.52)), url("' +
      imagePath +
      '")';
  };

  testImage.onerror = () => {
    if (requestId !== backgroundRequestId) {
      return;
    }

    backgroundLayer.style.backgroundImage = "";
  };

  testImage.src = imagePath;
}

function showCharacter(step) {
  if (!step.id) {
    return;
  }

  const savedCharacter = characterState.get(step.id) || {};
  characterState.set(step.id, {
    ...savedCharacter,
    ...step
  });

  renderCharacters(step.id);
}

function renderCharacters(animatedId) {
  characterLayer.innerHTML = "";

  characterState.forEach((character) => {
    const characterImage = document.createElement("img");
    const position = normalizePosition(character.position);

    characterImage.className = "character is-" + position;
    characterImage.alt = character.name || character.id || "";
    characterImage.dataset.characterId = character.id;
    characterImage.dataset.position = position;
    characterImage.style.setProperty("--character-face", character.flip ? "-1" : "1");
    characterImage.style.setProperty("--character-scale", normalizeCharacterScale(character.scale));

    if (character.id === animatedId && character.animation === "enter") {
      characterImage.classList.add("enter-" + animationSideForPosition(position));
    }

    characterImage.onerror = () => {
      characterImage.removeAttribute("src");
      characterImage.classList.add("hidden");
    };

    if (character.image) {
      characterImage.src = "assets/characters/" + character.image;
    } else {
      characterImage.classList.add("hidden");
    }

    characterLayer.appendChild(characterImage);
  });
}

function showDialogue(step) {
  const speaker = step.speaker || "";

  speakerName.textContent = speaker;
  speakerName.classList.toggle("hidden", !speaker);
  setSpeakerStyle(speaker);
  setSpeakingCharacter(speaker);
  typeText(step.text || "");
}

function showChoices(step) {
  const options = step.options || [];

  if (options.length === 0) {
    showEnd();
    return;
  }

  stopTyping();
  setSpeakerStyle("Decisión");
  setSpeakingCharacter("");
  speakerName.textContent = "Decisión";
  speakerName.classList.remove("hidden");
  dialogueText.textContent = step.text || "";
  nextButton.classList.add("hidden");
  choiceBox.innerHTML = "";
  choiceBox.classList.remove("hidden");

  options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "choice-button";
    optionButton.textContent = option.text || "Continuar";
    optionButton.addEventListener("click", () => chooseOption(option));
    choiceBox.appendChild(optionButton);
  });
}

function chooseOption(option) {
  clearChoices();
  nextButton.classList.remove("hidden");
  jumpToScene(option.nextScene);
}

function clearChoices() {
  choiceBox.innerHTML = "";
  choiceBox.classList.add("hidden");
}

function showInspect(step) {
  stopTyping();
  setSpeakingCharacter("");
  clearInspectPrompt();
  nextButton.classList.add("hidden");

  const inspectButton = document.createElement("button");
  const buttonLabel = step.buttonText || "Ver objeto";
  const imagePath = step.image ? "assets/backgrounds/" + step.image : "";

  inspectButton.type = "button";
  inspectButton.className = "inspect-button";
  inspectButton.innerHTML =
    '<span class="inspect-button-thumb"></span><span>' + buttonLabel + "</span>";

  const thumb = inspectButton.querySelector(".inspect-button-thumb");
  if (thumb && imagePath) {
    thumb.style.backgroundImage = 'url("' + imagePath + '")';
  }

  inspectButton.addEventListener("click", () => openInspectOverlay(step));
  inspectPrompt.appendChild(inspectButton);
  inspectPrompt.classList.remove("hidden");
}

function openInspectOverlay(step) {
  const imagePath = step.image ? "assets/backgrounds/" + step.image : "";

  if (!imagePath) {
    finishInspectStep();
    return;
  }

  inspectImage.alt = step.alt || step.buttonText || "Imagen";
  inspectImage.onerror = () => {
    closeInspectOverlay();
    finishInspectStep();
  };
  inspectImage.src = imagePath;
  inspectOverlay.classList.remove("hidden");
  inspectOverlay.setAttribute("aria-hidden", "false");
}

function closeInspectOverlay() {
  inspectOverlay.classList.add("hidden");
  inspectOverlay.setAttribute("aria-hidden", "true");
  inspectImage.removeAttribute("src");
}

function handleInspectBackdropClick(event) {
  if (event.target !== inspectOverlay) {
    return;
  }

  finishInspectStep();
}

function finishInspectStep() {
  closeInspectOverlay();
  nextButton.classList.remove("hidden");
}

function clearInspectPrompt() {
  inspectPrompt.innerHTML = "";
  inspectPrompt.classList.add("hidden");
}

function typeText(text) {
  stopTyping();
  isTyping = true;
  currentFullText = text;
  dialogueText.textContent = "";

  let index = 0;

  if (!text) {
    isTyping = false;
    return;
  }

  typingInterval = window.setInterval(() => {
    dialogueText.textContent = text.slice(0, index + 1);
    index += 1;

    if (index >= text.length) {
      stopTyping(true);
    }
  }, 28);
}

function finishTyping() {
  if (!isTyping) {
    return;
  }

  stopTyping(true);
}

function stopTyping(showFullText) {
  if (typingInterval) {
    clearInterval(typingInterval);
    typingInterval = null;
  }

  if (showFullText) {
    dialogueText.textContent = currentFullText;
  }

  isTyping = false;
}

function setSpeakingCharacter(speaker) {
  const speakingCharacter = findCharacterBySpeaker(speaker);

  if (speakingAnimation) {
    speakingAnimation.cancel();
    speakingAnimation = null;
  }

  if (!speakingCharacter) {
    return;
  }

  const activeImage = characterLayer.querySelector(
    '[data-character-id="' + speakingCharacter.id + '"]'
  );

  if (activeImage) {
    speakingAnimation = activeImage.animate(
      [
        {
          transform:
            "translateX(var(--base-shift, 0)) translateY(0) scaleX(var(--character-face, 1)) scale(var(--character-scale, 1))"
        },
        {
          transform:
            "translateX(var(--base-shift, 0)) translateY(-3px) scaleX(var(--character-face, 1)) scale(var(--character-scale, 1))",
          offset: 0.5
        },
        {
          transform:
            "translateX(var(--base-shift, 0)) translateY(0) scaleX(var(--character-face, 1)) scale(var(--character-scale, 1))"
        }
      ],
      {
        duration: 220,
        easing: "ease-out"
      }
    );
    speakingAnimation.onfinish = () => {
      speakingAnimation = null;
    };
  }
}

function setSpeakerStyle(speaker) {
  const style = getSpeakerStyle(speaker);

  dialogueBox.style.setProperty("--speaker-accent", style.accent);
  dialogueBox.style.setProperty("--speaker-accent-dark", style.accentDark);
}

function getSpeakerStyle(speaker) {
  const character = findCharacterBySpeaker(speaker);

  if (character && character.accent && character.accentDark) {
    return {
      accent: character.accent,
      accentDark: character.accentDark
    };
  }

  const fallbackKey = normalizeSpeakerKey(speaker);
  return defaultSpeakerStyles[fallbackKey] || defaultSpeakerStyles.fin;
}

function findCharacterBySpeaker(speaker) {
  if (!speaker) {
    return null;
  }

  const normalizedSpeaker = normalizeSpeakerKey(speaker);

  for (const character of characterState.values()) {
    const matchesId = normalizeSpeakerKey(character.id) === normalizedSpeaker;
    const matchesName = normalizeSpeakerKey(character.name) === normalizedSpeaker;

    if (matchesId || matchesName) {
      return character;
    }
  }

  return null;
}

function normalizeSpeakerKey(value) {
  return String(value || "")
    .trim()
    .toLowerCase();
}

function applyEffect(step) {
  const effectName = step.name || step.effect;

  if (effectName !== "shake") {
    return;
  }

  gameScreen.classList.remove("shake");
  void gameScreen.offsetWidth;
  gameScreen.classList.add("shake");
  window.setTimeout(() => {
    gameScreen.classList.remove("shake");
  }, 360);
}

function playSound(step) {
  const fileName = step.file || step.sound;

  if (!fileName) {
    return;
  }

  playMusicFile(fileName, {
    loop: Boolean(step.loop),
    volume: typeof step.volume === "number" ? step.volume : 1
  });
}

function playMusicFile(fileName, options) {
  if (!fileName) {
    return null;
  }

  if (activeAudio) {
    activeAudio.pause();
    activeAudio = null;
  }

  const audio = new Audio("assets/sounds/" + fileName);
  audio.loop = Boolean(options && options.loop);
  audio.volume = options && typeof options.volume === "number" ? options.volume : 1;
  audio.addEventListener("error", () => {});

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }

  activeAudio = audio;
  return audio;
}

function normalizePosition(position) {
  const allowedPositions = ["far-left", "left", "center", "right", "far-right"];

  return allowedPositions.includes(position) ? position : "center";
}

function animationSideForPosition(position) {
  if (position === "right" || position === "far-right") {
    return "right";
  }

  if (position === "center") {
    return "center";
  }

  return "left";
}

function normalizeCharacterScale(scale) {
  if (typeof scale !== "number" || !isFinite(scale) || scale <= 0) {
    return "1";
  }

  return String(scale);
}

function showEnd() {
  stopTyping();
  clearChoices();
  clearInspectPrompt();
  setSpeakerStyle("Fin");
  setSpeakingCharacter("");
  speakerName.textContent = "Fin";
  speakerName.classList.remove("hidden");
  dialogueText.textContent = "La aventura acaba de empezar...";
  nextButton.classList.add("hidden");
}
