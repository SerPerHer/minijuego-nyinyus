const introScreen = document.getElementById("intro-screen");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const introButton = document.getElementById("intro-button");
const scenarioButtons = Array.from(document.querySelectorAll("[data-start-scene]"));
const audioControls = document.getElementById("audio-controls");
const muteButton = document.getElementById("mute-button");
const volumeSlider = document.getElementById("volume-slider");
const backButton = document.getElementById("back-button");
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
const CHARACTER_MAX_ASPECT_RATIO = 1.08;
const SPEAKING_BOUNCE_HEIGHT = 14;
const TRANSITION_BACKGROUND_KEY = "fondo transicion.jpeg";
const START_SCREEN_MUSIC = "One_Piece_tantantan_tantantanta.mp3";
const START_GAME_MUSIC = "One_Piece_aventura.mp3";
const INTRO_SCENE_IDS = new Set([
  "start",
  "aparicion_abuela",
  "mapa_antiguo",
  "la_leyenda",
  "decision_viaje",
  "emprender_viaje",
  "ignorar_leyenda"
]);

const characterState = new Map();
const defaultSpeakerStyles = {
  narrador: {
    accent: "#9ac7d8",
    accentDark: "#406678"
  },
  abuela: {
    accent: "#9fd7b7",
    accentDark: "#4b8f69"
  },
  minutu: {
    accent: "#ceb0ff",
    accentDark: "#6f49a8"
  },
  decision: {
    accent: "#f4cc6f",
    accentDark: "#8e6026"
  },
  npc: {
    accent: "#fbfbfb",
    accentDark: "#a7a7a7"
  },
  fin: {
    accent: "#f8d98b",
    accentDark: "#9b682b"
  }
};
const characterLibrary = globalThis.CHARACTER_LIBRARY || {};
const sceneCharacterLayouts = globalThis.SCENE_CHARACTER_LAYOUTS || {};
const collectibleLibrary = {
  mapa: {
    id: "mapa",
    order: 1,
    buttonText: "Mapa",
    image: "mapa_antiguo.png",
    alt: "Mapa antiguo con cinco puntos marcados"
  },
  pergamino: {
    id: "pergamino",
    order: 2,
    buttonText: "Pergamino",
    image: "PERGAMINO_DEL_KYUBI_CELESTIAL.jpeg",
    alt: "Pergamino con una mascara de zorro y un simbolo circular fragmentado"
  }
};

let currentScene = [];
let currentStepIndex = 0;
let isTyping = false;
let currentFullText = "";
let typingInterval = null;
let activeAudio = null;
let activeAudioBaseVolume = 1;
let speakingAnimation = null;
let currentSceneId = "";
let layoutSettleTimeout = null;
let checkpointHistory = [];
let isRestoringCheckpoint = false;
let masterVolume = 1;
let isMuted = false;
let currentBackgroundState = null;
let currentAudioState = null;
let unlockedCollectibles = new Map();
let currentOverlayCompletesInspectStep = false;

introButton.addEventListener("click", showStartScreen);
scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => startGame(button.dataset.startScene || "start"));
});
muteButton.addEventListener("click", toggleMute);
volumeSlider.addEventListener("input", handleVolumeChange);
backButton.addEventListener("click", previousStep);
nextButton.addEventListener("click", nextStep);
inspectClose.addEventListener("click", handleInspectClose);
inspectOverlay.addEventListener("click", handleInspectBackdropClick);
updateAudioControls();
updateBackButton();

function showStartScreen() {
  introScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  playMusicFile(START_SCREEN_MUSIC, { loop: true, volume: 0.45 });
}

function startGame(sceneId) {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  resetGameState();
  playMusicFile(START_GAME_MUSIC, { loop: true, volume: 0.55 });
  loadScene(sceneId || "start");
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
  currentBackgroundState = null;
  backgroundLayer.style.backgroundImage = "";
  speakerName.textContent = "";
  speakerName.classList.add("hidden");
  dialogueText.textContent = "";
  nextButton.classList.remove("hidden");
  currentScene = [];
  currentStepIndex = 0;
  currentSceneId = "";
  checkpointHistory = [];
  unlockedCollectibles = new Map();
  currentOverlayCompletesInspectStep = false;
  setInspectPromptCompact(false);
  renderInspectPrompt();

  if (layoutSettleTimeout) {
    clearTimeout(layoutSettleTimeout);
    layoutSettleTimeout = null;
  }

  stopActiveAudio();
  updateBackButton();
}

function nextStep() {
  if (isTyping) {
    finishTyping();
    return;
  }

  currentStepIndex += 1;
  showCurrentStep();
}

function previousStep() {
  if (checkpointHistory.length <= 1) {
    return;
  }

  checkpointHistory.pop();
  restoreCheckpoint(checkpointHistory[checkpointHistory.length - 1]);
}

function loadScene(sceneId) {
  const scene = story[sceneId];

  if (!Array.isArray(scene)) {
    showEnd();
    return;
  }

  if (isIntroSceneId(currentSceneId) && !isIntroSceneId(sceneId)) {
    stopActiveAudio();
  }

  stopTyping();
  clearChoices();
  clearInspectPrompt();
  closeInspectOverlay();
  setSpeakingCharacter("");
  nextButton.classList.remove("hidden");
  currentSceneId = sceneId;
  setInspectPromptCompact(!isIntroSceneId(sceneId));
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

  if (step.type !== "inspect") {
    clearInspectPrompt();
    closeInspectOverlay();
  }

  switch (step.type) {
    case "background":
      showBackground(step);
      advanceStep();
      break;
    case "clearCharacters":
      clearCharacters(step);
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
    case "stopSound":
      stopActiveAudio();
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
  currentBackgroundState =
    step && step.image
      ? {
          image: step.image
        }
      : null;
  stopSpeakingAnimation();
  applyBackgroundState(currentBackgroundState);
  renderCharacters("");
}

function showCharacter(step) {
  if (!step.id) {
    return;
  }

  setCharacterState(step);
  renderCharacters(step.id);
}

function clearCharacters(step) {
  setSpeakingCharacter("");

  if (Array.isArray(step.ids) && step.ids.length > 0) {
    step.ids.forEach((id) => {
      characterState.delete(id);
    });
    renderCharacters("");
    return;
  }

  characterState.clear();
  characterLayer.innerHTML = "";
}

function renderCharacters(animatedId) {
  if (layoutSettleTimeout) {
    clearTimeout(layoutSettleTimeout);
    layoutSettleTimeout = null;
  }

  characterLayer.innerHTML = "";

  if (shouldHideCharactersForCurrentBackground()) {
    return;
  }

  const layout = resolveCharacterLayout(Array.from(characterState.values()), animatedId);

  layout.items.forEach((item) => {
    const character = item.character;
    const characterImage = document.createElement("img");
    const position = normalizePosition(item.position || character.position);
    const shouldFlip = resolveCharacterFlip(character, item, position);
    const useFlippedAsset = Boolean(shouldFlip && character.imageFlipped);
    const visualFlip = shouldFlip && !useFlippedAsset;
    const offsetX = normalizeCharacterOffset(item.offsetX);
    const scale = normalizeCharacterScale(item.scale);
    const imageSource = resolveCharacterImageSource(character, useFlippedAsset);

    characterImage.className = "character is-" + position;
    characterImage.alt = character.name || character.id || "";
    characterImage.dataset.characterId = character.id;
    characterImage.dataset.position = position;
    characterImage.dataset.flipped = shouldFlip ? "true" : "false";
    characterImage.classList.toggle("is-flipped", shouldFlip);
    characterImage.style.setProperty("--character-face", visualFlip ? "-1" : "1");
    characterImage.style.setProperty("--character-offset-x", offsetX);
    characterImage.style.setProperty("--character-scale", scale);
    characterImage.style.transform = buildCharacterTransform({
      offsetX,
      scale,
      shouldFlip: visualFlip
    });
    characterImage.style.width = "auto";
    characterImage.style.maxWidth = buildCharacterWidthLimit(item.width, item.height);
    characterImage.style.height = item.height;

    if (item.bottom) {
      characterImage.style.bottom = normalizeCharacterOffset(item.bottom);
    } else {
      characterImage.style.removeProperty("bottom");
    }

    if (item.zIndex !== undefined && item.zIndex !== null) {
      characterImage.style.zIndex = String(item.zIndex);
    } else {
      characterImage.style.removeProperty("z-index");
    }

    if (character.id === animatedId && character.animation === "enter") {
      characterImage.classList.add("enter-" + animationSideForPosition(position));
    }

    characterImage.onerror = () => {
      characterImage.removeAttribute("src");
      characterImage.classList.add("hidden");
    };

    if (imageSource) {
      characterImage.src = "assets/characters/" + imageSource;
    } else {
      characterImage.classList.add("hidden");
    }

    characterLayer.appendChild(characterImage);
  });

  if (layout.settleAfterEnter) {
    layoutSettleTimeout = window.setTimeout(() => {
      layoutSettleTimeout = null;
      renderCharacters("");
    }, 440);
  }
}

function showDialogue(step) {
  recordCheckpoint();
  const speaker = step.speaker || "";

  speakerName.textContent = speaker;
  speakerName.classList.toggle("hidden", !speaker);
  setSpeakerStyle(speaker);
  setSpeakingCharacter(speaker);
  typeText(step.text || "");
}

function showChoices(step) {
  const options = step.options || [];
  const speaker = step.speaker || "Decisión";

  if (options.length === 0) {
    showEnd();
    return;
  }

  stopTyping();
  recordCheckpoint();
  setSpeakerStyle(speaker);
  setSpeakingCharacter("");
  speakerName.textContent = speaker;
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

  if (option && option.nextScene) {
    jumpToScene(option.nextScene);
    return;
  }

  if (option && option.nextStep) {
    currentStepIndex += 1;
    showCurrentStep();
    return;
  }

  showEnd();
}

function clearChoices() {
  choiceBox.innerHTML = "";
  choiceBox.classList.add("hidden");
}

function showInspect(step) {
  stopTyping();
  recordCheckpoint();
  setSpeakingCharacter("");
  nextButton.classList.add("hidden");

  if (step.collectible) {
    unlockCollectible(step);
    renderInspectPrompt({ requiredStep: step });

    if (step.autoOpen) {
      openInspectOverlay(step, { completesInspectStep: true });
    }
    return;
  }

  renderInspectPrompt({ temporaryStep: step, requiredStep: step });

  if (step.autoOpen) {
    openInspectOverlay(step, { completesInspectStep: true });
    return;
  }
}

function openInspectOverlay(step, options) {
  const resolvedStep = resolveInspectStep(step);
  const imagePath = resolvedStep.image ? "assets/backgrounds/" + resolvedStep.image : "";
  const completesInspectStep = Boolean(options && options.completesInspectStep);

  if (!imagePath) {
    if (completesInspectStep) {
      finishInspectStep();
    }
    return;
  }

  currentOverlayCompletesInspectStep = completesInspectStep;
  inspectImage.alt = resolvedStep.alt || resolvedStep.buttonText || "Imagen";
  inspectImage.onerror = () => {
    if (completesInspectStep) {
      finishInspectStep();
      return;
    }

    closeInspectOverlay();
  };
  inspectImage.src = imagePath;
  inspectOverlay.classList.remove("hidden");
  inspectOverlay.setAttribute("aria-hidden", "false");
}

function closeInspectOverlay() {
  currentOverlayCompletesInspectStep = false;
  inspectOverlay.classList.add("hidden");
  inspectOverlay.setAttribute("aria-hidden", "true");
  inspectImage.onerror = null;
  inspectImage.removeAttribute("src");
}

function handleInspectBackdropClick(event) {
  if (event.target !== inspectOverlay) {
    return;
  }

  handleInspectClose();
}

function handleInspectClose() {
  if (currentOverlayCompletesInspectStep) {
    finishInspectStep();
    return;
  }

  closeInspectOverlay();
}

function finishInspectStep() {
  closeInspectOverlay();
  renderInspectPrompt();
  nextButton.classList.remove("hidden");
}

function clearInspectPrompt() {
  renderInspectPrompt();
}

function unlockCollectible(step) {
  const resolvedStep = resolveInspectStep(step);

  if (!resolvedStep.collectible) {
    return;
  }

  unlockedCollectibles.set(resolvedStep.collectible, {
    id: resolvedStep.collectible,
    buttonText: resolvedStep.buttonText || "Ver objeto",
    image: resolvedStep.image,
    alt: resolvedStep.alt || "Imagen"
  });
}

function renderInspectPrompt(options) {
  const temporaryStep =
    options && options.temporaryStep && !options.temporaryStep.collectible
      ? resolveInspectStep(options.temporaryStep)
      : null;
  const requiredStep = options && options.requiredStep ? resolveInspectStep(options.requiredStep) : null;

  inspectPrompt.innerHTML = "";

  getUnlockedCollectiblesInOrder().forEach((collectible) => {
    const isRequired =
      requiredStep &&
      requiredStep.collectible &&
      requiredStep.collectible === collectible.id;

    inspectPrompt.appendChild(
      createInspectButton(collectible, {
        isRequired,
        onClick: () =>
          handleInspectButtonClick(collectible, {
            completesInspectStep: isRequired
          })
      })
    );
  });

  if (temporaryStep) {
    inspectPrompt.appendChild(
      createInspectButton(temporaryStep, {
        isRequired: true,
        onClick: () =>
          handleInspectButtonClick(temporaryStep, {
            completesInspectStep: true
          })
      })
    );
  }

  inspectPrompt.classList.toggle("hidden", inspectPrompt.childElementCount === 0);
}

function createInspectButton(step, options) {
  const inspectButton = document.createElement("button");
  const imagePath = step.image ? "assets/backgrounds/" + step.image : "";

  inspectButton.type = "button";
  inspectButton.className = "inspect-button";
  inspectButton.classList.toggle("is-required", Boolean(options && options.isRequired));
  inspectButton.innerHTML =
    '<span class="inspect-button-thumb"></span><span class="inspect-button-label">' +
    (step.buttonText || "Ver objeto") +
    "</span>";

  const thumb = inspectButton.querySelector(".inspect-button-thumb");
  if (thumb && imagePath) {
    thumb.style.backgroundImage = 'url("' + imagePath + '")';
  }

  inspectButton.addEventListener("click", () => {
    if (options && typeof options.onClick === "function") {
      options.onClick();
    }
  });

  return inspectButton;
}

function handleInspectButtonClick(step, options) {
  if (isTyping) {
    finishTyping();
  }

  openInspectOverlay(step, options);
}

function getUnlockedCollectiblesInOrder() {
  return Array.from(unlockedCollectibles.values()).sort((left, right) => {
    return getCollectibleOrder(left.id) - getCollectibleOrder(right.id);
  });
}

function getCollectibleOrder(collectibleId) {
  const collectible = collectibleLibrary[collectibleId];

  if (!collectible || typeof collectible.order !== "number") {
    return Number.MAX_SAFE_INTEGER;
  }

  return collectible.order;
}

function resolveInspectStep(step) {
  const collectible =
    step && step.collectible ? collectibleLibrary[step.collectible] || null : null;

  return {
    ...step,
    buttonText:
      (step && step.buttonText) ||
      (collectible && collectible.buttonText) ||
      "Ver objeto",
    image: (step && step.image) || (collectible && collectible.image) || "",
    alt: (step && step.alt) || (collectible && collectible.alt) || "Imagen"
  };
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

  stopSpeakingAnimation();

  if (!speakingCharacter) {
    return;
  }

  const activeImage = characterLayer.querySelector(
    '[data-character-id="' + speakingCharacter.id + '"]'
  );

  if (activeImage) {
    const baseBottom = getCharacterBottomValue(activeImage);
    const liftedBottom = baseBottom + SPEAKING_BOUNCE_HEIGHT;
    const animation = activeImage.animate(
      [
        {
          bottom: String(baseBottom) + "px"
        },
        {
          bottom: String(liftedBottom) + "px",
          offset: 0.42
        },
        {
          bottom: String(baseBottom) + "px"
        }
      ],
      {
        duration: 280,
        easing: "cubic-bezier(0.22, 0.61, 0.36, 1)"
      }
    );
    speakingAnimation = animation;
    animation.onfinish = () => {
      if (speakingAnimation === animation) {
        speakingAnimation = null;
      }
    };
    animation.oncancel = () => {
      if (speakingAnimation === animation) {
        speakingAnimation = null;
      }
    };
  }
}

function getCharacterBottomValue(characterImage) {
  const computedBottom = parseFloat(window.getComputedStyle(characterImage).bottom);

  return isFinite(computedBottom) ? computedBottom : 0;
}

function setSpeakerStyle(speaker) {
  const style = getSpeakerStyle(speaker);

  dialogueBox.style.setProperty("--speaker-accent", style.accent);
  dialogueBox.style.setProperty("--speaker-accent-dark", style.accentDark);
}

function getSpeakerStyle(speaker) {
  const normalizedSpeaker = normalizeSpeakerKey(speaker);
  const directStyle = defaultSpeakerStyles[normalizedSpeaker];

  if (directStyle) {
    return directStyle;
  }

  const character = findCharacterBySpeaker(speaker);

  if (character && character.accent && character.accentDark) {
    return {
      accent: character.accent,
      accentDark: character.accentDark
    };
  }

  return defaultSpeakerStyles.npc;
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

  const loop = Boolean(options && options.loop);
  const volume = options && typeof options.volume === "number" ? options.volume : 1;

  currentAudioState = {
    fileName,
    loop,
    volume
  };
  updateAudioControls();
  stopAudioPlayback();

  const audio = new Audio("assets/sounds/" + fileName);
  audio.loop = loop;
  activeAudioBaseVolume = volume;
  audio.volume = getEffectiveVolume(activeAudioBaseVolume);
  audio.addEventListener("error", () => {});

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }

  activeAudio = audio;
  return audio;
}

function stopActiveAudio() {
  currentAudioState = null;
  updateAudioControls();
  stopAudioPlayback();
}

function stopAudioPlayback() {
  if (!activeAudio) {
    activeAudioBaseVolume = 1;
    return;
  }

  activeAudio.pause();
  activeAudio = null;
  activeAudioBaseVolume = 1;
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

function normalizeCharacterOffset(value) {
  if (typeof value === "number" && isFinite(value)) {
    return value + "px";
  }

  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  return "0px";
}

function buildCharacterWidthLimit(width, height) {
  const normalizedWidth =
    typeof width === "string" && width.trim()
      ? width.trim()
      : width
        ? String(width)
        : "";
  const normalizedHeight =
    typeof height === "string" && height.trim()
      ? height.trim()
      : height
        ? String(height)
        : "";

  if (normalizedWidth && normalizedHeight) {
    return (
      "max(" +
      normalizedWidth +
      ", calc(" +
      normalizedHeight +
      " * " +
      CHARACTER_MAX_ASPECT_RATIO +
      "))"
    );
  }

  if (normalizedHeight) {
    return "calc(" + normalizedHeight + " * " + CHARACTER_MAX_ASPECT_RATIO + ")";
  }

  return normalizedWidth || "none";
}

function buildCharacterTransform(options) {
  const offsetX = normalizeCharacterOffset(options && options.offsetX);
  const scale = normalizeCharacterScale(options && options.scale);
  const translateY = normalizeCharacterOffset(
    options && Object.prototype.hasOwnProperty.call(options, "translateY")
      ? options.translateY
      : 0
  );
  const face = options && options.shouldFlip ? "-1" : "1";

  return (
    "translateX(calc(var(--base-shift, 0) + " +
    offsetX +
    ")) translateY(calc(var(--character-lift, -18px) + " +
    translateY +
    "))" +
    " scaleX(" +
    face +
    ")" +
    " scale(" +
    scale +
    ")"
  );
}

function resolveCharacterFlip(character, item, position) {
  if (typeof item.manualFlip === "boolean") {
    return item.manualFlip;
  }

  if (typeof character.manualFlip === "boolean") {
    return character.manualFlip;
  }

  if (isCharacter(character, "rocky")) {
    return false;
  }

  return isLeftFacingPosition(position) || item.side === "left";
}

function isLeftFacingPosition(position) {
  return position === "far-left" || position === "left";
}

function isIntroSceneId(sceneId) {
  return INTRO_SCENE_IDS.has(sceneId);
}

function setInspectPromptCompact(isCompact) {
  inspectPrompt.classList.toggle("is-compact", Boolean(isCompact));
}

function recordCheckpoint() {
  if (isRestoringCheckpoint) {
    return;
  }

  const lastCheckpoint = checkpointHistory[checkpointHistory.length - 1];
  const checkpoint = {
    sceneId: currentSceneId,
    stepIndex: currentStepIndex,
    state: captureCheckpointState()
  };

  if (
    lastCheckpoint &&
    lastCheckpoint.sceneId === checkpoint.sceneId &&
    lastCheckpoint.stepIndex === checkpoint.stepIndex
  ) {
    updateBackButton();
    return;
  }

  checkpointHistory.push(checkpoint);
  updateBackButton();
}

function restoreCheckpoint(checkpoint) {
  const scene = checkpoint ? story[checkpoint.sceneId] : null;

  if (!checkpoint || !Array.isArray(scene)) {
    return;
  }

  isRestoringCheckpoint = true;
  stopTyping();
  clearChoices();
  clearInspectPrompt();
  closeInspectOverlay();
  stopSpeakingAnimation();
  clearLayoutSettleTimeout();
  setSpeakingCharacter("");
  speakerName.textContent = "";
  speakerName.classList.add("hidden");
  dialogueText.textContent = "";
  nextButton.classList.remove("hidden");
  currentSceneId = checkpoint.sceneId;
  currentScene = scene;
  currentStepIndex = checkpoint.stepIndex;
  setInspectPromptCompact(!isIntroSceneId(checkpoint.sceneId));
  restoreCheckpointState(checkpoint.state);
  isRestoringCheckpoint = false;
  showCurrentStep();
  updateBackButton();
}

function updateBackButton() {
  backButton.disabled = checkpointHistory.length <= 1;
}

function captureCheckpointState() {
  return {
    background: cloneBackgroundState(currentBackgroundState),
    characters: Array.from(characterState.values(), cloneCharacterState),
    audio: cloneAudioState(currentAudioState)
  };
}

function restoreCheckpointState(state) {
  const checkpointState = state || {};

  currentBackgroundState = cloneBackgroundState(checkpointState.background);
  applyBackgroundState(currentBackgroundState);

  characterState.clear();
  (Array.isArray(checkpointState.characters) ? checkpointState.characters : []).forEach(
    (character) => {
      if (!character || !character.id) {
        return;
      }

      characterState.set(character.id, cloneCharacterState(character));
    }
  );
  renderCharacters("");
  restoreAudioState(checkpointState.audio);
}

function cloneBackgroundState(backgroundState) {
  if (!backgroundState || !backgroundState.image) {
    return null;
  }

  return {
    image: backgroundState.image
  };
}

function cloneCharacterState(character) {
  return {
    ...character
  };
}

function cloneAudioState(audioState) {
  if (!audioState || !audioState.fileName) {
    return null;
  }

  return {
    fileName: audioState.fileName,
    loop: Boolean(audioState.loop),
    volume: typeof audioState.volume === "number" ? audioState.volume : 1
  };
}

function applyBackgroundState(backgroundState) {
  const imagePath =
    backgroundState && backgroundState.image
      ? "assets/backgrounds/" + backgroundState.image
      : "";

  if (!imagePath) {
    backgroundLayer.style.backgroundImage = "";
    return;
  }

  backgroundLayer.style.backgroundImage =
    'linear-gradient(rgba(0, 0, 0, 0.18), rgba(0, 0, 0, 0.52)), url("' +
    imagePath +
    '")';
}

function shouldHideCharactersForCurrentBackground() {
  return normalizeAssetKey(currentBackgroundState && currentBackgroundState.image) ===
    TRANSITION_BACKGROUND_KEY;
}

function normalizeAssetKey(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function restoreAudioState(audioState) {
  const nextAudioState = cloneAudioState(audioState);

  if (!nextAudioState) {
    stopActiveAudio();
    return;
  }

  if (isSameAudioState(currentAudioState, nextAudioState)) {
    syncActiveAudioVolume();
    return;
  }

  playMusicFile(nextAudioState.fileName, {
    loop: nextAudioState.loop,
    volume: nextAudioState.volume
  });
}

function isSameAudioState(leftState, rightState) {
  if (!leftState || !rightState) {
    return false;
  }

  return (
    leftState.fileName === rightState.fileName &&
    Boolean(leftState.loop) === Boolean(rightState.loop) &&
    leftState.volume === rightState.volume
  );
}

function stopSpeakingAnimation() {
  if (!speakingAnimation) {
    return;
  }

  speakingAnimation.cancel();
  speakingAnimation = null;
}

function clearLayoutSettleTimeout() {
  if (!layoutSettleTimeout) {
    return;
  }

  clearTimeout(layoutSettleTimeout);
  layoutSettleTimeout = null;
}

function resolveCharacterLayout(characters, animatedId) {
  const count = characters.length;
  const width = getCharacterWidth(count);
  const height = getCharacterHeight(count);
  const autoScale = getCharacterScale(count);
  const rocky = takeCharacter(characters, "rocky");
  const reina = takeCharacter(characters, "reina");
  const hasCorePair = Boolean(rocky && reina);

  if (characters.some((character) => character.layoutMode === "manual")) {
    return {
      items: createManualLayoutItems(characters, width, height, autoScale),
      settleAfterEnter: false
    };
  }

  if (count === 1) {
    return {
      items: createManualLayoutItems(characters, width, height, autoScale),
      settleAfterEnter: false
    };
  }

  if (hasCorePair) {
    return {
      items: createRoleBasedLayoutItems(
        characters,
        rocky,
        reina,
        animatedId,
        width,
        height,
        autoScale
      ),
      settleAfterEnter: false
    };
  }

  return {
    items: createManualLayoutItems(characters, width, height, autoScale),
    settleAfterEnter: false
  };
}

function setCharacterState(step) {
  if (!step.id) {
    return;
  }

  const savedCharacter = characterState.get(step.id) || {};
  const characterDefaults = getCharacterDefaults(step.id);
  const sceneDefaults = getSceneCharacterDefaults(currentSceneId, step.id);
  characterState.set(step.id, {
    ...characterDefaults,
    ...sceneDefaults,
    ...savedCharacter,
    ...step,
    manualFlip: resolveCharacterManualFlip(savedCharacter, characterDefaults, sceneDefaults, step)
  });
}

function createManualLayoutItems(characters, width, height, scale) {
  return characters.map((character) => ({
    character,
    position: character.position || "center",
    scale: resolveCharacterDisplayScale(character, scale),
    width: character.width || width,
    height: character.height || height,
    bottom: character.layoutMode === "manual" ? character.bottom : undefined,
    offsetX: character.offsetX,
    side: inferSideFromPosition(character.position),
    manualFlip:
      typeof character.manualFlip === "boolean"
        ? character.manualFlip
        : typeof character.flip === "boolean"
          ? character.flip
          : undefined
  }));
}

function createRoleBasedLayoutItems(characters, rocky, reina, animatedId, width, height, scale) {
  const others = characters.filter(
    (character) => !isCharacter(character, "rocky") && !isCharacter(character, "reina")
  );
  const secondaryCharacters = others.filter((character) => getCharacterRole(character) === "secondary");
  const tertiaryCharacters = others.filter((character) => getCharacterRole(character) !== "secondary");

  if (others.length === 0) {
    return [
      createResolvedLayoutItem(rocky, { position: "left", side: "left" }, width, height, scale),
      createResolvedLayoutItem(reina, { position: "right", side: "right" }, width, height, scale)
    ];
  }

  if (tertiaryCharacters.length > 0) {
    return createTertiaryPriorityLayoutItems(
      rocky,
      reina,
      secondaryCharacters,
      tertiaryCharacters,
      animatedId,
      width,
      height,
      scale
    );
  }

  const rightSlots = getRightGroupSlots(secondaryCharacters.length);

  return [
    createResolvedLayoutItem(rocky, { position: "left", side: "left" }, width, height, scale),
    createResolvedLayoutItem(reina, { position: "far-left", side: "left" }, width, height, scale)
  ]
    .concat(
      secondaryCharacters.map((character, index) =>
        createResolvedLayoutItem(character, rightSlots[index], width, height, scale)
      )
    );
}

function createTertiaryPriorityLayoutItems(
  rocky,
  reina,
  secondaryCharacters,
  tertiaryCharacters,
  animatedId,
  width,
  height,
  scale
) {
  const normalizedAnimatedId = normalizeSpeakerKey(animatedId);
  const highlightedTertiary =
    tertiaryCharacters.find(
      (character) => normalizeSpeakerKey(character.id) === normalizedAnimatedId
    ) || tertiaryCharacters[tertiaryCharacters.length - 1];
  const remainingTertiaries = tertiaryCharacters.filter(
    (character) => character !== highlightedTertiary
  );
  const leftGroup = [...secondaryCharacters, ...remainingTertiaries, reina, rocky];
  const leftSlots = getPackedLeftGroupSlots(leftGroup.length);
  const leftWidth = getPackedLeftGroupWidth(leftGroup.length, width);
  const leftHeight = getPackedLeftGroupHeight(leftGroup.length, height);

  return leftGroup
    .map((character, index) =>
      applyCrowdedCorePairStacking(
        createResolvedLayoutItem(character, leftSlots[index], leftWidth, leftHeight, scale),
        leftGroup.length,
        index
      )
    )
    .concat([
      applyCrowdedCorePairStacking(
        createResolvedLayoutItem(
          highlightedTertiary,
          { position: "far-right", side: "right" },
          leftWidth,
          leftHeight,
          scale
        ),
        leftGroup.length,
        leftGroup.length
      )
    ]);
}

function applyCrowdedCorePairStacking(item, leftGroupCount, index) {
  if (!item || !item.character) {
    return item;
  }

  if (isCharacter(item.character, "reina")) {
    return {
      ...item,
      zIndex: 34
    };
  }

  if (isCharacter(item.character, "rocky")) {
    return {
      ...item,
      zIndex: 33
    };
  }

  if (leftGroupCount >= 3 && index >= leftGroupCount) {
    return {
      ...item,
      zIndex: 35
    };
  }

  return item;
}

function createResolvedLayoutItem(character, layoutConfig, width, height, scale) {
  const config = layoutConfig || {};
  const preserveManualFlip = Boolean(config.preserveFlip || character.layoutMode === "manual");

  return {
    character,
    position: config.position || character.position || "center",
    scale: resolveCharacterDisplayScale(character, scale),
    width: pickDefined(character.width, config.width, width),
    height: pickDefined(character.height, config.height, height),
    bottom:
      character.layoutMode === "manual"
        ? pickDefined(character.bottom, config.bottom)
        : pickDefined(config.bottom),
    offsetX: pickDefined(character.offsetX, config.offsetX),
    side: config.side || inferSideFromPosition(config.position || character.position),
    manualFlip:
      preserveManualFlip && typeof character.manualFlip === "boolean"
        ? character.manualFlip
        : preserveManualFlip && typeof config.flip === "boolean"
          ? config.flip
          : undefined
  };
}

function getLeftGroupSlots(count) {
  const slots = [
    { position: "far-left", side: "left" },
    { position: "left", side: "left" },
    { position: "center", side: "left", offsetX: "-86px" },
    { position: "right", side: "left", offsetX: "-154px" },
    { position: "far-right", side: "left", offsetX: "-212px" }
  ];

  return buildSlotSequence(count, slots);
}

function getPackedLeftGroupSlots(count) {
  if (count <= 2) {
    return getLeftGroupSlots(count);
  }

  if (count === 3) {
    return [
      { position: "far-left", side: "left" },
      { position: "center", side: "left", offsetX: "-214px" },
      { position: "center", side: "left", offsetX: "-68px" }
    ];
  }

  if (count === 4) {
    return [
      { position: "far-left", side: "left" },
      { position: "left", side: "left" },
      { position: "center", side: "left", offsetX: "-214px" },
      { position: "center", side: "left", offsetX: "-68px" }
    ];
  }

  const slots = [
    { position: "far-left", side: "left" },
    { position: "left", side: "left" },
    { position: "center", side: "left", offsetX: "-230px" },
    { position: "center", side: "left", offsetX: "-128px" },
    { position: "center", side: "left", offsetX: "-320px" }
  ];

  return buildSlotSequence(count, slots);
}

function getPackedLeftGroupWidth(count, fallbackWidth) {
  if (count === 3) {
    return "clamp(150px, 20vw, 250px)";
  }

  if (count === 4) {
    return "clamp(132px, 17vw, 215px)";
  }

  if (count >= 5) {
    return "clamp(116px, 15vw, 188px)";
  }

  return fallbackWidth;
}

function getPackedLeftGroupHeight(count, fallbackHeight) {
  if (count === 3) {
    return "clamp(250px, 44vh, 390px)";
  }

  if (count === 4) {
    return "clamp(220px, 38vh, 330px)";
  }

  if (count >= 5) {
    return "clamp(190px, 33vh, 290px)";
  }

  return fallbackHeight;
}

function getRightGroupSlots(count) {
  if (count <= 1) {
    return [{ position: "right", side: "right" }];
  }

  if (count === 2) {
    return [
      { position: "right", side: "right" },
      { position: "far-right", side: "right" }
    ];
  }

  if (count === 3) {
    return [
      { position: "center", side: "right", offsetX: "88px" },
      { position: "right", side: "right" },
      { position: "far-right", side: "right" }
    ];
  }

  const slots = [
    { position: "center", side: "right", offsetX: "78px" },
    { position: "right", side: "right" },
    { position: "far-right", side: "right" },
    { position: "far-right", side: "right", offsetX: "84px" },
    { position: "far-right", side: "right", offsetX: "152px" }
  ];

  return buildSlotSequence(count, slots);
}

function buildSlotSequence(count, slots) {
  return Array.from({ length: count }, (_, index) => {
    if (index < slots.length) {
      return slots[index];
    }

    const lastSlot = slots[slots.length - 1];
    const extraOffset = 68 * (index - slots.length + 1);
    const direction = lastSlot.side === "left" ? -1 : 1;

    return {
      ...lastSlot,
      offsetX: String(parseOffsetValue(lastSlot.offsetX) + extraOffset * direction) + "px"
    };
  });
}

function parseOffsetValue(value) {
  if (typeof value === "number" && isFinite(value)) {
    return value;
  }

  if (typeof value !== "string") {
    return 0;
  }

  const parsedValue = parseFloat(value);
  return isFinite(parsedValue) ? parsedValue : 0;
}

function pickDefined() {
  for (const value of arguments) {
    if (value !== undefined && value !== null && value !== "") {
      return value;
    }
  }

  return undefined;
}

function resolveCharacterDisplayScale(character, fallbackScale) {
  if (character && character.layoutMode === "manual") {
    if (
      typeof character.scale === "number" &&
      isFinite(character.scale) &&
      character.scale > 0
    ) {
      return character.scale;
    }

    return fallbackScale;
  }

  return 1;
}

function inferSideFromPosition(position) {
  if (position === "far-left" || position === "left") {
    return "left";
  }

  if (position === "far-right" || position === "right") {
    return "right";
  }

  return "center";
}

function resolveCharacterManualFlip(savedCharacter, characterDefaults, sceneDefaults, step) {
  if (Object.prototype.hasOwnProperty.call(step, "flip")) {
    return step.flip;
  }

  if (Object.prototype.hasOwnProperty.call(savedCharacter, "manualFlip")) {
    return savedCharacter.manualFlip;
  }

  if (Object.prototype.hasOwnProperty.call(savedCharacter, "flip")) {
    return savedCharacter.flip;
  }

  if (Object.prototype.hasOwnProperty.call(sceneDefaults, "flip")) {
    return sceneDefaults.flip;
  }

  if (Object.prototype.hasOwnProperty.call(characterDefaults, "flip")) {
    return characterDefaults.flip;
  }

  return undefined;
}

function getCharacterDefaults(characterId) {
  const normalizedId = normalizeSpeakerKey(characterId);
  return characterLibrary[normalizedId] || {};
}

function resolveCharacterImageSource(character, useFlippedAsset) {
  const defaults = getCharacterDefaults(character.id);

  if (useFlippedAsset) {
    if (character.imageFlipped === defaults.imageFlipped && character.imageFlippedTrimmed) {
      return character.imageFlippedTrimmed;
    }

    return character.imageFlipped || character.imageFlippedTrimmed || "";
  }

  if (character.image === defaults.image && character.imageTrimmed) {
    return character.imageTrimmed;
  }

  return character.image || character.imageTrimmed || "";
}

function getSceneCharacterDefaults(sceneId, characterId) {
  const normalizedSceneId = normalizeSpeakerKey(sceneId);
  const normalizedCharacterId = normalizeSpeakerKey(characterId);
  const sceneLayout = sceneCharacterLayouts[normalizedSceneId];

  if (!sceneLayout) {
    return {};
  }

  return sceneLayout[normalizedCharacterId] || {};
}

function getCharacterRole(character) {
  const role = character && character.role;

  if (role === "protagonist" || role === "secondary" || role === "tertiary") {
    return role;
  }

  if (isCharacter(character, "rocky") || isCharacter(character, "reina")) {
    return "protagonist";
  }

  return "tertiary";
}

function buildOrderedCharacters(characters, priorityIds) {
  const ordered = [];
  const remaining = [...characters];

  priorityIds.forEach((priorityId) => {
    const matchIndex = remaining.findIndex((character) => isCharacter(character, priorityId));
    if (matchIndex >= 0) {
      ordered.push(remaining.splice(matchIndex, 1)[0]);
    }
  });

  return ordered.concat(remaining);
}

function takeCharacter(characters, characterId) {
  return characters.find((character) => isCharacter(character, characterId)) || null;
}

function isCharacter(character, characterId) {
  return (
    normalizeSpeakerKey(character && character.id) === characterId ||
    normalizeSpeakerKey(character && character.name) === characterId
  );
}

function getCharacterWidth(count) {
  if (count <= 1) {
    return "clamp(260px, 42vw, 560px)";
  }

  if (count === 2) {
    return "clamp(220px, 34vw, 460px)";
  }

  if (count === 3) {
    return "clamp(200px, 30vw, 400px)";
  }

  if (count === 4) {
    return "clamp(180px, 26vw, 340px)";
  }

  if (count === 5) {
    return "clamp(150px, 22vw, 280px)";
  }

  return "clamp(130px, 18vw, 230px)";
}

function getCharacterHeight(count) {
  if (count <= 1) {
    return "clamp(360px, 70vh, 640px)";
  }

  if (count === 2) {
    return "clamp(320px, 62vh, 560px)";
  }

  if (count === 3) {
    return "clamp(285px, 54vh, 480px)";
  }

  if (count === 4) {
    return "clamp(245px, 46vh, 390px)";
  }

  if (count === 5) {
    return "clamp(210px, 38vh, 320px)";
  }

  return "clamp(185px, 32vh, 270px)";
}

function getCharacterScale(count) {
  if (count >= 4) {
    return 1;
  }

  return 1;
}

function toggleMute() {
  isMuted = !isMuted;
  syncActiveAudioVolume();
  updateAudioControls();
}

function handleVolumeChange() {
  const sliderValue = Number(volumeSlider.value);

  if (!Number.isFinite(sliderValue)) {
    return;
  }

  masterVolume = Math.min(Math.max(sliderValue / 100, 0), 1);
  if (masterVolume > 0 && isMuted) {
    isMuted = false;
  }
  syncActiveAudioVolume();
  updateAudioControls();
}

function syncActiveAudioVolume() {
  if (!activeAudio) {
    return;
  }

  activeAudio.volume = getEffectiveVolume(activeAudioBaseVolume);
}

function getEffectiveVolume(baseVolume) {
  if (isMuted) {
    return 0;
  }

  return Math.min(Math.max(baseVolume * masterVolume, 0), 1);
}

function updateAudioControls() {
  audioControls.classList.toggle("hidden", !currentAudioState);
  muteButton.textContent = isMuted ? "Musica: Off" : "Musica: On";
  volumeSlider.value = String(Math.round(masterVolume * 100));
}

function showEnd() {
  stopTyping();
  clearChoices();
  clearInspectPrompt();
  setSpeakerStyle("Fin");
  setSpeakingCharacter("");

  if (isIntroSceneId(currentSceneId)) {
    stopActiveAudio();
    setInspectPromptCompact(true);
  }

  speakerName.textContent = "Fin";
  speakerName.classList.remove("hidden");
  dialogueText.textContent = "La aventura acaba de empezar...";
  nextButton.classList.add("hidden");
}
