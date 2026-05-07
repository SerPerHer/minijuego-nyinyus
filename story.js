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
      text: "El puerto nunca dormía."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Ni siquiera al caer la noche."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las tabernas seguían llenas, las risas se mezclaban con canciones desafinadas, y el sonido de las olas golpeando los barcos marcaba el ritmo constante de una vida que siempre estaba en movimiento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En un mundo donde el mar lo era todo, quedarse quieto no era una opción."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En lo alto de una casa con vistas al muelle, dos figuras observaban el horizonte."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky apoyado en la barandilla, con su sonrisa despreocupada de siempre."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina, a su lado, con esa mezcla de elegancia y determinación que hacía que todo pareciera más… bajo control."
    },

    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Míralo. Podríamos ir a cualquier sitio desde aquí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina no apartó la vista del mar."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Sí. Pero primero vamos a casarnos."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¡Pues claro! Una cosa no quita la otra."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Ella sonrió ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Contigo sí."
    },

    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento arrastraba el olor a sal y aventura."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Barcos de todo tipo iban y venían: mercantes, piratas, exploradores… las historias flotaban en el aire."
    },

    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Estás nervioso?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky se encogió de hombros."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "No nervioso… más bien… curioso."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Curioso?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Sí. Es como… Sabes que quieres algo, pero no sabes exactamente cómo va a ser."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina lo miró."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "No era duda lo que había en Rocky."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era… la expectación. La curiosidad de su futuro juntos."
    },

    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La puerta se abrió lentamente a su espalda."
    },

    {
      type: "goto",
      nextScene: "aparicion_abuela"
    }
  ],

  aparicion_abuela: [
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "far-left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "left"
    },
    {
      type: "character",
      id: "abuela",
      name: "Abuela",
      image: "abuela.png",
      accent: "#9fd7b7",
      accentDark: "#4b8f69",
      position: "right",
      animation: "enter"
    },

    {
      type: "dialogue",
      speaker: "?????",
      text: "Eso es porque no lo sabéis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela de Jenni apareció en el umbral."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "No imponía. Pero su presencia tenía peso."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Como alguien que ha visto más de lo que cuenta."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿No sabemos qué?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela se acercó despacio hasta ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miró el horizonte. Luego a ambos."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "No sabéis lo que significa de verdad compartir un viaje."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió levemente."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Bueno, lo vamos a descubrir, ¿no?"
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Sí. Pero hay quienes intentaron entenderlo antes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Metió la mano en su bolso y sacó un objeto envuelto en tela."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Lo colocó entre ellos."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "En mi familia, hay una historia que se cuenta desde hace generaciones."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina suspiró suavemente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Abuela…"
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Escucha."
    },

    {
      type: "goto",
      nextScene: "mapa_antiguo"
    }
  ],

  mapa_antiguo: [
    {
      type: "background",
      image: "mapa_antiguo.png"
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela desenvolvió la tela."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era un mapa antiguo. Marcado con cinco puntos dispersos en el mar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y con un símbolo en el medio: un extraño grabado circular dividido en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky se inclinó hacia la mesa."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Esto tiene pinta de aventura."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela sonrió."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Lo es."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina cruzó los brazos."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué se supone que es?"
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Dicen que algunas parejas… antes de casarse… emprendían un viaje."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento sopló un poco más fuerte."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las luces del puerto parpadearon a lo lejos."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Buscaban algo. Algo que no se puede comprar ni enseñar."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Y qué es?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela apoyó el dedo sobre el mapa."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "El One Piece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El silencio que siguió no fue de incredulidad. Sino de interés."
    },

    {
      type: "goto",
      nextScene: "la_leyenda"
    }
  ],

  la_leyenda: [
    {
      type: "background",
      image: "puerto_noche.png"
    },

    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Como la leyenda?"
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "No exactamente. No todos buscan lo mismo cuando buscan lo mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina frunció el ceño."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Y qué tiene que ver esto con nosotros?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela la miró directamente."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Que nadie puede deciros si estáis preparados para lo que viene."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Pero hay quienes decidieron descubrirlo por sí mismos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miró el mapa. Luego el mar. Luego a Reina."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Podríamos hacerlo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina soltó una pequeña risa incrédula."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Claro. ¿Y qué? ¿Nos vamos ahora a cruzar el mar buscando un tesoro que ni sabemos qué es?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky se encogió de hombros."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Podría ser divertido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Ella negó con la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero no apartó la mirada del mapa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cinco puntos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cinco lugares."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una decisión."
    },

    {
      type: "goto",
      nextScene: "decision_viaje"
    }
  ],

  decision_viaje: [
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Sería peligroso."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Sí."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "No sabemos qué hay ahí fuera."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "No."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Nos vamos a casar igualmente."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Claro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otra pausa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela no dijo nada más."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "No hacía falta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Porque algunas historias… no empiezan con una obligación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Empiezan cuando tomas una decisión."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "🌊 Y en el mar, cinco islas aguardaban… a quienes estuvieran dispuestos a encontrarlas."
    },
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "A) Emprender el viaje antes de la boda",
          nextScene: "emprender_viaje"
        },
        {
          text: "B) Ignorar la leyenda y seguir con los planes",
          nextScene: "ignorar_leyenda"
        }
      ]
    }
  ],

  emprender_viaje: [
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina miraron el mapa una vez más."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cinco islas los esperaban. Cinco pruebas. Cinco fragmentos de una respuesta que todavía no conocían."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Entonces ya está decidido."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Ves? Sabía que esto acabaría siendo una aventura."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "No te emociones tanto. Si nos perdemos, será culpa tuya."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y así, antes de la boda, empezó el viaje."
    }
  ],

  ignorar_leyenda: [
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina cerró el mapa con cuidado."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "No. Tenemos demasiadas cosas que preparar."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Tiene sentido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela no discutió. Solo sonrió, como si ya supiera que algunas llamadas no se pueden ignorar para siempre."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "El mar sabe esperar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero aquella noche, ninguno de los dos dejó de pensar en las cinco islas marcadas en el mapa."
    }
  ]
};
