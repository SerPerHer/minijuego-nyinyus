window.CHARACTER_LIBRARY = {
  rocky: {
    name: "Rocky",
    image: "rocky_normal.png",
    accent: "#f2bf57",
    accentDark: "#9b682b",
    role: "protagonist"
  },
  reina: {
    name: "Reina",
    image: "reina_normal.png",
    accent: "#f28cae",
    accentDark: "#9b4563",
    role: "protagonist"
  },
  abuela: {
    name: "Abuela",
    image: "abuela.png",
    accent: "#9fd7b7",
    accentDark: "#4b8f69",
    scale: 0.8,
    role: "secondary"
  },
  minutu: {
    name: "Minutu",
    image: "minutu.png",
    accent: "#ceb0ff",
    accentDark: "#6f49a8",
    scale: 0.94,
    role: "secondary"
  },
  mako: {
    name: "Mako",
    image: "mako.png",
    accent: "#f08a8a",
    accentDark: "#9c3f3f",
    scale: 0.94,
    role: "secondary"
  },
  blue: {
    name: "Blue",
    role: "secondary"
  },
  lars: {
    name: "Lars",
    role: "secondary"
  },
  haze: {
    name: "Haze",
    role: "secondary"
  },
  valerio: {
    name: "Valerio",
    image: "Valerio.png",
    accent: "#d3d0c2",
    accentDark: "#6f6b5d",
    role: "tertiary"
  }
};

// El layout sale del motor según el rol de cada personaje.
// Solo usa layoutMode: "manual" en una escena si quieres romper este estándar.
window.SCENE_CHARACTER_LAYOUTS = {};

window.characterStep = function characterStep(id, overrides) {
  return {
    type: "character",
    id,
    ...(overrides || {})
  };
};
