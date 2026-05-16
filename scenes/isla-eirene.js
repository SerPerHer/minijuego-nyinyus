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
  characterStep("pirata", { animation: "enter" }),
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
  characterStep("pirata", { animation: "enter" }),
  ...steps,
  eireneDialogue("Narrador", "Continuará...")
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
    characterStep("pirata", { animation: "enter" }),
    eireneDialogue("Pirata", "¿Qué coño ha pasado aquí?"),
    eireneDialogue("Narrador", "Otro vio a Lars. Y sonrió."),
    eireneDialogue(
      "Pirata",
      "Ah. Claro. Tenía que estar el héroe del pueblo metido en medio."
    ),
    eireneDialogue("Narrador", "Lars dio un paso adelante inmediatamente."),
    eireneDialogue(
      "Lars",
      "Ha sido un accidente. Solo unos niños jugando."
    ),
    eireneDialogue(
      "Pirata",
      "¿Y nosotros tenemos cara de preocuparnos por niños?"
    ),
    eireneDialogue(
      "Narrador",
      "Otro de los Mandíbula Roja escupió al suelo mirando el destrozo."
    ),
    eireneDialogue(
      "Pirata",
      "Ese almacén paga tributo. Si algo explota aquí… alguien compensa las pérdidas."
    ),
    eireneDialogue("Narrador", "Lars bajó ligeramente la mirada."),
    eireneDialogue("Lars", "Yo me haré responsable."),
    eireneDialogue("Narrador", "Rocky frunció el ceño. Mucho."),
    eireneDialogue("Narrador", "El pirata sonrió cruelmente."),
    eireneDialogue("Pirata", "Claro que sí."),
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
      "Pirata",
      "Perfecto. Entonces os romperemos a vosotros también."
    ),
    {
      type: "clearCharacters"
    },
    characterStep("pirata", { animation: "enter" }),
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
    eireneDialogue("Pirata", "Maldito imbécil…"),
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
    eireneDialogue("Pirata", "¿Qué demonios eres tú?"),
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
    eireneDialogue("Pirata", "T-tú…"),
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
    eireneDialogue("Pirata", "¡¡MUERE!!"),
    eireneDialogue("Narrador", "WHOOOOM."),
    eireneDialogue(
      "Narrador",
      "El enorme martillo descendió directamente hacia su cabeza."
    ),
    eireneDialogue("Narrador", "Rocky lo atrapó con una mano. Silencio absoluto."),
    eireneDialogue("Pirata", "…¿Qué?"),
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
    eireneDialogue("Pirata", "¡¡A LA MIERDA ESTO!!"),
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
    eireneDialogue("Pirata", "¿Qué demonios es eso…?"),
    eireneDialogue(
      "Narrador",
      "Reina los observó en silencio. Completamente tranquila."
    ),
    eireneDialogue("Reina", "Última oportunidad. Marchaos."),
    eireneDialogue("Narrador", "El líder escupió al suelo."),
    eireneDialogue("Pirata", "Que te den."),
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
    eireneDialogue("Pirata", "¡¡MUERE!!"),
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
    eireneDialogue("Pirata", "¿¡QUÉ COÑO!?"),
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
    eireneDialogue("Pirata", "¿¡PERO QUÉ!?"),
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
    eireneDialogue("Pirata", "¡¿QUÉ DEMONIOS ERES TÚ!?"),
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
    eireneDialogue("Pirata", "…No estás bien de la cabeza."),
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
  eirene_lucha_blue: eireneFightPendingScene(),
  eirene_lucha_minutu: eireneFightPendingScene(),
  eirene_lucha_haze: eireneFightPendingScene(),
  eirene_lucha_lars: eireneFightPendingScene()
});
