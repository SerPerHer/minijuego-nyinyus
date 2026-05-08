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
      text: "La aguja de la brujula apuntaba hacia una zona del mar donde las corrientes parecian completamente desquiciadas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Incluso desde lejos, la isla parecia un caos."
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
      text: "Molinos enormes inclinandose bajo la fuerza del viento."
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
      text: "El Nyinyus avanzaba dando tumbos entre corrientes aereas imposibles."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu sujetaba el timon con expresion funeraria."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esto ya estaba mal planteado desde el momento en que el mapa decia \"sumate al viento\"."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "VAMOS. Es divertido."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esa frase suele preceder a accidentes maritimos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina observo la isla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La gente corria. No caminaban o paseaban. Corrian constantemente. Saltaban entre plataformas. Se agarraban a postes. Usaban telas tensadas para impulsarse. Y aun asi el viento no se los llevaba. Casi."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Como vive aqui esta gente?"
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una rafaga atraveso el barco."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Mal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutos despues, los tres caminaban por el puerto principal. O al menos lo intentaban."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugia entre los edificios como un monstruo vivo. Todos los puestos estaban anclados con cadenas. Las mesas clavadas al suelo. Las farolas dobladas. La gente gritaba para poder escucharse."
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
      text: "Si alguien me explico como sobrevivir aqui, claramente no lo escuche porque el viento se llevo la conversacion."
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
      text: "Mucho estruendo. Algo venia hacia ellos. Rapido. Muy rapido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres se giraron. Una chica atravesaba el puerto corriendo como si el viento no existiera. Saltaba entre cajas. Pisaba barriles. Usaba las rafagas para impulsarse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y detras de ella: tres hombres enormes."
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
      text: "TECNICAMENTE LO HE CONSEGUIDO, ASI QUE ESO CUENTA COMO VICTORIA."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No me gusta la energia de esta situacion."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces ocurrio. Reina perdio el agarre. El viento la arranco del suelo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "REINA."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La rafaga la elevo hacia el cielo. Todo ocurrio rapido. Demasiado rapido. Mako vio a Reina. Salto sobre una caja. Luego a un barril medio suspendido. Luego al toldo de un tenderete."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako salio disparada. Agarro a Reina de la cintura en el aire. Y ambas cayeron rodando contra el suelo como un saco de piedras."
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
      text: "Estais bien?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se incorporo lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako seguia tumbada en el suelo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vaya... He salvado una persona. Voy claramente primera."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Con quien compites?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Nadie... Todos?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres hombres gritaban a traves del puerto."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "AHI ESTA."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se levanto tranquilamente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Que has robado exactamente?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako saco una pequena brujula metalica del bolsillo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esto."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Perfecto. Ya estamos implicados en un delito maritimo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Oh no no no. Escuchad el contexto. Me dijeron: no tendras valor para hacerlo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Levanto un dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Luego dijeron: aunque lo intentes, no lo conseguiras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otro dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y yo pense... Eso no es basicamente una invitacion?"
    },
    {
      type: "dialogue",
      speaker: "Hombres",
      text: "DEVUELVELA."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y ENCIMA lo consegui. Deberian darme las gracias."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky empezo a reirse."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Me estoy empezando a marear."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Perdon por eso. No puedo evitarlo cuando me emociono. En fin... quiza ahora os culpen tambien."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Quiza?"
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
      text: "Cual?"
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
      text: "Vamos. Cogedme la mano. Os llevare a un sitio seguro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Detras de ellos, los hombres empezaban a acercarse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugia entre los edificios."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La brujula brillaba en la mano de Mako."
    },
    {
      type: "choice",
      text: "Que haceis?",
      options: [
        {
          text: "A) Cogeis la mano de Mako y escapais con ella.",
          nextScene: "tempestaria_escapar_con_mako"
        },
        {
          text: "B) No confiais en ella y os quedais.",
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
      text: "Rocky miro la mano de Mako."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego a los tres hombres acercandose."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego a Minutu."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Quiero dejar claro que estadisticamente esta decision nos llevara a un problema mucho mayor."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si. Vamos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina suspiro. Y le cogio la mano. Rocky hizo lo mismo inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu los observo en silencio unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Perfecto. Moriremos siguiendo a una persona cuyo plan consiste en no tener plan."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eso es espiritu de equipo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y salio corriendo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El mundo se convirtio en viento. Mako atravesaba Tempestaria a una velocidad absurda mientras los otros tres eran practicamente arrastrados detras de ella."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Parecia una cometa tirando de otras tres cometas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Saltaba barandillas. Se impulsaba con rafagas. Pisaba paredes inclinadas. Usaba telas tensadas entre edificios como trampolines."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "ESTO ES INCREIBLE."
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
      text: "Reina apenas conseguia mantener los ojos abiertos por el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y aun asi, Mako no salia volando. Ni siquiera parecia costarle."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "COMO NO TE ARRASTRA EL VIENTO."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "CORRO MAS RAPIDO QUE EL."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso no tiene ningun sentido fisico."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claro que no. Estamos en Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron a una pequena zona elevada de la ciudad. Las casas estaban construidas unas sobre otras, sujetas con cadenas gigantescas clavadas entre si."
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
      text: "Mako abrio una puerta de una patada."
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
      text: "La casa era pequena. Y estaba completamente llena de cosas. Libros. Herramientas. Mapas. Cuerdas. Objetos extranos. Cosas claramente valiosas mezcladas con basura absoluta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Habia incluso un remo colgado del techo por algun motivo. La casa se balanceaba ligeramente con el viento exterior."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observo alrededor."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Esto parece el almacen de un pirata con Diogenes tactico."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Gracias."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky cogio un objeto raro de una estanteria."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Que es esto?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No tengo ni idea. Pero lo gane."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Como?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Competicion de gritos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Por supuesto que existe eso aqui."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Tras unos minutos recuperandose del viaje, Reina saco el mapa. El viejo pergamino se abrio sobre la mesa. Las cinco marcas seguian brillando debilmente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en el centro, el simbolo. Un extrano grabado circular dividido en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se inclino sobre el. Por primera vez desde que la conocian, parecio concentrarse de verdad."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Hmm."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Te suena?"
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
      text: "No me gusta como suena esta frase."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sabe muchisimo sobre reliquias antiguas. Objetos extranos. Simbolos raros. Cosas de viejos piratas."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Y donde esta?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Bueno... tecnicamente casi lo conoceis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu cerro los ojos lentamente."
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
      text: "Le quitaste una brujula y ahora te persiguen tres hombres."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levanto un dedo."
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
      text: "Y ademas practicamente me retaron a hacerlo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso no convierte el crimen en algo bueno."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "En Tempestaria si."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeo las ventanas. Mako se dejo caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esta noche hara una fiesta en su mansion."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Una fiesta?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sip. Invita a comerciantes, nobles, coleccionistas y gente rica que huele a perfume caro y decisiones cuestionables."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Y crees que tiene uno de los objetos?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si alguien en esta isla sabe algo sobre vuestro simbolo, es el."
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
      text: "Por que me estais mirando asi?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Porque eso suena aburridisimo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Un poco si."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se inclino sobre la mesa con una sonrisa enorme."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Entonces, que os parece si...?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La casa crujio con el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La tormenta rugia fuera."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y la siguiente decision quedo suspendida en el aire."
    },
    {
      type: "choice",
      text: "Que haceis?",
      options: [
        {
          text: "A) Intentar hablar con el coleccionista durante la fiesta.",
          nextScene: "tempestaria_fiesta_hablar"
        },
        {
          text: "B) Colaros en la mansion para buscar el objeto por vuestra cuenta.",
          nextScene: "tempestaria_mansion_colarse"
        }
      ]
    }
  ],

  tempestaria_fiesta_hablar: [
    {
      type: "background",
      image: "FONDO OPCIÃ“N 1.jpeg"
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
      text: "La mansion Gildrack brillaba sobre los acantilados de Tempestaria como un palacio suspendido en mitad de la tormenta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La lluvia golpeaba los enormes ventanales. Los relampagos iluminaban las torres doradas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y dentro, la fiesta rugia casi tan fuerte como el viento exterior."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Musica. Copas. Risas exageradas. Nobles vestidos con telas imposibles. Coleccionistas presumiendo de reliquias absurdas. Mercaderes intentando impresionarse entre ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Habia piratas refinados, millonarios extravagantes, aristocratas del Grand Line y personas tan ricas que probablemente nunca habian cargado una caja en su vida."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo brillaba demasiado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entre toda aquella opulencia, Mako llevaba un vestido precioso. Elegante. Oscuro. Con detalles rosados que se movian con el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un vestido que quiza, y solo quiza, habia cogido prestado. Para luego no devolverlo nunca."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina iba espectacular. Elegante. Serena. Con una presencia que hacia que incluso la gente se apartara ligeramente al verla pasar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sorprendentemente, hasta Rocky y Minutu habian conseguido arreglarse bastante bien."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Aunque Minutu parecia un hombre atrapado en una experiencia social contra su voluntad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Frente a la entrada principal, un guardia les corto el paso."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "Invitacion."
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
      text: "Reina dio un paso al frente. Y por un instante, parecio completamente parte de aquel mundo. Levanto ligeramente la barbilla."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Venimos de muy lejos para traerle una reliquia al senor Gildrack."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El guardia dudo."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Y puedo asegurarte que no estara contento si nos haceis esperar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento hizo ondear su vestido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El guardia trago saliva."
    },
    {
      type: "dialogue",
      speaker: "Guardia",
      text: "P-pueden pasar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu la miro impresionado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrio."
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
      text: "La fiesta era incluso mas absurda por dentro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Aranas de cristal colgaban sujetas con cadenas de piedras preciosas. Instrumentos sonaban sobre plataformas flotantes. Habia esculturas traidas de islas lejanas y animales exoticos paseando entre invitados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En una esquina, dos nobles discutian sobre que espada antigua tenia mas aura."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Quiero robarles solo por la conversacion."
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
      text: "Decidisteis separaros para encontrar a Valerio antes. Y vaya si lo encontrasteis. O mejor dicho, el os encuentra primero."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un pequeno revuelo empieza a formarse cerca de la sala principal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cuando os acercais, veis a Mako delante de Valerio Gildrack."
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
      text: "Que haces exactamente en mi fiesta?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrio inocentemente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Solo he venido a divertirme."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cogio una copa de la bandeja de un camarero que pasaba cerca. Se la bebio entera."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vaya. Esto esta buenisimo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y ahi empezo el desastre."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El grupo termino reuniendose alrededor de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako ya estaba claramente mas alegre. Mucho mas alegre. Se apoyo ligeramente sobre Valerio y le dio un empujoncito."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y si jugamos a un juego?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio suspiro profundamente."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Temo muchisimo la continuacion de esa frase."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si ganamos nosotros..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Le senalo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Nos das algo que queramos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego se senalo a si misma."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y si perdemos..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sonrio."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Te damos lo que quieras. Jeje."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estamos apostando cosas y aun no se cuales son."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio observo al grupo. Luego sonrio ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Acepto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Que?"
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
      text: "Y sorprendentemente, Rocky arraso. Saco sus pasos prohibidos y los dejo a todos con la boca abierta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Nadie entendia como. Pero en algun momento empezo la musica, comenzo a bailar, la gente hizo espacio y toda la fiesta termino mirando."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Incluso Valerio parecia impresionado."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "VAMOS ROCKY. LOS ESTAS DESTRUYENDO A TODOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante un rato, todo dejo de importar. La mision. El mapa. El One Piece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Solo hubo musica, risas, copas, viento golpeando los ventanales y la sensacion de estar viviendo una aventura."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todos bailaban. Todos reian. Todos excepto Minutu."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Observaba la escena con expresion de hombre al borde de un aneurisma cerebral. Aunque en el fondo, muy en el fondo, tambien estaba disfrutando un poco viendo a todos tan felices."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente, la musica termino."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio suspiro."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Una apuesta es una apuesta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miro al grupo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Que quereis?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina dio un paso adelante."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Queremos que nos digas cual es el objeto que tiene el circulo fragmentado en cinco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La sonrisa de Valerio desaparecio lentamente. El ambiente cambio."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeo los ventanales."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Intente que no os metierais en esto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Pero parece que ya habeis decidido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miro directamente a Mako."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Es la brujula."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "La que Mako tan amablemente sustrajo de mi almacen."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako hizo una pequena reverencia orgullosa."
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
      text: "Reina cruzo los brazos."
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
      text: "Rocky ha ganado de sobra y lo sabes. Cualquier otro premio no seria justo, verdad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako aparecio al lado de Rocky comiendo palomitas de algun lugar desconocido."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Uou... Que poder de persuasion. Es increible."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miraba enamorado a Reina."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Si, lo es."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "De donde han salido esas palomitas?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "No es relevante ahora mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio cerro los ojos unos segundos. Como un hombre aceptando que el universo lo odiaba personalmente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente suspiro."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Esta bien."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio dio media vuelta y fue a hablar con uno de sus sirvientes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina tambien."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces Mako se paso la mano por la frente, exageradamente."
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
      text: "La verdadera brujula era tan bonita que la escondi."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La que llevaba encima era una falsificacion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu se quedo completamente inmovil."
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
      text: "Entonces sera mejor que nos marchemos. Ya."
    },
    {
      type: "background",
      image: "FONDO OPCIÃ“N 1.jpeg"
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
      text: "Y asi, despues de colarse en una fiesta imposible, enganar guardias, bailar por una reliquia legendaria y sobrevivir socialmente a Mako, el grupo abandono la mansion bajo la tormenta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugia sobre Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y mientras iban hacia la pequena casa balanceante de Mako, por primera vez desde que comenzo el viaje, ya no parecian simplemente viajeros."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Parecian empezar a convertirse en una verdadera tripulacion."
    },
    {
      type: "goto",
      nextScene: "tempestaria_final"
    }
  ],

  tempestaria_mansion_colarse: [
    {
      type: "background",
      image: "FONDO OPCIÃ“N  2 .jpeg"
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
      text: "La tormenta envolvia la mansion Gildrack mientras las luces de la fiesta brillaban entre los enormes ventanales."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Musica. Copas. Risas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y, deslizandose entre las sombras exteriores del edificio: cuatro personas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observaba la pared de la mansion con expresion de absoluto sufrimiento psicologico."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Podriamos estar dentro hablando civilizadamente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si, pero no es esto muchisimo mejor?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Tiene un poco de razon."
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
      text: "Moverse por la mansion resulto mucho mas complicado de lo esperado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Habian duplicado la seguridad. Guardias en cada pasillo. Sensores de viento colocados en ventanas abiertas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako avanzaba agachada. Completamente concentrada. Por primera vez desde conocerla, parecia profesional."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Eso antes no estaba asi."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Antes?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La ultima vez que me cole."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Fantastico."
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
      text: "Mako levanto el puno inmediatamente. Todos se detuvieron."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La voz venia de una habitacion cercana. Una puerta entreabierta. Valerio Gildrack. Y estaba hablando con alguien."
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
      text: "Hay gente preguntando por el simbolo del Quinto Elemento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Saben algo?"
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
      text: "Aun lo tienes en tu posesion?"
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Por... Por supuesto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un pequeno titubeo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Esta en la segunda habitacion de la tercera planta bajo vigilancia."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Que siga asi."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrio mucho los ojos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina la miro inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrio, expectante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu fruncio el ceno."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Y ahora que?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrio lentamente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claramente debemos ir a esa habitacion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Ademas, tengo que confirmar algo."
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
      text: "Mako reacciono inmediatamente. Se puso delante del grupo y empezo a guiarlos por la mansion como si realmente fuera suya."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Subieron escaleras. Atravesaron habitaciones. Pasaron por corredores llenos de reliquias imposibles. Hasta llegar a la segunda habitacion de la tercera planta."
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
      text: "La habitacion estaba llena de objetos extranos: mascaras antiguas, armas ornamentales, joyas, mapas y reliquias de lugares que probablemente ni existian ya."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo expuesto en vitrinas iluminadas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces lo vieron. Una vitrina distinta al resto. Mas protegida. Con un pequeno cartel metalico."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y grabado en el, el simbolo. El circulo fragmentado en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Nos mintio cuando dijo que no sabia lo que era el circulo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Pues claro. Que esperabas? Que se hubiera hecho rico diciendo la verdad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dentro de la vitrina habia un objeto cubierto por una tela dorada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se acerco lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako observaba en silencio. Como si estuviera esperando confirmar algo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Rocky apoyo la mano sobre la vitrina."
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
      text: "Y despues: WIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La alarma empezo a sonar por toda la mansion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu cerro los ojos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Genial. Tenemos exactamente tres minutos, veintinueve segundos y treinta y seis milisegundos para salir de aqui."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Pero aun no tenemos el objeto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako empezo a reirse salvajemente."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "He ganado. He ganado. JAJAJA."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Que?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Ahora toca fuga con persecucion. Mi momento favorito."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Estamos siguiendo a una loca. Vamos a acabar en prision."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Venga. Vamonos. Ya lo volveremos a intentar ahora que sabemos donde esta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces la puerta del pasillo se abrio de golpe. Dos guardias."
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
      text: "CUAL ERA EL A?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "NO SER DETECTADOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los guardias empezaron a perseguirlos inmediatamente. Mas pasos empezaban a escucharse por toda la mansion. La alarma seguia sonando."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako giro la cabeza hacia el grupo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y por primera vez desde conocerla, hablo completamente en serio."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Yo me encargo."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Que?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vosotros huid."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "No vamos a dejarte aqui."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Claro que si. Porque voy ganando."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Eso sigue sin significar nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrio. Luego senalo una direccion."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Mi casa esta en la zona alta del puerto. Tercera plataforma. Puerta rosa. Nos vemos alli."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dudaron solo un instante. Pero mas guardias empezaban a llegar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Asi que echaron a correr. Saltando entre pasillos. Escaleras. Puertas. Hasta desaparecer de la mansion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y mientras huian, escucharon la voz de Mako resonando detras de ellos. Cada vez mas rapida. Mas fuerte. Mas imposible de entender."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "ESCUCHAD PRIMERO NO ES LO QUE PARECE PORQUE ESTO ES REALMENTE UN MAL ENTENDIDO CON MUCHAS VARIABLES Y ADEMAS SI ESTAIS GRITANDO QUIERO DECIR QUE YO HE GANADO EMOCIONAL MENTE..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego: golpes. Guardias cayendo. Gente mareandose."
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
      text: "El grupo consiguio escapar de la mansion sin demasiados problemas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento de Tempestaria rugia entre las calles mientras corrian hacia la zona alta del puerto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron a la pequena casa inclinada de Mako. Entraron."
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
      text: "Minutu simplemente se dejo caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a desarrollar una enfermedad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pasaron unos minutos. Entonces la puerta se abrio de golpe."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako aparecio despeinada. Sonriendo. Completamente orgullosa de si misma."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Buenas noticias. No os preocupeis. Tengo lo que quereis."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Que?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se dejo caer sobre una silla."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "El objeto que estaba alli era la brujula que robe."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Entonces la tenian ellos?"
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
      text: "Mako sonrio aun mas."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Cuando vi la brujula real, me parecio tan bonita que la escondi."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y la que he llevado encima todo este tiempo era una falsificacion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu se quedo completamente inmovil."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Cada conversacion contigo empeora mi estado mental."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrio un cajon."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y lentamente saco una antigua brujula metalica."
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
      text: "La pequena casa de Mako crujia suavemente con cada rafaga de viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Fuera, Tempestaria seguia rugiendo como una tormenta viva."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dentro, los cuatro estaban sentados alrededor de una mesa llena de mapas, tazas, herramientas extranas y restos de comida que probablemente llevaban ahi mas tiempo del recomendable."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En el centro descansaba la brujula. La autentica. Antigua. Pesada. Con grabados extranos recorriendo el metal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en su interior, probablemente una de las cinco partes del circulo fragmentado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observo la brujula unos segundos. Luego miro al resto."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale... y ahora que?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levanto inmediatamente las manos."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eh. A mi no me mireis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu seguia observando el objeto con el ceno fruncido. Con esa expresion que significaba que estaba pensando muy intensamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Hay una pieza que no encaja del todo. Creo que deberiamos abrirla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio absoluto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrio los ojos horrorizada."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "QUEEEEE?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cogio la brujula entre las manos como si estuvieran amenazando a un cachorro."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y romper esta preciosidad?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Puso una carita tristisima."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina sonrio ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Mako... debemos saber por que este objeto es importante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako abrazo la brujula dramaticamente unos segundos mas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego suspiro derrotada."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale... Pero si se rompe os odiare mucho. Jeje. Nah, en realidad me gustais mucho."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entre los cuatro consiguieron abrir cuidadosamente la brujula."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "CLICK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El mecanismo interno se abrio lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces lo vieron. En la parte interior de la tapa, grabado cuidadosamente sobre el metal, estaba el simbolo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El circulo fragmentado en cinco partes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero no solo eso. Dentro habia una aguja extraible."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu la saco lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Debajo habia unos numeros grabados. Algun tipo de codigo?"
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Que significa eso?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina nego lentamente con la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observo los numeros unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No lo se. Aun."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Pero estoy completamente seguro de que mas adelante necesitaremos esto. Recordad que en la mascara tambien hay unos numeros."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Sera eso lo que debemos buscar en las otras islas?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako miraba la brujula abierta con expresion de absoluta preocupacion maternal."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "La habeis destripado..."
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
      text: "Durante unos segundos, ninguno hablo. Solo miraban la brujula, el mapa y las posibilidades que se abrian delante de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Reina rompio el silencio."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Bueno..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miro hacia la ventana."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Deberiamos irnos antes de que Gildrack decida venir a por nosotros."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu asintio inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Veo logica en tus palabras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrio."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "De acuerdo, pues. Volvamos al Nyinyus y zarpemos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se quedo callada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Algo rarisimo por lo que habian visto. Miro hacia otro lado. Intentando disimular. Pero era evidente. Le daba pena que se fueran."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Habia habido caos. Persecuciones. Problemas. Locura. Pero tambien habia sido divertido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y ahora ellos se irian. Y probablemente no volverian a verse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina la observo unos segundos. Luego sonrio suavemente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Oye."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako levanto la vista."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Quieres venir con nosotros?"
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
      text: "Mako parpadeo una vez."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego otra."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "QUE!?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky empezo a reirse."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Claro. Necesitamos a alguien capaz de correr mas rapido que un huracan."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako se levanto de golpe."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "SI. CLARO QUE SI. HE GANADO AMIGOS."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Salto por encima de la mesa abrazando a Reina y casi tirando una silla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observo la escena con expresion de hombre al que le va a aparecer una ulcera en cualquier momento."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Voy a morir joven."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero aun asi, no se opuso."
    },
    {
      type: "background",
      image: "FONDO TRANSICIÃ“N.jpeg"
    },
    {
      type: "clearCharacters"
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
      id: "mako",
      name: "Mako",
      image: "mako.png",
      accent: "#f27983",
      accentDark: "#8f3944",
      position: "center",
      scale: 0.94,
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
      text: "Y asi, al amanecer del dia siguiente, cuatro figuras abandonaron Tempestaria a bordo del Nyinyus."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dejando atras los vientos huracanados, las calles imposibles y la isla donde hasta respirar parecia una competicion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las corrientes rugian alrededor del barco. El viento podria haber tumbado a un gigante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero ya no importaba demasiado. Porque la tripulacion ya tenia su propio huracan a bordo."
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
      text: "El viento rugia entre los edificios."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los tres hombres seguian acercandose."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina miro a Rocky. Rocky miro a Minutu."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No. No vamos a huir con una desconocida buscada por robo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "\"Buscada\" suena muy dramatico."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Porque ESTAMOS EN MEDIO DE UNA PERSECUCION."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Bueno, si, pero no te preocupes."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los hombres llegaron finalmente hasta ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Uno de ellos senalo directamente a Mako."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "AHI ESTA."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otro senalo al grupo."
    },
    {
      type: "dialogue",
      speaker: "Hombre 2",
      text: "Y ELLOS ESTAN CON ELLA."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Magnifico. Condenados por asociacion delictiva."
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
      text: "Poco despues, los cuatro eran guiados por las calles altas de Tempestaria."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento golpeaba los enormes ventanales de una mansion construida sobre un risco gigantesco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era absurdamente lujosa. Columnas de marmol. Telas flotando con el viento. Aranas de cristal sujetas con cadenas de piedras preciosas. Esculturas traidas de todos los mares."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observaba fascinado."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale... este tipo tiene muchisimo dinero."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Y probablemente muchisima seguridad. Dato relevante ahora mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los hombres los guiaron por largos pasillos repletos de reliquias, armas antiguas, mapas, brujulas y objetos imposibles."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Hasta llegar a un enorme despacho."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Alli los esperaba un hombre sentado tras una mesa gigantesca. Elegante. Cabello largo peinado hacia atras. Abrigo blanco lleno de detalles dorados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y una mirada de alguien que valoraba los objetos mas que a las personas."
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
      image: "Isla_Tempestaria_PresentaciÃ³n_Valerio_Gildrack.png",
      alt: "Presentacion de Valerio Gildrack",
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
      text: "Valerio observo a Mako en silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Luego miro la brujula que ella aun llevaba colgada a la cintura."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Devuelvemela."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako dejo la brujula sobre la mesa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Primero quiero dejar claro que esto ha sido un malentendido competitivo."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Has entrado en mi almacen privado."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si."
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
      text: "Mako levanto un dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Pero antes de eso me dijeron: \"No tendras valor para hacerlo.\""
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Segundo dedo."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Y luego: \"Aunque lo intentes, no lo conseguiras.\""
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Eso no es una advertencia. Eso es practicamente una invitacion."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Uno de los guardias suspiro cansado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio se masajeo el puente de la nariz."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Mako..."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Ademas lo consegui. Lo que sinceramente demuestra problemas graves en vuestro sistema de seguridad."
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
      text: "Valerio se levanto lentamente. Camino hasta ellos. El viento hacia vibrar las ventanas de la mansion."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Por esta vez, te perdonare."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako sonrio orgullosa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Sabia que apreciarias el talento."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Pero si vuelvo a atraparte robandome..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Miro a los cuatro."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Os encerrare a todos en mis calabozos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Al fin una consecuencia logica."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces Rocky dio un paso adelante."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Eh... ya que estamos aqui... Ha visto alguna vez un circulo fragmentado en cinco partes, como un simbolo?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Valerio lo observo fijamente, en silencio. Luego nego lentamente con la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Valerio",
      text: "Muchacho, colecciono miles de cosas. Pero esto no me suena de nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intercambio una mirada con Rocky."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu observo al coleccionista con desconfianza. Como si no estuviera seguro de si decia la verdad."
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
      text: "Poco despues los expulsaron de la mansion. La enorme puerta se cerro tras ellos. CLONK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento volvio a golpearlos de lleno."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako caminaba hacia atras mirandolos."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Ahora necesito contexto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Contexto?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Si. Por que demonios le habeis preguntado eso al tipo mas obsesionado con los objetos raros de toda Tempestaria?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky suspiro."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces le contaron la historia. La abuela. El mapa. Las cinco islas. Los objetos. El One Piece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako escucho sorprendentemente atenta. Incluso Minutu dejo de quejarse unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cuando terminaron, Mako se quedo callada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Vale. Eso es muchisimo mas interesante que un robo normal."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Crees que el sabe algo?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Quiza."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Quiza?"
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Esta noche hay una fiesta en la mansion."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "No."
    },
    {
      type: "dialogue",
      speaker: "Mako",
      text: "Muchisima gente rica. Coleccionistas. Mercaderes. Subastas privadas."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Suena divertido."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Suena a una cadena de malas decisiones. Podriamos intentar hablar con el."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mako empezo a caminar sonriendo."
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
      text: "Y la mansion iluminada brillaba a lo lejos sobre el risco."
    },
    {
      type: "choice",
      text: "Que haceis?",
      options: [
        {
          text: "A) Entrar en la fiesta e intentar hablar otra vez con Valerio Gildrack.",
          nextScene: "tempestaria_fiesta_hablar"
        },
        {
          text: "B) Colaros en la mansion y buscar vosotros mismos el objeto.",
          nextScene: "tempestaria_mansion_colarse"
        }
      ]
    }
  ]
});
