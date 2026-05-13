(function () {
  const WALL = "#";
  const PATH = ".";
  const START = "P";
  const GOAL = "G";
  const PLAYER_ICON_HTML = "&#129418;";
  const GOAL_ICON_HTML = "&#9961;";
  const FALLBACK_MAZE_MAP = [
    "########",
    "#P.....#",
    "#.####.#",
    "#....#.#",
    "####.#.#",
    "#....#G#",
    "########"
  ];
  const DEFAULT_MAZE_MAP = [
    "#####################",
    "#P#...#.....#.......#",
    "#.#.#.#.#.###.#####.#",
    "#...#.#.#.#...#.#...#",
    "#####.#.###.###.#.#.#",
    "#...#.#.#...#...#.#.#",
    "#.#.#.#.#.###.#.#.###",
    "#.#.#.#.....#.#.#...#",
    "#.#.#.#####.###.###.#",
    "#.#.#.....#.......#.#",
    "#.#.#####.#######.#.#",
    "#.#.#.#...#.......#.#",
    "#.#.#.#.###.#######.#",
    "#.#...#.#........G#.#",
    "#.#####.#######.###.#",
    "#.....#.......#.#...#",
    "#.###.#######.###.#.#",
    "#...#.#.....#.....#.#",
    "###.#.#.#.#########.#",
    "#...#...#...........#",
    "#####################"
  ];
  const DEFAULT_COPY = {
    eyebrow: "Templo oculto entre faroles y piedra",
    title: "Laberinto del Templo",
    subtitle: "Avanza por el templo oscuro hasta encontrar la salida.",
    sectionKicker: "Mapa revelado",
    sectionTitle: "Seguid la luz que dejais atras",
    statusKicker: "Mensajes",
    resetButton: "Reiniciar",
    closeButton: "Cerrar",
    initialMessage: "Avanza por el templo oscuro hasta encontrar la salida.",
    outOfBoundsMessage: "El pasillo termina en oscuridad por ese lado.",
    wallMessage: "Una pared de piedra os corta el paso.",
    stepMessage: "La piedra del templo se ilumina bajo vuestros pasos.",
    successMessage: "\u00a1Hab\u00e9is encontrado la salida del laberinto!",
    counterTemplate: "{count} casillas reveladas",
    counterSuccess: "Salida encontrada."
  };

  const state = {
    initialized: false,
    isOpen: false,
    hasWon: false,
    completionDispatched: false,
    allowClose: true,
    resizeFrame: 0,
    launchButton: null,
    lastFocusedElement: null,
    onComplete: null,
    copy: { ...DEFAULT_COPY },
    layout: null,
    playerRow: 0,
    playerCol: 0,
    visitedCells: new Set(),
    message: {
      tone: "info",
      text: "Avanza por el templo oscuro hasta encontrar la salida."
    },
    elements: {}
  };

  const simpleMazeGame = {
    init,
    open,
    close,
    reset,
    render,
    move,
    setMap
  };

  globalThis.simpleMazeGame = simpleMazeGame;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  function init() {
    if (state.initialized) {
      return simpleMazeGame;
    }

    state.layout = resolveLayout(DEFAULT_MAZE_MAP, "DEFAULT_MAZE_MAP");
    buildOverlay();
    injectLaunchButton();
    state.initialized = true;
    reset();
    return simpleMazeGame;
  }

  function open(options) {
    init();

    const resolvedOptions = options || {};
    state.onComplete = typeof resolvedOptions.onComplete === "function" ? resolvedOptions.onComplete : null;
    state.allowClose = resolvedOptions.allowClose !== false;
    state.copy = resolveCopy(resolvedOptions.copy);
    applyCopy();

    if (Array.isArray(resolvedOptions.map)) {
      state.layout = resolveLayout(resolvedOptions.map, "open(map)");
      reset();
    } else if (resolvedOptions.resetOnOpen) {
      reset();
    }

    state.lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    state.isOpen = true;
    state.elements.root.classList.remove("hidden");
    state.elements.root.setAttribute("aria-hidden", "false");
    state.elements.closeButton.hidden = !state.allowClose;
    document.body.classList.add("simple-maze--open");
    render();

    if (state.allowClose && state.elements.closeButton) {
      state.elements.closeButton.focus();
    } else if (state.elements.resetButton) {
      state.elements.resetButton.focus();
    }

    return simpleMazeGame;
  }

  function close() {
    if (!state.initialized) {
      return simpleMazeGame;
    }

    state.isOpen = false;
    state.elements.root.classList.add("hidden");
    state.elements.root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("simple-maze--open");
    clearBoardResizeFrame();

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }

    return simpleMazeGame;
  }

  function reset() {
    if (!state.layout) {
      state.layout = resolveLayout(DEFAULT_MAZE_MAP, "DEFAULT_MAZE_MAP");
    }

    state.playerRow = state.layout.start.row;
    state.playerCol = state.layout.start.col;
    state.visitedCells = new Set([buildCellKey(state.playerRow, state.playerCol)]);
    state.hasWon = false;
    state.completionDispatched = false;
    setMessage("info", getCopyText("initialMessage"));
    render();
    return simpleMazeGame;
  }

  function setMap(mapRows) {
    state.layout = resolveLayout(mapRows, "setMap(mapRows)");

    if (state.initialized) {
      reset();
    }

    return simpleMazeGame;
  }

  function render() {
    if (!state.initialized || !state.layout) {
      return simpleMazeGame;
    }

    renderBoard();
    renderMessage();
    renderCounter();
    queueBoardResize();
    return simpleMazeGame;
  }

  function move(dx, dy) {
    if (!state.isOpen || state.hasWon || !state.layout) {
      return false;
    }

    const nextRow = state.playerRow + dy;
    const nextCol = state.playerCol + dx;

    if (!isInsideMap(nextRow, nextCol)) {
      setMessage("warning", getCopyText("outOfBoundsMessage"));
      render();
      return false;
    }

    if (state.layout.tiles[nextRow][nextCol] === WALL) {
      setMessage("warning", getCopyText("wallMessage"));
      render();
      return false;
    }

    state.playerRow = nextRow;
    state.playerCol = nextCol;
    state.visitedCells.add(buildCellKey(nextRow, nextCol));

    if (isGoalCell(nextRow, nextCol)) {
      state.hasWon = true;
      setMessage("success", getCopyText("successMessage"));
      render();
      dispatchCompletion();
      return true;
    }

    setMessage("info", getCopyText("stepMessage"));
    render();
    return true;
  }

  function buildOverlay() {
    const root = document.createElement("div");
    root.className = "simple-maze__overlay hidden";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML =
      '<div class="simple-maze__backdrop" data-action="close"></div>' +
      '<div class="simple-maze__panel" role="dialog" aria-modal="true" aria-labelledby="simple-maze-title">' +
      '<div class="simple-maze__frame">' +
      '<header class="simple-maze__header">' +
      '<div class="simple-maze__title-group">' +
      '<p class="simple-maze__eyebrow" data-role="eyebrow">Templo oculto entre faroles y piedra</p>' +
      '<h1 id="simple-maze-title" class="simple-maze__title" data-role="title">Laberinto del Templo</h1>' +
      '<p class="simple-maze__subtitle" data-role="subtitle">Avanza por el templo oscuro hasta encontrar la salida.</p>' +
      "</div>" +
      '<div class="simple-maze__header-actions">' +
      '<button class="simple-maze__action simple-maze__action--secondary" type="button" data-action="reset" data-role="reset-button">Reiniciar</button>' +
      '<button class="simple-maze__close" type="button" data-action="close" data-role="close-button">Cerrar</button>' +
      "</div>" +
      "</header>" +
      '<section class="simple-maze__status simple-maze__status--info" data-role="message">' +
      '<p class="simple-maze__status-kicker" data-role="status-kicker">Mensajes</p>' +
      '<p class="simple-maze__status-text" data-role="message-text"></p>' +
      "</section>" +
      '<section class="simple-maze__card simple-maze__board-stage">' +
      '<div class="simple-maze__section-head">' +
      '<div>' +
      '<p class="simple-maze__section-kicker" data-role="section-kicker">Mapa revelado</p>' +
      '<h2 class="simple-maze__section-title" data-role="section-title">Seguid la luz que dejais atras</h2>' +
      "</div>" +
      '<p class="simple-maze__counter" data-role="counter"></p>' +
      "</div>" +
      '<div class="simple-maze__board-shell">' +
      '<div class="simple-maze__board" data-role="board"></div>' +
      "</div>" +
      "</section>" +
      "</div>" +
      "</div>";

    document.body.appendChild(root);

    state.elements = {
      root,
      board: root.querySelector('[data-role="board"]'),
      boardShell: root.querySelector(".simple-maze__board-shell"),
      counter: root.querySelector('[data-role="counter"]'),
      message: root.querySelector('[data-role="message"]'),
      messageText: root.querySelector('[data-role="message-text"]'),
      eyebrow: root.querySelector('[data-role="eyebrow"]'),
      title: root.querySelector('[data-role="title"]'),
      subtitle: root.querySelector('[data-role="subtitle"]'),
      sectionKicker: root.querySelector('[data-role="section-kicker"]'),
      sectionTitle: root.querySelector('[data-role="section-title"]'),
      statusKicker: root.querySelector('[data-role="status-kicker"]'),
      resetButton: root.querySelector('[data-role="reset-button"]'),
      closeButton: root.querySelector('[data-role="close-button"]')
    };

    root.addEventListener("click", handleRootClick);
    document.addEventListener("keydown", handleDocumentKeyDown);
    window.addEventListener("resize", handleWindowResize);
  }

  function injectLaunchButton() {
    const startScreen = document.getElementById("start-screen");
    const scenarioSelect = document.getElementById("scenario-select");

    if (!startScreen || state.launchButton) {
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "simple-maze__launch";
    wrapper.innerHTML =
      '<p class="simple-maze__launch-copy">Prueba aparte el laberinto del templo sin alterar la ruta actual de la aventura.</p>' +
      '<button class="scenario-button simple-maze__launch-button" type="button">Probar laberinto</button>';

    if (scenarioSelect && scenarioSelect.parentNode === startScreen) {
      scenarioSelect.insertAdjacentElement("afterend", wrapper);
    } else {
      startScreen.appendChild(wrapper);
    }

    state.launchButton = wrapper.querySelector("button");
    state.launchButton.addEventListener("click", () => open({ resetOnOpen: true }));
  }

  function renderBoard() {
    const boardMarkup = [];
    const currentKey = buildCellKey(state.playerRow, state.playerCol);

    state.elements.board.style.setProperty("--simple-maze-cols", String(state.layout.width));
    state.elements.board.style.setProperty("--simple-maze-rows", String(state.layout.height));

    for (let rowIndex = 0; rowIndex < state.layout.height; rowIndex += 1) {
      for (let colIndex = 0; colIndex < state.layout.width; colIndex += 1) {
        const tile = state.layout.tiles[rowIndex][colIndex];
        const cellKey = buildCellKey(rowIndex, colIndex);
        const isCurrent = cellKey === currentKey;
        const isVisited = state.visitedCells.has(cellKey);
        const isWall = tile === WALL;
        const isStart = isStartCell(rowIndex, colIndex);
        const isGoal = isGoalCell(rowIndex, colIndex);
        const isNearWall = isWall && isNearPlayer(rowIndex, colIndex);
        const isRevealed = isCurrent || isVisited || isNearWall;
        const classes = ["simple-maze__cell"];

        classes.push(isWall ? "is-wall" : "is-floor");
        classes.push(isRevealed ? "is-revealed" : "is-hidden");

        if (isCurrent) {
          classes.push("is-current");
        }

        if (isGoal) {
          classes.push("is-goal");
        }

        if (isStart) {
          classes.push("is-start");
        }

        if (isNearWall) {
          classes.push("is-near-wall");
        }

        boardMarkup.push(
          '<div class="' +
            classes.join(" ") +
            '" aria-label="' +
            buildCellLabel(tile, rowIndex, colIndex, isRevealed, isCurrent, isStart, isGoal) +
            '">' +
            renderCellInner(tile, isRevealed, isCurrent, isStart, isGoal) +
            "</div>"
        );
      }
    }

    state.elements.board.innerHTML = boardMarkup.join("");
  }

  function renderCellInner(tile, isRevealed, isCurrent, isStart, isGoal) {
    const badgeMarkup = renderCellBadge(isRevealed || isCurrent, isStart, isGoal);

    if (isCurrent) {
      return '<span class="simple-maze__cell-face" aria-hidden="true">' + PLAYER_ICON_HTML + "</span>" + badgeMarkup;
    }

    if (isGoal && isRevealed) {
      return (
        '<span class="simple-maze__cell-face simple-maze__cell-face--goal" aria-hidden="true">' +
        GOAL_ICON_HTML +
        "</span>" +
        badgeMarkup
      );
    }

    if (isStart && isRevealed) {
      return '<span class="simple-maze__cell-face simple-maze__cell-face--start" aria-hidden="true">E</span>' + badgeMarkup;
    }

    if (tile === WALL && isRevealed) {
      return '<span class="simple-maze__cell-rune" aria-hidden="true">#</span>';
    }

    return '<span class="simple-maze__cell-rune" aria-hidden="true"></span>' + badgeMarkup;
  }

  function renderCellBadge(isVisible, isStart, isGoal) {
    if (!isVisible) {
      return "";
    }

    if (isStart) {
      return '<span class="simple-maze__cell-badge simple-maze__cell-badge--start" aria-hidden="true">ENT</span>';
    }

    if (isGoal) {
      return '<span class="simple-maze__cell-badge simple-maze__cell-badge--goal" aria-hidden="true">SAL</span>';
    }

    return "";
  }

  function applyCopy() {
    if (!state.elements || !state.elements.root) {
      return;
    }

    setElementText(state.elements.eyebrow, "eyebrow");
    setElementText(state.elements.title, "title");
    setElementText(state.elements.subtitle, "subtitle");
    setElementText(state.elements.sectionKicker, "sectionKicker");
    setElementText(state.elements.sectionTitle, "sectionTitle");
    setElementText(state.elements.statusKicker, "statusKicker");
    setElementText(state.elements.resetButton, "resetButton");
    setElementText(state.elements.closeButton, "closeButton");
  }

  function setElementText(element, copyKey) {
    if (!element) {
      return;
    }

    element.textContent = getCopyText(copyKey);
  }

  function resolveCopy(copy) {
    const resolvedCopy = { ...DEFAULT_COPY };

    if (!copy || typeof copy !== "object") {
      return resolvedCopy;
    }

    Object.keys(DEFAULT_COPY).forEach((key) => {
      if (typeof copy[key] === "string") {
        resolvedCopy[key] = copy[key];
      }
    });

    return resolvedCopy;
  }

  function getCopyText(copyKey) {
    return state.copy[copyKey] || DEFAULT_COPY[copyKey] || "";
  }

  function renderMessage() {
    const tone = state.message && state.message.tone ? state.message.tone : "info";
    const text = state.message && state.message.text ? state.message.text : "";

    state.elements.message.className = "simple-maze__status simple-maze__status--" + tone;
    state.elements.messageText.textContent = text;
  }

  function renderCounter() {
    if (!state.elements.counter) {
      return;
    }

    if (state.hasWon) {
      state.elements.counter.textContent = getCopyText("counterSuccess");
      return;
    }

    state.elements.counter.textContent = getCopyText("counterTemplate").replace(
      "{count}",
      String(state.visitedCells.size)
    );
  }

  function handleRootClick(event) {
    const actionTarget = event.target.closest("[data-action]");

    if (actionTarget) {
      const action = actionTarget.getAttribute("data-action");

      if (action === "close" && state.allowClose) {
        close();
        return;
      }

      if (action === "reset") {
        reset();
        return;
      }
    }
  }

  function handleDocumentKeyDown(event) {
    if (!state.isOpen) {
      return;
    }

    const key = String(event.key || "");
    const lowerKey = key.toLowerCase();

    if (key === "Escape") {
      event.preventDefault();
      if (state.allowClose) {
        close();
      }
      return;
    }

    if (key === "ArrowUp" || lowerKey === "w") {
      event.preventDefault();
      move(0, -1);
      return;
    }

    if (key === "ArrowDown" || lowerKey === "s") {
      event.preventDefault();
      move(0, 1);
      return;
    }

    if (key === "ArrowLeft" || lowerKey === "a") {
      event.preventDefault();
      move(-1, 0);
      return;
    }

    if (key === "ArrowRight" || lowerKey === "d") {
      event.preventDefault();
      move(1, 0);
    }
  }

  function setMessage(tone, text) {
    state.message = {
      tone,
      text
    };
  }

  function handleWindowResize() {
    if (!state.isOpen) {
      return;
    }

    queueBoardResize();
  }

  function queueBoardResize() {
    if (!state.isOpen || !state.elements.board || !state.elements.boardShell) {
      return;
    }

    clearBoardResizeFrame();
    state.resizeFrame = window.requestAnimationFrame(() => {
      state.resizeFrame = 0;
      updateBoardMetrics();
    });
  }

  function clearBoardResizeFrame() {
    if (!state.resizeFrame) {
      return;
    }

    window.cancelAnimationFrame(state.resizeFrame);
    state.resizeFrame = 0;
  }

  function updateBoardMetrics() {
    if (!state.layout || !state.elements.board || !state.elements.boardShell) {
      return;
    }

    const boardStyles = window.getComputedStyle(state.elements.board);
    const gap = Number.parseFloat(boardStyles.columnGap || boardStyles.gap || "0") || 0;
    const availableWidth = state.elements.boardShell.clientWidth;
    const availableHeight = state.elements.boardShell.clientHeight;

    if (!availableWidth || !availableHeight) {
      return;
    }

    const totalGapWidth = gap * Math.max(0, state.layout.width - 1);
    const totalGapHeight = gap * Math.max(0, state.layout.height - 1);
    const cellWidth = (availableWidth - totalGapWidth) / state.layout.width;
    const cellHeight = (availableHeight - totalGapHeight) / state.layout.height;
    const cellSize = Math.max(8, Math.floor(Math.min(cellWidth, cellHeight)));

    state.elements.board.style.setProperty("--simple-maze-cell-size", cellSize + "px");
  }

  function dispatchCompletion() {
    if (state.completionDispatched || typeof state.onComplete !== "function") {
      state.completionDispatched = true;
      return;
    }

    state.completionDispatched = true;
    state.onComplete({
      solved: true,
      map: state.layout.source.slice(),
      playerRow: state.playerRow,
      playerCol: state.playerCol,
      visitedCells: Array.from(state.visitedCells)
    });
  }

  function resolveLayout(mapRows, sourceLabel) {
    try {
      return parseMazeMap(mapRows);
    } catch (error) {
      console.error("No se pudo cargar el laberinto desde " + sourceLabel + ".", error);
      return parseMazeMap(FALLBACK_MAZE_MAP);
    }
  }

  function parseMazeMap(mapRows) {
    if (!Array.isArray(mapRows) || mapRows.length === 0) {
      throw new Error("El mapa debe ser un array de strings no vacio.");
    }

    const width = typeof mapRows[0] === "string" ? mapRows[0].length : 0;

    if (width === 0) {
      throw new Error("El mapa debe tener al menos una columna.");
    }

    let startPosition = null;
    let goalPosition = null;
    const tiles = mapRows.map((row, rowIndex) => {
      if (typeof row !== "string" || row.length !== width) {
        throw new Error("Todas las filas del mapa deben tener la misma longitud.");
      }

      return row.split("").map((cell, colIndex) => {
        if (cell !== WALL && cell !== PATH && cell !== START && cell !== GOAL) {
          throw new Error("Caracter de mapa no valido en [" + rowIndex + ", " + colIndex + "].");
        }

        if (cell === START) {
          if (startPosition) {
            throw new Error("Solo puede haber una casilla inicial P.");
          }

          startPosition = { row: rowIndex, col: colIndex };
          return PATH;
        }

        if (cell === GOAL) {
          if (goalPosition) {
            throw new Error("Solo puede haber una salida G.");
          }

          goalPosition = { row: rowIndex, col: colIndex };
          return GOAL;
        }

        return cell;
      });
    });

    if (!startPosition) {
      throw new Error("Falta la posicion inicial P.");
    }

    if (!goalPosition) {
      throw new Error("Falta la salida G.");
    }

    return {
      width,
      height: tiles.length,
      tiles,
      start: startPosition,
      goal: goalPosition,
      source: mapRows.slice()
    };
  }

  function isInsideMap(row, col) {
    return row >= 0 && row < state.layout.height && col >= 0 && col < state.layout.width;
  }

  function isNearPlayer(row, col) {
    return Math.abs(row - state.playerRow) <= 1 && Math.abs(col - state.playerCol) <= 1;
  }

  function isGoalCell(row, col) {
    return row === state.layout.goal.row && col === state.layout.goal.col;
  }

  function isStartCell(row, col) {
    return row === state.layout.start.row && col === state.layout.start.col;
  }

  function buildCellKey(row, col) {
    return row + "," + col;
  }

  function buildCellLabel(tile, row, col, isRevealed, isCurrent, isStart, isGoal) {
    if (isCurrent) {
      return "Jugador en " + row + ", " + col;
    }

    if (!isRevealed) {
      return "Casilla oculta";
    }

    if (isStart) {
      return "Entrada del laberinto";
    }

    if (isGoal) {
      return "Salida revelada";
    }

    if (tile === WALL) {
      return "Pared";
    }

    return "Camino revelado";
  }
})();
