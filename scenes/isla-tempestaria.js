Object.assign(story, {
  tempestaria_llegada: [
    {
      type: "clearCharacters"
    },
    {
      type: "sound",
      file: "One_Piece_Isla_Tempestaria.mp3",
      loop: true,
      volume: 0.55
    },
    {
      type: "background",
      image: "Isla_Tempestaria.jpeg"
    },
    characterStep("rocky", { animation: "enter" }),
    characterStep("minutu", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La aguja de la brújula apuntaba hacia una zona del mar donde las corrientes parecían completamente desquiciadas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Incluso desde lejos, la isla parecía un caos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Nubes girando."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Velas agitadas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Molinos enormes inclinándose bajo la fuerza del viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sobre un risco imposible, construido entre puentes, telas y estructuras ancladas con cadenas gigantescas:"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "TEMPESTARIA"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La isla del viento salvaje."
    },
    {
      type: "background",
      image: "Isla_Tempestaria_calles.png"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Nyinyus avanzaba dando tumbos entre corrientes aéreas imposibles."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu sujetaba el timón con expresión funeraria."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esto ya estaba mal planteado desde el momento en que el mapa decía \"súmate al viento\"."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "VAMOS. Es divertido."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esa frase suele preceder a accidentes marítimos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina observó la isla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La gente corría. No caminaban o paseaban. Corrían constantemente. Saltaban entre plataformas. Se agarraban a postes. Usaban telas tensadas para impulsarse. Y aún así el viento no se los llevaba. Casi."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Cómo vive aquí esta gente?"
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una ráfaga atravesó el barco."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Mal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutos después, los tres caminaban por el puerto principal. O al menos lo intentaban."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugía entre los edificios como un monstruo vivo. Todos los puestos estaban anclados con cadenas. Las mesas clavadas al suelo. Las farolas dobladas. La gente gritaba para poder escucharse."
    },
    {
      type: "dialogue",
      speaker: "Vendedor",
      text: "PESCADOOOOO."
    },
    {
      type: "dialogue",
      speaker: "Cliente",
      text: "QUE."
    },
    {
      type: "dialogue",
      speaker: "Vendedor",
      text: "HE DICHO PESCADOOOO."
    },
    {
      type: "dialogue",
      speaker: "Cliente",
      text: "DOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu iba pegado a una pared."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky avanzaba emocionado."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Si alguien me explicó cómo sobrevivir aquí, claramente no lo escuché porque el viento se llevó la conversación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intentaba sujetarse a una cuerda anclada entre edificios."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pum. Pum. Pum. Pum."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mucho estruendo. Algo venía hacia ellos. Rápido. Muy rápido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres se giraron. Una chica atravesaba el puerto corriendo como si el viento no existiera. Saltaba entre cajas. Pisaba barriles. Usaba las ráfagas para impulsarse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y detrás de ella: tres hombres enormes."
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "far-left",
      scale: 0.94
    },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "right"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-right",
      scale: 0.94,
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "DETENEDLA."
    },
    {
      type: "dialogue",
      speaker: "Hombre 2",
      text: "NOS HA ROBADO."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "TÉCNICAMENTE LO HE CONSEGUIDO, ASÍ QUE ESO CUENTA COMO VICTORIA."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No me gusta la energía de esta situación."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces ocurrió. Reina perdió el agarre. El viento la arrancó del suelo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "REINA."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La ráfaga la elevó hacia el cielo. Todo ocurrió rápido. Demasiado rápido. Mako vio a Reina. Saltó sobre una caja. Luego a un barril medio suspendido. Luego al toldo de un tenderete."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako salió disparada. Agarró a Reina de la cintura en el aire. Y ambas cayeron rodando contra el suelo como un saco de piedras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Conseguido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Minutu llegaron corriendo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Estáis bien?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se incorporó lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako seguía tumbada en el suelo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vaya... He salvado una persona. Voy claramente primera."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "¿Con quién compites?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Nadie... ¿Todos?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres hombres gritaban a través del puerto."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "AHÍ ESTÁ."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se levantó tranquilamente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué has robado exactamente?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sacó una pequeña brújula metálica del bolsillo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esto."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Perfecto. Ya estamos implicados en un delito marítimo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Oh no no no. Escuchad el contexto. Me dijeron: no tendrás valor para hacerlo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Levantó un dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Luego dijeron: aunque lo intentes, no lo conseguirás."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otro dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y yo pensé... ¿Eso no es básicamente una invitación?"
    },
    {
      type: "dialogue",
      speaker: "Hombres",
      text: "DEVUÉLVELA."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y ENCIMA lo conseguí. Deberían darme las gracias."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky empezó a reírse."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Me estoy empezando a marear."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Perdón por eso. No puedo evitarlo cuando me emociono. En fin... quizá ahora os culpen también."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Quizá?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Os han visto hablando conmigo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estamos a exactamente doce segundos de convertirnos en fugitivos."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Tranquilos. Tengo un plan."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Cuál?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No tener plan."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a tirarme al mar."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vamos. Cogedme la mano. Os llevaré a un sitio seguro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Detrás de ellos, los hombres empezaban a acercarse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugía entre los edificios."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La brújula brillaba en la mano de Mako."
    },
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "A) Cogéis la mano de Mako y escapáis con ella.",
          nextScene: "tempestaria_escapar_con_mako"
        },
        {
          text: "B) No confiáis en ella y os quedáis.",
          nextScene: "tempestaria_quedarse"
        }
      ]
    }
  ],

  tempestaria_escapar_con_mako: [
    {
      type: "background",
      image: "Casa_de_Mako.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miró la mano de Mako."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego a los tres hombres acercándose."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego a Minutu."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Quiero dejar claro que estadísticamente esta decisión nos llevará a un problema mucho mayor."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sí. Vamos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina suspiró. Y le cogió la mano. Rocky hizo lo mismo inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu los observó en silencio unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Perfecto. Moriremos siguiendo a una persona cuyo plan consiste en no tener plan."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eso es espíritu de equipo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y salió corriendo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El mundo se convirtió en viento. Mako atravesaba Tempestaria a una velocidad absurda mientras los otros tres eran prácticamente arrastrados detrás de ella."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Parecía una cometa tirando de otras tres cometas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Saltaba barandillas. Se impulsaba con ráfagas. Pisaba paredes inclinadas. Usaba telas tensadas entre edificios como trampolines."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "ESTO ES INCREÍBLE."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu iba rebotando contra cajas."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "ESTO ES UNA LOCURAAA."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina apenas conseguía mantener los ojos abiertos por el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y aún así, Mako no salía volando. Ni siquiera parecía costarle."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿CÓMO NO TE ARRASTRA EL VIENTO?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "CORRO MÁS RÁPIDO QUE ÉL."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso no tiene ningún sentido físico."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claro que no. Estamos en Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron a una pequeña zona elevada de la ciudad. Las casas estaban construidas unas sobre otras, sujetas con cadenas gigantescas clavadas entre sí."
    },
    {
      type: "stopSound"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "far-left",
      scale: 0.94
    },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "center",
      scale: 0.94
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "right"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrió una puerta de una patada."
    },
    {
      type: "background",
      image: "Casa_de_Mako.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Bienvenidos a mi fortaleza del caos organizado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La casa era pequeña. Y estaba completamente llena de cosas. Libros. Herramientas. Mapas. Cuerdas. Objetos extraños. Cosas claramente valiosas mezcladas con basura absoluta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Había incluso un remo colgado del techo por algún motivo. La casa se balanceaba ligeramente con el viento exterior."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observó alrededor."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esto parece el almacén de un pirata con Diógenes táctico."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Gracias."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky cogió un objeto raro de una estantería."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Qué es esto?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No tengo ni idea. Pero lo gané."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Cómo?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Competición de gritos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Por supuesto que existe eso aquí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Tras unos minutos recuperándose del viaje, Reina sacó el mapa. El viejo pergamino se abrió sobre la mesa. Las cinco marcas seguían brillando débilmente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en el centro, el símbolo. Un extraño grabado circular dividido en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se inclinó sobre él. Por primera vez desde que la conocían, pareció concentrarse de verdad."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Hmm."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Te suena?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No exactamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Pero conozco a alguien que colecciona cosas raras."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No me gusta cómo suena esta frase."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sabe muchísimo sobre reliquias antiguas. Objetos extraños. Símbolos raros. Cosas de viejos piratas."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Y dónde está?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Bueno... técnicamente casi lo conocéis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu cerró los ojos lentamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Claro."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Es el hombre al que has robado."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "\"Robado\" es una palabra muy agresiva."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Le quitaste una brújula y ahora te persiguen tres hombres."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levantó un dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Porque son unos exagerados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Segundo dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y además prácticamente me retaron a hacerlo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso no convierte el crimen en algo bueno."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "En Tempestaria sí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeó las ventanas. Mako se dejó caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esta noche hará una fiesta en su mansión."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Una fiesta?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sip. Invita a comerciantes, nobles, coleccionistas y gente rica que huele a perfume caro y decisiones cuestionables."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Y crees que tiene uno de los objetos?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si alguien en esta isla sabe algo sobre vuestro símbolo, es él."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Perfecto. Entonces iremos. Hablaremos civilizadamente. Sin robos. Sin huidas. Sin caos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako y Rocky lo miraron en silencio."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "¿Por qué me estáis mirando así?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Porque eso suena aburridísimo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Un poco sí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se inclinó sobre la mesa con una sonrisa enorme."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Entonces, ¿qué os parece si...?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La casa crujió con el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La tormenta rugía fuera."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y la siguiente decisión quedó suspendida en el aire."
    },
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "A) Intentar hablar con el coleccionista durante la fiesta.",
          nextScene: "tempestaria_fiesta_hablar"
        },
        {
          text: "B) Colaros en la mansión para buscar el objeto por vuestra cuenta.",
          nextScene: "tempestaria_mansion_colarse"
        }
      ]
    }
  ],

  tempestaria_fiesta_hablar: [
    {
      type: "background",
      image: "FONDO OPCIÓN 1.jpeg"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94,
      animation: "enter"
    },
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
      position: "center",
      animation: "enter"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "right",
      scale: 0.94,
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La mansión Gildrack brillaba sobre los acantilados de Tempestaria como un palacio suspendido en mitad de la tormenta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La lluvia golpeaba los enormes ventanales. Los relámpagos iluminaban las torres doradas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y dentro, la fiesta rugía casi tan fuerte como el viento exterior."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Música. Copas. Risas exageradas. Nobles vestidos con telas imposibles. Coleccionistas presumiendo de reliquias absurdas. Mercaderes intentando impresionarse entre ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Había piratas refinados, millonarios extravagantes, aristócratas del Grand Line y personas tan ricas que probablemente nunca habían cargado una caja en su vida."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo brillaba demasiado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entre toda aquella opulencia, Mako llevaba un vestido precioso. Elegante. Oscuro. Con detalles rosados que se movían con el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un vestido que quizá, y solo quizá, había cogido prestado. Para luego no devolverlo nunca."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina iba espectacular. Elegante. Serena. Con una presencia que hacía que incluso la gente se apartara ligeramente al verla pasar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sorprendentemente, hasta Rocky y Minutu habían conseguido arreglarse bastante bien."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Aunque Minutu parecía un hombre atrapado en una experiencia social contra su voluntad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Frente a la entrada principal, un guardia les cortó el paso."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "Invitación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todos miraron inmediatamente a Mako."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "No hables."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Valep."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Voy ganando en silencio."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso no existe."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina dio un paso al frente. Y por un instante, pareció completamente parte de aquel mundo. Levantó ligeramente la barbilla."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Venimos de muy lejos para traerle una reliquia al señor Gildrack."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El guardia dudó."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Y puedo asegurarte que no estará contento si nos hacéis esperar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento hizo ondear su vestido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El guardia tragó saliva."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "P-pueden pasar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu la miró impresionado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Uou. Eso ha sido sexy."
    },
    {
      type: "background",
      image: "Isla_Tempestaria_Fondo_Valerio Gildrack.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La fiesta era incluso más absurda por dentro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Arañas de cristal colgaban sujetas con cadenas de piedras preciosas. Instrumentos sonaban sobre plataformas flotantes. Había esculturas traídas de islas lejanas y animales exóticos paseando entre invitados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En una esquina, dos nobles discutían sobre qué espada antigua tenía más aura."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Quiero robarles solo por la conversación."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No robes nada."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No prometo nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Decidisteis separaros para encontrar a Valerio antes. Y vaya si lo encontrasteis. O mejor dicho, él os encuentra primero."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un pequeño revuelo empieza a formarse cerca de la sala principal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cuando os acercáis, veis a Mako delante de Valerio Gildrack."
    },
    {
      type: "character",
      id: "valerio",
      name: "Valerio",
      image: "Valerio.png",
      accent: "#b58de8",
      accentDark: "#5d3c8c",
      position: "far-right",
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio la observaba con una mezcla entre agotamiento y amenaza contenida."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "¿Qué haces exactamente en mi fiesta?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrió inocentemente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Solo he venido a divertirme."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cogió una copa de la bandeja de un camarero que pasaba cerca. Se la bebió entera."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vaya. Esto está buenísimo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y ahí empezó el desastre."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El grupo terminó reuniéndose alrededor de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako ya estaba claramente más alegre. Mucho más alegre. Se apoyó ligeramente sobre Valerio y le dio un empujoncito."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "¿Y si jugamos a un juego?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio suspiró profundamente."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Temo muchísimo la continuación de esa frase."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si ganamos nosotros..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Le señaló."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Nos das algo que queramos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego se señaló a sí misma."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y si perdemos..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sonrió."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Te damos lo que quieras. Jeje."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estamos apostando cosas y aún no sé cuáles son."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio observó al grupo. Luego sonrió ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Acepto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vamos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "NO."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "CONCURSO DE BAILE."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Empiezo yo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sorprendentemente, Rocky arrasó. Sacó sus pasos prohibidos y los dejó a todos con la boca abierta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Nadie entendía cómo. Pero en algún momento empezó la música, comenzó a bailar, la gente hizo espacio y toda la fiesta terminó mirando."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Incluso Valerio parecía impresionado."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "VAMOS ROCKY. LOS ESTÁS DESTRUYENDO A TODOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante un rato, todo dejó de importar. La misión. El mapa. El One Piece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Solo hubo música, risas, copas, viento golpeando los ventanales y la sensación de estar viviendo una aventura."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todos bailaban. Todos reían. Todos excepto Minutu."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Observaba la escena con expresión de hombre al borde de un aneurisma cerebral. Aunque en el fondo, muy en el fondo, también estaba disfrutando un poco viendo a todos tan felices."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente, la música terminó."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio suspiró."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Una apuesta es una apuesta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miró al grupo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "¿Qué queréis?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina dio un paso adelante."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Queremos que nos digas cuál es el objeto que tiene el círculo fragmentado en cinco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La sonrisa de Valerio desapareció lentamente. El ambiente cambió."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeó los ventanales."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Intenté que no os metierais en esto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Pero parece que ya habéis decidido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miró directamente a Mako."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Es la brújula."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "La que Mako tan amablemente sustrajo de mi almacén."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako hizo una pequeña reverencia orgullosa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Gracias."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No creo que lo diga como un cumplido..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina cruzó los brazos."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Como premio por haber ganado, nos la llevamos sin repercusiones."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Rocky ha ganado de sobra y lo sabes. Cualquier otro premio no sería justo, ¿verdad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako apareció al lado de Rocky comiendo palomitas de algún lugar desconocido."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Uou... Qué poder de persuasión. Es increíble."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miraba enamorado a Reina."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Sí, lo es."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "¿De dónde han salido esas palomitas?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No es relevante ahora mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio cerró los ojos unos segundos. Como un hombre aceptando que el universo lo odiaba personalmente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente suspiró."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Está bien."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio dio media vuelta y fue a hablar con uno de sus sirvientes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina también."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces Mako se pasó la mano por la frente, exageradamente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Menos mal. Jeje."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todos la miraron."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La verdadera brújula era tan bonita que la escondí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La que llevaba encima era una falsificación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu se quedó completamente inmóvil."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a empezar a cobraros por trauma emocional."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Entonces será mejor que nos marchemos. Ya."
    },
    {
      type: "background",
      image: "FONDO OPCIÓN 1.jpeg"
    },
    {
      type: "clearCharacters",
      ids: ["valerio"]
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94
    },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "center"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "right",
      scale: 0.94
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y así, después de colarse en una fiesta imposible, engañar guardias, bailar por una reliquia legendaria y sobrevivir socialmente a Mako, el grupo abandonó la mansión bajo la tormenta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugía sobre Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y mientras iban hacia la pequeña casa balanceante de Mako, por primera vez desde que comenzó el viaje, ya no parecían simplemente viajeros."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Parecían empezar a convertirse en una verdadera tripulación."
    },
    {
      type: "goto",
      nextScene: "tempestaria_final"
    }
  ],

  tempestaria_mansion_colarse: [
    {
      type: "background",
      image: "FONDO OPCIÓN  2 .jpeg"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94,
      animation: "enter"
    },
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
      position: "center",
      animation: "enter"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "right",
      scale: 0.94,
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La tormenta envolvía la mansión Gildrack mientras las luces de la fiesta brillaban entre los enormes ventanales."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Música. Copas. Risas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y, deslizándose entre las sombras exteriores del edificio: cuatro personas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observaba la pared de la mansión con expresión de absoluto sufrimiento psicológico."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Podríamos estar dentro hablando civilizadamente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sí, pero ¿no es esto muchísimo mejor?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Tiene un poco de razón."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estoy rodeado de piratas emocionalmente incapaces de tomar buenas decisiones."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako ya estaba escalando una barandilla."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vamos, lentos."
    },
    {
      type: "background",
      image: "Isla_Tempestaria_Fondo_Valerio Gildrack.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Moverse por la mansión resultó mucho más complicado de lo esperado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Habían duplicado la seguridad. Guardias en cada pasillo. Sensores de viento colocados en ventanas abiertas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako avanzaba agachada. Completamente concentrada. Por primera vez desde conocerla, parecía profesional."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Eso antes no estaba así."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Antes?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La última vez que me colé."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Fantástico."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron a un corredor lateral. Oscuro. Silencioso. Lleno de cuadros antiguos y vitrinas cerradas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces escucharon voces."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levantó el puño inmediatamente. Todos se detuvieron."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La voz venía de una habitación cercana. Una puerta entreabierta. Valerio Gildrack. Y estaba hablando con alguien."
    },
    {
      type: "character",
      id: "valerio",
      name: "Valerio",
      image: "Valerio.png",
      accent: "#b58de8",
      accentDark: "#5d3c8c",
      position: "far-right",
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Hay gente preguntando por el símbolo del Quinto Elemento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "¿Saben algo?"
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "No lo creo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Pero el trozo del Quinto Elemento sigue dentro del objeto."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "¿Aún lo tienes en tu posesión?"
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Por... Por supuesto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un pequeño titubeo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Está en la segunda habitación de la tercera planta bajo vigilancia."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Que siga así."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrió mucho los ojos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina la miró inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió, expectante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu frunció el ceño."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Y ahora qué?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrió lentamente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claramente debemos ir a esa habitación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Además, tengo que confirmar algo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces, ruido. Pasos. Todos se giraron."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dos guardias estaban a punto de doblar la esquina del pasillo."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Vamos. Deprisa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako reaccionó inmediatamente. Se puso delante del grupo y empezó a guiarlos por la mansión como si realmente fuera suya."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Subieron escaleras. Atravesaron habitaciones. Pasaron por corredores llenos de reliquias imposibles. Hasta llegar a la segunda habitación de la tercera planta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La puerta estaba cerrada. No es que eso supusiera un problema."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entraron. Y durante unos segundos, nadie dijo nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La habitación estaba llena de objetos extraños: máscaras antiguas, armas ornamentales, joyas, mapas y reliquias de lugares que probablemente ni existían ya."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo expuesto en vitrinas iluminadas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces lo vieron. Una vitrina distinta al resto. Más protegida. Con un pequeño cartel metálico."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y grabado en él, el símbolo. El círculo fragmentado en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Nos mintió cuando dijo que no sabía lo que era el círculo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Pues claro. ¿Qué esperabas? ¿Qué se hubiera hecho rico diciendo la verdad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dentro de la vitrina había un objeto cubierto por una tela dorada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se acercó lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako observaba en silencio. Como si estuviera esperando confirmar algo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Rocky apoyó la mano sobre la vitrina."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "CLICK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y después: WIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La alarma empezó a sonar por toda la mansión."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu cerró los ojos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Genial. Tenemos exactamente tres minutos, veintinueve segundos y treinta y seis milisegundos para salir de aquí."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Pero aún no tenemos el objeto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako empezó a reírse salvajemente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "He ganado. He ganado. JAJAJA."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Ahora toca fuga con persecución. Mi momento favorito."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estamos siguiendo a una loca. Vamos a acabar en prisión."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Venga. Vámonos. Ya lo volveremos a intentar ahora que sabemos dónde está."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces la puerta del pasillo se abrió de golpe. Dos guardias."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Segundo guardia",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "INTRUSOS."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "El plan ha muerto."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "PLAN B."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿CUÁL ERA EL A?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "NO SER DETECTADOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los guardias empezaron a perseguirlos inmediatamente. Más pasos empezaban a escucharse por toda la mansión. La alarma seguía sonando."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako giró la cabeza hacia el grupo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y por primera vez desde conocerla, habló completamente en serio."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Yo me encargo."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vosotros huid."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "No vamos a dejarte aquí."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claro que sí. Porque voy ganando."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso sigue sin significar nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrió. Luego señaló una dirección."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Mi casa está en la zona alta del puerto. Tercera plataforma. Puerta rosa. Nos vemos allí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dudaron solo un instante. Pero más guardias empezaban a llegar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Así que echaron a correr. Saltando entre pasillos. Escaleras. Puertas. Hasta desaparecer de la mansión."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y mientras huían, escucharon la voz de Mako resonando detrás de ellos. Cada vez más rápida. Más fuerte. Más imposible de entender."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "ESCUCHAD PRIMERO NO ES LO QUE PARECE PORQUE ESTO ES REALMENTE UN MAL ENTENDIDO CON MUCHAS VARIABLES Y ADEMÁS SI ESTÁIS GRITANDO QUIERO DECIR QUE YO HE GANADO EMOCIONAL MENTE..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego: golpes. Guardias cayendo. Gente mareándose."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y alguien gritando: QUE ALGUIEN HAGA QUE SE CALLE."
    },
    {
      type: "stopSound"
    },
    {
      type: "background",
      image: "Casa_de_Mako.jpeg"
    },
    {
      type: "clearCharacters",
      ids: ["valerio"]
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "center",
      scale: 0.94
    },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "right"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "far-left",
      scale: 0.94
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El grupo consiguió escapar de la mansión sin demasiados problemas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento de Tempestaria rugía entre las calles mientras corrían hacia la zona alta del puerto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron a la pequeña casa inclinada de Mako. Entraron."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky respiraba agitado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intentaba procesar todo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu simplemente se dejó caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a desarrollar una enfermedad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pasaron unos minutos. Entonces la puerta se abrió de golpe."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako apareció despeinada. Sonriendo. Completamente orgullosa de sí misma."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Buenas noticias. No os preocupéis. Tengo lo que queréis."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se dejó caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "El objeto que estaba allí era la brújula que robé."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Entonces la tenían ellos?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Nunca la han tenido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrió aún más."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Cuando vi la brújula real, me pareció tan bonita que la escondí."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y la que he llevado encima todo este tiempo era una falsificación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu se quedó completamente inmóvil."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Cada conversación contigo empeora mi estado mental."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrió un cajón."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y lentamente sacó una antigua brújula metálica."
    },
    {
      type: "goto",
      nextScene: "tempestaria_final"
    }
  ],

  tempestaria_final: [
    {
      type: "stopSound"
    },
    {
      type: "background",
      image: "FONDO FINAL.jpeg"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94,
      animation: "enter"
    },
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
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "far-right",
      scale: 0.94,
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La pequeña casa de Mako crujía suavemente con cada ráfaga de viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Fuera, Tempestaria seguía rugiendo como una tormenta viva."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dentro, los cuatro estaban sentados alrededor de una mesa llena de mapas, tazas, herramientas extrañas y restos de comida que probablemente llevaban ahí más tiempo del recomendable."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En el centro descansaba la brújula. La auténtica. Antigua. Pesada. Con grabados extraños recorriendo el metal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en su interior, probablemente una de las cinco partes del círculo fragmentado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observó la brújula unos segundos. Luego miró al resto."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale... ¿y ahora qué?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levantó inmediatamente las manos."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eh. A mí no me miréis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu seguía observando el objeto con el ceño fruncido. Con esa expresión que significaba que estaba pensando muy intensamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Hay una pieza que no encaja del todo. Creo que deberíamos abrirla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio absoluto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrió los ojos horrorizada."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "¿QUÉEEEE?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cogió la brújula entre las manos como si estuvieran amenazando a un cachorro."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "¿Y romper esta preciosidad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Puso una carita tristísima."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina sonrió ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Mako... debemos saber por qué este objeto es importante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrazó la brújula dramáticamente unos segundos más."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego suspiró derrotada."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale... Pero si se rompe os odiaré mucho. Jeje. Nah, en realidad me gustáis mucho."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entre los cuatro consiguieron abrir cuidadosamente la brújula."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "CLICK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El mecanismo interno se abrió lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces lo vieron. En la parte interior de la tapa, grabado cuidadosamente sobre el metal, estaba el símbolo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El círculo fragmentado en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero no solo eso. Dentro había una aguja extraíble."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu la sacó lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Debajo había unos números grabados. ¿Algún tipo de código?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Qué significa eso?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina negó lentamente con la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observó los números unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No lo sé. Aún."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Pero estoy completamente seguro de que más adelante necesitaremos esto. Recordad que en la máscara también hay unos números."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "¿Será eso lo que debemos buscar en las otras islas?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako miraba la brújula abierta con expresión de absoluta preocupación maternal."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La habéis destripado..."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Sigue entera."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Pero emocionalmente ya no."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante unos segundos, ninguno habló. Solo miraban la brújula, el mapa y las posibilidades que se abrían delante de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Reina rompió el silencio."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Bueno..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miró hacia la ventana."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Deberíamos irnos antes de que Gildrack decida venir a por nosotros."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu asintió inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Veo lógica en tus palabras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "De acuerdo, pues. Volvamos al Nyinyus y zarpemos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se quedó callada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Algo rarísimo por lo que habían visto. Miró hacia otro lado. Intentando disimular. Pero era evidente. Le daba pena que se fueran."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Había habido caos. Persecuciones. Problemas. Locura. Pero también había sido divertido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y ahora ellos se irían. Y probablemente no volverían a verse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina la observó unos segundos. Luego sonrió suavemente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Oye."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levantó la vista."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Quieres venir con nosotros?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Completo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako parpadeó una vez."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego otra."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "¿QUÉ!?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky empezó a reírse."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Claro. Necesitamos a alguien capaz de correr más rápido que un huracán."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se levantó de golpe."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "SI. CLARO QUE SÍ. HE GANADO AMIGOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Saltó por encima de la mesa abrazando a Reina y casi tirando una silla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observó la escena con expresión de hombre al que le va a aparecer una úlcera en cualquier momento."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a morir joven."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero aún así, no se opuso."
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN.jpeg"
    },
    {
      type: "clearCharacters"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y así, al amanecer del día siguiente, cuatro figuras abandonaron Tempestaria a bordo del Nyinyus."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dejando atrás los vientos huracanados, las calles imposibles y la isla donde hasta respirar parecía una competición."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las corrientes rugían alrededor del barco. El viento podría haber tumbado a un gigante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero ya no importaba demasiado. Porque la tripulación ya tenía su propio huracán a bordo."
    }
  ],

  tempestaria_quedarse: [
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako mantuvo la mano extendida unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugía entre los edificios."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres hombres seguían acercándose."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina miró a Rocky. Rocky miró a Minutu."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No. No vamos a huir con una desconocida buscada por robo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "\"Buscada\" suena muy dramático."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Porque ESTAMOS EN MEDIO DE UNA PERSECUCIÓN."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Bueno, sí, pero no te preocupes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los hombres llegaron finalmente hasta ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Uno de ellos señaló directamente a Mako."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "AHÍ ESTÁ."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otro señaló al grupo."
    },
    {
      type: "dialogue",
      speaker: "Hombre 2",
      text: "Y ELLOS ESTÁN CON ELLA."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Magnífico. Condenados por asociación delictiva."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Pero quiero dejar claro que he ganado yo."
    },
    {
      type: "background",
      image: "Isla_Tempestaria_Fondo_Opción B.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Poco después, los cuatro eran guiados por las calles altas de Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeaba los enormes ventanales de una mansión construida sobre un risco gigantesco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era absurdamente lujosa. Columnas de mármol. Telas flotando con el viento. Arañas de cristal sujetas con cadenas de piedras preciosas. Esculturas traídas de todos los mares."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observaba fascinado."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale... este tipo tiene muchísimo dinero."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Y probablemente muchísima seguridad. Dato relevante ahora mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los hombres los guiaron por largos pasillos repletos de reliquias, armas antiguas, mapas, brújulas y objetos imposibles."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Hasta llegar a un enorme despacho."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Allí los esperaba un hombre sentado tras una mesa gigantesca. Elegante. Cabello largo peinado hacia atrás. Abrigo blanco lleno de detalles dorados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y una mirada de alguien que valoraba los objetos más que a las personas."
    },
    {
      type: "background",
      image: "Isla_Tempestaria_Fondo_Valerio Gildrack.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio Gildrack."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "\"El Buitre de las Reliquias\"."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Uno de los mayores coleccionistas del Grand Line."
    },
    {
      type: "inspect",
      image: "Isla_Tempestaria_Presentación_Valerio_Gildrack.png",
      alt: "Presentación de Valerio Gildrack",
      autoOpen: true
    },
    {
      type: "clearCharacters"
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94,
      animation: "enter"
    },
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
      position: "center",
      animation: "enter"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "right",
      scale: 0.94,
      animation: "enter"
    },
    {
      type: "character",
      id: "valerio",
      name: "Valerio",
      image: "Valerio.png",
      accent: "#b58de8",
      accentDark: "#5d3c8c",
      position: "far-right",
      animation: "enter"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio observó a Mako en silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego miró la brújula que ella aún llevaba colgada a la cintura."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Devuélvemela."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako dejó la brújula sobre la mesa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Primero quiero dejar claro que esto ha sido un malentendido competitivo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Has entrado en mi almacén privado."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sí."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Has esquivado a mis guardias."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Correcto."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Y has robado una reliquia valiosa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levantó un dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Pero antes de eso me dijeron: \"No tendrás valor para hacerlo.\""
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Segundo dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y luego: \"Aunque lo intentes, no lo conseguirás.\""
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eso no es una advertencia. Eso es prácticamente una invitación."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Uno de los guardias suspiró cansado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio se masajeó el puente de la nariz."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Mako..."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Además lo conseguí. Lo que sinceramente demuestra problemas graves en vuestro sistema de seguridad."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Lo que demuestra es que eres un dolor de cabeza."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Gracias."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio se levantó lentamente. Caminó hasta ellos. El viento hacía vibrar las ventanas de la mansión."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Por esta vez, te perdonaré."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrió orgullosa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sabía que apreciarías el talento."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Pero si vuelvo a atraparte robándome..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miró a los cuatro."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Os encerraré a todos en mis calabozos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Al fin una consecuencia lógica."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Rocky dio un paso adelante."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Eh... ya que estamos aquí... ¿Ha visto alguna vez un círculo fragmentado en cinco partes, como un símbolo?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio lo observó fijamente, en silencio. Luego negó lentamente con la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Muchacho, colecciono miles de cosas. Pero esto no me suena de nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intercambió una mirada con Rocky."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observó al coleccionista con desconfianza. Como si no estuviera seguro de si decía la verdad."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "background",
      image: "Isla_Tempestaria_Fondo_Opción B.jpeg"
    },
    {
      type: "clearCharacters",
      ids: ["valerio"]
    },
    {
      type: "character",
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "far-left",
      scale: 0.94
    },
    {
      type: "character",
      id: "rocky",
      name: "Rocky",
      image: "rocky_normal.png",
      accent: "#f2bf57",
      accentDark: "#9b682b",
      position: "left"
    },
    {
      type: "character",
      id: "reina",
      name: "Reina",
      image: "reina_normal.png",
      accent: "#f28cae",
      accentDark: "#9b4563",
      position: "center"
    },
    {
      type: "character",
      id: "minutu",
      name: "Minutu",
      image: "minutu.png",
      accent: "#8fc4f2",
      accentDark: "#436f96",
      position: "right",
      scale: 0.94
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Poco después los expulsaron de la mansión. La enorme puerta se cerró tras ellos. CLONK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento volvió a golpearlos de lleno."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako caminaba hacia atrás mirándolos."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Ahora necesito contexto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Contexto?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sí. ¿Por qué demonios le habéis preguntado eso al tipo más obsesionado con los objetos raros de toda Tempestaria?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky suspiró."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces le contaron la historia. La abuela. El mapa. Las cinco islas. Los objetos. El One Piece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako escuchó sorprendentemente atenta. Incluso Minutu dejó de quejarse unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cuando terminaron, Mako se quedó callada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Eso es muchísimo más interesante que un robo normal."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Crees que él sabe algo?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Quizá."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Quizá?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esta noche hay una fiesta en la mansión."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Muchísima gente rica. Coleccionistas. Mercaderes. Subastas privadas."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Suena divertido."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Suena a una cadena de malas decisiones. Podríamos intentar hablar con él."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako empezó a caminar sonriendo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Decidid."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento silbaba entre las calles de Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y la mansión iluminada brillaba a lo lejos sobre el risco."
    },
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "A) Entrar en la fiesta e intentar hablar otra vez con Valerio Gildrack.",
          nextScene: "tempestaria_fiesta_hablar"
        },
        {
          text: "B) Colaros en la mansión y buscar vosotros mismos el objeto.",
          nextScene: "tempestaria_mansion_colarse"
        }
      ]
    }
  ]
});
