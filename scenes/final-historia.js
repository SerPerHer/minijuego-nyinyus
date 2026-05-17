const finalHistoriaDialogue = (speaker, text) => ({
  type: "dialogue",
  speaker,
  text
});

Object.assign(story, {
  final_historia: [
    {
      type: "clearCharacters"
    },
    {
      type: "sound",
      file: "One Piece _ Drums of Liberation x Overtaken.mp3",
      loop: true,
      volume: 0.55
    },
    {
      type: "background",
      image: "Fondo_todos.jpeg"
    },
    finalHistoriaDialogue(
      "Narrador",
      "Durante días enteros el Nyinyus navegó entre corrientes imposibles mientras Minutu llenaba mapas, cálculos y hojas absurdamente detalladas."
    ),
    finalHistoriaDialogue("Narrador", "Las cinco reliquias. Los cinco códigos. Todo encajaba."),
    finalHistoriaDialogue("Narrador", "O al menos… casi todo."),
    finalHistoriaDialogue("Narrador", "Hasta que una noche ocurrió."),
    finalHistoriaDialogue(
      "Narrador",
      "Blue levantó lentamente la mirada desde los papeles extendidos sobre la mesa."
    ),
    finalHistoriaDialogue("Blue", "…No son números aleatorios."),
    finalHistoriaDialogue("Narrador", "Minutu dejó de escribir inmediatamente."),
    finalHistoriaDialogue("Narrador", "Blue señaló una serie concreta."),
    finalHistoriaDialogue("Blue", "Son coordenadas."),
    finalHistoriaDialogue("Narrador", "Silencio."),
    finalHistoriaDialogue("Narrador", "Rocky parpadeó."),
    finalHistoriaDialogue("Rocky", "¿De… qué?"),
    finalHistoriaDialogue(
      "Narrador",
      "Minutu ya estaba haciendo cálculos a una velocidad completamente inhumana."
    ),
    finalHistoriaDialogue("Minutu", "No. No puede ser."),
    finalHistoriaDialogue("Narrador", "Pausa."),
    finalHistoriaDialogue("Minutu", "Sí, sí puede."),
    finalHistoriaDialogue("Narrador", "Mako apareció literalmente encima de la mesa."),
    finalHistoriaDialogue("Mako", "¡¡¿ESO SIGNIFICA TESORO?!!"),
    {
      type: "inspect",
      collectible: "mapa",
      image: "Mapa_definitivo.jpeg",
      buttonText: "Mapa",
      alt: "Mapa definitivo con la ruta final del Nyinyus"
    },
    finalHistoriaDialogue("Narrador", "Lars observó lentamente el mapa."),
    finalHistoriaDialogue("Narrador", "Haze levantó la mirada hacia el horizonte."),
    finalHistoriaDialogue("Narrador", "Y Reina sonrió."),
    finalHistoriaDialogue("Narrador", "Porque todos entendieron lo mismo."),
    finalHistoriaDialogue("Narrador", "Aquello no era el final. Era el comienzo de algo muchísimo más grande."),
    finalHistoriaDialogue("Narrador", "Un último lugar. Un último secreto. Una ruta perdida en mitad de la Grand Line."),
    finalHistoriaDialogue("Narrador", "El misterio final."),
    finalHistoriaDialogue("Narrador", "Y así… la tripulación del Nyinyus siguió navegando junta."),
    finalHistoriaDialogue(
      "Narrador",
      "Atravesaron mares imposibles. Islas extrañas. Tormentas. Fiestas. Combates. Aventuras. Siempre juntos."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "El mundo siguió haciéndose más grande. Más vivo. Más hermoso."
    ),
    finalHistoriaDialogue("Narrador", "Unos meses más tarde… el mar volvió a llenarse de música."),
    finalHistoriaDialogue("Narrador", "Pero esta vez no era una batalla."),
    finalHistoriaDialogue("Narrador", "Era una celebración."),
    {
      type: "background",
      image: "Fondo_celebracion.jpeg"
    },
    finalHistoriaDialogue(
      "Narrador",
      "Una enorme fiesta bajo cientos de faroles flotantes junto al océano. Mesas llenas de comida. Flores por todas partes. Música. Risas. Lágrimas felices."
    ),
    finalHistoriaDialogue("Narrador", "Y en mitad de todo aquello… Rocky y Reina."),
    finalHistoriaDialogue("Narrador", "Casándose."),
    finalHistoriaDialogue(
      "Narrador",
      "Mako lloraba mientras gritaba cosas completamente incoherentes."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "Blue intentaba mantener la compostura aunque claramente también estaba emocionada."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "Minutu llevaba una planificación de boda absurdamente detallada."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "Haze observaba tranquilamente aves sobrevolando el atardecer."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "Y Lars sonreía viendo cómo todos reían juntos."
    ),
    finalHistoriaDialogue("Narrador", "Porque después de todo lo vivido… seguían allí."),
    finalHistoriaDialogue("Narrador", "Juntos."),
    finalHistoriaDialogue(
      "Narrador",
      "Rocky miró a Reina como si el resto del mundo hubiera desaparecido."
    ),
    finalHistoriaDialogue(
      "Narrador",
      "Y Reina le devolvió exactamente la misma mirada."
    ),
    finalHistoriaDialogue("Narrador", "No hacía falta decir mucho."),
    finalHistoriaDialogue(
      "Narrador",
      "Porque después de tormentas, guerras, monstruos, islas imposibles, y océanos enteros… seguían eligiéndose mutuamente."
    ),
    finalHistoriaDialogue("Narrador", "Y eso era suficiente."),
    finalHistoriaDialogue(
      "Narrador",
      "Las luces se reflejaban sobre el mar mientras la música continuaba sonando y todos sus nakamas celebraban hasta entrada la madrugada."
    ),
    finalHistoriaDialogue("Narrador", "Y aquella noche… el mundo parecía inmenso."),
    finalHistoriaDialogue("Narrador", "Pero también parecía hogar."),
    finalHistoriaDialogue("Narrador", "Porque Rocky y Reina se amaron para siempre."),
    finalHistoriaDialogue("Narrador", "Y su historia no terminaba allí..."),
    {
      type: "choice",
      speaker: "Fin",
      text: "",
      options: [
        {
          text: "To be continued...",
          action: "showCredits"
        }
      ]
    }
  ]
});
