const story = {
  start: [
    { type: "background", image: "puerto_noche.png" },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left",
      animation: "enter"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "right",
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El puerto nunca dormía. Ni siquiera al caer la noche."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las tabernas seguían llenas, las risas se mezclaban con canciones desafinadas y el sonido de las olas marcaba el ritmo de la aventura."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Míralo. Podríamos ir a cualquier sitio desde aquí."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Sí. Pero primero vamos a casarnos."
    },
    {
      type: "choice",
      text: "¿Qué debería responder Rocky?",
      options: [
        { text: "Contigo sí.", nextScene: "romantico" },
        { text: "¿Y si huimos en barco?", nextScene: "caos" }
      ]
    }
  ],

  romantico: [
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¡Pues claro! Una cosa no quita la otra."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Así me gusta. Pirata, sí. Distraído, también. Pero conmigo delante."
    },
    { type: "goto", nextScene: "abuela" }
  ],

  caos: [
    { type: "effect", name: "shake" },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Rocky... céntrate. Una boda primero, una crisis pirata después."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¡Pues claro! Una cosa no quita la otra."
    },
    { type: "goto", nextScene: "abuela" }
  ],

  abuela: [
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      position: "far-left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      position: "far-right"
    },
    {
      type: "character",
      id: "abuela",
      name: "Abuela",
      image: "abuela.png",
      accent: "#9fd7b7",
      accentDark: "#4b8f69",
      position: "center",
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Eso es porque no sabéis lo que significa de verdad compartir un viaje."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela colocó sobre la mesa un mapa antiguo incompleto."
    }
  ]
};
