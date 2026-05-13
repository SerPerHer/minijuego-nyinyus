(function () {
  const TABLES = [
    {
      id: "crisantemo",
      name: "Mesa del Crisantemo",
      labelPosition: { x: 36.8, y: 18.9 },
      seats: [
        { x: 36.8, y: 24.2 },
        { x: 29.9, y: 38.8 },
        { x: 43.8, y: 38.8 }
      ]
    },
    {
      id: "farol",
      name: "Mesa del Farol",
      labelPosition: { x: 63.1, y: 18.9 },
      seats: [
        { x: 63.1, y: 24.2 },
        { x: 56.1, y: 38.8 },
        { x: 70.0, y: 38.8 }
      ]
    },
    {
      id: "sakura",
      name: "Mesa del Sakura",
      labelPosition: { x: 36.8, y: 53.6 },
      seats: [
        { x: 36.8, y: 58.9 },
        { x: 29.9, y: 73.1 },
        { x: 43.8, y: 73.1 }
      ]
    },
    {
      id: "tsuru",
      name: "Mesa del Tsuru",
      labelPosition: { x: 63.1, y: 53.6 },
      seats: [
        { x: 63.1, y: 58.9 },
        { x: 56.1, y: 73.1 },
        { x: 70.0, y: 73.1 }
      ]
    }
  ];

  const GUESTS = [
    {
      id: "haruto",
      name: "Haruto",
      role: "Samurai ceremonioso",
      tags: ["samurai", "ceremony", "calm"],
      rules: [
        "Rechaza las mesas con comida humeante, canciones o flores.",
        "Solo acepta una mesa con te y bendicion.",
        "Nunca se sienta en una mesa cuyo nombre sea una flor de cerezo."
      ],
      description: "Huye del humo, las canciones y los petalos; solo acepta te con bendicion."
    },
    {
      id: "aiko",
      name: "Aiko",
      role: "Maestra del te",
      tags: ["tea", "ceremony", "quiet"],
      rules: [
        "Tiene reservada una mesa con nombre floral, pero no es la Mesa del Sakura.",
        "No comparte mesa con nadie que haga ruido, cocine o actue.",
        "Solo sirve te si hay una figura espiritual presente."
      ],
      description: "Busca una mesa floral sin cerezos y solo sirve te con presencia espiritual."
    },
    {
      id: "ren",
      name: "Ren",
      role: "Musico de shamisen",
      tags: ["music", "artist", "lively"],
      rules: [
        "Solo toca donde haya farolillos.",
        "No comparte mesa con quien convierta la musica en poesia dramatica.",
        "Necesita a alguien que ilumine su actuacion."
      ],
      description: "No toca a oscuras y detesta competir contra poesia dramatica."
    },
    {
      id: "yumi",
      name: "Yumi",
      role: "Portadora de farolillos",
      tags: ["lantern", "kind", "lively"],
      rules: [
        "No se sienta en una mesa ceremonial ni floral.",
        "Debe estar donde haya musica.",
        "Solo acepta sentarse si tambien hay comida caliente."
      ],
      description: "Sigue la musica, evita el protocolo floral y no negocia sin algo caliente."
    },
    {
      id: "takeshi",
      name: "Takeshi",
      role: "Herrero paciente",
      tags: ["craft", "patient", "temple"],
      rules: [
        "Esta asignado a la Mesa del Tsuru.",
        "No puede sentarse en mesas ceremoniales ni florales.",
        "Debe controlar al invitado mas escandaloso."
      ],
      description: "Le toca la Mesa del Tsuru y la guardia del comensal mas escandaloso."
    },
    {
      id: "sakura",
      name: "Sakura",
      role: "Guardiana de cerezos",
      tags: ["flowers", "quiet", "nature"],
      rules: [
        "Ocupa la mesa que lleva su nombre.",
        "Solo quiere a Hana y a Emi en su pequeño club de petalos."
      ],
      description: "Defiende su mesa como un jardin sagrado: calma, belleza y cero ramen acrobatico."
    },
    {
      id: "nobu",
      name: "Nobu",
      role: "Poeta dramatico",
      tags: ["poet", "dramatic"],
      rules: [
        "Necesita a Takeshi de publico paciente.",
        "Tambien exige a Kenji, que aplaude incluso los silencios."
      ],
      description: "Necesita a Takeshi de publico paciente y a Kenji de aplauso facil."
    },
    {
      id: "emi",
      name: "Emi",
      role: "Plegadora de grullas",
      tags: ["craft", "quiet", "patient"],
      rules: [
        "Solo se sienta con Sakura y Hana.",
        "Busca la mesa mas tranquila del salon para doblar grullas sin sobresaltos."
      ],
      description: "Busca una mesa tranquila; por eso solo confia en Sakura y Hana."
    },
    {
      id: "kenji",
      name: "Kenji",
      role: "Ninja ruidoso",
      tags: ["ninja", "noisy", "funny"],
      rules: [
        "Solo se queda quieto si Takeshi lo vigila.",
        "Nobu debe sentarse con el para que aplauda poemas en vez de escalar biombos."
      ],
      description: "Solo se sienta quieto si Takeshi lo fulmina con la mirada y Nobu lo entretiene."
    },
    {
      id: "hana",
      name: "Hana",
      role: "Florista del santuario",
      tags: ["flowers", "quiet", "kind"],
      rules: [
        "Solo se queda si Sakura se sienta a su lado.",
        "Tambien quiere a Emi cerca, porque nadie dobla grullas torcidas en su guardia."
      ],
      description: "Solo se queda si Sakura habla de petalos y Emi dobla grullas sin meter ruido."
    },
    {
      id: "daichi",
      name: "Daichi",
      role: "Cocinero de ramen ceremonial",
      tags: ["food", "funny", "warm"],
      rules: [
        "Acepta la Mesa del Farol.",
        "Solo promete no bendecir ramen si se sienta con Ren y Yumi."
      ],
      description: "Acepta sentarse en la Mesa del Farol si puede bromear con Ren y Yumi."
    },
    {
      id: "miko",
      name: "Miko",
      role: "Sacerdotisa del templo",
      tags: ["temple", "ritual", "quiet"],
      rules: [
        "Solo bendice la boda en la Mesa del Crisantemo.",
        "Necesita a Aiko para el te y a Haruto para mantener el decoro."
      ],
      description: "Solo bendice la boda si comparte te con Aiko y orden con Haruto."
    }
  ];

  const DISPLAY_GUESTS = [
    {
      id: "haruto",
      name: "Haruto",
      role: "Samurai ceremonioso",
      description: "Huye del humo, las canciones y los petalos; solo acepta te con bendicion.",
      rules: [
        "Rechaza las mesas con comida humeante, canciones o flores.",
        "Solo acepta una mesa con te y bendicion.",
        "Nunca se sienta en una mesa cuyo nombre sea una flor de cerezo."
      ]
    },
    {
      id: "aiko",
      name: "Aiko",
      role: "Maestra del te",
      description: "Busca una mesa floral sin cerezos y solo sirve te con presencia espiritual.",
      rules: [
        "Tiene reservada una mesa con nombre floral, pero no es la Mesa del Sakura.",
        "No comparte mesa con nadie que haga ruido, cocine o actue.",
        "Solo sirve te si hay una figura espiritual presente."
      ]
    },
    {
      id: "miko",
      name: "Miko",
      role: "Sacerdotisa del templo",
      description: "Solo bendice mesas con te y sin artistas, ramen ni acrobacias.",
      rules: [
        "Solo bendice una mesa donde tambien haya te.",
        "No comparte mesa con artistas, cocineros, poetas ni ninjas.",
        "No puede sentarse en la Mesa del Sakura."
      ]
    },
    {
      id: "ren",
      name: "Ren",
      role: "Musico de shamisen",
      description: "No toca a oscuras y detesta competir contra poesia dramatica.",
      rules: [
        "Solo toca donde haya farolillos.",
        "No comparte mesa con quien convierta la musica en poesia dramatica.",
        "Necesita a alguien que ilumine su actuacion."
      ]
    },
    {
      id: "yumi",
      name: "Yumi",
      role: "Portadora de farolillos",
      description: "Sigue la musica, evita el protocolo floral y no negocia sin algo caliente.",
      rules: [
        "No se sienta en una mesa ceremonial ni floral.",
        "Debe estar donde haya musica.",
        "Solo acepta sentarse si tambien hay comida caliente."
      ]
    },
    {
      id: "daichi",
      name: "Daichi",
      role: "Cocinero de ramen ceremonial",
      description: "Lo expulsan del te, pisa lejos de los petalos y persigue musica con faroles.",
      rules: [
        "Esta vetado de la mesa del te.",
        "No se sienta con flores delicadas.",
        "Va donde haya musica y farolillos."
      ]
    },
    {
      id: "sakura",
      name: "Sakura",
      role: "Guardiana de cerezos",
      description: "Defiende su mesa como un jardin sagrado: calma, belleza y cero ramen acrobatico.",
      rules: [
        "Ocupa la mesa que lleva su nombre.",
        "Prohibe en su mesa el ramen, los poemas dramaticos y los ninjas.",
        "Quiere una mesa tranquila y estetica."
      ]
    },
    {
      id: "hana",
      name: "Hana",
      role: "Florista del santuario",
      description: "Solo acepta flores, silencio y compania que no huela a ramen ni a recital.",
      rules: [
        "Solo se sienta en una mesa con flores.",
        "No puede compartir mesa con cocineros, ninjas ni poetas.",
        "Necesita a alguien silencioso a su lado."
      ]
    },
    {
      id: "emi",
      name: "Emi",
      role: "Plegadora de grullas",
      description: "Busca flores y calma absoluta; huye del ruido, el ramen y los ninjas.",
      rules: [
        "Rechaza cualquier mesa con musica, ramen, poesia o ninjas.",
        "No se sienta en Crisantemo.",
        "Solo acepta una mesa donde haya flores y calma."
      ]
    },
    {
      id: "takeshi",
      name: "Takeshi",
      role: "Herrero paciente",
      description: "Le toca la Mesa del Tsuru y la guardia del comensal mas escandaloso.",
      rules: [
        "Esta asignado a la Mesa del Tsuru.",
        "No puede sentarse en mesas ceremoniales ni florales.",
        "Debe controlar al invitado mas escandaloso."
      ]
    },
    {
      id: "nobu",
      name: "Nobu",
      role: "Poeta dramatico",
      description: "Busca publico paciente, aplausos ruidosos y cero autoridades espirituales o florales.",
      rules: [
        "No puede sentarse con sacerdotisas, maestras del te ni floristas.",
        "Necesita un oyente paciente.",
        "Quiere cerca a alguien suficientemente ruidoso como para aplaudirle."
      ]
    },
    {
      id: "kenji",
      name: "Kenji",
      role: "Ninja ruidoso",
      description: "Solo se deja caer donde nada sea delicado y alguien fuerte pueda vigilarlo.",
      rules: [
        "Esta vetado de todas las mesas delicadas.",
        "Solo se sienta si alguien fuerte lo vigila.",
        "No puede compartir mesa con nadie que valore el silencio."
      ]
    }
  ];

  const DISPLAY_GUEST_ORDER = [
    "ren",
    "miko",
    "hana",
    "takeshi",
    "aiko",
    "kenji",
    "sakura",
    "daichi",
    "haruto",
    "emi",
    "nobu",
    "yumi"
  ];

  const PUZZLE_RULES = [
    {
      id: "aiko_crisantemo",
      type: "inTable",
      guestId: "aiko",
      tableId: "crisantemo",
      message: "Aiko ha reservado la Mesa del Crisantemo y no piensa negociar con nadie."
    },
    {
      id: "haruto_aiko",
      type: "sameTable",
      guestId: "haruto",
      otherGuestId: "aiko",
      message: "Haruto solo se sienta donde Aiko sirva el te."
    },
    {
      id: "aiko_miko",
      type: "sameTable",
      guestId: "aiko",
      otherGuestId: "miko",
      message: "Aiko y Miko deben compartir mesa para que la ceremonia no se convierta en rumor."
    },
    {
      id: "ren_farol",
      type: "inTable",
      guestId: "ren",
      tableId: "farol",
      message: "Ren ha secuestrado la Mesa del Farol para su mini concierto de boda."
    },
    {
      id: "ren_yumi",
      type: "sameTable",
      guestId: "ren",
      otherGuestId: "yumi",
      message: "Ren solo toca a gusto si Yumi le ilumina la partitura."
    },
    {
      id: "yumi_daichi",
      type: "sameTable",
      guestId: "yumi",
      otherGuestId: "daichi",
      message: "Yumi exige a Daichi cerca para detectar el ramen peligroso antes del primer sorbo."
    },
    {
      id: "sakura_sakura",
      type: "inTable",
      guestId: "sakura",
      tableId: "sakura",
      message: "Sakura ha declarado la Mesa del Sakura su republica independiente de petalos."
    },
    {
      id: "sakura_hana",
      type: "sameTable",
      guestId: "sakura",
      otherGuestId: "hana",
      message: "Sakura no piensa hablar de flores con nadie que no sea Hana."
    },
    {
      id: "hana_emi",
      type: "sameTable",
      guestId: "hana",
      otherGuestId: "emi",
      message: "Hana quiere a Emi en su mesa para que las grullas salgan derechas y en silencio."
    },
    {
      id: "takeshi_tsuru",
      type: "inTable",
      guestId: "takeshi",
      tableId: "tsuru",
      message: "Takeshi se queda en la Mesa del Tsuru para tener a Kenji bajo control visual."
    },
    {
      id: "takeshi_kenji",
      type: "sameTable",
      guestId: "takeshi",
      otherGuestId: "kenji",
      message: "Kenji debe compartir mesa con Takeshi o empezara a practicar sigilo sobre los faroles."
    },
    {
      id: "takeshi_nobu",
      type: "sameTable",
      guestId: "takeshi",
      otherGuestId: "nobu",
      message: "Nobu necesita a Takeshi delante para declamar sin que nadie huya."
    }
  ];

  const REFERENCE_SOLUTION = {
    crisantemo: ["haruto", "aiko", "miko"],
    farol: ["ren", "yumi", "daichi"],
    sakura: ["sakura", "hana", "emi"],
    tsuru: ["takeshi", "nobu", "kenji"]
  };

  const guestById = new Map(GUESTS.map((guest) => [guest.id, guest]));
  const displayGuestById = new Map(DISPLAY_GUESTS.map((guest) => [guest.id, guest]));

  const state = {
    initialized: false,
    isOpen: false,
    selectedSeat: null,
    solved: false,
    completionDispatched: false,
    lastFocusedElement: null,
    onComplete: null,
    allowClose: true,
    status: {
      tone: "info",
      title: "Pulsa un asiento vacio para empezar el banquete.",
      details: ["Cada mesa admite tres invitados. Puedes cambiar o retirar a cualquiera en cualquier momento."]
    },
    seats: createEmptySeats(),
    elements: {}
  };

  const weddingSeatingGame = {
    init,
    open,
    close,
    reset,
    validate,
    showHint,
    getGuests() {
      return getDisplayGuestsInOrder().map((guest) => ({
        ...guest,
        tags: guestById.get(guest.id) ? guestById.get(guest.id).tags.slice() : [],
        rules: guest.rules.slice()
      }));
    },
    getRules() {
      return PUZZLE_RULES.map((rule) => ({ ...rule, tags: rule.tags ? rule.tags.slice() : undefined }));
    }
  };

  globalThis.weddingSeatingGame = weddingSeatingGame;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }

  function init() {
    if (state.initialized) {
      return weddingSeatingGame;
    }

    buildOverlay();
    reset();
    validateReferenceSolution();
    state.initialized = true;
    return weddingSeatingGame;
  }

  function buildOverlay() {
    const root = document.createElement("div");
    root.className = "seating-game__overlay hidden";
    root.setAttribute("aria-hidden", "true");
    root.innerHTML =
      '<div class="seating-game__backdrop" data-action="close"></div>' +
      '<div class="seating-game__panel" role="dialog" aria-modal="true" aria-labelledby="seating-game-title">' +
      '<div class="seating-game__frame">' +
      '<header class="seating-game__header">' +
      '<div class="seating-game__title-group">' +
      '<p class="seating-game__eyebrow">Banquete nupcial en Toki no Hanashima</p>' +
      '<h1 id="seating-game-title" class="seating-game__title">Puzzle de mesas imperiales</h1>' +
      '<p class="seating-game__subtitle">Ordena a doce invitados entre cuatro mesas sin provocar duelos, haikus ofensivos ni ramen ritual.</p>' +
      "</div>" +
      '<button class="seating-game__close" type="button" data-action="close">Cerrar</button>' +
      "</header>" +
      '<section class="seating-game__rulebook">' +
      '<p class="seating-game__section-kicker">Normas del pergamino</p>' +
      '<h2 class="seating-game__section-title">Etiqueta del banquete</h2>' +
      '<ul class="seating-game__rule-list" data-role="rulebook"></ul>' +
      "</section>" +
      '<div class="seating-game__toolbar">' +
      '<div class="seating-game__toolbar-copy">' +
      '<p class="seating-game__toolbar-title">Objetivo</p>' +
      '<p class="seating-game__toolbar-text">Pulsa un asiento, elige un invitado disponible y valida cuando las cuatro mesas esten completas.</p>' +
      "</div>" +
      '<div class="seating-game__actions">' +
      '<button class="seating-game__action seating-game__action--primary" type="button" data-action="validate">Validar mesas</button>' +
      '<button class="seating-game__action" type="button" data-action="reset">Reiniciar</button>' +
      "</div>" +
      "</div>" +
      '<section class="seating-game__status" data-role="status"></section>' +
      '<div class="seating-game__layout">' +
      '<section class="seating-game__board">' +
      '<div class="seating-game__board-head">' +
      '<div>' +
      '<p class="seating-game__section-kicker">Plano del banquete</p>' +
      '<h2 class="seating-game__section-title">Aprieta los asientos del salon para colocar comensales</h2>' +
      "</div>" +
      '<p class="seating-game__counter" data-role="counter"></p>' +
      "</div>" +
      '<div class="seating-game__board-stage">' +
      '<img class="seating-game__board-image" src="assets/backgrounds/hanashima_mesa_boda.png" alt="Salon de boda tradicional de Hanashima con cuatro mesas preparadas." />' +
      '<div class="seating-game__tables" data-role="tables"></div>' +
      "</div>" +
      "</section>" +
      "</div>" +
      "</div>" +
      "</div>";

    document.body.appendChild(root);

    state.elements = {
      root,
      status: root.querySelector('[data-role="status"]'),
      counter: root.querySelector('[data-role="counter"]'),
      tables: root.querySelector('[data-role="tables"]'),
      rulebook: root.querySelector('[data-role="rulebook"]'),
      primaryAction: root.querySelector('[data-action="validate"]'),
      closeButton: root.querySelector(".seating-game__close")
    };

    root.addEventListener("click", handleRootClick);
    document.addEventListener("keydown", handleKeyDown);
  }

  function open(options) {
    init();

    const resolvedOptions = options || {};
    if (resolvedOptions.resetOnOpen) {
      reset();
    }

    state.onComplete = typeof resolvedOptions.onComplete === "function" ? resolvedOptions.onComplete : null;
    state.allowClose = resolvedOptions.allowClose !== false;
    state.lastFocusedElement = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    state.isOpen = true;
    state.elements.root.classList.remove("hidden");
    state.elements.root.setAttribute("aria-hidden", "false");
    document.body.classList.add("seating-game--open");
    if (state.elements.closeButton) {
      state.elements.closeButton.hidden = !state.allowClose;
    }
    renderAll();

    const preferredFocus = state.allowClose ? state.elements.closeButton : state.elements.primaryAction;
    if (preferredFocus) {
      preferredFocus.focus();
    }
  }

  function close() {
    if (!state.initialized) {
      return;
    }

    state.isOpen = false;
    state.selectedSeat = null;
    state.elements.root.classList.add("hidden");
    state.elements.root.setAttribute("aria-hidden", "true");
    document.body.classList.remove("seating-game--open");

    if (state.lastFocusedElement && typeof state.lastFocusedElement.focus === "function") {
      state.lastFocusedElement.focus();
    }
  }

  function reset() {
    state.seats = createEmptySeats();
    state.selectedSeat = null;
    state.solved = false;
    state.completionDispatched = false;
    state.status = {
      tone: "info",
      title: "Pulsa un asiento vacio para empezar el banquete.",
      details: ["Cada mesa admite tres invitados. Puedes cambiar o retirar a cualquiera en cualquier momento."]
    };

    renderAll();
  }

  function validate() {
    const result = validateArrangement(state.seats);

    if (!result.complete) {
      state.status = {
        tone: "warning",
        title: "Faltan invitados por sentar.",
        details: ["Todavia quedan " + result.missingCount + " asiento(s) sin ocupar en el banquete."]
      };
      renderStatus();
      return result;
    }

    if (result.errors.length > 0) {
      state.solved = false;
      state.status = {
        tone: "error",
        title: "El banquete aun puede acabar en guerra familiar:",
        details: result.errors
      };
      renderStatus();
      return result;
    }

    state.solved = true;
    state.status = {
      tone: "success",
      title: "\u00a1Mesa imperial completada! El banquete puede celebrarse sin deshonrar a ningun clan.",
      details: ["Has conseguido el Fragmento de la Armonia."]
    };

    if (!state.completionDispatched && state.onComplete) {
      state.completionDispatched = true;
      state.onComplete({
        solved: true,
        seating: getSeatSnapshot()
      });
    }

    renderStatus();
    return result;
  }

  function showHint() {
    return null;
  }

  function handleRootClick(event) {
    const actionTarget = event.target.closest("[data-action]");
    if (actionTarget) {
      const action = actionTarget.getAttribute("data-action");

      if (action === "close") {
        if (!state.allowClose) {
          return;
        }

        close();
        return;
      }

      if (action === "validate") {
        validate();
        return;
      }

      if (action === "reset") {
        reset();
        return;
      }

      if (action === "remove-seat") {
        clearSelectedSeat();
        return;
      }
    }

    const seatButton = event.target.closest("[data-seat-table]");
    if (seatButton) {
      const tableId = seatButton.getAttribute("data-seat-table");
      const seatIndex = Number(seatButton.getAttribute("data-seat-index"));
      if (tableId && Number.isInteger(seatIndex)) {
        selectSeat(tableId, seatIndex);
      }
      return;
    }

    const guestButton = event.target.closest("[data-guest-id]");
    if (guestButton && !guestButton.hasAttribute("disabled")) {
      const guestId = guestButton.getAttribute("data-guest-id");
      if (guestId) {
        assignGuestToSelectedSeat(guestId);
        return;
      }
    }

    if (state.selectedSeat && !event.target.closest(".seating-game__seat-dropdown")) {
      state.selectedSeat = null;
      renderTables();
    }
  }

  function handleKeyDown(event) {
    if (!state.isOpen) {
      return;
    }

    if (event.key === "Escape") {
      if (!state.allowClose) {
        return;
      }

      close();
    }
  }

  function selectSeat(tableId, seatIndex) {
    if (
      state.selectedSeat &&
      state.selectedSeat.tableId === tableId &&
      state.selectedSeat.seatIndex === seatIndex
    ) {
      state.selectedSeat = null;
      renderTables();
      return;
    }

    state.selectedSeat = { tableId, seatIndex };
    state.status = {
      tone: "info",
      title: describeSeat(tableId, seatIndex) + " seleccionado.",
      details: ["Ahora elige un invitado o toca de nuevo el asiento para cancelar la seleccion."]
    };
    renderStatus();
    renderTables();
  }

  function clearSelectedSeat() {
    if (!state.selectedSeat) {
      return;
    }

    const currentGuestId = state.seats[state.selectedSeat.tableId][state.selectedSeat.seatIndex];
    if (currentGuestId) {
      state.seats[state.selectedSeat.tableId][state.selectedSeat.seatIndex] = null;
      state.solved = false;
      state.completionDispatched = false;
      state.status = {
        tone: "info",
        title: "Has liberado un asiento.",
        details: [guestById.get(currentGuestId).name + " vuelve a esperar junto al pergamino de invitados."]
      };
    }

    renderAll();
  }

  function assignGuestToSelectedSeat(guestId) {
    if (!state.selectedSeat) {
      return;
    }

    const tableSeats = state.seats[state.selectedSeat.tableId];
    const previousGuestId = tableSeats[state.selectedSeat.seatIndex];

    tableSeats[state.selectedSeat.seatIndex] = guestId;
    state.solved = false;
    state.completionDispatched = false;
    state.status = {
      tone: "info",
      title: guestById.get(guestId).name + " ocupa su asiento.",
      details: [describeSeat(state.selectedSeat.tableId, state.selectedSeat.seatIndex) + " ya esta listo para el banquete."]
    };

    if (previousGuestId && previousGuestId !== guestId) {
      state.status.details.push(guestById.get(previousGuestId).name + " vuelve a quedar disponible.");
    }

    state.selectedSeat = null;
    renderAll();
  }

  function renderAll() {
    if (!state.elements.root) {
      return;
    }

    renderStatus();
    renderTables();
    renderRulebook();
  }

  function renderStatus() {
    if (!state.elements.status) {
      return;
    }

    const details = Array.isArray(state.status.details) ? state.status.details : [];
    state.elements.status.className = "seating-game__status seating-game__status--" + state.status.tone;
    state.elements.status.innerHTML =
      '<p class="seating-game__status-title">' + escapeHtml(state.status.title) + "</p>" +
      (details.length
        ? '<ul class="seating-game__status-list">' +
          details.map((detail) => "<li>" + escapeHtml(detail) + "</li>").join("") +
          "</ul>"
        : "");
  }

  function renderTables() {
    if (!state.elements.tables || !state.elements.counter) {
      return;
    }

    state.elements.counter.textContent = String(getPlacedGuestIds().length) + "/12 invitados sentados";
    state.elements.tables.innerHTML = TABLES.map(renderTableOverlay).join("");
  }

  function renderTableOverlay(table) {
    const tableSeats = state.seats[table.id];

    return (
      '<div class="seating-game__table-zone">' +
      '<div class="seating-game__table-label" style="left:' +
      String(table.labelPosition.x) +
      "%;top:" +
      String(table.labelPosition.y) +
      '%;">' +
      escapeHtml(table.name) +
      "</div>" +
      tableSeats
        .map(function (guestId, seatIndex) {
          return renderSeatButton(table, seatIndex, guestId);
        })
        .join("") +
      renderSeatDropdown(table) +
      "</div>"
    );
  }

  function renderSeatButton(table, seatIndex, guestId) {
    const tableId = table.id;
    const guest = guestId ? guestById.get(guestId) : null;
    const isSelected =
      state.selectedSeat &&
      state.selectedSeat.tableId === tableId &&
      state.selectedSeat.seatIndex === seatIndex;
    const seatLabel = describeSeat(tableId, seatIndex);
    const seatPosition = table.seats[seatIndex];

    return (
      '<button class="seating-game__seat' +
      (guest ? " is-filled" : " is-empty") +
      (isSelected ? " is-selected" : "") +
      '" type="button" data-seat-table="' +
      escapeAttribute(tableId) +
      '" data-seat-index="' +
      String(seatIndex) +
      '" aria-pressed="' +
      (isSelected ? "true" : "false") +
      '" aria-label="' +
      escapeAttribute(seatLabel) +
      '" style="left:' +
      String(seatPosition.x) +
      "%;top:" +
      String(seatPosition.y) +
      '%;">' +
      '<span class="seating-game__seat-name">' +
      escapeHtml(guest ? guest.name : "+") +
      "</span>" +
      "</button>"
    );
  }

  function renderSeatDropdown(table) {
    if (!state.selectedSeat || state.selectedSeat.tableId !== table.id) {
      return "";
    }

    const seatIndex = state.selectedSeat.seatIndex;
    const guestId = state.seats[table.id][seatIndex];
    const guest = guestId ? displayGuestById.get(guestId) || guestById.get(guestId) : null;
    const seatPosition = table.seats[seatIndex];
    const availableGuests = getSelectableGuests();
    const horizontalClass = seatPosition.x >= 60 ? " is-left" : " is-right";
    const verticalClass = seatPosition.y >= 60 ? " is-up" : " is-down";

    return (
      '<div class="seating-game__seat-dropdown' +
      horizontalClass +
      verticalClass +
      '" style="left:' +
      String(seatPosition.x) +
      "%;top:" +
      String(seatPosition.y) +
      '%;">' +
      '<p class="seating-game__dropdown-title">' +
      escapeHtml(describeSeat(table.id, seatIndex)) +
      "</p>" +
      '<p class="seating-game__dropdown-copy">' +
      escapeHtml(
        guest
          ? "Cambia a " + guest.name + " o quitale el sitio."
          : "Elige un comensal disponible para este asiento."
      ) +
      "</p>" +
      (guest
        ? '<button class="seating-game__dropdown-action" type="button" data-action="remove-seat">Quitar invitado</button>'
        : "") +
      (availableGuests.length
        ? '<div class="seating-game__dropdown-list">' +
          availableGuests.map(renderDropdownGuestOption).join("") +
          "</div>"
        : '<p class="seating-game__dropdown-empty">No quedan comensales libres. Quita a alguien para seguir moviendo mesas.</p>') +
      "</div>"
    );
  }

  function renderDropdownGuestOption(guest) {
    const displayGuest = displayGuestById.get(guest.id) || guest;

    return (
      '<button class="seating-game__dropdown-guest" type="button" data-guest-id="' +
      escapeAttribute(displayGuest.id) +
      '">' +
      '<span class="seating-game__dropdown-guest-name">' + escapeHtml(displayGuest.name) + "</span>" +
      '<span class="seating-game__dropdown-guest-role">' + escapeHtml(displayGuest.role) + "</span>" +
      "</button>"
    );
  }

  function renderRulebook() {
    if (!state.elements.rulebook) {
      return;
    }

    state.elements.rulebook.innerHTML = getDisplayGuestsInOrder().map(function (guest) {
      return (
        '<li class="seating-game__rule-item">' +
        '<p class="seating-game__rule-name">' + escapeHtml(guest.name) + "</p>" +
        '<p class="seating-game__rule-role">' + escapeHtml(guest.role) + "</p>" +
        '<ul class="seating-game__rule-points">' +
        guest.rules.map(function (rule) {
          return "<li>" + escapeHtml(rule) + "</li>";
        }).join("") +
        "</ul>" +
        "</li>"
      );
    }).join("");
  }

  function getDisplayGuestsInOrder() {
    return DISPLAY_GUEST_ORDER.map(function (guestId) {
      return displayGuestById.get(guestId);
    }).filter(Boolean);
  }

  function validateArrangement(seats) {
    const occupiedSeats = [];

    TABLES.forEach(function (table) {
      seats[table.id].forEach(function (guestId) {
        if (guestId) {
          occupiedSeats.push(guestId);
        }
      });
    });

    const uniqueGuests = new Set(occupiedSeats);
    const missingCount = 12 - occupiedSeats.length;

    if (missingCount > 0 || uniqueGuests.size !== occupiedSeats.length) {
      return {
        complete: false,
        missingCount: Math.max(missingCount, 12 - uniqueGuests.size),
        errors: []
      };
    }

    const errors = [];

    PUZZLE_RULES.forEach(function (rule) {
      const isValid = evaluateRule(rule, seats);
      if (!isValid) {
        errors.push(rule.message);
      }
    });

    return {
      complete: true,
      missingCount: 0,
      errors
    };
  }

  function evaluateRule(rule, seats) {
    if (rule.type === "sameTable") {
      return sameTable(rule.guestId, rule.otherGuestId, seats);
    }

    if (rule.type === "notSameTable") {
      return notSameTable(rule.guestId, rule.otherGuestId, seats);
    }

    if (rule.type === "hasTagInTable") {
      return hasTagInTable(rule.guestId, rule.tags, seats, { includeSelf: rule.includeSelf });
    }

    if (rule.type === "notHasTagInTable") {
      return notHasTagInTable(rule.guestId, rule.tags, seats, { includeSelf: rule.includeSelf });
    }

    if (rule.type === "inTable") {
      return guestInTable(rule.guestId, rule.tableId, seats);
    }

    return true;
  }

  function sameTable(guestIdA, guestIdB, seats) {
    const tableA = findGuestTable(guestIdA, seats);
    const tableB = findGuestTable(guestIdB, seats);
    return Boolean(tableA && tableB && tableA === tableB);
  }

  function notSameTable(guestIdA, guestIdB, seats) {
    const tableA = findGuestTable(guestIdA, seats);
    const tableB = findGuestTable(guestIdB, seats);
    return Boolean(tableA && tableB && tableA !== tableB);
  }

  function guestInTable(guestId, tableId, seats) {
    return findGuestTable(guestId, seats) === tableId;
  }

  function hasTagInTable(guestId, tags, seats, options) {
    const tableId = findGuestTable(guestId, seats);
    const resolvedOptions = options || {};

    if (!tableId) {
      return false;
    }

    return seats[tableId].some(function (occupantId) {
      if (!occupantId) {
        return false;
      }

      if (occupantId === guestId && resolvedOptions.includeSelf === false) {
        return false;
      }

      const occupant = guestById.get(occupantId);
      return occupant ? guestHasAnyTag(occupant, tags) : false;
    });
  }

  function notHasTagInTable(guestId, tags, seats, options) {
    return !hasTagInTable(guestId, tags, seats, options);
  }

  function guestHasAnyTag(guest, tags) {
    const tagList = Array.isArray(tags) ? tags : [tags];
    return tagList.some(function (tag) {
      return guest.tags.includes(tag);
    });
  }

  function findGuestTable(guestId, seats) {
    for (let index = 0; index < TABLES.length; index += 1) {
      const tableId = TABLES[index].id;
      if (seats[tableId].includes(guestId)) {
        return tableId;
      }
    }

    return "";
  }

  function getSelectableGuests() {
    const seatedGuests = new Set(getPlacedGuestIds());
    return GUESTS.filter(function (guest) {
      return !seatedGuests.has(guest.id);
    });
  }

  function getPlacedGuestIds() {
    return TABLES.flatMap(function (table) {
      return state.seats[table.id].filter(Boolean);
    });
  }

  function getSeatSnapshot() {
    const snapshot = {};

    TABLES.forEach(function (table) {
      snapshot[table.id] = state.seats[table.id].slice();
    });

    return snapshot;
  }

  function createEmptySeats() {
    return TABLES.reduce(function (accumulator, table) {
      accumulator[table.id] = [null, null, null];
      return accumulator;
    }, {});
  }

  function describeSeat(tableId, seatIndex) {
    const table = TABLES.find(function (entry) {
      return entry.id === tableId;
    });
    return (table ? table.name : "Mesa") + " - asiento " + String(seatIndex + 1);
  }

  function validateReferenceSolution() {
    const result = validateArrangement(REFERENCE_SOLUTION);
    if (result.errors.length > 0 || !result.complete) {
      console.warn("La solucion de referencia del minijuego no es valida.", result);
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value);
  }
})();
