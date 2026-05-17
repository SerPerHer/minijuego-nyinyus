const eireneDialogue = (speaker, text) => ({
  type: "dialogue",
  speaker,
  text
});

const eireneOptionScene = (steps) => [
  {
    type: "clearCharacters"
  },
  {
    type: "background",
    image: "Fondo_Barriles_Eirene.jpeg"
  },
  characterStep("nino", { animation: "enter" }),
  ...steps,
  {
    type: "goto",
    nextScene: "eirene_llegan_piratas"
  }
];

const eireneFightPendingScene = () => [
  {
    type: "clearCharacters"
  },
  {
    type: "background",
    image: "Fondo_Barriles_Eirene.jpeg"
  },
  characterStep("piratas", { animation: "enter" }),
  eireneDialogue("Narrador", "Continuará...")
];

const eireneFightScene = (steps) => [
  {
    type: "clearCharacters"
  },
  {
    type: "background",
    image: "Fondo_Barriles_Eirene.jpeg"
  },
  characterStep("piratas", { animation: "enter" }),
  ...steps,
  {
    type: "goto",
    nextScene: "eirene_celebracion"
  }
];

const eireneVarkoFightScene = (steps) => [
  {
    type: "clearCharacters"
  },
  {
    type: "background",
    image: "Fondo_playa_destrozada.jpeg"
  },
  characterStep("varko_rojo", { animation: "enter" }),
  ...steps,
  {
    type: "goto",
    nextScene: "eirene_post_varko"
  }
];

Object.assign(story, {
  eirene_llegada: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN_3.png"
    },
    eireneDialogue(
      "Narrador",
      "El mar alrededor de Eirene era extrañamente tranquilo. Después del caos de Rabbita. Después de la niebla imposible de Ornithea. Aquella isla parecía… respirar despacio."
    ),
    {
      type: "background",
      image: "Fondo_Isla_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Grandes bosques violetas cubrían prácticamente toda la superficie visible desde el mar. Árboles gigantescos crecían entre acantilados cubiertos por una ligera neblina azulada. Algunas raíces descendían directamente hasta el agua como si la propia isla abrazara el océano."
    ),
    eireneDialogue(
      "Narrador",
      "Y el aire… olía a flores medicinales, madera húmeda y pan recién hecho."
    ),
    eireneDialogue(
      "Narrador",
      "El Nyinyus atracó lentamente en un pequeño puerto construido con madera clara y faroles de papel balanceándose suavemente con el viento."
    ),
    eireneDialogue("Narrador", "La gente de Eirene hablaba bajo."),
    eireneDialogue("Narrador", "Sonreía mucho."),
    eireneDialogue("Narrador", "Y parecía vivir sin prisa."),
    {
      type: "background",
      image: "Fondo_ciudad_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Mako observaba alrededor completamente fascinada."
    ),
    eireneDialogue("Mako", "¡UUAAAAU!"),
    eireneDialogue(
      "Narrador",
      "Reina sonrió ligeramente mientras descendían del barco."
    ),
    eireneDialogue("Reina", "Que tranquila y relajante es esta isla."),
    eireneDialogue("Narrador", "Minutu ajustó ligeramente sus relojes."),
    eireneDialogue(
      "Minutu",
      "En mi experiencia eso significa que algo horrible probablemente está a punto de ocurrir."
    ),
    eireneDialogue(
      "Narrador",
      "Haze estaba tumbada encima de unos barriles mirando el cielo."
    ),
    eireneDialogue("Haze", "El ambiente es suave aquí."),
    eireneDialogue(
      "Narrador",
      "Blue observaba los árboles violetas completamente maravillada."
    ),
    eireneDialogue("Blue", "Nunca había visto una vegetación así…"),
    eireneDialogue("Narrador", "Rocky estiró los brazos."),
    eireneDialogue(
      "Rocky",
      "Bueno… Entonces… ¿comida, descanso y quizá respuestas sobre los objetos misteriosos?"
    ),
    eireneDialogue("Narrador", "Entonces escucharon gritos."),
    eireneDialogue(
      "Narrador",
      "El ambiente tranquilo del puerto se rompió inmediatamente. Dos hombres enormes con abrigos rojos desgastados estaban frente a un pequeño puesto de pan en el mercado cercano."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de ellos sujetaba al anciano panadero por el cuello de la camisa mientras el otro vaciaba brutalmente una caja llena de monedas."
    ),
    characterStep("pirata", { animation: "enter" }),
    eireneDialogue("Pirata", "¿Esto es todo? ¿Eh, viejo?"), 
    characterStep("anciano_triste", { animation: "enter" }),
    eireneDialogue("Narrador", "El anciano temblaba."),
    eireneDialogue(
      "Anciano",
      "E-es todo lo que he conseguido esta semana… por favor…"
    ),
    eireneDialogue(
      "Narrador",
      "El segundo pirata soltó una carcajada. Sus mandíbulas estaban pintadas de rojo oscuro."
    ),
    eireneDialogue("Narrador", "Minutu frunció ligeramente el ceño."),
    eireneDialogue("Minutu", "No parecen precisamente amables."),
    eireneDialogue("Narrador", "Rocky ya estaba avanzando."),
    eireneDialogue("Rocky", "Sí. Voy a detener esto."),
    eireneDialogue(
      "Narrador",
      "Pero antes de que pudiera llegar… una voz tranquila apareció entre la multitud."
    ),
    characterStep("lars", { animation: "enter" }),
    eireneDialogue("?????", "Ya está bien."),
    eireneDialogue(
      "Narrador",
      "Todos giraron la cabeza. Un hombre alto y corpulento avanzaba lentamente hacia los piratas. Cabello morado oscuro recogido hacia atrás. Ropa sencilla. Y unos ojos extrañamente cálidos. Transmitía calma. Pero también… agotamiento."
    ),
    eireneDialogue("Narrador", "Los piratas lo reconocieron inmediatamente."),
    eireneDialogue("Pirata", "Oh. Mira quién aparece."),
    eireneDialogue("Narrador", "El anciano abrió mucho los ojos."),
    eireneDialogue("Anciano", "L-Lars no…"),
    eireneDialogue(
      "Narrador",
      "Lars se colocó lentamente entre el puesto y el viejo panadero."
    ),
    eireneDialogue("Lars", "Dejadlo. Ya habéis cogido suficiente."),
    eireneDialogue("Narrador", "El pirata escupió al suelo."),
    eireneDialogue(
      "Pirata",
      "¿Y tú quién eres para decirnos cuánto es suficiente?"
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Lars simplemente suspiró."),
    eireneDialogue("Lars", "No quiero problemas."),
    eireneDialogue("Narrador", "El segundo pirata sonrió cruelmente."),
    eireneDialogue("Pirata", "Entonces ya sabes cómo funciona esto."),
    eireneDialogue("Narrador", "Y sin previo aviso…"),
    eireneDialogue("Narrador", "BOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Un puñetazo brutal impactó directamente contra el rostro de Lars."
    ),
    eireneDialogue("Narrador", "Mako dio un pequeño paso adelante."),
    eireneDialogue("Mako", "¡¿Pero qué?!"),
    eireneDialogue(
      "Narrador",
      "Lars ni siquiera respondió. Ni se defendió. Simplemente permaneció quieto. Entonces llegó el segundo golpe."
    ),
    eireneDialogue("Narrador", "BOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Esta vez más fuerte. Sangre descendió lentamente por la comisura de su boca. Pero Lars seguía sin moverse. Sin rabia. Sin miedo. Solo cansancio."
    ),
    eireneDialogue("Narrador", "Los piratas soltaron varias carcajadas."),
    eireneDialogue("Pirata", "Buen chico. Así nos gusta."),
    eireneDialogue(
      "Narrador",
      "Le dieron una última patada al puesto antes de alejarse tranquilamente entre el mercado. Y lo peor… es que nadie parecía sorprendido."
    ),
    {
      type: "clearCharacters",
      ids: ["pirata"]
    },
    eireneDialogue(
      "Narrador",
      "El silencio quedó suspendido en el puerto. El anciano empezó a llorar."
    ),
    eireneDialogue("Anciano", "Lo siento… Lo siento mucho…"),
    eireneDialogue(
      "Narrador",
      "Lars se limpió lentamente la sangre de la boca. Y entonces… sonrió."
    ),
    eireneDialogue("Lars", "No pasa nada. Mientras usted esté bien."),
    eireneDialogue("Narrador", "Rocky apretó los puños. Muy fuerte."),
    eireneDialogue(
      "Narrador",
      "Reina observaba a Lars completamente seria."
    ),
    eireneDialogue("Narrador", "Blue parecía indignada."),
    eireneDialogue("Narrador", "Mako directamente furiosa."),
    eireneDialogue(
      "Narrador",
      "Minutu analizaba la situación con expresión oscura."
    ),
    eireneDialogue(
      "Narrador",
      "Y Haze… simplemente observaba a Lars como si intentara entender algo."
    ),
    eireneDialogue("Narrador", "Finalmente Rocky avanzó."),
    eireneDialogue(
      "Rocky",
      "Oye. ¿Por qué demonios no les has devuelto los golpes?"
    ),
    eireneDialogue(
      "Narrador",
      "Lars levantó lentamente los ojos hacia ellos. Mantuvo la mirada sobre Rocky unos segundos. Luego simplemente suspiró."
    ),
    eireneDialogue(
      "Lars",
      "Porque si lo hacía… Mañana volverían siendo veinte."
    ),
    eireneDialogue(
      "Narrador",
      "Entonces, se giró hacia el anciano del puesto. El pobre hombre seguía temblando sentado junto a las cajas de pan volcadas."
    ),
    eireneDialogue(
      "Narrador",
      "Lars se arrodilló lentamente frente a él."
    ),
    eireneDialogue("Lars", "Eh. Respire despacio, ¿sí? Ya ha pasado."),
    eireneDialogue(
      "Narrador",
      "El anciano intentó hablar. Pero apenas podía."
    ),
    eireneDialogue(
      "Narrador",
      "Lars le colocó suavemente una mano sobre el hombro. Y entonces una especie de energía translúcida empezó a surgir lentamente del cuerpo de Lars. No parecía electricidad. Ni humo. Parecía luz. Suaves tonos violáceos y azulados flotaron lentamente alrededor de ambos."
    ),
    eireneDialogue("Narrador", "Blue abrió ligeramente los ojos."),
    eireneDialogue("Blue", "¿Qué es eso…?"),
    eireneDialogue(
      "Narrador",
      "La energía se deslizó hacia el anciano como una corriente cálida. Y poco a poco… el hombre dejó de temblar. Su respiración se estabilizó. Sus hombros se relajaron. Incluso sus lágrimas disminuyeron."
    ),
    {
      type: "clearCharacters",
      ids: ["anciano_triste"]
    },
    characterStep("anciano_contento", { animation: "enter" }),
    eireneDialogue("Anciano", "Yo… Ya estoy mejor…"),
    eireneDialogue(
      "Narrador",
      "Pero entonces la energía regresó lentamente hacia Lars. Y en cuanto volvió a entrar en él… algo cambió. Sus hombros cayeron ligeramente. Su respiración se volvió más pesada. Y el color de su rostro empeoró un poco."
    ),
    eireneDialogue("Narrador", "Mako parpadeó."),
    eireneDialogue("Mako", "Pareces agotado."),
    eireneDialogue("Narrador", "Lars simplemente sonrió débilmente."),
    eireneDialogue("Lars", "Un poco."),
    eireneDialogue(
      "Narrador",
      "Se levantó despacio. Y justo al dar un paso… se tambaleó ligeramente. Rocky reaccionó al instante sujetándolo del brazo antes de que perdiera el equilibrio."
    ),
    eireneDialogue("Rocky", "Eh. Tranquilo."),
    eireneDialogue(
      "Narrador",
      "Lars pareció algo sorprendido por el gesto. Como si no estuviera acostumbrado a que alguien lo sostuviera a él."
    ),
    eireneDialogue(
      "Narrador",
      "Blue ya se había acercado observando el golpe de la boca."
    ),
    eireneDialogue("Blue", "Tienes el labio roto."),
    eireneDialogue("Lars", "No es nada."),
    eireneDialogue("Blue", "Eso no lo decides tú."),
    eireneDialogue("Narrador", "Mako asintió inmediatamente."),
    eireneDialogue("Mako", "Correcto. La científica ha hablado."),
    eireneDialogue(
      "Narrador",
      "Haze seguía observándolo en silencio. Muy fijamente. Como si estuviera escuchando algo que los demás no podían oír."
    ),
    eireneDialogue("Narrador", "Reina sonrió ligeramente."),
    eireneDialogue(
      "Reina",
      "Vamos. Te invitamos a un té antes de que te desmayes aquí mismo."
    ),
    eireneDialogue("Narrador", "Minutu ajustó sus relojes."),
    eireneDialogue(
      "Minutu",
      "Y preferiblemente en un lugar donde no puedan venir a extorsionarnos también."
    ),
    eireneDialogue(
      "Narrador",
      "Lars soltó una pequeña risa cansada. Y finalmente aceptó."
    ),
    {
      type: "background",
      image: "Fondo_mesa_Te_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Poco después… el grupo se encontraba sentado en una pequeña casa de té construida junto al puerto, rodeada de árboles violetas y campanillas de viento. El ambiente era tranquilo. Demasiado tranquilo para lo que acababan de ver."
    ),
    eireneDialogue(
      "Narrador",
      "Blue terminaba de limpiarle la herida del labio mientras Lars sostenía una taza caliente entre las manos."
    ),
    eireneDialogue("Narrador", "Mako estaba indignadísima."),
    eireneDialogue(
      "Mako",
      "Sigo pensando que deberíamos lanzar a esos tipos al mar."
    ),
    eireneDialogue(
      "Minutu",
      "Sorprendentemente, por una vez estoy parcialmente de acuerdo."
    ),
    eireneDialogue("Narrador", "Rocky apoyó ambos brazos sobre la mesa."),
    eireneDialogue(
      "Rocky",
      "Vale. Ahora en serio. ¿Quiénes eran esos imbéciles?"
    ),
    eireneDialogue(
      "Narrador",
      "El silencio cayó unos segundos. Lars bajó ligeramente la mirada hacia el té. Y pareció realmente agotado."
    ),
    eireneDialogue("Lars", "Los Piratas de la Mandíbula Roja."),
    eireneDialogue("Narrador", "Incluso el nombre sonó desagradable."),
    eireneDialogue(
      "Lars",
      "Controlan las rutas cercanas desde hace años. Exigen dinero. Comida. Medicinas. Y si alguien se niega…"
    ),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Lars", "Destruyen algo. O a alguien."),
    eireneDialogue("Narrador", "Blue frunció el ceño."),
    eireneDialogue("Blue", "¿Y la Marina no hace nada?"),
    eireneDialogue(
      "Narrador",
      "Lars sonrió con una ironía muy cansada."
    ),
    eireneDialogue("Lars", "La Marina dejó de venir hace mucho tiempo."),
    eireneDialogue("Narrador", "Haze seguía observándolo en silencio."),
    eireneDialogue(
      "Haze",
      "Estás cargando con demasiadas cosas tú solo."
    ),
    eireneDialogue(
      "Narrador",
      "Lars levantó lentamente la mirada hacia ella. Sorprendido. Como si esa frase hubiera atravesado algo. Pero antes de responder… afuera. Muy a lo lejos. Se escuchó un cañonazo."
    ),
    eireneDialogue("Narrador", "Lars se levantó de golpe."),
    eireneDialogue("Lars", "Mierda."),
    eireneDialogue("Narrador", "Rocky ya estaba corriendo hacia la salida."),
    {
      type: "background",
      image: "Fondo_Barriles_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El grupo atravesó rápidamente las calles de Eirene siguiendo el humo hasta una pequeña plaza cercana a los almacenes del puerto."
    ),
    eireneDialogue(
      "Narrador",
      "Y cuando llegaron… el desastre era bastante menos apocalíptico de lo esperado."
    ),
    eireneDialogue(
      "Narrador",
      "Un barril había explotado encima de una montaña de cajas, herramientas y chatarra metálica. Hierros. Clavos. Tuberías. Madera. Todo estaba desparramado por el suelo."
    ),
    characterStep("nino", { animation: "enter" }),
    eireneDialogue(
      "Narrador",
      "Y en medio del caos… tres niños completamente paralizados observaban el humo con los ojos llenos de pánico."
    ),
    eireneDialogue("Narrador", "Uno de ellos estaba llorando."),
    eireneDialogue("Niño", "Lo siento… Lo siento… Lo siento…"),
    eireneDialogue(
      "Narrador",
      "Y el tercero parecía a punto de salir corriendo."
    ),
    eireneDialogue(
      "Narrador",
      "Lars observó inmediatamente alrededor. Muy tenso."
    ),
    eireneDialogue(
      "Lars",
      "Ese ruido se ha escuchado por toda la isla…"
    ),
    eireneDialogue("Narrador", "Minutu entendió enseguida."),
    eireneDialogue(
      "Minutu",
      "Y si los Mandíbula Roja creen que ha sido un ataque…"
    ),
    eireneDialogue("Narrador", "Lars asintió lentamente."),
    eireneDialogue("Lars", "Vendrán."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Los niños empezaron a ponerse todavía más nerviosos al escuchar eso."
    ),
    eireneDialogue(
      "Niño",
      "¡N-no queríamos hacerlo! ¡Ha sido sin querer!"
    ),
    eireneDialogue(
      "Rocky",
      "Vaya… Hay que tranquilizar a los niños."
    ),
    {
      type: "clearCharacters"
    },
    characterStep("nino", { animation: "enter" }),
    {
      type: "choice",
      text: "¿Con quién quieres tranquilizarlos?",
      options: [
        {
          text: "Mako",
          nextScene: "eirene_tranquilizar_mako"
        },
        {
          text: "Blue",
          nextScene: "eirene_tranquilizar_blue"
        },
        {
          text: "Minutu",
          nextScene: "eirene_tranquilizar_minutu"
        },
        {
          text: "Haze",
          nextScene: "eirene_tranquilizar_haze"
        },
        {
          text: "Rocky",
          nextScene: "eirene_tranquilizar_rocky"
        },
        {
          text: "Lars",
          nextScene: "eirene_tranquilizar_lars"
        },
        {
          text: "Reina",
          nextScene: "eirene_tranquilizar_reina"
        }
      ]
    }
  ],

  eirene_tranquilizar_mako: eireneOptionScene([
    eireneDialogue("Narrador", "Mako apareció inmediatamente a su lado."),
    eireneDialogue("Mako", "Vale. Tengo un plan increíble."),
    eireneDialogue(
      "Minutu",
      "Eso nunca es una frase tranquilizadora viniendo de ti."
    ),
    eireneDialogue(
      "Narrador",
      "Mako cogió un cubo metálico del suelo. Se lo puso en la cabeza. Y empezó a caminar exageradamente como un robot roto."
    ),
    eireneDialogue(
      "Mako",
      "¡¡ATENCIÓN!! ¡¡YO SOY EL BARRIL MALVADO!! ¡¡Y HE EXPLOTADO PORQUE SOY ESTÚPIDO!!"
    ),
    eireneDialogue("Narrador", "Silencio absoluto."),
    eireneDialogue("Narrador", "Rocky soltó una carcajada inmediata."),
    eireneDialogue("Narrador", "Blue se llevó una mano a la cara."),
    eireneDialogue("Minutu", "No puedo creer que esto esté funcionando."),
    eireneDialogue(
      "Narrador",
      "Porque los niños… habían dejado de llorar. Uno incluso se estaba riendo un poco."
    ),
    eireneDialogue(
      "Narrador",
      "Mako tropezó teatralmente contra unas cajas. El más pequeño soltó una risa fuerte sin poder evitarlo."
    )
  ]),

  eirene_tranquilizar_blue: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Blue se agachó lentamente frente a los niños mientras ajustaba ligeramente sus gafas."
    ),
    eireneDialogue("Blue", "Eh. Miradme un momento."),
    eireneDialogue(
      "Narrador",
      "Los tres levantaron la vista todavía temblando."
    ),
    eireneDialogue(
      "Narrador",
      "Entonces una suave energía azulada apareció alrededor de las manos de Blue. No era agresiva. Ni intensa. Parecía… tranquila. Como agua moviéndose lentamente."
    ),
    eireneDialogue(
      "Narrador",
      "La energía rodeó poco a poco a los niños mientras Blue observaba cuidadosamente sus emociones. Y entonces el miedo empezó a disminuir. Sus respiraciones se estabilizaron. Sus hombros dejaron de temblar. Y el pánico que los llenaba fue transformándose lentamente en calma."
    ),
    eireneDialogue(
      "Narrador",
      "Incluso uno de ellos terminó levantando ligeramente la cabeza."
    ),
    eireneDialogue("Niño", "…¿No estamos en problemas?"),
    eireneDialogue("Narrador", "Blue sonrió apenas un poco."),
    eireneDialogue(
      "Blue",
      "Claro que estáis en problemas. Pero no en peligro."
    ),
    eireneDialogue(
      "Narrador",
      "Mako soltó una pequeña risa. Y poco a poco… los niños dejaron de llorar."
    )
  ]),

  eirene_tranquilizar_minutu: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Minutu colocó los relojes correctamente mientras observaba el barril destrozado, los hierros esparcidos y el radio de la explosión."
    ),
    eireneDialogue("Narrador", "Luego miró a los niños."),
    eireneDialogue(
      "Minutu",
      "Bien. Primero: nadie ha muerto. Segundo: ningún órgano vital ha salido despedido. Tercero: estadísticamente hablando, tenéis más probabilidades de sufrir daños graves bajando unas escaleras mojadas que por esta explosión concreta."
    ),
    eireneDialogue(
      "Narrador",
      "Los niños lo miraban completamente confundidos."
    ),
    eireneDialogue("Narrador", "Minutu señaló el barril."),
    eireneDialogue(
      "Minutu",
      "La presión interna claramente no era suficiente para provocar una detonación letal. Solo una expansión explosiva del metal y la madera."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Uno de los niños parpadeó."),
    eireneDialogue("Niño", "…¿Entonces no ha sido tan grave?"),
    eireneDialogue("Narrador", "Minutu cruzó los brazos."),
    eireneDialogue(
      "Minutu",
      "Objetivamente hablando… ha sido una decisión extremadamente estúpida. Pero no una catástrofe."
    ),
    eireneDialogue("Narrador", "Mako empezó a reírse inmediatamente."),
    eireneDialogue("Mako", "¡JA! ¡Los ha insultado técnicamente!"),
    eireneDialogue("Narrador", "Blue suspiró."),
    eireneDialogue("Blue", "Eso no era exactamente tranquilizador."),
    eireneDialogue(
      "Narrador",
      "Pero poco a poco… los niños dejaron de llorar. Porque aunque Minutu tenía cero tacto emocional… extrañamente parecía saber exactamente de qué estaba hablando."
    )
  ]),

  eirene_tranquilizar_haze: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Haze se sentó tranquilamente sobre una caja volcada junto a los niños mientras observaba la niebla moviéndose entre las calles del puerto."
    ),
    eireneDialogue("Narrador", "Los niños seguían llorando bajito."),
    eireneDialogue(
      "Narrador",
      "Haze permaneció en silencio unos segundos. Luego habló como si continuara una conversación que ya existía en su cabeza."
    ),
    eireneDialogue(
      "Haze",
      "Las aves migratorias también se asustan muchísimo con los sonidos fuertes."
    ),
    eireneDialogue("Narrador", "Los niños la miraron confundidos."),
    eireneDialogue("Narrador", "Haze seguía mirando el cielo."),
    eireneDialogue(
      "Haze",
      "Una vez un albatros chocó contra un farol porque alguien hizo explotar fuegos artificiales cerca del puerto. Se enfadó bastante."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de los niños dejó de llorar un poco."
    ),
    eireneDialogue("Niño", "…¿En serio?"),
    eireneDialogue("Narrador", "Haze asintió lentamente."),
    eireneDialogue(
      "Haze",
      "Sí. Vomitan encima de la gente cuando se enfadan. Mucha cantidad además."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Y entonces uno de los niños soltó una pequeña risa sin querer."
    ),
    eireneDialogue(
      "Narrador",
      "Haze pareció satisfecha consigo misma."
    ),
    eireneDialogue(
      "Haze",
      "Pero luego se les pasa. A las aves y a las personas les pasa igual."
    ),
    eireneDialogue(
      "Narrador",
      "Los niños empezaron a escucharla. Porque hablaba tan tranquila… tan despacio… que era difícil seguir sintiendo pánico cerca de ella."
    ),
    eireneDialogue("Narrador", "Haze señaló entonces el barril roto."),
    eireneDialogue(
      "Haze",
      "Además. Si hubiese sido una explosión realmente peligrosa… creo que yo habría salido corriendo."
    ),
    eireneDialogue("Narrador", "Minutu levantó una ceja."),
    eireneDialogue(
      "Minutu",
      "Eso es sorprendentemente razonable viniendo de ti."
    ),
    eireneDialogue("Haze", "Gracias. Creo.")
  ]),

  eirene_tranquilizar_rocky: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Rocky observó a los niños unos segundos mientras seguían llorando rodeados de humo y barriles destrozados. Entonces se agachó frente a ellos sonriendo."
    ),
    eireneDialogue(
      "Rocky",
      "Vale. Pregunta importante. ¿Alguno sabe volar?"
    ),
    eireneDialogue("Narrador", "Los tres lo miraron confundidos."),
    eireneDialogue("Niño", "…¿Qué?"),
    eireneDialogue("Narrador", "Rocky sonrió todavía más."),
    eireneDialogue("Rocky", "Entonces habrá que practicar."),
    eireneDialogue("Narrador", "Y antes de que pudieran reaccionar…"),
    eireneDialogue("Narrador", "WHOOOSH."),
    eireneDialogue(
      "Narrador",
      "Rocky levantó al más pequeño por los aires como si no pesara absolutamente nada. El niño soltó un grito. Pero no de miedo. De sorpresa."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky empezó a girarlo suavemente mientras caminaba alrededor del desastre como si fuera un avión."
    ),
    eireneDialogue("Rocky", "¡¡EL CAPITÁN BARRIL DESPEGAAAAA!!"),
    eireneDialogue(
      "Narrador",
      "Los otros niños dejaron de llorar casi al instante. Y segundos después Rocky ya llevaba a dos de ellos subidos sobre los hombros mientras corría por la plaza haciendo sonidos absurdos de explosiones."
    ),
    eireneDialogue(
      "Rocky",
      "¡¡BOOOOM!! ¡¡EL PUERTO ESTÁ BAJO ATAQUE!!"
    ),
    eireneDialogue(
      "Narrador",
      "Los niños estaban riéndose a carcajadas. Incluso el tercero terminó corriendo detrás de él olvidándose completamente del miedo."
    ),
    eireneDialogue("Narrador", "Blue suspiró."),
    eireneDialogue("Blue", "…No puedo creer que esto funcione tan bien."),
    eireneDialogue("Narrador", "Minutu cruzó los brazos."),
    eireneDialogue(
      "Minutu",
      "Técnicamente está usando distracción emocional mediante estimulación física positiva."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Mako",
      "Hablas muy raro cuando estás impresionado."
    ),
    eireneDialogue(
      "Narrador",
      "Mientras tanto Lars observaba la escena completamente quieto. Y por primera vez desde conocerlos… sonrió de verdad un poco."
    )
  ]),

  eirene_tranquilizar_lars: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Lars observó a los niños en silencio mientras seguían temblando entre lágrimas. El más pequeño apenas podía respirar bien del miedo. Entonces Lars se acercó lentamente. Se arrodilló frente a ellos. Y habló con una calma extraña. Muy suave."
    ),
    eireneDialogue("Lars", "Eh. Miradme un momento. Solo respirad."),
    eireneDialogue(
      "Narrador",
      "Los niños levantaron la vista hacia él. Y entonces apareció. Aquella energía translúcida comenzó a surgir lentamente alrededor de Lars como una corriente de luz violácea y azulada. No parecía peligrosa. Parecía… cálida."
    ),
    eireneDialogue(
      "Narrador",
      "La energía rodeó lentamente a los niños mientras Lars cerraba ligeramente los ojos. Y poco a poco… el miedo empezó a desaparecer. Las lágrimas disminuyeron. Sus respiraciones dejaron de romperse. La tensión en sus cuerpos se relajó. Era como si alguien estuviera sacando lentamente el pánico fuera de ellos. Y llevándoselo. Hacia Lars."
    ),
    eireneDialogue("Narrador", "Blue observaba completamente atenta."),
    eireneDialogue(
      "Narrador",
      "Porque cuanto más tranquilos parecían los niños… más cansado parecía Lars. Sus hombros empezaron a caer. Su respiración se volvió más pesada. Y pequeñas grietas de agotamiento aparecieron en su expresión. Finalmente la energía regresó completamente hacia él."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Los niños ya no lloraban. Uno de ellos incluso parpadeó confundido."
    ),
    eireneDialogue("Niño", "…Ya no tengo miedo."),
    eireneDialogue("Narrador", "Lars sonrió débilmente."),
    eireneDialogue("Lars", "Mejor así."),
    eireneDialogue(
      "Narrador",
      "Pero al intentar levantarse… se tambaleó ligeramente."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky reaccionó rápido sujetándolo del brazo."
    ),
    eireneDialogue("Rocky", "¡Eepa!."),
    eireneDialogue("Narrador", "Mako frunció el ceño."),
    eireneDialogue("Mako", "Vale. Eso no parece sano."),
    eireneDialogue("Narrador", "Blue observaba a Lars muy seria."),
    eireneDialogue("Blue", "¿Siempre haces esto?"),
    eireneDialogue(
      "Narrador",
      "Lars evitó la pregunta. Y eso… ya era una respuesta."
    )
  ]),

  eirene_tranquilizar_reina: eireneOptionScene([
    eireneDialogue(
      "Narrador",
      "Reina se acercó lentamente a los niños mientras seguían paralizados junto al barril destrozado. No levantó la voz. No hizo grandes gestos. Simplemente se agachó frente a ellos. Tranquila. Presente."
    ),
    eireneDialogue("Reina", "Ei, chicos."),
    eireneDialogue(
      "Narrador",
      "Los tres levantaron la vista poco a poco. Todavía temblaban."
    ),
    eireneDialogue(
      "Narrador",
      "Reina observó el desastre alrededor. Luego volvió a mirarlos a ellos."
    ),
    eireneDialogue(
      "Reina",
      "Ha sido un accidente. Y ahora mismo estáis asustados. Pero eso no significa que estéis solos."
    ),
    eireneDialogue(
      "Narrador",
      "Los niños permanecieron completamente atentos escuchándola. Porque Reina hablaba como alguien que realmente controlaba la situación. Como alguien que no iba a dejar que pasara nada malo."
    ),
    eireneDialogue("Narrador", "Reina señaló entonces al grupo detrás de ella."),
    eireneDialogue(
      "Reina",
      "Nos encargaremos de esto. ¿De acuerdo? No vais a tener que afrontarlo vosotros solos."
    ),
    eireneDialogue(
      "Narrador",
      "El más pequeño apretó ligeramente la manga de su ropa."
    ),
    eireneDialogue("Niño", "…¿No nos van a hacer daño?"),
    eireneDialogue(
      "Narrador",
      "Reina sostuvo su mirada unos segundos. Y sonrió apenas un poco."
    ),
    eireneDialogue("Reina", "No mientras estemos aquí."),
    eireneDialogue(
      "Narrador",
      "Silencio. Pero esta vez… un silencio tranquilo. Poco a poco los niños dejaron de llorar. Sus respiraciones se estabilizaron. Y la tensión empezó a desaparecer de sus rostros."
    ),
    eireneDialogue(
      "Narrador",
      "Mako observaba la escena con los brazos cruzados."
    ),
    eireneDialogue("Mako", "Vale. Eso ha sido muy maternal."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Rocky", "Sí. Da bastante seguridad."),
    eireneDialogue(
      "Narrador",
      "Incluso Lars parecía observar a Reina con cierto respeto silencioso. Como si entendiera perfectamente lo difícil que era transmitir calma real a otros."
    )
  ]),

  eirene_llegan_piratas: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_Barriles_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Una vez que los niños estaban más tranquilos, los enviaron a sus casas y se pusieron todos a recoger el desastre que había allí."
    ),
    eireneDialogue(
      "Narrador",
      "Pero entonces… a lo lejos, escucharon pasos pesados acercándose."
    ),
    eireneDialogue("Narrador", "Lars cerró lentamente los ojos."),
    eireneDialogue("Lars", "Ya vienen."),
    eireneDialogue("Narrador", "Los pasos resonaban cada vez más cerca."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "Pesados. Despreocupados. Violentos."),
    eireneDialogue(
      "Narrador",
      "Lars ya tenía el rostro tenso. Porque conocía perfectamente esos pasos. Y unos segundos después aparecieron."
    ),
    eireneDialogue(
      "Narrador",
      "Cinco hombres avanzando por la calle principal del puerto. Chaquetas rojas desgastadas. Armas amarradas. Mandíbulas pintadas de rojo. Miradas de gente acostumbrada a hacer daño."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de ellos observó inmediatamente el humo y el desastre."
    ),
    characterStep("piratas", { animation: "enter" }),
    eireneDialogue("Piratas", "¿Qué coño ha pasado aquí?"),
    eireneDialogue("Narrador", "Otro vio a Lars. Y sonrió."),
    eireneDialogue(
      "Piratas",
      "Ah. Claro. Tenía que estar el héroe del pueblo metido en medio."
    ),
    eireneDialogue("Narrador", "Lars dio un paso adelante inmediatamente."),
    eireneDialogue(
      "Lars",
      "Ha sido un accidente. Solo unos niños jugando."
    ),
    eireneDialogue(
      "Piratas",
      "¿Y nosotros tenemos cara de preocuparnos por niños?"
    ),
    eireneDialogue(
      "Narrador",
      "Otro de los Mandíbula Roja escupió al suelo mirando el destrozo."
    ),
    eireneDialogue(
      "Piratas",
      "Ese almacén paga tributo. Si algo explota aquí… alguien compensa las pérdidas."
    ),
    eireneDialogue("Narrador", "Lars bajó ligeramente la mirada."),
    eireneDialogue("Lars", "Yo me haré responsable."),
    eireneDialogue("Narrador", "Rocky frunció el ceño. Mucho."),
    eireneDialogue("Narrador", "El pirata sonrió cruelmente."),
    eireneDialogue("Piratas", "Claro que sí."),
    eireneDialogue(
      "Narrador",
      "Y lanzó un puñetazo directo hacia Lars. Pero esta vez…"
    ),
    eireneDialogue("Narrador", "THAK."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El golpe no llegó. Rocky había detenido el puño con una sola mano."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "El pirata levantó lentamente la mirada. Y vio algo que no esperaba. Toda la tripulación ya estaba preparada."
    ),
    eireneDialogue("Narrador", "Reina había adelantado ligeramente un pie."),
    eireneDialogue("Narrador", "Blue observaba fríamente a los enemigos."),
    eireneDialogue("Narrador", "Mako parecía peligrosamente emocionada."),
    eireneDialogue("Narrador", "Minutu ya analizaba rutas y armas."),
    eireneDialogue(
      "Narrador",
      "Haze estaba sentada encima de unos barriles… pero observándolos atentamente."
    ),
    eireneDialogue(
      "Narrador",
      "Y Lars… parecía darse cuenta demasiado tarde de lo que iba a pasar."
    ),
    eireneDialogue("Narrador", "Rocky sonrió lentamente."),
    eireneDialogue(
      "Rocky",
      "Creo que ya me he cansado un poco de vosotros."
    ),
    eireneDialogue(
      "Narrador",
      "Los Mandíbula Roja intercambiaron miradas. Y entonces… sacaron armas."
    ),
    eireneDialogue(
      "Piratas",
      "Perfecto. Entonces os romperemos a vosotros también."
    ),
    {
      type: "clearCharacters"
    },
    characterStep("piratas", { animation: "enter" }),
    {
      type: "choice",
      text: "¿Con quién luchas?",
      options: [
        {
          text: "Rocky",
          nextScene: "eirene_lucha_rocky"
        },
        {
          text: "Reina",
          nextScene: "eirene_lucha_reina"
        },
        {
          text: "Mako",
          nextScene: "eirene_lucha_mako"
        },
        {
          text: "Blue",
          nextScene: "eirene_lucha_blue"
        },
        {
          text: "Minutu",
          nextScene: "eirene_lucha_minutu"
        },
        {
          text: "Haze",
          nextScene: "eirene_lucha_haze"
        },
        {
          text: "Lars",
          nextScene: "eirene_lucha_lars"
        }
      ]
    }
  ],

  eirene_lucha_rocky: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Rocky soltó lentamente el puño del pirata. Y sonrió. No una sonrisa amable. La sonrisa de alguien que acababa de decidir divertirse un poco."
    ),
    eireneDialogue("Rocky", "Vale. Tres contra uno."),
    eireneDialogue("Narrador", "Minutu levantó una ceja."),
    eireneDialogue("Minutu", "¿Por qué específicamente tres?"),
    eireneDialogue("Narrador", "Rocky señaló a los otros dos piratas."),
    eireneDialogue(
      "Rocky",
      "Porque les voy a dar la posibilidad de pensárselo dos veces."
    ),
    eireneDialogue("Narrador", "Mako levantó ambos brazos emocionada."),
    eireneDialogue(
      "Mako",
      "¡¡SÍÍÍ!! ¡¡REPARTO DE VIOLENCIA EQUILIBRADO!!"
    ),
    eireneDialogue("Narrador", "Los Mandíbula Roja gruñeron inmediatamente."),
    eireneDialogue("Piratas", "Maldito imbécil…"),
    eireneDialogue(
      "Narrador",
      "Y los tres se lanzaron contra Rocky al mismo tiempo."
    ),
    eireneDialogue("Narrador", "Error."),
    eireneDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Rocky esquivó el primer golpe y respondió con un puñetazo brutal directo al estómago del pirata más grande. El hombre salió despedido atravesando una pila de cajas."
    ),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Mako empezó a reírse como una psicópata."),
    eireneDialogue("Mako", "¡¡HA VOLADOOO!!"),
    eireneDialogue(
      "Narrador",
      "El segundo pirata intentó atacarlo con una barra metálica."
    ),
    eireneDialogue("Narrador", "CLANG."),
    eireneDialogue(
      "Narrador",
      "Rocky bloqueó el golpe con el antebrazo. Como si no doliera absolutamente nada."
    ),
    eireneDialogue("Piratas", "¿Qué demonios eres tú?"),
    eireneDialogue("Rocky", "Grande."),
    eireneDialogue("Narrador", "Y le estampó la cabeza contra un barril."),
    eireneDialogue("Narrador", "BOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "El barril explotó en pedazos."),
    eireneDialogue(
      "Narrador",
      "El tercer Mandíbula Roja intentó aprovechar la apertura atacándolo por la espalda. Pero Rocky giró sobre sí mismo y le soltó una patada brutal."
    ),
    eireneDialogue("Narrador", "WHOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El pirata atravesó una mesa entera antes de caer inconsciente."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Tres hombres derrotados. En menos de un minuto."),
    eireneDialogue("Narrador", "Rocky se crujió ligeramente el cuello."),
    eireneDialogue("Rocky", "Bueno. Eso ha sido relajante."),
    eireneDialogue("Narrador", "Blue observaba los destrozos."),
    eireneDialogue(
      "Blue",
      "Tu concepto de “relajante” empieza a preocuparme."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu ajustó lentamente sus gafas mientras analizaba a los piratas inconscientes."
    ),
    eireneDialogue("Minutu", "Confirmado. Es absurdamente fuerte."),
    eireneDialogue(
      "Narrador",
      "Mientras tanto Lars observaba a Rocky completamente inmóvil. Sorprendido. Porque por primera vez en mucho tiempo… alguien había plantado cara a los Mandíbula Roja. Sin miedo."
    ),
    eireneDialogue(
      "Narrador",
      "Los dos Mandíbula Roja restantes observaron horrorizados a sus compañeros inconscientes esparcidos por toda la plaza. Uno tragó saliva. El otro intentó mantener la compostura levantando el martillo."
    ),
    eireneDialogue("Piratas", "T-tú…"),
    eireneDialogue(
      "Narrador",
      "Rocky giró lentamente la cabeza hacia ellos. Y sonrió."
    ),
    eireneDialogue("Rocky", "Ah. ¿Seguís aquí?"),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Mako ya estaba subiéndose encima de unas cajas gritando."
    ),
    eireneDialogue("Mako", "¡¡REMATE!! ¡¡REMATE!! ¡¡REMATE!!"),
    eireneDialogue(
      "Minutu",
      "Por supuesto que esto se ha convertido en un espectáculo público."
    ),
    eireneDialogue(
      "Narrador",
      "El pirata del martillo rugió y salió corriendo hacia Rocky."
    ),
    eireneDialogue("Piratas", "¡¡MUERE!!"),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue(
      "Narrador",
      "El enorme martillo descendió directamente hacia su cabeza."
    ),
    eireneDialogue("Narrador", "Rocky lo atrapó con una mano. Silencio absoluto."),
    eireneDialogue("Piratas", "…¿Qué?"),
    eireneDialogue("Narrador", "Rocky ni siquiera parecía esforzarse."),
    eireneDialogue("Rocky", "Pesado."),
    eireneDialogue(
      "Narrador",
      "Y tiró del martillo hacia sí mismo. El pirata perdió completamente el equilibrio. Mala idea."
    ),
    eireneDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Rocky le dio un cabezazo brutal. El hombre cayó completamente inconsciente antes siquiera de tocar el suelo."
    ),
    eireneDialogue(
      "Narrador",
      "El último Mandíbula Roja intentó huir. Literalmente. Se giró y empezó a correr calle abajo."
    ),
    eireneDialogue("Piratas", "¡¡A LA MIERDA ESTO!!"),
    eireneDialogue("Narrador", "Mako señaló emocionadísima."),
    eireneDialogue("Mako", "¡¡SE ESCAPA!!"),
    eireneDialogue("Narrador", "Rocky suspiró. Y agarró un barril roto del suelo."),
    eireneDialogue("Narrador", "Blue abrió ligeramente los ojos."),
    eireneDialogue("Blue", "Rocky no creo que…"),
    eireneDialogue("Narrador", "TOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El barril salió disparado atravesando toda la plaza. Impactó directamente contra el pirata fugitivo."
    ),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El hombre desapareció entre cajas y telas tendidas."
    ),
    eireneDialogue(
      "Narrador",
      "Silencio. Completo silencio. Hasta las gaviotas parecían haberse callado."
    ),
    eireneDialogue("Narrador", "Rocky observó el desastre unos segundos."),
    eireneDialogue("Rocky", "…Creo que se me ha ido un poco la mano."),
    eireneDialogue("Narrador", "Minutu miró la destrucción alrededor."),
    eireneDialogue("Minutu", "¿Un poco?"),
    eireneDialogue("Narrador", "Mako estaba llorando de la risa."),
    eireneDialogue("Mako", "¡¡EL BARRIL VOLADOOOOR!!"),
    eireneDialogue("Narrador", "Blue suspiró profundamente."),
    eireneDialogue("Narrador", "Reina se masajeó el puente de la nariz."),
    eireneDialogue(
      "Narrador",
      "Y Lars… seguía completamente quieto. Mirando a Rocky. Como si acabara de presenciar algo imposible. Porque nadie. Nadie en Eirene… había humillado así a los Mandíbula Roja jamás."
    )
  ]),

  eirene_lucha_reina: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Reina dio un pequeño paso adelante. Solo uno. Pero bastó para que incluso los Mandíbula Roja dudasen un instante."
    ),
    eireneDialogue(
      "Narrador",
      "La niebla violeta de Eirene se movió lentamente alrededor de la plaza mientras el viento agitaba ligeramente su ropa. Y entonces… aparecieron."
    ),
    eireneDialogue(
      "Narrador",
      "Finos lazos rosados de energía comenzaron a manifestarse alrededor de Reina. Elegantes. Suaves. Hermosos. Pero había algo inquietante en ellos. Porque no parecían moverse al azar. Parecían… controlar el espacio."
    ),
    eireneDialogue("Narrador", "Los cinco piratas se tensaron inmediatamente."),
    eireneDialogue("Piratas", "¿Qué demonios es eso…?"),
    eireneDialogue(
      "Narrador",
      "Reina los observó en silencio. Completamente tranquila."
    ),
    eireneDialogue("Reina", "Última oportunidad. Marchaos."),
    eireneDialogue("Narrador", "El líder escupió al suelo."),
    eireneDialogue("Piratas", "Que te den."),
    eireneDialogue("Narrador", "Y cargaron. Todos a la vez."),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Los lazos rosados atravesaron el aire como serpientes de luz. Uno rodeó inmediatamente el brazo del primer pirata antes de que pudiera atacar."
    ),
    eireneDialogue("Narrador", "CRACK."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El hombre cayó al suelo cuando Reina tiró de él violentamente haciéndolo perder completamente el equilibrio."
    ),
    eireneDialogue(
      "Narrador",
      "Otro pirata intentó rodearla por la izquierda. Dos lazos surgieron del suelo atrapándole ambas piernas."
    ),
    eireneDialogue("Narrador", "THUD."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Cayó de cara contra el empedrado."),
    eireneDialogue("Narrador", "El tercer Mandíbula Roja levantó un martillo enorme."),
    eireneDialogue("Piratas", "¡¡MUERE!!"),
    eireneDialogue("Narrador", "WHOOOM."),
    eireneDialogue("Narrador", "El arma descendió brutalmente."),
    eireneDialogue("Narrador", "Pero una barrera rosada apareció frente a Reina."),
    eireneDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El impacto hizo temblar toda la plaza. Y antes de que el pirata entendiera qué acababa de pasar… cinco lazos envolvieron completamente su cuerpo. Inmovilizándolo en el aire."
    ),
    eireneDialogue("Piratas", "¿¡QUÉ COÑO!?"),
    eireneDialogue(
      "Narrador",
      "Reina movió ligeramente la mano. Y el hombre salió disparado contra unas cajas."
    ),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Los dos últimos piratas intentaron escapar hacia calles opuestas. Mala idea. Los lazos rosados se extendieron por toda la plaza como raíces de luz. Sujetaron barriles. Faroles. Cuerdas. Postes. Y en cuestión de segundos… todo el espacio dejó de pertenecerles a ellos. Ahora era territorio de Reina."
    ),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Uno de los piratas quedó atrapado boca abajo colgando de un poste. El otro fue inmovilizado completamente contra el suelo sin poder mover ni un dedo.."
    ),
    eireneDialogue("Narrador", "Absoluto silencio."),
    eireneDialogue(
      "Narrador",
      "Cinco Mandíbula Roja derrotados. Y Reina ni siquiera parecía cansada. Los lazos rosados desaparecieron lentamente alrededor de ella como pétalos llevados por el viento."
    ),
    eireneDialogue("Narrador", "Rocky soltó una carcajada."),
    eireneDialogue("Rocky", "Recuérdame no enfadarte nunca."),
    eireneDialogue(
      "Narrador",
      "Mako seguía mirando los lazos desaparecer completamente fascinada."
    ),
    eireneDialogue("Mako", "Vale. Eso ha sido MUY sexy y MUY aterrador."),
    eireneDialogue(
      "Narrador",
      "Haze observó tranquilamente a los piratas inmovilizados."
    ),
    eireneDialogue("Haze", "Parecen pescado envuelto."),
    eireneDialogue("Minutu", "Sorprendentemente preciso."),
    eireneDialogue(
      "Narrador",
      "Y Lars… seguía completamente inmóvil. Mirando a Reina como si acabara de entender algo importante. Porque ella no había destruido la plaza. Ni aplastado enemigos. Ni perdido el control. Simplemente… había decidido que el combate terminaba ahí."
    )
  ]),

  eirene_lucha_mako: eireneFightScene([
    eireneDialogue("Narrador", "Mako dio un paso adelante. Y sonrió."),
    eireneDialogue("Narrador", "Blue la miró inmediatamente."),
    eireneDialogue("Blue", "No pongas esa cara."),
    eireneDialogue("Mako", "¿Qué cara?"),
    eireneDialogue(
      "Minutu",
      "La cara de “voy a cometer varios crímenes simultáneamente”."
    ),
    eireneDialogue(
      "Narrador",
      "Los cinco Mandíbula Roja se prepararon para atacar. Y Mako desapareció."
    ),
    eireneDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Una explosión de velocidad atravesó la plaza."),
    eireneDialogue("Narrador", "El primer pirata ni siquiera llegó a verla."),
    eireneDialogue("Narrador", "THOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Mako apareció girando en el aire y le estampó una patada directa en la mandíbula. El hombre salió disparado atravesando un puesto de pescado."
    ),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Mako aterrizó encima de un barril riéndose."),
    eireneDialogue("Mako", "¡¡UNO!!"),
    eireneDialogue(
      "Narrador",
      "El segundo pirata rugió y atacó con una barra metálica."
    ),
    eireneDialogue(
      "Narrador",
      "Mako agarró una cuerda colgante de un tejado."
    ),
    eireneDialogue("Narrador", "SWOOOSH."),
    eireneDialogue("Narrador", "Salió disparada balanceándose por toda la plaza."),
    eireneDialogue("Piratas", "¿¡PERO QUÉ!?"),
    eireneDialogue("Narrador", "WHAM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Le dio una doble patada en la cara mientras pasaba volando. El hombre cayó contra una montaña de cajas. Mako aterrizó encima de él."
    ),
    eireneDialogue("Mako", "¡¡DOS!!"),
    eireneDialogue("Narrador", "Rocky estaba llorando de la risa."),
    eireneDialogue("Rocky", "¡¡ESTÁ COMPLETAMENTE LOCA!!"),
    eireneDialogue("Minutu", "Eso ya lo sabíamos."),
    eireneDialogue(
      "Narrador",
      "El tercero intentó atraparla por detrás. Mala idea. Mako literalmente corrió por una pared."
    ),
    eireneDialogue("Blue", "…No debería poder hacer eso."),
    eireneDialogue(
      "Narrador",
      "Mako saltó desde la pared. Giró sobre sí misma en el aire. Y utilizó un barril como martillo improvisado."
    ),
    eireneDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "El pirata desapareció debajo del barril."),
    eireneDialogue("Mako", "¡¡TRES!!"),
    eireneDialogue(
      "Narrador",
      "Los dos Mandíbula Roja restantes empezaron a ponerse nerviosos. Uno levantó un cuchillo temblando."
    ),
    eireneDialogue("Piratas", "¡¿QUÉ DEMONIOS ERES TÚ!?"),
    eireneDialogue("Narrador", "Mako se quedó quieta un segundo. Pensando."),
    eireneDialogue("Mako", "…No lo sé del todo todavía."),
    eireneDialogue("Narrador", "Y volvió a lanzarse."),
    eireneDialogue("Narrador", "WHOOOSH."),
    eireneDialogue(
      "Narrador",
      "La plaza entera se convirtió en caos absoluto. Saltos imposibles. Mesas volando. Barriles explotando. Cuerdas rompiéndose. Faroles cayendo."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu observaba la destrucción con dolor físico real."
    ),
    eireneDialogue(
      "Minutu",
      "Está usando el entorno como arma y catástrofe natural simultáneamente."
    ),
    eireneDialogue("Blue", "Creo que ni ella sabe qué está haciendo."),
    eireneDialogue("Narrador", "Haze observaba tranquilamente desde unos barriles."),
    eireneDialogue("Haze", "El ambiente es violento."),
    eireneDialogue("Narrador", "El cuarto pirata intentó huir. Mako le lanzó un pescado."),
    eireneDialogue("Narrador", "THAK."),
    eireneDialogue("Narrador", "El hombre se giró confundido."),
    eireneDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Patada voladora directa al pecho. Inconsciente."),
    eireneDialogue(
      "Narrador",
      "El último Mandíbula Roja quedó completamente paralizado viendo a Mako acercarse lentamente sonriendo como una absoluta psicópata."
    ),
    eireneDialogue("Piratas", "…No estás bien de la cabeza."),
    eireneDialogue("Mako", "¡¡GRACIAS!!"),
    eireneDialogue("Narrador", "Y le estampó una caja entera encima."),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Silencio. Toda la plaza estaba destrozada. TOTALMENTE destrozada."
    ),
    eireneDialogue(
      "Narrador",
      "Mako respiraba agitadamente en medio del caos con los brazos levantados."
    ),
    eireneDialogue("Mako", "¡¡HE GANADOOO!!"),
    eireneDialogue("Narrador", "Rocky empezó a aplaudir inmediatamente."),
    eireneDialogue("Narrador", "Blue se masajeó las sienes."),
    eireneDialogue(
      "Narrador",
      "Minutu parecía a punto de sufrir un colapso táctico."
    ),
    eireneDialogue(
      "Narrador",
      "Y Lars… observaba a Mako completamente incapaz de decidir si acababa de presenciar una pelea o un desastre natural."
    )
  ]),
  eirene_lucha_blue: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Blue avanzó lentamente. Sin prisas. Ajustándose las gafas mientras observaba a los cinco Mandíbula Roja como si fueran un problema matemático bastante molesto. Los piratas soltaron varias carcajadas."
    ),
    eireneDialogue("Piratas", "¿La niña lista quiere pelear?"),
    eireneDialogue("Narrador", "Blue suspiró."),
    eireneDialogue("Blue", "No especialmente."),
    eireneDialogue(
      "Narrador",
      "Y entonces… sus ojos brillaron ligeramente."
    ),
    eireneDialogue(
      "Narrador",
      "Una energía azulada empezó a expandirse alrededor de la plaza como ondas suaves atravesando el aire. Los Mandíbula Roja dejaron de sonreír. Porque de pronto… algo se sentía raro. Muy raro."
    ),
    eireneDialogue(
      "Narrador",
      "Blue los observaba atentamente. Analizando. Miedo. Rabia. Inseguridad. Violencia. Ego. Todo."
    ),
    eireneDialogue(
      "Blue",
      "Interesante. Sois mucho menos valientes de lo que aparentáis."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de los piratas rugió intentando atacar. Pero se detuvo a mitad de camino. Confundido."
    ),
    eireneDialogue("Piratas", "¿Qué…? ¿Qué coño…?"),
    eireneDialogue(
      "Narrador",
      "De repente el hombre empezó a sentir miedo. Muchísimo miedo. Sin entender por qué."
    ),
    eireneDialogue(
      "Narrador",
      "El segundo pirata intentó ayudarlo."
    ),
    eireneDialogue(
      "Narrador",
      "Blue levantó ligeramente una mano. La energía azulada cambió inmediatamente. Y ahora lo que sintió fue paranoia. Miró a sus compañeros. Luego alrededor. Luego detrás suyo. Como si esperara que algo horrible apareciera de la nada."
    ),
    eireneDialogue("Narrador", "Mako observaba fascinadísima."),
    eireneDialogue("Mako", "Vale. Eso da MUCHO mal rollo."),
    eireneDialogue("Narrador", "Rocky asintió."),
    eireneDialogue("Rocky", "Pero es impresionante."),
    eireneDialogue(
      "Narrador",
      "Blue seguía avanzando. Tranquila. Controlada. Mientras los Mandíbula Roja empezaban a desmoronarse mentalmente. Uno soltó el arma. Otro empezó a gritarle a sus propios compañeros. Uno directamente retrocedió varios pasos."
    ),
    eireneDialogue("Piratas", "¡¿QUÉ NOS ESTÁS HACIENDO!?"),
    eireneDialogue(
      "Narrador",
      "Blue inclinó ligeramente la cabeza."
    ),
    eireneDialogue("Blue", "Honestamente…"),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Blue", "Muy poco. El resto ya estaba dentro de vosotros."),
    eireneDialogue(
      "Narrador",
      "El líder rugió y cargó hacia ella intentando golpearla desesperadamente."
    ),
    eireneDialogue(
      "Narrador",
      "Blue ni siquiera se movió. Porque justo antes de impactar… el hombre sintió algo completamente distinto. Culpa. Toda la culpa acumulada por años."
    ),
    eireneDialogue(
      "Narrador",
      "El pirata se detuvo en seco. Temblando."
    ),
    eireneDialogue(
      "Narrador",
      "Blue lo observó en silencio. Y entonces le dio un pequeño empujón."
    ),
    eireneDialogue("Narrador", "THUD."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El hombre cayó al suelo completamente roto emocionalmente."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Los otros cuatro ya ni siquiera querían pelear. Uno estaba aterrorizado. Otro llorando de rabia. Dos discutiendo entre ellos completamente desorientados."
    ),
    eireneDialogue(
      "Narrador",
      "Y Blue seguía ahí. Quieta. Con aquella energía azulada moviéndose suavemente alrededor."
    ),
    eireneDialogue(
      "Narrador",
      "Haze observaba la escena tranquilamente."
    ),
    eireneDialogue("Haze", "Creo que prefería cuando Rocky lanzaba barriles."),
    eireneDialogue("Reina", "Sí. Esto da bastante más miedo."),
    eireneDialogue(
      "Narrador",
      "Lars permanecía completamente inmóvil. Porque él podía sentir emociones. Pero Blue… las manipulaba como si estuviera reorganizando piezas dentro de la mente de alguien."
    )
  ]),
  eirene_lucha_minutu: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Minutu ajustó lentamente su kimono mientras los cinco Mandíbula Roja sacaban armas. No parecía nervioso. Parecía… decepcionado."
    ),
    eireneDialogue(
      "Minutu",
      "Bien. Cinco enemigos. Puerto estrecho. Demasiados objetos sueltos."
    ),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Minutu", "Esto va a ser ridículamente fácil."),
    eireneDialogue("Narrador", "Mako lo miró sorprendida."),
    eireneDialogue("Mako", "¿TÚ sabes pelear?"),
    eireneDialogue("Minutu", "No. Pero estos son extremadamente predecibles."),
    eireneDialogue(
      "Narrador",
      "Los piratas rugieron y cargaron hacia él. Y entonces Minutu suspiró."
    ),
    eireneDialogue("Minutu", "Tres. Dos. Uno."),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El primero pisó exactamente una tabla mal colocada. La madera cedió. El pirata cayó directamente dentro de una pila de cajas de pescado."
    ),
    eireneDialogue("Minutu", "Puntuales, además."),
    eireneDialogue(
      "Narrador",
      "El segundo intentó atacarlo por la izquierda. Minutu ni siquiera miró. Simplemente dio medio paso atrás."
    ),
    eireneDialogue("Narrador", "WHOOOM."),
    eireneDialogue(
      "Narrador",
      "El hombre chocó de lleno contra una cadena colgante que Minutu había soltado segundos antes. La cadena se enrolló alrededor de sus piernas."
    ),
    eireneDialogue("Narrador", "THUD."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Al suelo."),
    eireneDialogue("Narrador", "Blue observaba completamente fascinada."),
    eireneDialogue("Blue", "¿Has calculado literalmente dónde iban a moverse?"),
    eireneDialogue("Minutu", "Obviamente."),
    eireneDialogue(
      "Narrador",
      "El tercero rugió y levantó una barra metálica enorme."
    ),
    eireneDialogue("Narrador", "Minutu señaló una polea encima suyo."),
    eireneDialogue(
      "Minutu",
      "En exactamente cuatro segundos vas a cometer un error gravísimo."
    ),
    eireneDialogue("Piratas", "¿¡QUÉ!?"),
    eireneDialogue(
      "Narrador",
      "El hombre atacó. Y cuatro segundos después…"
    ),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue(
      "Narrador",
      "La barra golpeó accidentalmente una cuerda de carga. Mala idea."
    ),
    eireneDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Tres barriles enormes descendieron balanceándose desde arriba. Impacto directo. El pirata desapareció bajo los barriles."
    ),
    eireneDialogue("Narrador", "Mako estaba llorando de la risa."),
    eireneDialogue("Mako", "¡¡¿DESDE CUÁNDO ERES MALVADAMENTE INTELIGENTE?!!"),
    eireneDialogue(
      "Minutu",
      "Siempre. Simplemente nadie escucha mis explicaciones."
    ),
    eireneDialogue(
      "Narrador",
      "Los dos Mandíbula Roja restantes empezaron a dudar. Error crítico. Minutu ya estaba varios pasos por delante. Literalmente. Había movido el combate entero hacia una zona concreta del puerto sin que nadie lo notara. Cajas. Cadenas. Poleas. Pasarelas. Ángulos muertos. Todo preparado."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de los piratas intentó rodearlo corriendo."
    ),
    eireneDialogue("Minutu", "Sí. Exactamente ahí."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue(
      "Narrador",
      "El hombre activó una cuerda tensada."
    ),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue(
      "Narrador",
      "Una red de carga cayó directamente encima de ambos piratas restantes. Los dos quedaron atrapados golpeándose entre ellos mientras intentaban escapar."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Minutu observó el resultado. Y sacó un pequeño cuaderno."
    ),
    eireneDialogue("Minutu", "Predicción de desastre:"),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Minutu", "97% de precisión. Aceptable."),
    eireneDialogue("Narrador", "Rocky parpadeó."),
    eireneDialogue("Rocky", "…Da muchísimo miedo cuando haces eso."),
    eireneDialogue("Narrador", "Blue parecía genuinamente impresionada."),
    eireneDialogue("Blue", "Has convertido el puerto entero en un tablero táctico."),
    eireneDialogue(
      "Narrador",
      "Haze observaba tranquilamente la red balanceándose."
    ),
    eireneDialogue("Haze", "Parecen pescado gigante."),
    eireneDialogue("Narrador", "Mako señaló a Minutu emocionadísima."),
    eireneDialogue("Mako", "¡¡ERES COMO UN VILLANO NERD!!"),
    eireneDialogue("Narrador", "Minutu suspiró profundamente."),
    eireneDialogue(
      "Minutu",
      "Eso no me parece un cumplido. Pero tristemente exacto."
    )
  ]),
  eirene_lucha_haze: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Haze observó a los cinco Mandíbula Roja en silencio desde encima de los barriles. Tranquila."
    ),
    eireneDialogue("Narrador", "Los piratas levantaron sus armas."),
    eireneDialogue("Piratas", "¿Y esa qué hace? ¿Dormirse?"),
    eireneDialogue("Narrador", "Haze inclinó ligeramente la cabeza."),
    eireneDialogue("Haze", "Podría. Pero ahora mismo estoy procesando."),
    eireneDialogue(
      "Narrador",
      "Los Mandíbula Roja cargaron. Todos a la vez. Y el caos explotó alrededor de la plaza."
    ),
    eireneDialogue("Narrador", "Rocky avanzó."),
    eireneDialogue("Narrador", "Mako gritó algo incomprensible."),
    eireneDialogue("Narrador", "Blue se preparó."),
    eireneDialogue("Narrador", "Lars dio un paso adelante preocupado."),
    eireneDialogue("Narrador", "Y Haze… desapareció."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Blue parpadeó."),
    eireneDialogue("Blue", "…¿Dónde está?"),
    eireneDialogue("Narrador", "Mako miró alrededor."),
    eireneDialogue("Mako", "¿Se ha ido?"),
    eireneDialogue(
      "Narrador",
      "Ni siquiera los piratas parecían entender qué acababa de pasar. El líder frunció el ceño."
    ),
    eireneDialogue("Piratas", "¿La chica rara ha huido?"),
    eireneDialogue(
      "Narrador",
      "Haze apareció detrás de él. Sentada encima de unas cajas. Comiendo pipas."
    ),
    eireneDialogue("Narrador", "CRUNCH."),
    eireneDialogue("Narrador", "Todos pegaron un bote."),
    eireneDialogue("Piratas", "¿¡QUÉ COÑO!?"),
    eireneDialogue("Narrador", "Haze también parecía sorprendida."),
    eireneDialogue("Haze", "Ah. No esperaba llegar tan rápido."),
    eireneDialogue("Narrador", "Rocky empezó a reírse."),
    eireneDialogue("Rocky", "¡¿CÓMO HAS HECHO ESO?!"),
    eireneDialogue("Narrador", "Haze miró alrededor pensativa."),
    eireneDialogue(
      "Haze",
      "Creo que seguí una cuerda. O un pájaro. No estoy segura."
    ),
    eireneDialogue(
      "Narrador",
      "El líder rugió y atacó directamente hacia ella."
    ),
    eireneDialogue(
      "Narrador",
      "Pero algo absurdo empezó a ocurrir. Cada vez que intentaban golpearla… fallaban. No porque Haze esquivara como una gran luchadora. Simplemente… nunca estaba donde esperaban."
    ),
    eireneDialogue(
      "Narrador",
      "Un pirata resbaló con una cuerda. Otro chocó contra un barril. Uno atacó demasiado fuerte y atravesó un puesto entero. Y Haze seguía apareciendo en lugares imposibles. Encima de una farola. Detrás de unas cajas. Sentada en una cuerda. Subida a un tejado."
    ),
    eireneDialogue("Narrador", "CRUNCH."),
    eireneDialogue("Narrador", "Otra pipa."),
    eireneDialogue("Piratas", "¡¡DEJA DE MOVERTE!!"),
    eireneDialogue("Haze", "No me estoy moviendo tanto. Vosotros sois muy intensos."),
    eireneDialogue("Narrador", "Blue observaba completamente fascinada."),
    eireneDialogue("Blue", "No está calculando rutas. Simplemente… fluye."),
    eireneDialogue("Narrador", "Minutu ajustó lentamente sus gafas."),
    eireneDialogue("Minutu", "Eso es tácticamente irritante."),
    eireneDialogue(
      "Narrador",
      "El líder intentó un último ataque desesperado. Corrió directamente hacia Haze rugiendo."
    ),
    eireneDialogue("Piratas", "¡¡QUIETA DE UNA VEZ!!"),
    eireneDialogue("Narrador", "Haze levantó lentamente la mirada hacia arriba."),
    eireneDialogue("Haze", "Creo que no has visto eso."),
    eireneDialogue("Piratas", "¿¡QUÉ—!?"),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "El hombre chocó directamente contra una red de pesca colgante que nadie había visto. La red cayó encima suyo. Y de paso atrapó también a otros dos Mandíbula Roja."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Los dos últimos intentaron huir. Pero Haze ya estaba delante de ellos. Nadie sabía cómo. Ni siquiera ella parecía saberlo."
    ),
    eireneDialogue("Haze", "Creo que este camino tampoco era correcto."),
    eireneDialogue(
      "Narrador",
      "Los piratas se quedaron completamente quietos. Porque sinceramente… ya no entendían qué estaba pasando."
    ),
    eireneDialogue("Narrador", "Mako señaló a Haze completamente emocionada."),
    eireneDialogue("Mako", "¡¡ERES COMO UN FANTASMA DESPISTADO!!"),
    eireneDialogue("Narrador", "Haze pensó unos segundos."),
    eireneDialogue("Haze", "Eso suena bastante acertado."),
    eireneDialogue(
      "Narrador",
      "Y Lars… seguía observándola completamente confundido. Porque jamás había visto a alguien pelear sin agresividad, tensión, estrategia, ni esfuerzo. Como si el mundo simplemente… la colocara siempre exactamente donde debía estar."
    )
  ]),
  eirene_lucha_lars: eireneFightScene([
    eireneDialogue(
      "Narrador",
      "Lars dio un paso adelante. Y eso por sí solo sorprendió a todo el mundo. Porque hasta ese momento… había intentado evitar el conflicto constantemente. Los cinco Mandíbula Roja levantaron sus armas."
    ),
    eireneDialogue("Piratas", "¿Ahora sí quieres hacerte el héroe?"),
    eireneDialogue(
      "Narrador",
      "Lars no respondió inmediatamente. Observó a los piratas. Luego alrededor. La plaza. El miedo de la gente escondida. La tensión del grupo. Y suspiró. Cansado."
    ),
    eireneDialogue("Lars", "No quería llegar a esto."),
    eireneDialogue(
      "Narrador",
      "Entonces ocurrió. Aquella energía translúcida comenzó a surgir lentamente alrededor de Lars otra vez. Pero esta vez… era distinta. Más intensa. Más pesada. Violáceos oscuros. Rojos apagados. Fragmentos negros moviéndose dentro de la luz."
    ),
    eireneDialogue("Narrador", "Blue abrió ligeramente los ojos."),
    eireneDialogue("Blue", "…Está absorbiendo algo."),
    eireneDialogue(
      "Narrador",
      "Y tenía razón. La rabia de los Mandíbula Roja empezó a manifestarse físicamente alrededor de Lars. Su violencia. Su frustración. Su odio. Todo parecía ser arrancado poco a poco del ambiente."
    ),
    eireneDialogue(
      "Narrador",
      "Los piratas comenzaron a sentirse extraños. Inquietos."
    ),
    eireneDialogue("Piratas", "¿Qué demonios nos estás haciendo?"),
    eireneDialogue(
      "Narrador",
      "Lars cerró lentamente los ojos. Y siguió absorbiendo. Más. Y más. Y más."
    ),
    eireneDialogue(
      "Narrador",
      "La energía empezó a rodear completamente su cuerpo. Como emociones hechas materia."
    ),
    eireneDialogue(
      "Narrador",
      "Los Mandíbula Roja intentaron atacar. Pero Lars levantó una mano. Y la energía explotó."
    ),
    eireneDialogue("Narrador", "WHOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Una enorme ola emocional atravesó la plaza. No era fuego. Ni electricidad. Era rabia convertida en fuerza pura."
    ),
    eireneDialogue(
      "Narrador",
      "Los piratas salieron despedidos brutalmente contra el suelo, paredes y puestos del mercado."
    ),
    eireneDialogue("Narrador", "CRAAASH. BOOOOM. THUD."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La plaza entera tembló."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Los cinco Mandíbula Roja yacían derrotados. Inconscientes. Y Lars seguía de pie en medio de la energía residual. Respirando con dificultad. Muy pálido."
    ),
    eireneDialogue(
      "Narrador",
      "La energía empezó a desaparecer lentamente alrededor de él. Pero algo iba mal. Porque no desaparecía del todo. Pequeños fragmentos oscuros seguían moviéndose bajo su piel como si parte de aquellas emociones todavía estuvieran dentro."
    ),
    eireneDialogue("Narrador", "Blue lo notó inmediatamente."),
    eireneDialogue("Blue", "Lars…"),
    eireneDialogue("Narrador", "Lars dio un paso. Y casi cayó."),
    eireneDialogue("Narrador", "Reina reaccionó rápido sujetándolo."),
    eireneDialogue("Narrador", "Lars intentó sonreír."),
    eireneDialogue("Lars", "Estoy bien."),
    eireneDialogue("Narrador", "Mentira absoluta."),
    eireneDialogue(
      "Narrador",
      "Minutu observaba la energía residual todavía flotando alrededor."
    ),
    eireneDialogue("Minutu", "No. Definitivamente no lo estás."),
    eireneDialogue("Narrador", "Haze miraba a Lars completamente seria."),
    eireneDialogue("Haze", "Te llevaste demasiadas cosas."),
    eireneDialogue(
      "Narrador",
      "Lars evitó mirarla. Porque probablemente… sabía exactamente que tenía razón. Y aun así… lo habría hecho igualmente."
    )
  ]),

  eirene_celebracion: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_Barriles_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El silencio permaneció unos segundos sobre la plaza destrozada. Cinco Mandíbula Roja derrotados. Y por primera vez en muchísimo tiempo… la gente de Eirene empezó a celebrar desde sus casas. Primero una persona. Luego otra. Después varias más. Miraban a los piratas inconscientes como si no terminaran de creérselo."
    ),
    eireneDialogue(
      "Narrador",
      "El anciano del pan volvió a llorar. Pero esta vez… de alivio."
    ),
    eireneDialogue("Anciano", "Lo habéis conseguido…"),
    eireneDialogue("Narrador", "Mako levantó ambos brazos."),
    eireneDialogue("Mako", "¡¡SOMOS INCREÍBLES!!"),
    eireneDialogue("Narrador", "Rocky soltó una carcajada."),
    eireneDialogue("Narrador", "Incluso Blue sonrió un poco."),
    eireneDialogue(
      "Narrador",
      "Pero Lars no. Porque él sabía exactamente lo que aquello significaba. Y cuando levantó la mirada hacia el mar… su expresión se volvió seria."
    ),
    eireneDialogue("Lars", "Van a volver."),
    eireneDialogue("Narrador", "El ambiente cambió inmediatamente."),
    eireneDialogue("Lars", "Y esta vez no enviarán solo a cinco idiotas."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Minutu cruzó los brazos."),
    eireneDialogue("Minutu", "Era previsible."),
    eireneDialogue("Narrador", "Reina observó a Lars."),
    eireneDialogue("Reina", "¿Cuánto tiempo tenemos?"),
    eireneDialogue("Narrador", "Lars dudó unos segundos."),
    eireneDialogue("Lars", "Un día. Quizá menos."),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Lars", "Pero…"),
    eireneDialogue("Narrador", "Miró alrededor hacia la gente del pueblo."),
    eireneDialogue(
      "Lars",
      "Creo que esta isla necesita celebrar algo por primera vez en mucho tiempo."
    ),
    eireneDialogue("Narrador", "Y así ocurrió."),
    {
      type: "background",
      image: "Fondo_ciudad_noche.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Aquella noche… Eirene se llenó de luz. Faroles violetas colgaban entre los árboles gigantes. Las plazas se llenaron de comida. Música. Pescado asado. Pan recién hecho. Té caliente. Risas."
    ),
    eireneDialogue(
      "Narrador",
      "La gente del pueblo no dejaba de acercarse a la tripulación. Les daban comida. Les agradecían. Les contaban historias. Como si de pronto… recordaran cómo era vivir sin miedo."
    ),
    {
      type: "background",
      image: "Fondo_Fiesta.jpeg"
    },
    eireneDialogue("Narrador", "Mako acabó bailando encima de una mesa."),
    eireneDialogue(
      "Narrador",
      "Rocky participó en un concurso absurdo de fuerza contra pescadores locales."
    ),
    eireneDialogue(
      "Narrador",
      "Blue terminó hablando con curanderos sobre plantas medicinales."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu acabó atrapado explicando estrategias defensivas a medio pueblo sin entender cómo había ocurrido."
    ),
    eireneDialogue(
      "Narrador",
      "Haze estaba tumbada sobre el tejado de una casa mirando las estrellas mientras varios pájaros descansaban a su alrededor."
    ),
    eireneDialogue(
      "Narrador",
      "Reina estaba bailando una danza tradicional con un grupo de gente, riendo mientras alzaban las manos unidas y giraban en círculos."
    ),
    eireneDialogue(
      "Narrador",
      "Y Lars… Lars observaba todo aquello en silencio. Como alguien viendo algo que llevaba muchísimo tiempo sin existir. Esperanza."
    ),
    {
      type: "background",
      image: "Fondo_Grupo_Junto.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Más tarde, ya de madrugada… el grupo terminó reunido junto a un pequeño fuego cerca del puerto. La música seguía sonando a lo lejos. Pero el ambiente entre ellos era distinto ahora. Más serio."
    ),
    eireneDialogue(
      "Narrador",
      "Porque todos sabían lo mismo. Esto no había terminado."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu extendió varios mapas del puerto sobre unas cajas."
    ),
    eireneDialogue("Minutu", "Bien. Tenemos dos opciones realistas."),
    eireneDialogue("Narrador", "Blue ajustó sus gafas."),
    eireneDialogue(
      "Narrador",
      "Reina se apoyó en Rocky mientras este se cruzaba de brazos, más serio que nunca."
    ),
    eireneDialogue(
      "Narrador",
      "Mako seguía comiendo algo que le habían dado en la fiesta."
    ),
    eireneDialogue(
      "Narrador",
      "Y Lars observaba el mapa completamente tenso."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu señaló una zona concreta de la costa."
    ),
    eireneDialogue("Minutu", "Opción uno: Ataque frontal."),
    eireneDialogue("Narrador", "Marcó directamente el puerto principal."),
    eireneDialogue(
      "Minutu",
      "Entramos de cara. Rápido. Violento. Sin esconder nuestras intenciones."
    ),
    eireneDialogue("Narrador", "Rocky sonrió inmediatamente."),
    eireneDialogue("Rocky", "Me gusta."),
    eireneDialogue("Minutu", "Por supuesto que sí."),
    eireneDialogue("Narrador", "Luego señaló otra zona más alejada."),
    eireneDialogue(
      "Narrador",
      "Unos acantilados detrás del asentamiento principal de los Mandíbula Roja."
    ),
    eireneDialogue("Minutu", "Opción dos: Entrar por la retaguardia."),
    eireneDialogue("Narrador", "Blue levantó ligeramente la mirada."),
    eireneDialogue("Blue", "Más lento. Pero menos arriesgado."),
    eireneDialogue("Narrador", "Haze señaló distraídamente una línea del mapa."),
    eireneDialogue("Haze", "Aquí hay corrientes de aire raras. El ambiente es sospechoso."),
    eireneDialogue("Minutu", "…Sorprendentemente útil."),
    eireneDialogue(
      "Narrador",
      "Lars seguía mirando el mapa. En silencio. Porque al otro lado de ese plan… les esperaba algo mucho más peligroso que cinco matones de puerto. Y lo sabía perfectamente."
    ),
    {
      type: "choice",
      text: "¿Qué plan escogéis?",
      options: [
        {
          text: "Ataque frontal. Entrar directamente contra los Mandíbula Roja y derrotarlos por fuerza pura.",
          nextScene: "eirene_plan_ataque_frontal"
        },
        {
          text: "Entrar por la retaguardia. Buscar una ruta alternativa para infiltrarse antes del combate principal.",
          nextScene: "eirene_plan_retaguardia"
        }
      ]
    }
  ],

  eirene_plan_ataque_frontal: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_ruta_secreta.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El amanecer sobre Eirene llegó cubierto por niebla violeta."
    ),
    eireneDialogue(
      "Narrador",
      "Pero esta vez… la calma de la isla se sentía distinta. Tensa. Como si todo el bosque estuviera conteniendo la respiración."
    ),
    eireneDialogue(
      "Narrador",
      "El grupo avanzaba por un estrecho sendero entre acantilados mientras el sonido del mar golpeaba violentamente contra las rocas muchos metros más abajo."
    ),
    eireneDialogue(
      "Narrador",
      "Nadie hablaba demasiado. Incluso Mako parecía extrañamente concentrada. Lars caminaba delante guiándolos. Y cuanto más avanzaban… más incómodo parecía. Hasta que finalmente llegaron."
    ),
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Una enorme bahía oculta entre paredes de roca. Y allí abajo… la sede de los Mandíbula Roja. Un gigantesco barco pirata atracado junto a una playa rocosa. Oscuro. Desgastado. Cubierto de banderas con mandíbulas pintadas de rojo oscuro."
    ),
    eireneDialogue(
      "Narrador",
      "Junto al barco… una enorme entrada a una cueva excavada en el acantilado. Vigilada. Cajas robadas. Barriles. Armas. Piratas. Muchos piratas."
    ),
    eireneDialogue("Narrador", "Blue observó el lugar."),
    eireneDialogue("Blue", "Vale. Son bastantes más que cinco."),
    eireneDialogue(
      "Minutu",
      "Correcto. Y estadísticamente hablando probablemente todos huelan horrible."
    ),
    eireneDialogue("Narrador", "Mako sonrió emocionadísima."),
    eireneDialogue("Mako", "¡¡Entonces estamos en el sitio correcto!!"),
    eireneDialogue("Narrador", "Rocky empezó a bajar hacia la playa directamente."),
    eireneDialogue("Rocky", "Perfecto. Vamos."),
    eireneDialogue("Reina", "Con calma, chicos."),
    eireneDialogue("Narrador", "Lars dudó apenas un segundo. Pero los siguió."),
    eireneDialogue(
      "Narrador",
      "El grupo descendió lentamente hacia la arena. Y los Mandíbula Roja no tardaron en verlos. Gritos. Movimiento. Armas desenvainándose."
    ),
    eireneDialogue(
      "Narrador",
      "Entonces una figura enorme apareció sobre la cubierta del barco. Y todo el resto de piratas se apartó inmediatamente. El capitán. Un hombre gigantesco. Abrigo rojo oscuro. Brazos llenos de cicatrices. Y un mostacho absurdamente enorme cayendo a ambos lados de la boca. Toda su mandíbula estaba teñida de rojo. Como sangre seca."
    ),
    characterStep("varko_rojo", { animation: "enter" }),
    eireneDialogue("Narrador", "Sonrió lentamente al verlos."),
    eireneDialogue(
      "Capitán",
      "Así que vosotros sois los idiotas que golpearon a mis hombres."
    ),
    eireneDialogue("Rocky", "Sí. Y todo apunta a que volveremos a hacerlo."),
    eireneDialogue("Narrador", "Mako levantó la mano."),
    eireneDialogue("Mako", "¡¡YO ROMPÍ UN BARRIL EN LA CARA DE UNO!!"),
    eireneDialogue("Minutu", "Eso no era información necesaria."),
    eireneDialogue(
      "Narrador",
      "El capitán empezó a reírse. Una risa grave. Desagradable."
    ),
    eireneDialogue("Capitán", "¿Sabéis por qué nos llaman los Mandíbula Roja?"),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "El hombre mostró lentamente los dientes."),
    eireneDialogue(
      "Capitán",
      "Porque nuestras mandíbulas se tiñen con la sangre de los que derrotamos. Y por eso me conocen como Varko, el Rojo."
    ),
    eireneDialogue("Narrador", "Haze lo observó unos segundos."),
    eireneDialogue("Haze", "Eso da bastante asco."),
    eireneDialogue(
      "Narrador",
      "Blue tuvo que apartar la mirada para no reírse. El capitán dejó de sonreír inmediatamente."
    ),
    eireneDialogue("Narrador", "Lars avanzó entonces un paso."),
    eireneDialogue("Lars", "Esto no tiene que acabar así."),
    eireneDialogue("Narrador", "Todos giraron ligeramente la cabeza hacia él."),
    eireneDialogue(
      "Lars",
      "Marchaos de Eirene. Coged vuestro barco y no volváis. No hace falta que nadie salga herido hoy."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Y por un instante… pareció que el capitán realmente estaba escuchándolo. Hasta que empezó a reírse otra vez. Más fuerte. Más cruel."
    ),
    eireneDialogue("Capitán", "Ahora entiendo por qué te llaman “Corazón Amable”."),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Capitán", "Porque eres demasiado blando para este mar."),
    eireneDialogue("Narrador", "Lars bajó lentamente la mirada."),
    eireneDialogue(
      "Narrador",
      "El capitán desenvainó entonces una enorme espada dentada. Y toda la bahía empezó a llenarse de piratas armados."
    ),
    eireneDialogue("Capitán", "Matadlos."),
    eireneDialogue("Narrador", "El ambiente explotó inmediatamente en tensión."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Narrador", "Mako literalmente empezó a saltar emocionada."),
    eireneDialogue("Narrador", "Blue ajustó sus gafas."),
    eireneDialogue("Narrador", "Minutu suspiró resignado."),
    eireneDialogue("Narrador", "Reina adelantó un pie."),
    eireneDialogue(
      "Narrador",
      "Haze observó distraídamente varias gaviotas sobre el barco."
    ),
    eireneDialogue("Narrador", "Y Lars… cerró lentamente los ojos."),
    {
      type: "choice",
      text: "¿Quién decides que lidere la lucha?",
      options: [
        {
          text: "Rocky",
          nextScene: "eirene_frontal_lider_rocky"
        },
        {
          text: "Reina",
          nextScene: "eirene_frontal_lider_reina"
        }
      ]
    }
  ],

  eirene_frontal_lider_rocky: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Rocky sonrió. Y eso normalmente significaba que alguien iba a atravesar una pared."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky dio un paso adelante mientras decenas de Mandíbula Roja descendían desde el barco y la cueva hacia la playa. Espadas. Hachas. Cadenas. Gritos."
    ),
    eireneDialogue(
      "Narrador",
      "Pero Rocky no parecía preocupado. Parecía… emocionado."
    ),
    eireneDialogue("Rocky", "Vale. Plan sencillo."),
    eireneDialogue("Narrador", "Señaló hacia delante."),
    eireneDialogue("Rocky", "Nos abrimos paso."),
    eireneDialogue("Narrador", "Señaló el barco."),
    eireneDialogue("Rocky", "Subimos ahí."),
    eireneDialogue("Narrador", "Señaló a Varko."),
    eireneDialogue("Rocky", "Y le rompemos la cara al bigotes."),
    eireneDialogue("Narrador", "Minutu parpadeó."),
    eireneDialogue("Minutu", "Eso no es un plan. Es una agresión organizada."),
    eireneDialogue("Rocky", "¡Exacto!"),
    eireneDialogue("Narrador", "Y salió disparado."),
    eireneDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La arena explotó bajo sus pies. El primer grupo de piratas ni siquiera llegó a reaccionar antes de que Rocky entrara girando entre ellos como una tormenta. Su cuerpo fluía constantemente. Capoeira brutal. Patadas giratorias. Movimientos fluidos. Ritmo."
    ),
    eireneDialogue(
      "Narrador",
      "Cuanto más se movía… más imposible parecía golpearlo."
    ),
    eireneDialogue("Narrador", "THOOM."),
    eireneDialogue("Narrador", "WHAM."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "Tres piratas cayeron antes siquiera de tocarlo."),
    eireneDialogue("Rocky", "¡¡REINAAA!!"),
    eireneDialogue("Narrador", "Reina reaccionó inmediatamente. Lazos rosados atravesaron la playa."),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Sujetaron armas. Bloquearon rutas. Inmovilizaron enemigos. Y al mismo tiempo… guiaban ligeramente los movimientos de Rocky. Como si el propio espacio estuviera ayudándolo a fluir."
    ),
    eireneDialogue("Narrador", "Rocky sonrió todavía más."),
    eireneDialogue("Rocky", "¡¡SÍÍÍ!! ¡¡ASÍ ES MÁS DIVERTIDO!!"),
    eireneDialogue(
      "Narrador",
      "Blue observaba el combate desde atrás analizando emociones rápidamente."
    ),
    eireneDialogue(
      "Blue",
      "Mako. Los de la izquierda están empezando a entrar en pánico. Aprovéchalo."
    ),
    eireneDialogue("Mako", "¡¡CON MUCHO GUSTO!!"),
    eireneDialogue("Narrador", "Y desapareció."),
    eireneDialogue("Narrador", "WHOOOSH."),
    eireneDialogue(
      "Narrador",
      "Entró a toda velocidad entre los piratas mientras hablaba tan rápido que varios enemigos ni siquiera entendían qué estaba ocurriendo."
    ),
    eireneDialogue(
      "Mako",
      "¡¡SIOSPEGOTÉCNICAMENTEESEDUCACIÓNEMOCIONALPORQUEESTOYAYUDANDOAQUEDESCUBRÁISVUESTROSLÍMITESPERSONALESY—!!"
    ),
    eireneDialogue("Narrador", "THOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Patada directa a un pirata. Otro quedó completamente aturdido intentando seguir lo que decía."
    ),
    eireneDialogue("Narrador", "Minutu observaba el caos creciendo. Y el sufrimiento empezó."),
    eireneDialogue("Minutu", "No. No. No improviséis. NO IMPROVISÉIS."),
    eireneDialogue(
      "Narrador",
      "Demasiado tarde. Porque Rocky acababa de usar un barril como proyectil."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu cerró lentamente los ojos. Modo Silencio Sepulcral. Pero aun así… el poder de Minutu seguía funcionando. Porque mientras todos destruían la playa… él ya había calculado rutas de avance, zonas inseguras, puntos débiles del barco, tiempos de llegada de refuerzos, y exactamente cuándo algo iba a explotar."
    ),
    eireneDialogue("Narrador", "Minutu señaló una grúa del puerto sin emoción alguna."),
    eireneDialogue("Minutu", "Dentro de siete segundos… Apartaos."),
    eireneDialogue("Rocky", "¡Perfecto!"),
    eireneDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La grúa cayó sobre media pasarela del barco justo cuando varios piratas intentaban cruzarla."
    ),
    eireneDialogue("Narrador", "CRAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Mientras tanto Lars avanzaba entre el grupo. No como atacante. Como soporte. La energía emocional comenzó a rodearlo lentamente. Piratas aterrorizados. Rabia. Miedo. Tensión."
    ),
    eireneDialogue(
      "Narrador",
      "Lars absorbía parte del caos para evitar que el grupo perdiera el control. Y luego transformaba esa energía en barreras emocionales translúcidas que protegían al equipo de disparos y explosiones."
    ),
    eireneDialogue("Narrador", "Blue lo observó inmediatamente."),
    eireneDialogue("Blue", "No cargues demasiado."),
    eireneDialogue("Lars", "Estoy bien."),
    eireneDialogue("Narrador", "Mentira evidente."),
    eireneDialogue(
      "Narrador",
      "Haze mientras tanto… simplemente caminaba. Completamente tranquila. Y de alguna manera absurda evitaba balas, encontraba rutas abiertas, aparecía donde más falta hacía, y terminaba dejando inconscientes a piratas accidentalmente."
    ),
    eireneDialogue(
      "Narrador",
      "Un enemigo intentó atacarla por detrás. Haze dio medio paso sin mirar. El pirata chocó directamente contra Rocky. Mala suerte."
    ),
    eireneDialogue("Narrador", "THOOOM."),
    eireneDialogue("Narrador", "Inconsciente."),
    eireneDialogue("Haze", "Ah. Vaya…"),
    eireneDialogue(
      "Narrador",
      "La batalla se volvió completamente salvaje. Arena explotando. Piratas cayendo al mar. Lazos rosados cruzando el aire."
    ),
    eireneDialogue("Narrador", "Mako usando personas como proyectiles."),
    eireneDialogue("Narrador", "Blue intercambiando miedo y confusión entre enemigos."),
    eireneDialogue("Narrador", "Minutu deprimido tácticamente."),
    eireneDialogue("Narrador", "Haze existiendo de manera sospechosamente competente."),
    eireneDialogue(
      "Narrador",
      "Y en medio de todo… Rocky. Bailando entre el combate. Cada vez más rápido. Más agresivo. Más salvaje. Hasta que Varko sonrió desde la cubierta. Porque lo notó."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky estaba empezando a frustrarse. Y entonces ocurrió. Los movimientos dejaron de ser fluidos. Más pesados. Más brutales. Más bestiales."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky levantó lentamente la cabeza. Y sonrió de una forma bastante preocupante."
    ),
    eireneDialogue("Narrador", "Minutu abrió un ojo."),
    eireneDialogue("Minutu", "Oh no. Ha entrado en Modo Bestia."),
    eireneDialogue("Narrador", "Mako levantó ambos brazos."),
    eireneDialogue("Mako", "¡¡SÍÍÍÍÍ!!"),
    eireneDialogue("Narrador", "Rocky agarró un ancla rota del barco."),
    eireneDialogue(
      "Narrador",
      "Y Varko… por primera vez desde empezar la pelea… dejó de sonreír."
    ),
    {
      type: "goto",
      nextScene: "eirene_frontal_varko_aparece"
    }
  ],

  eirene_frontal_lider_reina: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El capitán desenvainó la enorme espada dentada."
    ),
    eireneDialogue("Varko", "Matadlos."),
    eireneDialogue(
      "Narrador",
      "Y decenas de Mandíbula Roja comenzaron a descender hacia la playa. Pero antes de que nadie del grupo reaccionara… Reina dio un paso adelante. Solo uno. Y el ambiente cambió inmediatamente."
    ),
    eireneDialogue(
      "Narrador",
      "Lazos rosados de energía comenzaron a manifestarse lentamente alrededor de ella. Elegantes. Suaves. Precisos. Como hilos atravesando el aire."
    ),
    eireneDialogue(
      "Narrador",
      "Reina observó el campo de batalla apenas unos segundos. La playa. El barco. La cueva. Las posiciones enemigas. Las rutas de avance."
    ),
    eireneDialogue("Narrador", "Y habló. Calmada. Segura."),
    eireneDialogue(
      "Reina",
      "Rocky. Abre el lado izquierdo. Mako, movilidad. No te alejes demasiado. Blue, desestabiliza a los tiradores. Minutu, necesito rutas seguras hacia el barco. Lars, protege al pueblo si aparecen refuerzos. Haze… Confío en que aparecerás donde haga falta."
    ),
    eireneDialogue("Narrador", "Haze asintió."),
    eireneDialogue("Haze", "Probablemente."),
    eireneDialogue("Narrador", "Y entonces comenzó."),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Los lazos rosados atravesaron toda la playa. Sujetaron armas. Desviaron disparos. Bloquearon rutas enemigas. Y lo más importante… controlaron el espacio entero."
    ),
    eireneDialogue("Narrador", "Los Mandíbula Roja intentaron cargar frontalmente."),
    eireneDialogue("Narrador", "Error."),
    eireneDialogue("Narrador", "El terreno dejó de pertenecerles. Ahora era de Reina."),
    eireneDialogue(
      "Narrador",
      "Uno de los piratas intentó atacar a Rocky. Pero un lazo tiró violentamente de su tobillo."
    ),
    eireneDialogue("Narrador", "THUD."),
    eireneDialogue("Narrador", "Cayó de cara contra la arena. Rocky apareció inmediatamente."),
    eireneDialogue("Narrador", "THOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Inconsciente."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Rocky", "¡Me estoy acostumbrando mucho a esto!"),
    eireneDialogue(
      "Narrador",
      "Reina movía ligeramente los dedos. Y cada movimiento reorganizaba el combate. Barreras aparecían. Cuerdas se tensaban. Objetos se desplazaban. Blue observaba fascinada."
    ),
    eireneDialogue("Blue", "Está jugando al ajedrez con una guerra."),
    eireneDialogue(
      "Narrador",
      "Mientras tanto Mako ya estaba corriendo por los lazos rosados como si fueran plataformas flotantes."
    ),
    eireneDialogue("Mako", "¡¡SOY UN MISIIIIIIL!!"),
    eireneDialogue("Narrador", "Minutu abrió muchísimo los ojos."),
    eireneDialogue("Minutu", "…Eso es bastante increíble."),
    eireneDialogue("Narrador", "Mako saltó desde un lazo suspendido."),
    eireneDialogue("Narrador", "WHOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Patada voladora contra tres piratas simultáneamente."
    ),
    eireneDialogue(
      "Narrador",
      "Reina ni siquiera la miró. Ya estaba controlando otra parte del combate."
    ),
    eireneDialogue(
      "Narrador",
      "Un grupo de Mandíbula Roja salió desde la cueva intentando rodearlos."
    ),
    eireneDialogue("Reina", "Blue."),
    eireneDialogue(
      "Narrador",
      "Blue levantó una mano. La energía azulada atravesó a los enemigos. Y segundos después… el miedo empezó a extenderse entre ellos. Confusión. Dudas. Paranoia."
    ),
    eireneDialogue(
      "Narrador",
      "Los piratas comenzaron a chocar entre sí mientras Reina cerraba completamente su avance usando barreras rosadas."
    ),
    eireneDialogue("Narrador", "Minutu ya estaba calculando nuevas rutas."),
    eireneDialogue("Minutu", "Reina. En doce segundos el barco intentará disparar."),
    eireneDialogue("Reina", "Muy bien."),
    eireneDialogue("Narrador", "Movió dos dedos."),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Varios lazos atravesaron el aire hasta el barco pirata. Sujetaron el cañón. Y lo desviaron justo cuando disparaba."
    ),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "El proyectil explotó contra una roca lejos de la playa."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Incluso los Mandíbula Roja parecían empezar a entrar en pánico. Porque sentían algo horrible: No podían avanzar."
    ),
    eireneDialogue("Narrador", "Cada vez que intentaban atacar… Reina lo controlaba todo."),
    eireneDialogue("Narrador", "Cada vez que buscaban una apertura… el espacio cambiaba."),
    eireneDialogue(
      "Narrador",
      "Era como pelear contra alguien que controlaba el propio campo de batalla."
    ),
    eireneDialogue(
      "Narrador",
      "Lars observaba completamente inmóvil. Porque incluso él… empezaba a sentirse protegido simplemente estando cerca."
    ),
    eireneDialogue(
      "Narrador",
      "Mientras tanto Haze caminaba tranquilamente por la playa evitando el caos sin entender demasiado qué estaba ocurriendo."
    ),
    eireneDialogue("Narrador", "Un pirata apareció detrás de Reina. Espada levantada."),
    eireneDialogue("Blue", "¡Reina!"),
    eireneDialogue(
      "Narrador",
      "Pero Reina ni siquiera se giró. Un lazo rosado atrapó el arma. Otro sujetó el brazo. Otro la cintura. Y el hombre quedó completamente inmovilizado en el aire."
    ),
    eireneDialogue("Reina", "No."),
    eireneDialogue("Narrador", "THOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Rocky lo remató de un puñetazo."),
    eireneDialogue("Rocky", "¡Trabajo en equipo!"),
    eireneDialogue(
      "Narrador",
      "La batalla continuó creciendo. Pero el grupo ya había entendido algo. No estaban simplemente peleando. Estaban moviéndose dentro del Dominio Rosé de Reina."
    ),
    eireneDialogue(
      "Narrador",
      "Y allí… ella decidía quién avanzaba, quién caía, qué rutas existían, y qué ataques jamás llegaban a ocurrir."
    ),
    eireneDialogue(
      "Narrador",
      "Incluso Varko empezó a fruncir el ceño desde la cubierta. Porque por primera vez… alguien estaba controlando completamente a los Mandíbula Roja."
    ),
    {
      type: "goto",
      nextScene: "eirene_frontal_varko_aparece"
    }
  ],

  eirene_frontal_varko_aparece: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "La playa había quedado completamente destrozada. Arena levantada. Barriles ardiendo. Restos de armas. Cuerdas rotas. Piratas inconscientes esparcidos por toda la bahía."
    ),
    eireneDialogue(
      "Narrador",
      "El sonido del combate empezaba a apagarse poco a poco. Porque los Mandíbula Roja restantes… ya no luchaban igual. Ahora había miedo. Mucho miedo."
    ),
    eireneDialogue(
      "Narrador",
      "Uno de ellos soltó el arma y salió corriendo hacia la cueva. Otro intentó esconderse detrás de unas cajas. Dos más retrocedían lentamente mirando al grupo como si fueran monstruos."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky respiraba agitado con una sonrisa salvaje todavía marcada en la cara."
    ),
    eireneDialogue(
      "Narrador",
      "Mako estaba subida encima de un barril celebrando y diciendo algo incomprensible."
    ),
    eireneDialogue(
      "Narrador",
      "Blue observaba a los enemigos restantes con la respiración controlada."
    ),
    eireneDialogue(
      "Narrador",
      "Minutu recolocaba papeles completamente innecesarios en medio de la guerra."
    ),
    eireneDialogue(
      "Narrador",
      "Haze estaba sentada encima de una cuerda balanceándose ligeramente."
    ),
    eireneDialogue("Narrador", "Y Lars… Lars parecía cansado. Mucho. Más de lo normal."),
    eireneDialogue("Narrador", "Reina lo notó inmediatamente."),
    eireneDialogue("Reina", "Lars."),
    eireneDialogue(
      "Narrador",
      "Él levantó la cabeza lentamente. Las pequeñas grietas de energía emocional seguían moviéndose bajo su piel. Había absorbido demasiado. Otra vez."
    ),
    eireneDialogue("Narrador", "Pero antes de que nadie pudiera decir nada…"),
    eireneDialogue("Narrador", "BOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Toda la bahía tembló."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Todos levantaron la vista hacia el barco. Y allí estaba. Varko el Rojo. De pie sobre la cubierta principal. Solo."
    ),
    characterStep("varko_rojo", { animation: "enter" }),
    eireneDialogue(
      "Narrador",
      "La enorme espada dentada apoyada sobre el hombro. Su mostacho se movía lentamente con el viento marino mientras observaba el desastre alrededor."
    ),
    eireneDialogue(
      "Narrador",
      "Sus hombres derrotados. Su playa destruida. Su orgullo aplastado. Y aun así… seguía sonriendo."
    ),
    eireneDialogue("Capitán", "Interesante."),
    eireneDialogue("Narrador", "Saltó desde la cubierta."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La arena explotó bajo sus pies al aterrizar. El impacto hizo retroceder incluso a varios piratas restantes. Porque la presencia de Varko era distinta. Pesada. Violenta. Peligrosa."
    ),
    eireneDialogue("Narrador", "Varko levantó lentamente la espada."),
    eireneDialogue("Capitán", "Habéis jugado a ser héroes."),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue(
      "Capitán",
      "Ahora os enseñaré lo que le pasa a la gente que desafía a Varko el Rojo."
    ),
    eireneDialogue(
      "Narrador",
      "La energía alrededor de la bahía cambió. Incluso Rocky dejó de sonreír un poco. Porque podían sentirlo."
    ),
    eireneDialogue("Narrador", "Este hombre era muchísimo más fuerte que el resto."),
    eireneDialogue("Narrador", "Varko señaló entonces directamente a Lars."),
    eireneDialogue("Varko", "Y empezaré por ti."),
    eireneDialogue("Narrador", "Lars se tensó."),
    eireneDialogue("Narrador", "Rocky avanzó inmediatamente."),
    eireneDialogue("Narrador", "Reina hizo aparecer varios lazos rosados."),
    eireneDialogue("Narrador", "Blue preparó su energía emocional."),
    eireneDialogue("Narrador", "Mako literalmente vibraba de emoción."),
    eireneDialogue("Narrador", "Minutu ya calculaba rutas de desastre."),
    eireneDialogue(
      "Narrador",
      "Haze observaba varias gaviotas como si estuvieran comentando la situación."
    ),
    eireneDialogue("Narrador", "Y Varko sonrió."),
    eireneDialogue("Varko", "Perfecto. Venid todos si queréis."),
    eireneDialogue(
      "Narrador",
      "El viento golpeó violentamente toda la playa. La batalla final de Eirene estaba a punto de empezar."
    ),
    {
      type: "choice",
      text: "¿Quién decide enfrentarse a Varko el Rojo?",
      options: [
        {
          text: "Rocky",
          nextScene: "eirene_varko_rocky"
        },
        {
          text: "Reina",
          nextScene: "eirene_varko_reina"
        },
        {
          text: "Mako",
          nextScene: "eirene_varko_mako"
        },
        {
          text: "Blue",
          nextScene: "eirene_varko_blue"
        },
        {
          text: "Minutu",
          nextScene: "eirene_varko_minutu"
        },
        {
          text: "Haze",
          nextScene: "eirene_varko_haze"
        },
        {
          text: "Lars",
          nextScene: "eirene_varko_lars"
        }
      ]
    }
  ],

  eirene_varko_rocky: eireneVarkoFightScene([
    eireneDialogue(
      "Narrador",
      "Rocky avanzó. Sin dudar. La arena crujía bajo sus pies mientras el resto del grupo se apartaba lentamente."
    ),
    eireneDialogue("Narrador", "Varko sonrió al verlo acercarse."),
    eireneDialogue("Varko", "Ah. El ruidoso."),
    eireneDialogue("Narrador", "Rocky se crujió ligeramente el cuello."),
    eireneDialogue("Rocky", "Y tú el del mostacho raro."),
    eireneDialogue("Narrador", "Mako se llevó las manos a la cabeza."),
    eireneDialogue("Mako", "¡¡NO LE INSULTES EL BIGOTE ANTES DEL COMBATE FINAL!!"),
    eireneDialogue("Minutu", "No creo que ahora mismo ese sea el problema principal."),
    eireneDialogue(
      "Narrador",
      "Varko agarró la enorme espada dentada con ambas manos. Y desapareció."
    ),
    eireneDialogue("Narrador", "BOOOOM."),
    eireneDialogue("Narrador", "El impacto llegó un instante después. Rocky cruzó ambos brazos justo a tiempo."),
    eireneDialogue("Narrador", "THOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La arena explotó alrededor de ambos."),
    eireneDialogue("Blue", "…Es rápido."),
    eireneDialogue(
      "Narrador",
      "Rocky salió despedido varios metros arrastrándose por la playa. Pero sonrió. Muchísimo."
    ),
    eireneDialogue("Rocky", "Esto será jodidamente divertido."),
    eireneDialogue(
      "Narrador",
      "Y se lanzó otra vez. Esta vez entrando completamente en ritmo. Su cuerpo empezó a fluir entre los ataques de Varko como una danza salvaje. Giros. Patadas. Movimiento constante. Cada vez era más difícil tocarlo."
    ),
    eireneDialogue("Narrador", "WHOOOSH."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "THOOM."),
    eireneDialogue(
      "Narrador",
      "Una patada giratoria golpeó directamente el costado de Varko. Pero el capitán apenas retrocedió."
    ),
    eireneDialogue("Narrador", "Varko sonrió."),
    eireneDialogue("Varko", "Eso sí ha dolido un poco."),
    eireneDialogue("Narrador", "Y respondió."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La espada impactó contra el suelo y la arena de la playa explotó por todas partes. Rocky esquivó por centímetros."
    ),
    eireneDialogue("Narrador", "Mako estaba perdiendo completamente la cabeza viendo el combate."),
    eireneDialogue("Mako", "¡¡UUUUUAAAAAAA!! ¡¡FUEGOS ARTIFICIALES DE ARENA!!"),
    eireneDialogue("Narrador", "Mientras tanto Reina observaba atentamente."),
    eireneDialogue("Reina", "Rocky. No intercambies golpes directos. Es más fuerte que tú."),
    eireneDialogue("Rocky", "¡¡Entonces habrá que pegar mejor!!"),
    eireneDialogue(
      "Narrador",
      "Y volvió a entrar. Más rápido. Más agresivo. La Danza del Equilibrio empezó a acelerarse."
    ),
    eireneDialogue("Narrador", "El problema… era que Varko también empezaba a disfrutar."),
    eireneDialogue("Varko", "¡SÍ! ¡ASÍ SE LUCHA!"),
    eireneDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Otro choque brutal. El aire tembló."),
    eireneDialogue(
      "Narrador",
      "Lars observaba el combate completamente tenso. Porque podía sentir algo creciendo dentro de Rocky. Frustración. Cada vez más. Porque Varko resistía, seguía levantándose, seguía sonriendo."
    ),
    eireneDialogue("Narrador", "Y entonces ocurrió. Rocky falló un golpe. Solo uno. Pero bastó."),
    eireneDialogue("Narrador", "Varko le estampó el puño directamente contra el pecho."),
    eireneDialogue("Narrador", "THOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Rocky salió disparado atravesando restos de cajas y madera."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Blue se tensó."),
    eireneDialogue("Mako", "¡ROCKY!"),
    eireneDialogue(
      "Narrador",
      "La arena se movió lentamente. Y Rocky volvió a levantarse. Pero algo había cambiado. Respiración pesada. Mirada distinta. Más agresiva."
    ),
    eireneDialogue("Narrador", "Minutu cerró lentamente los ojos."),
    eireneDialogue("Minutu", "Oh vaya..."),
    eireneDialogue("Narrador", "Rocky escupió sangre. Y sonrió. Una sonrisa bastante más peligrosa."),
    eireneDialogue("Rocky", "…Vale. Ahora me he enfadado."),
    eireneDialogue(
      "Narrador",
      "El viento explotó alrededor suyo. La postura cambió. La danza desapareció parcialmente. Ahora los movimientos eran más directos, más violentos, más bestiales. Era una bestia desatada."
    ),
    eireneDialogue("Narrador", "Mako levantó ambos brazos completamente emocionada."),
    eireneDialogue("Mako", "¡¡SÍÍÍÍÍÍ!! ¡¡MODO MONO VIOLENTO!!"),
    eireneDialogue("Blue", "Eso no tranquiliza en absoluto."),
    eireneDialogue(
      "Narrador",
      "Varko observó a Rocky. Y por primera vez… dejó de sonreír un poco. Porque podía sentirlo. Ahora mismo… Rocky daba miedo."
    ),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Rocky salió disparado hacia delante. Tan rápido que la arena explotó detrás suyo. Y el verdadero combate… acababa de empezar."
    ),
    eireneDialogue("Narrador", "Varko levantó la enorme espada dentada. Y Rocky no frenó."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Ambos chocaron en mitad de la playa como dos monstruos. La arena explotó alrededor. El aire tembló. Y varios piratas restantes directamente salieron corriendo. Pero ahora Rocky ya no peleaba como antes."
    ),
    eireneDialogue(
      "Narrador",
      "La Danza del Equilibrio seguía ahí… pero rota. Convertida en algo más salvaje. Cada giro era más agresivo. Cada patada más pesada. Cada movimiento parecía capaz de destruir algo."
    ),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "THOOOM."),
    eireneDialogue(
      "Narrador",
      "Varko consiguió bloquear una patada. Error. Rocky utilizó el propio bloqueo para girar violentamente sobre sí mismo y estamparle otra directamente en la mandíbula."
    ),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Por primera vez… Varko retrocedió varios pasos."),
    eireneDialogue("Mako", "¡¡LE HA GIRADO EL BIGOTE!!"),
    eireneDialogue("Narrador", "El capitán rugió y lanzó un corte brutal."),
    eireneDialogue(
      "Narrador",
      "Rocky ni siquiera intentó esquivarlo completamente. La espada le rozó el hombro. Sangre. Pero Rocky siguió avanzando sonriendo como un absoluto lunático."
    ),
    eireneDialogue("Blue", "Ay, madre…"),
    eireneDialogue(
      "Narrador",
      "Lars observaba completamente tenso. Porque podía sentirlo. Rocky ya no estaba luchando solo con adrenalina. Ahora estaba descargando toda su frustración. Años de tensión. Impulso. Todo."
    ),
    eireneDialogue("Narrador", "Varko volvió a atacar. Y esta vez Rocky entró directamente dentro del golpe."),
    eireneDialogue("Reina", "¡Rocky!"),
    eireneDialogue("Narrador", "Demasiado tarde."),
    eireneDialogue("Narrador", "THOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La espada impactó parcialmente. Pero Rocky consiguió agarrar el brazo de Varko justo después."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "El capitán intentó soltarse. No pudo. Y entonces… Rocky sonrió. Una sonrisa completamente salvaje."),
    eireneDialogue("Rocky", "Te tengo."),
    eireneDialogue("Narrador", "BOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La cabeza de Rocky impactó directamente contra la de Varko. El sonido resonó por toda la bahía."),
    eireneDialogue(
      "Narrador",
      "El capitán quedó completamente aturdido. Y Rocky aprovechó. Giró violentamente sobre sí mismo. Toda la Bestia Desatada explotó en un único movimiento. Una patada brutal ascendente."
    ),
    eireneDialogue("Narrador", "THOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Impacto directo en la mandíbula roja de Varko. El capitán salió disparado atravesando media cubierta del barco pirata."),
    eireneDialogue("Narrador", "CRAAAAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Absoluto silencio."),
    eireneDialogue("Narrador", "El barco crujió lentamente. Y finalmente… Varko cayó inconsciente entre los restos de madera destruida."),
    eireneDialogue(
      "Narrador",
      "Rocky respiraba agitado en mitad de la playa. Cubierto de sangre. Arena. Y sonriendo como un idiota."
    ),
    eireneDialogue("Narrador", "Mako levantó ambos brazos."),
    eireneDialogue("Mako", "¡¡EL MONO VIOLENTO HA GANADOOOO!!"),
    eireneDialogue("Narrador", "Blue suspiró aliviada."),
    eireneDialogue("Narrador", "Minutu observó el barco destruido."),
    eireneDialogue("Minutu", "Estadísticamente… Eso ha sido una barbaridad."),
    eireneDialogue("Narrador", "Haze observó a Rocky unos segundos."),
    eireneDialogue("Haze", "Creo que has asustado incluso al mar."),
    eireneDialogue(
      "Narrador",
      "Y Lars… por primera vez en muchísimo tiempo… empezó a creer que quizá Eirene realmente podía cambiar."
    )
  ]),

  eirene_varko_reina: eireneVarkoFightScene([
    eireneDialogue(
      "Narrador",
      "Reina avanzó lentamente hacia delante. Y el resto del grupo lo entendió inmediatamente. Ella iba a encargarse de esto."
    ),
    eireneDialogue(
      "Narrador",
      "Varko apoyó la enorme espada dentada sobre el hombro mientras observaba cómo los lazos rosados empezaban a aparecer alrededor de la playa."
    ),
    eireneDialogue("Capitán", "¿Tú? Pareces demasiado elegante para un combate real."),
    eireneDialogue(
      "Narrador",
      "Reina no respondió. Simplemente siguió caminando. Tranquila. Controlada."
    ),
    eireneDialogue(
      "Narrador",
      "Los lazos rosados comenzaron a extenderse lentamente por toda la bahía entre los restos del combate, alrededor del barco, sobre la arena, entre los mástiles destruidos. Como si estuviera tejiendo algo invisible."
    ),
    eireneDialogue("Blue", "Está expandiendo el Dominio Rosé."),
    eireneDialogue("Minutu", "Y cuanto más espacio controla… Más peligrosa se vuelve."),
    eireneDialogue("Narrador", "Varko sonrió. Y atacó."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La enorme espada descendió directamente hacia Reina. Pero justo antes del impacto…"
    ),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue("Narrador", "Una barrera rosada apareció frente a ella."),
    eireneDialogue("Narrador", "THOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La playa tembló. La barrera se agrietó. Pero resistió."),
    eireneDialogue("Narrador", "Reina levantó lentamente la mirada. Y movió dos dedos."),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue("Narrador", "Tres lazos atravesaron el aire intentando sujetar el brazo de Varko. El capitán rugió."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "Los rompió usando pura fuerza bruta."),
    eireneDialogue("Capitán", "¡Interesante!"),
    eireneDialogue(
      "Narrador",
      "Y volvió a cargar. Más rápido esta vez. Pero Reina ya había cambiado el terreno. Cada paso de Varko empezaba a volverse más difícil. Porque los lazos movían restos del combate, bloqueaban ángulos, tensaban cuerdas, cambiaban rutas, y reducían lentamente el espacio del capitán. Era como pelear dentro de una telaraña invisible."
    ),
    eireneDialogue("Rocky", "¡Vamos, Nyinyu! ¡Lo tienes!"),
    eireneDialogue("Mako", "¡¡PARECE UNA JEFA FINAL!!"),
    eireneDialogue("Narrador", "Varko rugió y lanzó un corte brutal."),
    eireneDialogue("Narrador", "WHOOOOOM."),
    eireneDialogue(
      "Narrador",
      "La energía atravesó media playa. Pero Reina ya se había movido. Elegante. Precisa. Los lazos rosados impulsaban ligeramente sus movimientos como si el propio espacio la guiara. Entonces contraatacó."
    ),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Decenas de lazos surgieron simultáneamente desde distintas direcciones. Piernas. Brazos. Espada. Cuello. Varko destruyó varios. Pero no todos."
    ),
    eireneDialogue("Narrador", "THUD."),
    eireneDialogue("Narrador", "Uno atrapó su pierna. Otro bloqueó parcialmente el brazo de la espada. Y durante apenas un segundo… Varko quedó inmovilizado."),
    eireneDialogue("Narrador", "Reina extendió la mano. Los lazos rosados explotaron alrededor del capitán como cadenas de energía."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Varko salió despedido atravesando parte de la cubierta inferior del barco."),
    eireneDialogue("Narrador", "CRAAAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "La bahía entera quedó quieta unos segundos. Incluso los piratas restantes parecían aterrorizados. Porque Reina no estaba peleando como alguien más fuerte. Estaba peleando como alguien que controlaba absolutamente todo. Pero entonces… el barco explotó desde dentro."
    ),
    eireneDialogue("Narrador", "BOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Madera. Hierro. Fuego. Y Varko emergió entre el humo riéndose. Sangrando. Pero riéndose."),
    eireneDialogue("Varko", "¡SÍ! ¡ASÍ! ¡AHORA SÍ ESTO EMPIEZA A SER DIVERTIDO!"),
    eireneDialogue("Blue", "…Eso no es normal."),
    eireneDialogue(
      "Narrador",
      "Reina respiró lentamente. Porque podía sentirlo. Varko estaba empezando a romper el Dominio Rosé usando pura violencia. Y si perdía completamente el control emocional… sus lazos también empezarían a desestabilizarse."
    ),
    eireneDialogue(
      "Narrador",
      "Varko levantó nuevamente la espada. Y esta vez… la energía alrededor suyo empezó a volverse mucho más peligrosa."
    ),
    eireneDialogue(
      "Narrador",
      "Varko salió del humo riéndose mientras la sangre caía lentamente por su mandíbula roja."
    ),
    eireneDialogue("Varko", "¡Por fin alguien interesante en esta isla miserable!"),
    eireneDialogue("Narrador", "Y volvió a lanzarse contra Reina."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La espada descendió como una bestia. Pero esta vez Reina no retrocedió. Los lazos rosados explotaron alrededor de toda la bahía al mismo tiempo."
    ),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Sujetaron restos del barco, anclas, cadenas, mástiles rotos, barriles, e incluso partes del propio suelo."
    ),
    eireneDialogue(
      "Narrador",
      "Varko destruyó varios de un golpe. Pero cada vez que rompía uno… otros tres aparecían. Como una hidra."
    ),
    eireneDialogue("Blue", "Está cerrándole el espacio."),
    eireneDialogue("Minutu", "No intenta derrotarlo por fuerza. Está agotándolo."),
    eireneDialogue(
      "Narrador",
      "Varko rugió y consiguió acercarse finalmente. La espada pasó a centímetros del rostro de Reina. Pero ella giró elegantemente sobre sí misma. Y atrapó completamente el brazo del capitán con varios lazos."
    ),
    eireneDialogue("Narrador", "Varko intentó liberarse. Entonces Reina habló. Tranquila."),
    eireneDialogue("Reina", "Ya has perdido."),
    eireneDialogue("Varko", "¡¿QUÉ—!?"),
    eireneDialogue("Narrador", "FSSSHHH."),
    eireneDialogue(
      "Narrador",
      "Todos los lazos rosados de la bahía se tensaron simultáneamente. El barco entero crujió. Las cadenas se cerraron alrededor de Varko desde todas direcciones. Piernas. Brazos. Torso. Espada. Incluso el propio ancla del barco salió disparada envolviéndolo."
    ),
    eireneDialogue("Narrador", "THOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Varko cayó violentamente contra la arena. La playa tembló. El capitán intentó levantarse rugiendo. Pero los lazos seguían apretando. Cada vez más. Hasta dejarlo completamente inmovilizado."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "Solo el sonido del mar golpeando las rocas. Reina respiraba algo agitada mientras los lazos rosados seguían brillando alrededor del cuerpo derrotado de Varko. El capitán intentó moverse una última vez. Inútil."
    ),
    eireneDialogue("Rocky", "Eso ha sido increíble, Nyinyu."),
    eireneDialogue("Mako", "¡¡LO HA ENVUELTO COMO UN REGALO DE NAVIDAD!!"),
    eireneDialogue("Haze", "Ahora sí parece pescado envuelto."),
    eireneDialogue("Narrador", "Incluso Lars sonrió un poco."),
    eireneDialogue(
      "Narrador",
      "Y por primera vez en muchísimo tiempo… Eirene quedó en silencio. Un silencio sin miedo."
    )
  ]),

  eirene_varko_mako: eireneVarkoFightScene([
    eireneDialogue("Narrador", "Varko levantó lentamente la enorme espada dentada."),
    eireneDialogue("Varko", "¿Quién viene primero?"),
    eireneDialogue("Narrador", "Mako levantó ambos brazos como si estuviera en una feria."),
    eireneDialogue("Mako", "¡¡YO YO YO YO YO!!"),
    eireneDialogue("Blue", "Claro."),
    eireneDialogue("Narrador", "Mako salió disparada antes de que nadie pudiera añadir nada más."),
    eireneDialogue("Narrador", "WHOOOOOSH."),
    eireneDialogue("Narrador", "La arena explotó detrás suyo."),
    eireneDialogue("Narrador", "Varko apenas tuvo tiempo de reaccionar antes de que Mako ya estuviera girando alrededor de él a una velocidad absurda."),
    eireneDialogue("Varko", "¿¡QUÉ COÑO—!?"),
    eireneDialogue("Narrador", "THOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Primera patada. Directa a las costillas."),
    eireneDialogue("Narrador", "Mako aterrizó encima de un barril."),
    eireneDialogue("Mako", "¡¡UNO!!"),
    eireneDialogue("Narrador", "Y volvió a desaparecer."),
    eireneDialogue("Narrador", "WHOOOSH."),
    eireneDialogue("Narrador", "Varko lanzó un espadazo brutal intentando atraparla. Mala idea. Mako ya estaba detrás."),
    eireneDialogue("Mako", "¡¡DOS!!"),
    eireneDialogue("Narrador", "PATADA."),
    eireneDialogue("Narrador", "Arena por todas partes. El capitán rugió furioso."),
    eireneDialogue("Varko", "¡DEJA DE MOVERTE!"),
    eireneDialogue("Mako", "¡¡NO PUEDOOOO!! ¡¡ME ABURRO MUY RÁPIDO!!"),
    eireneDialogue("Rocky", "¡¡NI SIQUIERA ESTÁ PELEANDO NORMAL!!"),
    eireneDialogue("Minutu", "No existe una forma “normal” de pelear para Mako."),
    eireneDialogue(
      "Narrador",
      "Varko intentó seguirla con la mirada. Imposible. Porque Mako ya estaba saltando entre barriles, corriendo por restos del barco, rebotando contra cajas, usando literalmente piratas inconscientes como plataformas. Y mientras tanto… no dejaba de hablar."
    ),
    eireneDialogue(
      "Mako",
      "¡¡ADEMÁSCREOQUETUBIGOTETIENEVIDAPROPIAYHONESTAMENTEESOMEGENERAMUCHASPREGUNTASPORQUESIYOTUVIERAUNBIGOTETANGRANDE…!!"
    ),
    eireneDialogue("Varko", "¡¡CÁLLATE!!"),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue("Narrador", "Espadazo brutal. Mako se agachó deslizándose por debajo. Y le estampó una doble patada directamente en la mandíbula roja."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Varko retrocedió varios pasos."),
    eireneDialogue("Blue", "Está usando sobreestimulación mental y velocidad extrema simultáneamente…"),
    eireneDialogue("Minutu", "Sí. Le está destruyendo psicológicamente."),
    eireneDialogue("Narrador", "Pero entonces… Varko rugió. Y liberó toda su fuerza de golpe."),
    eireneDialogue("Narrador", "BOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La arena explotó alrededor suyo. Una onda brutal atravesó toda la playa. Mako salió despedida varios metros."),
    eireneDialogue("Narrador", "THUD."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Lars se tensó."),
    eireneDialogue("Rocky", "…Eso ha debido de doler."),
    eireneDialogue("Narrador", "Mako permaneció quieta unos segundos entre la arena. Luego levantó lentamente la cabeza. Y empezó a sonreír."),
    eireneDialogue("Mako", "Valeee… Ahora sí me he emocionado."),
    eireneDialogue("Blue", "Eso tampoco tranquiliza."),
    eireneDialogue("Narrador", "Mako desapareció. Absurdamente rápido."),
    eireneDialogue("Narrador", "WHOOOOOOOOOSH."),
    eireneDialogue("Narrador", "Ni siquiera Varko consiguió verla venir."),
    eireneDialogue("Narrador", "THOOOM."),
    eireneDialogue("Narrador", "THOOM."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "WHAM."),
    eireneDialogue("Narrador", "Impactos por todas partes. Costillas. Espalda. Mandíbula. Piernas."),
    eireneDialogue(
      "Narrador",
      "Mako se movía alrededor suyo como un huracán humano completamente imposible de seguir. Y mientras golpeaba… seguía hablando sin respirar."
    ),
    eireneDialogue(
      "Mako",
      "¡¡PORQUEVERÁSNORMALMENTEINTENTONOROMPERDEMASIADASCOSASPORQUÉMINUTUSIEMPREMERIÑEPEROAHORAMISMOCREOQUEELCONCEPTODEMODERACIÓNHAMUERTOCOMPLETAMENTEY…!!"
    ),
    eireneDialogue("Narrador", "Patada giratoria."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Varko atravesó parte de la cubierta del barco. Pero todavía intentó levantarse. Mako apareció encima del mástil roto. Sonriendo como una absoluta lunática."),
    eireneDialogue("Mako", "¡¡ATAQUEDEFINITIVAMENTENOPLANIFICADOOOO!!"),
    eireneDialogue("Minutu", "Eso no me gusta nada."),
    eireneDialogue("Narrador", "Mako agarró una cuerda enorme del barco. Y saltó."),
    eireneDialogue("Narrador", "WHOOOOOOOM."),
    eireneDialogue("Narrador", "Salió disparada girando alrededor del mástil como una bala humana. Varko levantó la espada. Demasiado lento."),
    eireneDialogue("Narrador", "THOOOOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La patada impactó directamente en la mandíbula roja del capitán. El barco entero crujió."),
    eireneDialogue("Narrador", "CRAAAAAAASH."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Varko salió disparado atravesando media cubierta antes de quedar completamente inconsciente entre restos de madera."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Mako aterrizó sobre la arena levantando ambos brazos."),
    eireneDialogue("Mako", "¡¡HE GANADOOOOOO!!"),
    eireneDialogue("Narrador", "Y justo después… tropezó con un barril."),
    eireneDialogue("Narrador", "THUD."),
    eireneDialogue("Narrador", "Blue se llevó una mano a la cara."),
    eireneDialogue("Narrador", "Rocky estaba llorando de la risa."),
    eireneDialogue("Narrador", "Minutu miraba el nivel de destrucción completamente derrotado emocionalmente."),
    eireneDialogue("Haze", "Cuanta violencia…"),
    eireneDialogue("Narrador", "Y Lars… no sabía si estar asombrado o horrorizado por todo el caos.")
  ]),

  eirene_varko_blue: eireneVarkoFightScene([
    eireneDialogue("Narrador", "Varko levantó lentamente la enorme espada dentada."),
    eireneDialogue("Varko", "¿Y quién se va a enfrentar a mí?"),
    eireneDialogue(
      "Narrador",
      "Blue avanzó. Ajustándose lentamente las gafas. Muy tranquila."
    ),
    eireneDialogue("Mako", "…¿Blue?"),
    eireneDialogue("Rocky", "Vale. Esto puede ponerse raro."),
    eireneDialogue(
      "Narrador",
      "Blue observó a Varko durante unos segundos. Analizando. Rabia. Violencia. Orgullo. Crueldad. Y debajo de todo eso… miedo. Muy escondido. Pero estaba ahí."
    ),
    eireneDialogue("Blue", "Interesante."),
    eireneDialogue("Varko", "No pareces una luchadora."),
    eireneDialogue("Blue", "No lo soy."),
    eireneDialogue(
      "Narrador",
      "Y entonces la energía azulada apareció alrededor suyo. Suave. Silenciosa. Como ondas atravesando lentamente la bahía. Los piratas restantes empezaron a incomodarse inmediatamente. Porque algo se sentía mal. Muy mal."
    ),
    eireneDialogue("Narrador", "Blue seguía avanzando. Sin miedo."),
    eireneDialogue("Varko", "¿Qué demonios haces?"),
    eireneDialogue("Narrador", "Blue inclinó ligeramente la cabeza."),
    eireneDialogue("Blue", "Escucharte."),
    eireneDialogue("Narrador", "Y entonces empezó. La energía azulada atravesó directamente a Varko."),
    eireneDialogue(
      "Narrador",
      "El capitán frunció el ceño. Al principio… nada. Luego algo cambió. Dudas. Muy pequeñas. Pero suficientes."
    ),
    eireneDialogue("Narrador", "Varko apretó la espada."),
    eireneDialogue("Varko", "¿…Qué coño es esto?"),
    eireneDialogue(
      "Narrador",
      "Blue levantó lentamente una mano. Y las emociones comenzaron a intercambiarse violentamente. El miedo de los piratas derrotados. La rabia de Varko. La desesperación acumulada en Eirene. Todo empezó a moverse."
    ),
    eireneDialogue("Blue", "Llevas años aterrorizando esta isla."),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Blue", "¿Sabes qué siente la gente cuando llegáis?"),
    eireneDialogue("Narrador", "Varko rugió y cargó hacia ella."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La espada descendió brutalmente. Pero Blue no se movió. Porque justo antes del impacto… Varko sintió algo completamente distinto. Pánico. Un miedo aplastante. Tan intenso… que el golpe se desvió solo."
    ),
    eireneDialogue("Narrador", "THOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La espada impactó la arena lejos de Blue. El capitán retrocedió varios pasos respirando agitado."),
    eireneDialogue("Varko", "¿¡QUÉ ME ESTÁS HACIENDO!?"),
    eireneDialogue(
      "Narrador",
      "Blue seguía avanzando. La energía azulada alrededor suyo empezaba a volverse más intensa."
    ),
    eireneDialogue("Blue", "Nada que no hayas hecho tú antes. Solo te lo estoy devolviendo."),
    eireneDialogue(
      "Narrador",
      "Lars observaba completamente inmóvil. Porque podía sentirlo. Blue no estaba destruyendo el cuerpo de Varko. Estaba rompiendo su mente."
    ),
    eireneDialogue(
      "Narrador",
      "El capitán volvió a atacar rugiendo. Y esta vez Blue intercambió otra emoción. La arrogancia de Varko… por inseguridad. El hombre empezó a fallar golpes. A dudar. A mirar alrededor."
    ),
    eireneDialogue("Blue", "Tienes miedo de perder. Muchísimo."),
    eireneDialogue("Varko", "¡CÁLLATE!"),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Nueva explosión. Pero cada vez el capitán parecía más inestable. Más errático. Más humano. Y eso era exactamente lo que más odiaba."
    ),
    eireneDialogue("Mako", "Vale. Esto es muchísimo más traumático que pegar fuerte."),
    eireneDialogue("Minutu", "Sí. Lo está desmontando emocionalmente pieza por pieza."),
    eireneDialogue(
      "Narrador",
      "Varko rugió desesperado y lanzó un ataque final brutal. Toda la playa tembló."
    ),
    eireneDialogue(
      "Narrador",
      "Blue cerró lentamente los ojos. Y entonces realizó el intercambio final. Toda la valentía de Eirene. Toda."
    ),
    eireneDialogue(
      "Narrador",
      "Transformada directamente dentro de Varko. Y sustituida… por el miedo acumulado de toda la isla."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue(
      "Narrador",
      "El capitán se quedó completamente quieto. Temblando. Mirando alrededor. Como si de pronto pudiera sentir todas las noches de terror, toda la desesperación, todo el sufrimiento que había provocado."
    ),
    eireneDialogue("Blue", "Ahora lo entiendes."),
    eireneDialogue("Narrador", "Varko intentó avanzar. No pudo. Las piernas le fallaron."),
    eireneDialogue("Narrador", "THUD."),
    eireneDialogue("Narrador", "El capitán cayó de rodillas sobre la arena. La espada resbaló lentamente de sus manos."),
    eireneDialogue("Narrador", "Silencio absoluto."),
    eireneDialogue(
      "Narrador",
      "Blue respiraba más pesado ahora. Porque manipular tantas emociones a la vez también estaba empezando a afectarle. Pero aun así… mantuvo la mirada fija sobre Varko. Hasta que finalmente el capitán cayó inconsciente sobre la playa. El sonido del mar volvió a llenar la bahía."
    ),
    eireneDialogue("Mako", "Joder… Menos mal que estás de nuestro lado. Acojona."),
    eireneDialogue("Rocky", "Sí. Prefiero cuando solo pegamos cosas."),
    eireneDialogue(
      "Narrador",
      "Y Lars… observaba a Blue con una mezcla extraña de fascinación y preocupación. Porque acababa de ver a alguien manipular emociones… a una escala aterradoramente precisa."
    )
  ]),

  eirene_varko_minutu: eireneVarkoFightScene([
    eireneDialogue("Narrador", "Varko levantó lentamente la enorme espada dentada."),
    eireneDialogue("Varko", "¿Y tú qué haces? ¿Contabilidad de guerra?"),
    eireneDialogue("Narrador", "Minutu ajustó lentamente sus relojes."),
    eireneDialogue("Minutu", "Sí. Y honestamente tus probabilidades son pésimas."),
    eireneDialogue("Mako", "¡¡ESO HA SIDO UNA AMENAZA NERD!!"),
    eireneDialogue(
      "Narrador",
      "Minutu ignoró completamente el comentario. Ya estaba observándolo todo. La playa. El barco. Las cuerdas. La marea. Los restos del combate. Las grietas del acantilado. La dirección del viento."
    ),
    eireneDialogue(
      "Narrador",
      "Su mente empezó a calcular rutas y probabilidades absurdamente rápido."
    ),
    eireneDialogue("Narrador", "Varko rugió y cargó. Minutu no se movió."),
    eireneDialogue("Blue", "…¿Minutu?"),
    eireneDialogue(
      "Narrador",
      "Tres segundos antes del impacto… Minutu dio un paso exacto hacia la derecha."
    ),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La espada falló por centímetros. Y golpeó una zona concreta de la arena."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "Parte del suelo cedió. Varko perdió ligeramente el equilibrio."),
    eireneDialogue("Minutu", "Puntual."),
    eireneDialogue("Rocky", "¡¿ESTÁ PELEANDO CON HORARIOS?!"),
    eireneDialogue(
      "Narrador",
      "Varko rugió y volvió a atacar. Pero Minutu ya estaba varios movimientos por delante. Cada paso que daba… ya había sido calculado. Cada ataque de Varko… ya estaba previsto."
    ),
    eireneDialogue("Narrador", "THOOM."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "WHOOOM."),
    eireneDialogue(
      "Narrador",
      "El capitán destruyó cajas, mástiles, cuerdas, barriles. Y exactamente eso quería Minutu. Porque cuanto más destruía Varko… más cerca estaba de la trampa."
    ),
    eireneDialogue("Narrador", "Minutu señaló lentamente hacia arriba."),
    eireneDialogue("Minutu", "Dentro de nueve segundos vas a cometer un error extremadamente caro."),
    eireneDialogue("Varko", "¡DEJA DE DECIR ESAS MIERDAS!"),
    eireneDialogue("Mako", "¡¡EL BIGOTES ESTÁ NERVIOSO!!"),
    eireneDialogue("Narrador", "Varko cargó brutalmente hacia Minutu. Y entonces… todo encajó. Plan D-14."),
    eireneDialogue("Narrador", "Minutu chasqueó los dedos."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "Las cadenas del barco se soltaron."),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue("Narrador", "El enorme mástil principal comenzó a caer. Varko levantó la mirada demasiado tarde."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "El mástil impactó contra él. Pero no bastó. El capitán rugió apartándolo."),
    eireneDialogue("Varko", "¡¿ESO ES TODO?!"),
    eireneDialogue("Narrador", "Minutu ajustó lentamente las gafas."),
    eireneDialogue("Minutu", "No. Eso era el minuto tres."),
    eireneDialogue("Blue", "Maníaco del control..."),
    eireneDialogue(
      "Narrador",
      "Porque Varko todavía no entendía algo. El combate entero… ya había sido diseñado. La posición del capitán pirata. Los restos del barco. Las rutas de escape. Los objetos destruidos. Todo. Minutu había convertido la bahía entera en una ecuación táctica."
    ),
    eireneDialogue("Narrador", "Varko volvió a atacar. Error final. Pisó exactamente donde Minutu quería."),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "La cubierta rota del barco cedió. El capitán quedó atrapado parcialmente. Y en ese instante… Minutu levantó lentamente una mano hacia la grúa destruida del puerto."),
    eireneDialogue("Minutu", "Ahora."),
    eireneDialogue("Narrador", "BOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "El ancla principal del barco cayó directamente desde arriba. Impacto brutal. La cubierta explotó. Madera. Hierro. Arena."),
    eireneDialogue("Narrador", "Absoluto silencio."),
    eireneDialogue("Narrador", "El humo se disipó lentamente. Y Varko… yacía completamente inconsciente bajo los restos del barco destruido."),
    eireneDialogue("Narrador", "Minutu respiró lentamente. Y guardó su pequeño cuaderno."),
    eireneDialogue("Minutu", "Predicción completada. 96,4% de precisión."),
    eireneDialogue("Narrador", "Pausa."),
    eireneDialogue("Minutu", "Aceptable."),
    eireneDialogue("Rocky", "…Creo que acaba de asesinar matemáticamente a un hombre."),
    eireneDialogue("Mako", "¡¡EL NERD HA GANADOOOO!!"),
    eireneDialogue(
      "Narrador",
      "Blue observaba la destrucción completamente fascinada. Porque Minutu ni siquiera parecía haber peleado realmente. Simplemente… había dejado que el propio mundo derrotara a Varko por él."
    )
  ]),

  eirene_varko_haze: eireneVarkoFightScene([
    eireneDialogue("Narrador", "Varko levantó lentamente la enorme espada dentada."),
    eireneDialogue("Varko", "¿Y tú qué esperas exactamente?"),
    eireneDialogue("Narrador", "Haze estaba mirando una gaviota."),
    eireneDialogue("Haze", "Ahora mismo… No lo tengo del todo claro."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Mako", "¡¡ES QUE LE DA IGUAL, ES UNA PASOTA!!"),
    eireneDialogue("Blue", "No puede estar hablando en serio."),
    eireneDialogue("Narrador", "Varko rugió y cargó directamente hacia Haze."),
    eireneDialogue("Narrador", "BOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La espada atravesó la arena. Pero Haze ya no estaba allí."),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Varko", "…¿Dónde coño—?"),
    eireneDialogue("Narrador", "Haze estaba sentada encima de una caja detrás suyo."),
    eireneDialogue("Haze", "Creo que te has pasado un poco."),
    eireneDialogue("Rocky", "¡¡NI ELLA SABE CÓMO HACE ESTO!!"),
    eireneDialogue("Narrador", "Varko volvió a atacar. Más rápido esta vez."),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue(
      "Narrador",
      "Otra vez falló. Porque Haze simplemente… caminó. Ni siquiera parecía esquivar. Era como si siempre estuviera donde no había peligro, encontrara rutas invisibles, o el universo se apartara para dejarla pasar. Mientras todos gritaban, luchaban y destruían media bahía… Haze seguía completamente relajada. Y eso estaba empezando a desesperar muchísimo a Varko."
    ),
    eireneDialogue("Varko", "¡DEJA DE MOVERTE!"),
    eireneDialogue("Haze", "No me estoy moviendo tanto. Tú eres muy intenso."),
    eireneDialogue("Reina", "No pelea. Simplemente… existe."),
    eireneDialogue("Minutu", "Tácticamente eso es insultante."),
    eireneDialogue("Narrador", "Varko rugió y lanzó un corte gigantesco."),
    eireneDialogue("Narrador", "BOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "Parte del barco explotó. La arena salió disparada. Y cuando el humo desapareció… Haze seguía ilesa. Ahora estaba encima del mascarón del barco. Comiendo algo que probablemente había encontrado por ahí."
    ),
    eireneDialogue("Haze", "Creo que esto era de alguien."),
    eireneDialogue("Narrador", "Pausa. Se encogió de hombros."),
    eireneDialogue("Haze", "Bueno."),
    eireneDialogue("Mako", "¡¡LE ESTÁ GANANDO SIN PARTICIPAR!!"),
    eireneDialogue(
      "Narrador",
      "Varko empezó a perder completamente la paciencia. Error gravísimo. Porque cuanto más nervioso se ponía… más eficiente se volvía Haze."
    ),
    eireneDialogue(
      "Narrador",
      "Y de pronto… para ella aquello empezó a convertirse en un reto personal silencioso. No quería perder. Aunque nadie más supiera que estaban compitiendo."
    ),
    eireneDialogue(
      "Narrador",
      "Haze observó alrededor unos segundos. Luego miró una cuerda rota. Después una polea. Luego el acantilado. Y sonrió ligeramente."
    ),
    eireneDialogue("Minutu", "…Creo que acaba de tener una idea."),
    eireneDialogue("Narrador", "Haze saltó tranquilamente desde el barco. Varko cargó hacia ella. Y entonces…"),
    eireneDialogue("Narrador", "CRACK."),
    eireneDialogue("Narrador", "El capitán pisó accidentalmente una tabla rota. Perdió el equilibrio apenas un segundo. Suficiente. Haze tiró distraídamente de la cuerda que había visto antes."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "Una vieja red de carga gigantesca cayó desde el mástil superior. Varko levantó la mirada. Demasiado tarde."),
    eireneDialogue("Narrador", "BOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La red lo atrapó completamente. Y el propio peso del capitán activó otra polea rota."),
    eireneDialogue("Narrador", "CRAAAAACK."),
    eireneDialogue("Narrador", "El ancla principal del barco salió disparada balanceándose. Impacto directo."),
    eireneDialogue("Narrador", "THOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La cubierta explotó. La red quedó colgando parcialmente destruida… con Varko completamente inconsciente dentro. Balanceándose lentamente sobre la playa."),
    eireneDialogue("Narrador", "Haze observó el resultado varios segundos. Pensativa."),
    eireneDialogue("Haze", "Creo… Que he ganado."),
    eireneDialogue("Rocky", "¡¡ESO HA SIDO EL COMBATE MÁS ABSURDO QUE HE VISTO EN MI VIDA!!"),
    eireneDialogue("Blue", "Sigo intentando entender cómo ha ocurrido."),
    eireneDialogue("Minutu", "Ni siquiera había una estrategia coherente."),
    eireneDialogue("Mako", "¡¡ERES COMO UN GATO CON PODERES DIVINOS!!"),
    eireneDialogue("Haze", "Creo que me gusta como suena eso."),
    eireneDialogue("Narrador", "Y sonrió tímidamente.")
  ]),

  eirene_varko_lars: eireneVarkoFightScene([
    eireneDialogue(
      "Narrador",
      "La bahía había quedado en silencio. Varko el Rojo seguía de pie sobre la arena destruida mientras el viento agitaba lentamente su enorme mostacho manchado de sangre. Y delante de él… Lars avanzó. Solo."
    ),
    eireneDialogue("Rocky", "Lars…"),
    eireneDialogue(
      "Narrador",
      "Pero él negó suavemente con la cabeza. Porque sabía algo. Esto no era solo una pelea. Llevaba años esperando este momento."
    ),
    eireneDialogue("Narrador", "Varko sonrió al verlo acercarse."),
    eireneDialogue("Varko", "Ah. El pequeño Lars, el corazón amable."),
    eireneDialogue("Narrador", "La enorme espada dentada descendió lentamente hacia el suelo."),
    eireneDialogue("Varko", "¿Por fin has decidido dejar de esconderte?"),
    eireneDialogue(
      "Narrador",
      "Lars guardó silencio unos segundos. Mirando la playa destruida, el barco, la cueva, y finalmente… Eirene. Su isla."
    ),
    eireneDialogue("Lars", "No. Creo que por primera vez he decidido dejar de cargar con todo yo solo."),
    eireneDialogue(
      "Narrador",
      "Silencio. Y entonces… la energía apareció. Pero esta vez era distinta. Muchísimo más intensa. Toda la bahía empezó a llenarse lentamente de emociones visibles: miedo, rabia, tristeza, desesperación. Años enteros acumulados dentro de Eirene."
    ),
    eireneDialogue("Blue", "…Está absorbiendo toda la isla."),
    eireneDialogue(
      "Narrador",
      "Lars seguía avanzando. Y cuanto más se acercaba a Varko… más pesada se volvía la energía. Los piratas restantes empezaron a retroceder aterrorizados. Porque podían sentirlo. Todo el sufrimiento que habían provocado."
    ),
    eireneDialogue("Narrador", "Varko frunció lentamente el ceño. Por primera vez."),
    eireneDialogue("Varko", "¿Qué demonios eres tú…?"),
    eireneDialogue(
      "Narrador",
      "Lars levantó lentamente la mirada. Y Varko vio algo extraño. No odio. No rabia. Dolor. Un dolor inmenso."
    ),
    eireneDialogue(
      "Lars",
      "Todo este tiempo… He seguido recogiendo el miedo de esta isla. La tristeza. La desesperación. El sufrimiento."
    ),
    eireneDialogue(
      "Narrador",
      "La energía comenzó a rodearlo completamente. Oscura. Brillante. Hermosa. Peligrosa. Y aun así… Lars seguía avanzando. Aunque claramente le estaba costando mantenerse en pie."
    ),
    eireneDialogue(
      "Narrador",
      "Rocky apretó los puños. Porque podía verlo. Lars estaba llevando demasiado peso otra vez."
    ),
    eireneDialogue("Narrador", "Varko rugió entonces y cargó."),
    eireneDialogue("Narrador", "BOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La espada descendió brutalmente. Pero Lars levantó una mano. Y la energía emocional explotó."
    ),
    eireneDialogue("Narrador", "WHOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Una gigantesca barrera translúcida detuvo el ataque. Toda la bahía tembló."),
    eireneDialogue("Narrador", "Varko abrió los ojos sorprendido."),
    eireneDialogue(
      "Narrador",
      "Y Lars… por primera vez… dejó de retroceder. La energía comenzó a moverse alrededor suyo como emociones convertidas en materia viva. Brazos gigantes. Cadenas. Fragmentos luminosos. Todo formado por el dolor acumulado de Eirene."
    ),
    eireneDialogue("Narrador", "Varko volvió a atacar rugiendo. Y Lars respondió. No con rabia. Con liberación."),
    eireneDialogue("Narrador", "BOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue(
      "Narrador",
      "La energía emocional atravesó la playa como una ola gigantesca. Impactó directamente contra Varko. La arena explotó. El barco tembló. La bahía entera rugió. Y durante unos segundos… todo el miedo acumulado durante años golpeó directamente al capitán. Los gritos. Las pérdidas. Las noches de terror. La desesperación. Todo."
    ),
    eireneDialogue(
      "Narrador",
      "Varko intentó avanzar. No pudo. La energía seguía aplastándolo. Porque aquello no era fuerza física. Era el peso emocional de toda una isla."
    ),
    eireneDialogue(
      "Narrador",
      "Lars respiraba cada vez peor. Las grietas de energía recorrían completamente sus brazos."
    ),
    eireneDialogue("Blue", "¡Lars basta!"),
    eireneDialogue(
      "Narrador",
      "Pero Lars siguió. Porque por primera vez… no estaba usando su poder para soportar dolor. Lo estaba liberando. Y entonces ocurrió. Toda la energía acumulada explotó en un último impacto."
    ),
    eireneDialogue("Narrador", "THOOOOOOOOOOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "La playa entera tembló. El mar se agitó violentamente."),
    eireneDialogue(
      "Narrador",
      "Y Varko el Rojo salió despedido atravesando parte de la cubierta de su propio barco antes de caer completamente inconsciente entre los restos destruidos."
    ),
    eireneDialogue("Narrador", "Completo silencio."),
    eireneDialogue("Narrador", "La energía emocional empezó a desaparecer lentamente alrededor de Lars. Y entonces… sus piernas fallaron."),
    eireneDialogue(
      "Narrador",
      "Mako reaccionó inmediatamente sujetándolo antes de que cayera al suelo."
    ),
    eireneDialogue("Narrador", "Lars respiraba agotado. Vacío. Pero por primera vez… ligero."),
    eireneDialogue("Narrador", "Reina tenía lágrimas en los ojos sin entender muy bien por qué."),
    eireneDialogue("Narrador", "Blue observaba a Lars completamente seria."),
    eireneDialogue(
      "Narrador",
      "Y Haze levantó lentamente la mirada hacia las aves sobrevolando la bahía."
    ),
    eireneDialogue("Haze", "Creo que Eirene ha empezado a respirar otra vez."),
    eireneDialogue("Narrador", "Y esta vez… nadie discutió eso.")
  ]),

  eirene_plan_retaguardia: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_Grupo_Junto.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El fuego crepitaba suavemente junto al puerto mientras el grupo observaba el mapa extendido frente a ellos."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Entonces Rocky suspiró."),
    eireneDialogue("Rocky", "Vale. Odio admitirlo… Pero probablemente infiltrarse sea mejor."),
    eireneDialogue("Narrador", "Minutu levantó lentamente la mirada."),
    eireneDialogue("Minutu", "Estoy guardando este momento en mi memoria para siempre."),
    eireneDialogue("Narrador", "Mako señaló inmediatamente."),
    eireneDialogue("Mako", "¡¡NO TE PREOCUPES!! ¡¡SEGURO QUE ACABAMOS EXPLOTANDO ALGO IGUALMENTE!!"),
    eireneDialogue("Narrador", "Eso tranquilizó muchísimo a Rocky."),
    eireneDialogue(
      "Narrador",
      "Lars seguía observando el mapa. Y finalmente señaló una zona concreta detrás de los acantilados."
    ),
    eireneDialogue(
      "Lars",
      "Hay una ruta antigua usada por pescadores hace años. Cruza por detrás de las cuevas de los Mandíbula Roja. Pero nadie la usa ya."
    ),
    eireneDialogue("Narrador", "Blue frunció ligeramente el ceño."),
    eireneDialogue("Blue", "¿Por qué?"),
    eireneDialogue("Narrador", "Lars dudó apenas un segundo."),
    eireneDialogue("Lars", "Porque es peligrosa."),
    eireneDialogue("Narrador", "Haze levantó ligeramente la mano."),
    eireneDialogue("Haze", "Eso suele significar que es buena ruta."),
    eireneDialogue("Narrador", "Minutu asintió resignado."),
    eireneDialogue("Minutu", "Correcto. Porque nadie esperará un ataque desde allí."),
    eireneDialogue(
      "Narrador",
      "La decisión quedó tomada. Y así… antes del amanecer… la tripulación abandonó silenciosamente el pueblo."
    ),
    eireneDialogue(
      "Narrador",
      "La niebla violeta cubría todavía gran parte de la costa mientras avanzaban entre bosques húmedos y senderos estrechos junto a los acantilados. El mar rugía muchos metros más abajo. Y cuanto más se alejaban del pueblo… más incómodo parecía Lars."
    ),
    eireneDialogue("Narrador", "Mako caminaba delante completamente emocionada."),
    eireneDialogue("Mako", "¡¡ESTO YA PARECE UNA MISIÓN SECRETA!!"),
    eireneDialogue("Blue", "Porque literalmente lo es."),
    {
      type: "background",
      image: "Fondo_ruta_secreta.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Lars guiaba al grupo por una estrecha ruta de pescadores que bordeaba la costa por detrás de la bahía principal. El camino era incómodo. Resbaladizo. Y peligrosamente estrecho en algunos tramos."
    ),
    eireneDialogue(
      "Narrador",
      "Pero funcionó. Porque menos de una hora después… ya podían ver la parte trasera de la cueva de los Mandíbula Roja."
    ),
    eireneDialogue("Narrador", "Blue observó las entradas principales a lo lejos."),
    eireneDialogue("Blue", "No nos han visto."),
    eireneDialogue("Narrador", "Minutu asintió."),
    eireneDialogue("Minutu", "Correcto. Toda su vigilancia está enfocada hacia el puerto principal."),
    eireneDialogue("Narrador", "Mako sonrió muchísimo."),
    eireneDialogue("Mako", "¡¡SOMOS NINJAS DEL CRIMEN!!"),
    eireneDialogue("Narrador", "Haze señaló distraídamente hacia dentro de la cueva."),
    eireneDialogue("Haze", "Huele a alcohol. Y a decisiones terribles."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Rocky", "Perfecto."),
    {
      type: "background",
      image: "Fondo_cueva_pirata.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El grupo avanzó lentamente entre cajas robadas, barriles y pasadizos excavados dentro del acantilado. Y cuanto más se adentraban… más claro se volvía algo. Los Mandíbula Roja no esperaban absolutamente ningún ataque. Se escuchaban risas, gritos, vasos chocando, música horrible. Incluso algunos piratas dormían tirados por el suelo."
    ),
    eireneDialogue("Mako", "Wow. Son muchísimo más idiotas de lo que esperaba."),
    eireneDialogue(
      "Narrador",
      "Entonces Lars se detuvo. Frente a ellos había una enorme cocina improvisada llena de ollas gigantes, barriles de alcohol y comida preparada para toda la banda. Y Blue lentamente sonrió."
    ),
    eireneDialogue("Blue", "Tengo una idea."),
    eireneDialogue("Narrador", "Minutu la miró inmediatamente."),
    eireneDialogue("Minutu", "¿Una idea inteligente o una idea preocupante?"),
    eireneDialogue("Blue", "La duda ofende…"),
    eireneDialogue("Narrador", "Pocos minutos después… el grupo trabajaba en completo silencio."),
    eireneDialogue("Narrador", "Reina mantenía vigiladas las entradas usando pequeños lazos rosados."),
    eireneDialogue("Narrador", "Rocky cargaba barriles enormes sin entender muy bien el plan."),
    eireneDialogue("Narrador", "Mako intentaba no comerse accidentalmente algo."),
    eireneDialogue("Narrador", "Haze había encontrado hierbas extrañas cerca de la costa."),
    eireneDialogue(
      "Narrador",
      "Y Lars… Lars reconoció inmediatamente cuáles podían provocar sueño profundo sin resultar peligrosas."
    ),
    eireneDialogue(
      "Narrador",
      "Blue mezcló cuidadosamente las plantas trituradas dentro de enormes ollas de comida y barriles de bebida."
    ),
    eireneDialogue("Blue", "No es veneno. Solo… una siesta extremadamente larga."),
    eireneDialogue("Minutu", "Técnicamente eso sigue siendo bastante ilegal."),
    eireneDialogue("Narrador", "Mako levantó una cuchara."),
    eireneDialogue("Mako", "¡¡ASESINATO CULINARIO!!"),
    eireneDialogue("Narrador", "Y entonces esperaron. Lo que ocurrió después… fue extremadamente rápido."),
    eireneDialogue(
      "Narrador",
      "Primero uno. Luego varios. Después decenas. Piratas tambaleándose. Otros cayendo sobre mesas. Algunos discutiendo con barriles inexistentes antes de desplomarse."
    ),
    eireneDialogue("Narrador", "Rocky observaba completamente fascinado."),
    eireneDialogue("Rocky", "Esto es muchísimo más eficiente que pegarles."),
    eireneDialogue("Narrador", "Blue ajustó las gafas orgullosa."),
    eireneDialogue("Blue", "Lo sé."),
    eireneDialogue("Narrador", "Minutu observó la cueva llena de piratas inconscientes."),
    eireneDialogue("Minutu", "Honestamente… Esto ha salido absurdamente bien."),
    eireneDialogue(
      "Narrador",
      "Entonces un rugido atravesó toda la cueva. Uno tan fuerte… que incluso varias antorchas temblaron."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Pasos. Lentos. Pesados."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    {
      type: "background",
      image: "Fondo_cueva_pirata.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Y desde la entrada de la cueva apareció él. El capitán pirata. Completamente despierto. La enorme espada dentada apoyada sobre el hombro."
    ),
    characterStep("varko_rojo", { animation: "enter" }),
    eireneDialogue(
      "Narrador",
      "Observó a sus hombres inconscientes, el caos, las ollas y miró alrededor. Buscando."
    ),
    eireneDialogue("Capitán", "…¿Quién ha drogado a la tripulación de Varko el Rojo?"),
    eireneDialogue(
      "Narrador",
      "Rocky dio un paso hacia delante saliendo de las sombras. La mirada de Varko recayó en él."
    ),
    eireneDialogue("Narrador", "Mako levantó lentamente la mano."),
    eireneDialogue("Mako", "Nosotros. Pero con muchísimo cariño."),
    eireneDialogue(
      "Narrador",
      "Varko apretó lentamente la espada. La mandíbula roja temblaba de rabia."
    ),
    eireneDialogue("Capitán", "Voy. A. Mataros. Muy. Despacio."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Narrador", "Reina hizo aparecer los lazos rosados."),
    eireneDialogue("Narrador", "Blue ajustó sus gafas."),
    eireneDialogue("Narrador", "Minutu suspiró resignado."),
    eireneDialogue("Narrador", "Haze observó varias aves entrando por el techo roto de la cueva."),
    eireneDialogue("Narrador", "Y Lars dio un paso adelante."),
    eireneDialogue(
      "Narrador",
      "Porque ahora… solo quedaba derrotar al monstruo que había aterrorizado Eirene durante años."
    ),
    eireneDialogue(
      "Narrador",
      "Varko observó lentamente a toda la tripulación mientras la cueva permanecía llena de Mandíbulas Rojas inconscientes. El silencio era incómodo. Pesado."
    ),
    eireneDialogue(
      "Narrador",
      "La enorme espada dentada descansaba sobre su hombro mientras una sonrisa peligrosa empezaba a dibujarse lentamente en su rostro."
    ),
    eireneDialogue("Varko", "No. No vamos a luchar aquí dentro."),
    eireneDialogue("Narrador", "Rocky sonrió inmediatamente."),
    eireneDialogue("Rocky", "¿Ah, no?"),
    eireneDialogue("Narrador", "Varko empezó a caminar hacia la salida de la cueva."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Narrador", "CLANK."),
    eireneDialogue("Varko", "Demasiado poco espacio. Y sinceramente…"),
    eireneDialogue("Narrador", "Giró ligeramente la cabeza hacia ellos."),
    eireneDialogue("Varko", "Quiero ver bien cómo os rompo."),
    eireneDialogue("Narrador", "Mako levantó ambos brazos."),
    eireneDialogue("Mako", "¡¡ESTOY DE ACUERDO CON ESTE SEÑOR!!"),
    eireneDialogue("Blue", "A mí me preocupa muchísimo."),
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Varko salió finalmente hacia el exterior. Y la luz gris del amanecer volvió a llenar el ambiente. La enorme bahía se extendía frente a ellos: el mar golpeando las rocas, el gigantesco barco pirata atracado, la niebla violeta moviéndose lentamente sobre la playa vacía."
    ),
    characterStep("varko_rojo", { animation: "enter" }),
    eireneDialogue("Narrador", "El capitán clavó lentamente la espada en la arena húmeda."),
    eireneDialogue("Narrador", "BOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    eireneDialogue("Narrador", "Y abrió ambos brazos."),
    eireneDialogue(
      "Varko",
      "Vamos entonces. Quiero ver cuál de vosotros tiene el valor de enfrentarse a Varko el Rojo."
    ),
    eireneDialogue("Narrador", "El viento atravesó la bahía."),
    {
      type: "choice",
      text: "¿Quién decide enfrentarse a Varko el Rojo?",
      options: [
        {
          text: "Rocky",
          nextScene: "eirene_varko_rocky"
        },
        {
          text: "Reina",
          nextScene: "eirene_varko_reina"
        },
        {
          text: "Mako",
          nextScene: "eirene_varko_mako"
        },
        {
          text: "Blue",
          nextScene: "eirene_varko_blue"
        },
        {
          text: "Minutu",
          nextScene: "eirene_varko_minutu"
        },
        {
          text: "Haze",
          nextScene: "eirene_varko_haze"
        },
        {
          text: "Lars",
          nextScene: "eirene_varko_lars"
        }
      ]
    }
  ],

  eirene_post_varko: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "Fondo_playa_destrozada.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "El sonido del mar volvió lentamente a llenar la bahía."
    ),
    eireneDialogue(
      "Narrador",
      "Varko el Rojo yacía inconsciente entre los restos destruidos de su propio barco mientras la enorme espada dentada descansaba clavada en la arena mojada. Todo había terminado."
    ),
    eireneDialogue(
      "Narrador",
      "La niebla violeta de Eirene empezaba a disiparse poco a poco bajo la luz del amanecer. Nadie habló durante unos segundos. Porque después de tanta tensión… el silencio se sentía extraño."
    ),
    {
      type: "background",
      image: "Fondo_Varko_Derrotado.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Lars observó lentamente el barco destrozado. Y entonces empezó a caminar. Subió entre restos de madera rota, cadenas partidas y telas quemadas hasta desaparecer parcialmente entre los pedazos de la cubierta destruida."
    ),
    eireneDialogue("Narrador", "Reina observó curiosa."),
    eireneDialogue("Reina", "¿Qué está buscando?"),
    eireneDialogue(
      "Narrador",
      "Unos minutos después… Lars reapareció. Y sostenía algo entre las manos. Una pequeña estatuilla de bronce."
    ),
    {
      type: "inspect",
      image: "Busto_mujer.jpeg",
      buttonText: "Busto",
      alt: "Busto de la primera sanadora de Eirene",
      autoOpen: true
    },
    eireneDialogue(
      "Narrador",
      "Un busto de cintura hacia arriba de una mujer, con el rostro sereno y la cabeza elevada hacia el cielo."
    ),
    eireneDialogue(
      "Narrador",
      "El grupo se acercó lentamente. Y entonces Reina lo vio. En mitad de la frente de la figura… el símbolo. El círculo fragmentado en cinco."
    ),
    eireneDialogue(
      "Lars",
      "Es un busto de la primera sanadora de Eirene. Los piratas se la llevaron hace mucho tiempo y quería recuperarla."
    ),
    eireneDialogue("Narrador", "Silencio."),
    eireneDialogue("Narrador", "Reina levantó lentamente la mirada."),
    eireneDialogue("Reina", "Lars… ¿Puedo?"),
    eireneDialogue("Narrador", "Él asintió."),
    eireneDialogue(
      "Narrador",
      "Reina tomó cuidadosamente la estatuilla y la giró lentamente entre las manos. Y allí estaba. Grabado en la base inferior del busto. Unos números. El último código."
    ),
    eireneDialogue("Narrador", "41.362428, 1.708434"),
    eireneDialogue("Narrador", "Blue abrió ligeramente los ojos."),
    eireneDialogue("Blue", "Entonces… Ya los tenemos todos, ¿no?"),
    eireneDialogue(
      "Narrador",
      "Minutu ya parecía estar conectando piezas mentalmente a una velocidad preocupante."
    ),
    eireneDialogue("Minutu", "Eso debe indicar algo."),
    eireneDialogue("Narrador", "Rocky sonrió lentamente."),
    eireneDialogue("Rocky", "Entonces estamos más cerca del One Piece."),
    eireneDialogue(
      "Narrador",
      "Y por primera vez… todos sintieron que aquello empezaba a volverse real."
    ),
    {
      type: "background",
      image: "Fondo_ciudad_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Más tarde, cuando regresaron al pueblo… Eirene entera los esperaba. La noticia se extendió antes incluso de que llegaran al puerto. Los Mandíbula Roja habían caído. De verdad."
    ),
    eireneDialogue(
      "Narrador",
      "La gente lloraba. Reía. Se abrazaba."
    ),
    eireneDialogue(
      "Narrador",
      "Y cuando Lars apareció… el silencio recorrió toda la plaza."
    ),
    eireneDialogue(
      "Narrador",
      "Él observó a su gente unos segundos. Y finalmente sonrió."
    ),
    eireneDialogue("Lars", "Se acabó. Ya no volverán."),
    eireneDialogue(
      "Narrador",
      "Y Eirene explotó en emoción. Aquella noche el pueblo volvió a llenarse de luz. Pero esta vez… sin miedo."
    ),
    {
      type: "background",
      image: "Fondo_ciudad_Eirene.jpeg"
    },
    eireneDialogue(
      "Narrador",
      "Más tarde, junto al Nyinyus ya preparado para partir, la tripulación terminaba de cargar provisiones mientras Lars observaba el puerto en silencio."
    ),
    eireneDialogue("Narrador", "Rocky se acercó a él."),
    eireneDialogue("Rocky", "Oye."),
    eireneDialogue("Narrador", "Lars levantó ligeramente la mirada."),
    eireneDialogue("Narrador", "Rocky sonrió."),
    eireneDialogue("Rocky", "¿Qué te parecería venirte con nosotros?"),
    eireneDialogue("Narrador", "Lars parpadeó."),
    eireneDialogue("Narrador", "Reina dio un paso adelante."),
    eireneDialogue(
      "Reina",
      "Sé que te sientes responsable de la gente de esta isla. Pero ahora están a salvo."
    ),
    eireneDialogue(
      "Narrador",
      "Haze observaba varias aves sobrevolando el puerto."
    ),
    eireneDialogue(
      "Haze",
      "Los pájaros nos buscarán y nos avisarán si algo vuelve a pasar aquí."
    ),
    eireneDialogue("Narrador", "Reina sonrió ligeramente."),
    eireneDialogue("Reina", "Ya lo has oído. ¿Qué dices?"),
    eireneDialogue(
      "Narrador",
      "Mako apareció literalmente colgándose del hombro de Lars."
    ),
    eireneDialogue("Mako", "Si sabes que quieres. ¡No te hagas de rogar!"),
    eireneDialogue(
      "Narrador",
      "Lars bajó lentamente la mirada. Hacia Eirene. Hacia el puerto. Hacia su hogar. El lugar donde había pasado tantos años cargando con todo. Y por primera vez… sintió algo distinto. No culpa. Libertad."
    ),
    eireneDialogue(
      "Narrador",
      "Entonces sonrió. Una sonrisa pequeña. Pero completamente real."
    ),
    eireneDialogue("Lars", "…Vale. Creo que me gustaría ver el mundo con vosotros."),
    eireneDialogue(
      "Narrador",
      "Mako gritó tan fuerte que varias aves salieron volando de los tejados."
    ),
    eireneDialogue("Narrador", "Rocky empezó a reírse."),
    eireneDialogue("Narrador", "Blue sonrió."),
    eireneDialogue("Narrador", "Incluso Minutu pareció satisfecho."),
    eireneDialogue(
      "Narrador",
      "Y Haze simplemente asintió. Como si ya lo hubiera sabido desde hacía tiempo."
    ),
    {
      type: "background",
      image: "FONDO TRANSICIÓN_4.png"
    },
    eireneDialogue(
      "Narrador",
      "Poco después… el Nyinyus abandonó lentamente el puerto de Eirene. Y mientras el barco se alejaba… la isla quedó atrás entre la niebla violeta y la luz del amanecer. Pero esta vez… sin cadenas."
    )
  ]
});
