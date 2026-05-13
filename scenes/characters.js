window.CHARACTER_LIBRARY = {
  rocky: {
    name: "Rocky",
    image: "rocky_normal.png",
    imageTrimmed: "rocky_normal_trim.png",
    accent: "#f2bf57",
    accentDark: "#9b682b",
    role: "protagonist"
  },
  reina: {
    name: "Reina",
    image: "reina_normal.png",
    imageTrimmed: "reina_normal_trim.png",
    imageFlipped: "reina_normal_flip.png",
    imageFlippedTrimmed: "reina_normal_flip_trim.png",
    accent: "#f786ed",
    accentDark: "#f84eb7",
    role: "protagonist"
  },
  abuela: {
    name: "Abuela",
    image: "abuela.png",
    imageTrimmed: "abuela_trim.png",
    imageFlipped: "abuela_flip.png",
    imageFlippedTrimmed: "abuela_flip_trim.png",
    accent: "#9fd7b7",
    accentDark: "#4b8f69",
    scale: 0.8,
    role: "secondary"
  },
  minutu: {
    name: "Minutu",
    image: "minutu.png",
    imageTrimmed: "minutu_trim.png",
    imageFlipped: "minutu_flip.png",
    imageFlippedTrimmed: "minutu_flip_trim.png",
    accent: "#ceb0ff",
    accentDark: "#6f49a8",
    scale: 0.94,
    role: "secondary"
  },
  mako: {
    name: "Mako",
    image: "mako.png",
    imageTrimmed: "mako_trim.png",
    imageFlipped: "mako_flip.png",
    imageFlippedTrimmed: "mako_flip_trim.png",
    accent: "#f08a8a",
    accentDark: "#9c3f3f",
    scale: 0.94,
    role: "secondary"
  },
  blue: {
    name: "Blue",
    image: "blue.png",
    imageTrimmed: "blue_trim.png",
    imageFlipped: "blue_flip.png",
    imageFlippedTrimmed: "blue_flip_trim.png",
    accent: "#82c1fc",
    accentDark: "#1abbec",
    role: "secondary"
  },
  sylus: {
    name: "Sylus",
    image: "Sylus_y_Rubia.PNG",
    accent: "#f0c47b",
    accentDark: "#9b5d22",
    scale: 1,
    role: "tertiary"
  },
  lars: {
    name: "Lars",
    image: "lars.png",
    imageTrimmed: "lars_trim.png",
    imageFlipped: "lars_flip.png",
    imageFlippedTrimmed: "lars_flip_trim.png",
    accent: "#82fca7",
    accentDark: "#44ec1a",
    role: "secondary"
  },
  haze: {
    name: "Haze",
    image: "haze.png",
    imageTrimmed: "haze_trim.png",
    imageFlipped: "haze_flip.png",
    imageFlippedTrimmed: "haze_flip_trim.png",
    accent: "#df82fc",
    accentDark: "#c91aec",
    role: "secondary"
  },
  aiko: {
    name: "Fukuro",
    image: "Aiko_Fukuro.png",
    accent: "#e7c58f",
    accentDark: "#8f6331",
    role: "tertiary"
  },
  kenji: {
    name: "Kenji",
    image: "Kenji_Gorumaru.png",
    accent: "#b7c7f6",
    accentDark: "#4f5f94",
    role: "tertiary"
  },
  miko: {
    name: "Lady Miko",
    image: "Lady_Miko.png",
    accent: "#f1d1ca",
    accentDark: "#9b5b4d",
    role: "tertiary"
  },
  ren: {
    name: "Ren",
    image: "Ren.png",
    accent: "#bde7d6",
    accentDark: "#3f7862",
    role: "tertiary"
  },
  nobu: {
    name: "Poeta",
    image: "Nobu.png",
    accent: "#d1c0f3",
    accentDark: "#6b55a1",
    role: "tertiary"
  },
  hana_takeshi: {
    name: "Hana y Takeshi",
    image: "Hana_y_Takeshi.png",
    accent: "#efbac6",
    accentDark: "#8d4f61",
    role: "tertiary"
  },
  kyubi: {
    name: "Kyūbi",
    image: "Kyübi.png",
    accent: "#a9dcff",
    accentDark: "#3b6f9a",
    role: "tertiary"
  },
  valerio: {
    name: "Valerio",
    image: "Valerio.png",
    imageTrimmed: "Valerio_trim.png",
    imageFlipped: "Valerio_flip.png",
    imageFlippedTrimmed: "Valerio_flip_trim.png",
    accent: "#d3d0c2",
    accentDark: "#6f6b5d",
    role: "tertiary"
  },
  lady_rin: {
    name: "Lady Rin",
    image: "Lady_Rin.png",
    accent: "#f5d6ec",
    accentDark: "#986581",
    role: "tertiary"
  },
  lord_kazan: {
    name: "Lord Kazan",
    image: "Lord_Kazan.png",
    accent: "#f0a672",
    accentDark: "#874928",
    role: "tertiary"
  },
  rey_hanabusa: {
    name: "Rey Hanabusa",
    image: "Rey_Hanabusa_III.png",
    accent: "#f6d985",
    accentDark: "#9b6f25",
    role: "tertiary"
  }
};

// El layout sale del motor según el rol de cada personaje.
// Solo usa layoutMode: "manual" en una escena si quieres romper este estándar.
window.SCENE_CHARACTER_LAYOUTS = {
  tempestaria_llegada: {
    minutu: {
      position: "far-left",
      scale: 0.94
    },
    rocky: {
      position: "left"
    },
    reina: {
      position: "right"
    },
    mako: {
      position: "far-right",
      scale: 0.94
    }
  },
  tempestaria_escapar_con_mako: {
    minutu: {
      position: "far-left",
      scale: 0.94
    },
    rocky: {
      position: "left"
    },
    mako: {
      position: "center",
      scale: 0.94
    },
    reina: {
      position: "right"
    }
  }
};

window.characterStep = function characterStep(id, overrides) {
  return {
    type: "character",
    id,
    ...(overrides || {})
  };
};
