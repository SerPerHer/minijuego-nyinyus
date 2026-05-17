const story = {
  start: [
    { type: "background", image: "puerto_noche.png" },

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
    characterStep("rocky"),
    characterStep("reina"),
    characterStep("abuela", { animation: "enter" }),

    {
      type: "dialogue",
      speaker: "?????",
      text: "Eso es porque no lo sabéis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela de Reina apareció en el umbral."
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
      type: "goto",
      nextScene: "mapa_antiguo"
    }
  ],

  mapa_antiguo: [
    {
      type: "inspect",
      collectible: "mapa",
      image: "mapa_antiguo.png",
      buttonText: "Mapa",
      alt: "Mapa antiguo con cinco puntos marcados"
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
      text: "¿Cómo la leyenda?"
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
      text: "Y en el mar, cinco islas aguardaban… a quienes estuvieran dispuestos a encontrarlas."
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
    },
    {
      type: "choice",
      text: "El Nyinyus ya espera en el puerto.",
      options: [
        {
          text: "Hacerse a la mar",
          nextScene: "toki_hanashima_llegada"
        }
      ]
    }
  ],

  ignorar_leyenda: [
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina observó el mapa unos segundos más. Las cinco marcas. El símbolo fragmentado. El mar esperándolos ahí fuera. Luego suspiró suavemente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Gracias, abuela… pero ahora mismo no tenemos tiempo para esto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky levantó una ceja."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Tenemos una boda que organizar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela la observó en silencio. No parecía decepcionada. Solo… tranquila. Como alguien que sabía perfectamente que hay viajes que empiezan… y otros que simplemente no."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La anciana se encogió ligeramente de hombros."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Entonces ya habéis elegido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina sonrió."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky pasó un brazo por sus hombros."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Además, seguro que el One Piece sigue ahí mañana."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La abuela soltó una pequeña risa."
    },
    {
      type: "dialogue",
      speaker: "Abuela",
      text: "Quizá."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Se dio la vuelta lentamente y caminó hacia la puerta. Pero dejó el mapa sobre la mesa. Como si las historias importantes… no desaparecieran tan fácilmente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y así…"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina no zarparon. No atravesaron tormentas imposibles. No ayudaron a un maníaco del control. No soportaron vientos kilométricos ni charlas infinitas. No ayudaron a una científica a revivir un robot gigante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "No se perdieron junto a una soñadora por un bosque lleno de niebla. Y no se enfrentaron a unos malvados junto a un corazón amable. No encontraron reliquias antiguas. No descifraron mapas. No persiguieron leyendas."
    },
    {
      type: "background",
      image: "boda_solos.png",
      backgroundSize: "cover, 88% auto",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat, no-repeat"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En lugar de eso… Organizaron su boda. Y fue preciosa. Hubo música. Risas. Amigos. Familia. Miradas cómplices. Promesas dichas con el corazón. Y durante años fueron felices. Muy felices."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero a veces… en noches tranquilas. Cuando el viento soplaba desde el mar. Rocky miraba el horizonte unos segundos de más. Y Reina… sin decir nada… hacía exactamente lo mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Preguntándose: Qué aventuras habrían vivido. A quién habrían conocido. Qué historias nunca llegaron a existir."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en algún lugar de la casa… cubierto lentamente por el polvo… seguía descansando aquel viejo mapa. Esperando por un viaje… que nunca comenzó."
    },
    {
      type: "choice",
      text: "FIN",
      options: [
        {
          text: "Volver al inicio",
          action: "returnToIntro"
        }
      ]
    }
  ],

  ignorar_leyenda_final: [
    {
      type: "background",
      image: "boda_solos.png",
      backgroundSize: "cover, 88% auto",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat, no-repeat"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "choice",
      speaker: "Fin",
      text: "",
      options: [
        {
          text: "Volver al inicio",
          action: "returnToIntro"
        }
      ]
    }
  ]
};
