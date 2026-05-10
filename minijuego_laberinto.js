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

  const state = {
    initialized: false,
    isOpen: false,
    hasWon: false,
    completionDispatched: false,
    resizeFrame: 0,
    launchButton: null,
    lastFocusedElement: null,
    onComplete: null,
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
    document.body.classList.add("simple-maze--open");
    render();

    if (state.elements.closeButton) {
      state.elements.closeButton.focus();
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
    setMessage("info", "Avanza por el templo oscuro hasta encontrar la salida.");
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
      setMessage("warning", "El pasillo termina en oscuridad por ese lado.");
      render();
      return false;
    }

    if (state.layout.tiles[nextRow][nextCol] === WALL) {
      setMessage("warning", "Una pared de piedra os corta el paso.");
      render();
      return false;
    }

    state.playerRow = nextRow;
    state.playerCol = nextCol;
    state.visitedCells.add(buildCellKey(nextRow, nextCol));

    if (isGoalCell(nextRow, nextCol)) {
      state.hasWon = true;
      setMessage("success", "\u00a1Hab\u00e9is encontrado la salida del laberinto!");
      render();
      dispatchCompletion();
      return true;
    }

    setMessage("info", "La piedra del templo se ilumina bajo vuestros pasos.");
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
      '<p class="simple-maze__eyebrow">Templo oculto entre faroles y piedra</p>' +
      '<h1 id="simple-maze-title" class="simple-maze__title">Laberinto del Templo</h1>' +
      '<p class="simple-maze__subtitle">Avanza por el templo oscuro hasta encontrar la salida.</p>' +
      "</div>" +
      '<div class="simple-maze__header-actions">' +
      '<button class="simple-maze__action simple-maze__action--secondary" type="button" data-action="reset">Reiniciar</button>' +
      '<button class="simple-maze__close" type="button" data-action="close">Cerrar</button>' +
      "</div>" +
      "</header>" +
      '<section class="simple-maze__status simple-maze__status--info" data-role="message">' +
      '<p class="simple-maze__status-kicker">Mensajes</p>' +
      '<p class="simple-maze__status-text" data-role="message-text"></p>' +
      "</section>" +
      '<section class="simple-maze__card simple-maze__board-stage">' +
      '<div class="simple-maze__section-head">' +
      '<div>' +
      '<p class="simple-maze__section-kicker">Mapa revelado</p>' +
      '<h2 class="simple-maze__section-title">Seguid la luz que dejais atras</h2>' +
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
      closeButton: root.querySelector(".simple-maze__close")
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
      state.elements.counter.textContent = "Salida encontrada.";
      return;
    }

    state.elements.counter.textContent = state.visitedCells.size + " casillas reveladas";
  }

  function handleRootClick(event) {
    const actionTarget = event.target.closest("[data-action]");

    if (actionTarget) {
      const action = actionTarget.getAttribute("data-action");

      if (action === "close") {
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
      close();
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
