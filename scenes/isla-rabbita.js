const rabbitaDialogue = (speaker, text, characterId) => ({
  type: "dialogue",
  speaker,
  text,
  ...(characterId ? { characterId } : {})
});

Object.assign(story, {
  rabbita_llegada: [
    {
      type: "clearCharacters"
    },
    {
      type: "sound",
      file: "Naruto - Orochimaru theme (Dark Version).mp3",
      loop: true,
      volume: 0.55
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "El Nyinyus avanzaba lentamente entre bancos de niebla gris y corrientes extrañas."
    ),
    rabbitaDialogue(
      "Narrador",
      "El mar alrededor de Rabbita no se movía de forma natural."
    ),
    rabbitaDialogue(
      "Narrador",
      "Había zonas donde el agua parecía vibrar ligeramente."
    ),
    rabbitaDialogue(
      "Narrador",
      "Otras donde burbujas emergían desde las profundidades."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y de vez en cuando... un sonido grave atravesaba el casco del barco."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Como un latido gigantesco enterrado bajo el océano."
    ),
    rabbitaDialogue(
      "Narrador",
      "Mako estaba apoyada boca abajo sobre la proa."
    ),
    rabbitaDialogue("Mako", "Vale... esta isla tiene vibras rarísimas."),
    rabbitaDialogue(
      "Narrador",
      "Minutu observaba unos mapas con expresión preocupada."
    ),
    rabbitaDialogue("Minutu", "Las corrientes no tienen sentido lógico."),
    rabbitaDialogue("Rocky", "Perfecto. Entonces seguro que es interesante."),
    rabbitaDialogue("Narrador", "Reina observó el horizonte."),
    rabbitaDialogue("Narrador", "Y entonces la vieron."),
    rabbitaDialogue("Narrador", "Rabbita."),
    {
      type: "background",
      image: "Fondo_Isla_Rabbita.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Una enorme masa metálica emergía del mar como el cadáver oxidado de una civilización olvidada."
    ),
    rabbitaDialogue(
      "Narrador",
      "Chimeneas gigantes. Tuberías atravesando edificios enteros. Engranajes del tamaño de casas girando lentamente entre nubes de vapor."
    ),
    rabbitaDialogue(
      "Narrador",
      "Todo estaba cubierto por óxido, humo y estructuras mecánicas remendadas demasiadas veces."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y aun así... la isla seguía funcionando. Más o menos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Grandes puentes de hierro conectaban barrios enteros suspendidos sobre abismos mecánicos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Las calles temblaban suavemente bajo los pies. Algunas estructuras emitían vapor constantemente. Otras parecían completamente muertas."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y en algún lugar profundo bajo todo aquello... algo sonó otra vez."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Mako levantó lentamente la cabeza."),
    rabbitaDialogue("Mako", "Eso ha sonado a algo roto."),
    rabbitaDialogue("Minutu", "No se va a romper nada."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Narrador", "Otro temblor recorrió el muelle."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Minutu", "...Eso espero."),
    rabbitaDialogue(
      "Narrador",
      "Poco después, los cuatro caminaban por las calles principales de Rabbita."
    ),
    {
      type: "background",
      image: "Fondo_puerto.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "El ambiente era completamente distinto a cualquier otra isla que hubieran visitado."
    ),
    rabbitaDialogue(
      "Narrador",
      "La gente caminaba rápido. Los mecánicos discutían junto a máquinas abiertas. Las tuberías perdían vapor."
    ),
    rabbitaDialogue(
      "Narrador",
      "Algunos generadores se apagaban durante segundos antes de volver a arrancar con explosiones preocupantes."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y sobre todo... todos parecían cansados. Como si la isla entera estuviera sobreviviendo por pura terquedad."
    ),
    rabbitaDialogue("Narrador", "Rocky observó una enorme máquina soltando humo negro."),
    rabbitaDialogue("Rocky", "Vale. Creo que esta isla podría explotar en cualquier momento."),
    rabbitaDialogue(
      "Narrador",
      "Mako señaló un puesto callejero donde alguien cocinaba carne sobre una plancha metálica."
    ),
    rabbitaDialogue("Mako", "¡Pero huele increíble!"),
    rabbitaDialogue("Narrador", "Reina sonrió."),
    rabbitaDialogue("Reina", "Prioridades."),
    rabbitaDialogue("Narrador", "Minutu suspiró."),
    rabbitaDialogue("Minutu", "Al menos moriremos alimentados."),
    rabbitaDialogue(
      "Narrador",
      "Y así... terminaron entrando en una taberna enorme construida dentro de lo que parecía una antigua sala de máquinas."
    ),
    {
      type: "background",
      image: "Fondo_Taverna_Rabbita.jpeg"
    },
    rabbitaDialogue("Narrador", "El techo estaba lleno de tuberías."),
    rabbitaDialogue("Narrador", "Las paredes vibraban suavemente."),
    rabbitaDialogue(
      "Narrador",
      "Había relojes mecánicos, herramientas colgadas, calderas funcionando detrás de la barra y ventiladores gigantes moviendo el humo del ambiente."
    ),
    rabbitaDialogue(
      "Narrador",
      "El lugar estaba lleno de mecánicos cubiertos de grasa, marineros, chatarreros, ingenieros y gente claramente acostumbrada a vivir rodeada de explosiones accidentales."
    ),
    rabbitaDialogue("Narrador", "Rocky pidió comida para la tripulación."),
    rabbitaDialogue("Narrador", "Mako pidió lo más peligroso que tuvieran para beber."),
    rabbitaDialogue("Narrador", "Minutu se arrepintió de existir."),
    rabbitaDialogue("Narrador", "Y Reina simplemente disfrutó del raro momento de calma."),
    rabbitaDialogue(
      "Narrador",
      "Durante un rato... solo comieron. Rieron. Hablaron. Escucharon historias absurdas de los trabajadores del puerto."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y poco a poco... Mako empezó a elevar el tono de voz."
    ),
    rabbitaDialogue("Narrador", "Mako levantó una jarra."),
    rabbitaDialogue("Mako", "¡¡¡ESTA ISLA ES FANTÁSTICA!!!"),
    rabbitaDialogue("Minutu", "Llevamos aquí exactamente cuarenta y dos minutos."),
    rabbitaDialogue("Mako", "¡Y YA LA QUIERO!"),
    rabbitaDialogue("Narrador", "Mako vio a alguien sentada sola en la barra."),
    rabbitaDialogue(
      "Narrador",
      "Una chica de cabello azul oscuro recogido cuidadosamente, gafas redondas, y una expresión de absoluta concentración."
    ),
    rabbitaDialogue(
      "Narrador",
      "Frente a ella había varios papeles llenos de esquemas mecánicos, símbolos, cálculos y anotaciones escritas a mano."
    ),
    rabbitaDialogue(
      "Narrador",
      "Mientras toda la taberna gritaba, bebía y celebraba... ella parecía completamente encerrada dentro de su propia mente."
    ),
    rabbitaDialogue("Narrador", "Y lo más extraño: estaba bebiendo zumo."),
    rabbitaDialogue("Narrador", "Mako la señaló dramáticamente."),
    rabbitaDialogue("Mako", "Esa persona parece NECESITAR un abrazo."),
    rabbitaDialogue("Reina", "Mako no..."),
    rabbitaDialogue("Narrador", "Demasiado tarde."),
    rabbitaDialogue(
      "Narrador",
      "Mako apareció abrazando a la desconocida por los hombros como si la conociera de toda la vida."
    ),
    rabbitaDialogue("Mako", "¡¡¡HOLAAAAA!!!"),
    rabbitaDialogue("Narrador", "La chica pegó un pequeño salto. Sus papeles casi salieron volando."),
    rabbitaDialogue("?????", "¿¡Qué...!?", "blue"),
    rabbitaDialogue(
      "Mako",
      "¿Por qué estás triste y científica al mismo tiempo? ¿Quieres ser mi amiga? ¿Cómo te llamas? ¿Qué haces aquí?"
    ),
    rabbitaDialogue(
      "Narrador",
      "La chica parpadeó varias veces, intentando procesar todo lo que estaba ocurriendo."
    ),
    rabbitaDialogue("?????", "Yo... no estoy... ¿eh? Soy Blue... y yo... eh...", "blue"),
    rabbitaDialogue("Narrador", "Miró el brazo de Mako todavía colgado sobre ella."),
    rabbitaDialogue("Blue", "Necesito un momento para procesar esto."),
    rabbitaDialogue("Narrador", "Rocky empezó a reírse desde la mesa."),
    rabbitaDialogue("Narrador", "Minutu no."),
    rabbitaDialogue("Minutu", "Ya está. El huracán ya la está liando."),
    rabbitaDialogue("Mako", "¡Gracias!"),
    rabbitaDialogue("Narrador", "Minutu frunció el ceño y murmuró."),
    rabbitaDialogue("Minutu", "Claramente no era un cumplido..."),
    rabbitaDialogue(
      "Narrador",
      "Blue apartó cuidadosamente algunos papeles antes de que Mako les derramara alcohol encima."
    ),
    rabbitaDialogue(
      "Narrador",
      "Reina observó los documentos. Había planos enormes. Diagramas mecánicos. Mapas subterráneos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y una frase repetida varias veces entre anotaciones apresuradas: “El núcleo sigue latiendo.”"
    ),
    rabbitaDialogue("Narrador", "Reina frunció ligeramente el ceño."),
    rabbitaDialogue("Reina", "¿Qué es todo esto?"),
    rabbitaDialogue("Narrador", "Blue dudó unos segundos."),
    rabbitaDialogue("Narrador", "Luego miró lentamente los papeles."),
    rabbitaDialogue("Blue", "Investigación de mi mentor."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "Era el ingeniero jefe de Rabbita."),
    rabbitaDialogue("Narrador", "Sus dedos rozaron una de las notas."),
    rabbitaDialogue("Blue", "Llevaba años intentando descubrir por qué la isla se está muriendo."),
    rabbitaDialogue("Narrador", "Otro temblor recorrió suavemente la taberna."),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Blue levantó lentamente la mirada."),
    rabbitaDialogue(
      "Blue",
      "Y justo cuando dijo que había encontrado la solución... desapareció."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue terminó sentándose con ellos casi sin darse cuenta de cómo había ocurrido."
    ),
    rabbitaDialogue(
      "Narrador",
      "Principalmente porque Mako seguía abrazada a ella como un koala imposible de despegar."
    ),
    {
      type: "background",
      image: "Fondo_Mesa_5.jpeg"
    },
    rabbitaDialogue("Mako", "Ya eres oficialmente nuestra amiga científica triste."),
    rabbitaDialogue("Narrador", "Blue parpadeó."),
    rabbitaDialogue("Blue", "Eso... no creo que sea una categoría real."),
    rabbitaDialogue("Mako", "Ahora sí."),
    rabbitaDialogue(
      "Narrador",
      "Rocky se apoyó sobre la mesa mientras llegaban más platos y jarras."
    ),
    rabbitaDialogue("Narrador", "Reina observaba los papeles con curiosidad."),
    rabbitaDialogue(
      "Narrador",
      "Y Minutu... bueno. Minutu ya había empezado a analizarlos como si estuviera estudiando una operación militar."
    ),
    rabbitaDialogue(
      "Narrador",
      "Había esquemas mecánicos. Diagramas de presión. Planos subterráneos. Mapas internos de Rabbita. Y decenas de anotaciones escritas apresuradamente."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Otro latido metálico atravesó suavemente la taberna."),
    rabbitaDialogue("Narrador", "Blue bajó ligeramente la mirada."),
    rabbitaDialogue("Blue", "La isla se está muriendo."),
    rabbitaDialogue("Narrador", "El ambiente se volvió un poco más serio."),
    rabbitaDialogue("Narrador", "Blue apoyó una mano sobre las notas."),
    rabbitaDialogue(
      "Blue",
      "Lleva años empeorando. Los mecanismos fallan. Las corrientes cambian. Algunas zonas dejan de funcionar durante horas enteras."
    ),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "Pero mi mentor siempre conseguía mantenerla estable."),
    rabbitaDialogue("Narrador", "Reina inclinó ligeramente la cabeza."),
    rabbitaDialogue("Reina", "¿Tu mentor?"),
    rabbitaDialogue("Narrador", "Blue asintió."),
    rabbitaDialogue(
      "Blue",
      "Meca Sylus. Era el ingeniero jefe de Rabbita. El mejor mecánico de toda la isla."
    ),
    rabbitaDialogue("Narrador", "Mako levantó una mano."),
    rabbitaDialogue("Mako", "Eso significa que automáticamente ya me cae bien."),
    rabbitaDialogue("Minutu", "No creo que funcione así."),
    rabbitaDialogue("Mako", "Sí funciona."),
    rabbitaDialogue(
      "Narrador",
      "Blue apartó varios documentos y extendió un plano mucho más antiguo que el resto."
    ),
    rabbitaDialogue(
      "Narrador",
      "El papel estaba desgastado. Manchado de aceite. Y lleno de marcas hechas a mano."
    ),
    rabbitaDialogue("Blue", "Muchísima gente intentó descubrir qué estaba ocurriendo aquí."),
    rabbitaDialogue("Narrador", "Sus dedos siguieron unas líneas dibujadas bajo la isla."),
    rabbitaDialogue("Blue", "Pero todos fracasaron."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "Hasta que él encontró algo."),
    rabbitaDialogue("Narrador", "El grupo guardó silencio."),
    rabbitaDialogue("Narrador", "Incluso Mako dejó de moverse unos segundos."),
    rabbitaDialogue("Blue", "Encontró unas puertas enormes bajo Rabbita."),
    rabbitaDialogue("Narrador", "Rocky levantó una ceja."),
    rabbitaDialogue("Blue", "Puertas metálicas. Antiguas. Oxidadas por el agua y el tiempo."),
    rabbitaDialogue("Narrador", "Sus ojos se movieron hacia las notas."),
    rabbitaDialogue("Blue", "Llenas de engranajes."),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Otro temblor recorrió suavemente el suelo."),
    rabbitaDialogue("Narrador", "La taberna vibró."),
    rabbitaDialogue("Narrador", "Algunas botellas tintinearon."),
    rabbitaDialogue(
      "Blue",
      "Él estaba convencido de que detrás de esas puertas se encontraba el secreto del declive de Rabbita."
    ),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "Decía que había algo allí abajo."),
    rabbitaDialogue("Narrador", "Miró lentamente hacia el suelo."),
    rabbitaDialogue("Blue", "Algo que ya no estaba funcionando correctamente."),
    rabbitaDialogue("Narrador", "Rocky se cruzó de brazos."),
    rabbitaDialogue("Rocky", "¿Y no pudieron abrirlas?"),
    rabbitaDialogue("Narrador", "Blue negó lentamente."),
    rabbitaDialogue("Blue", "Nunca."),
    rabbitaDialogue("Narrador", "Mako levantó un dedo."),
    rabbitaDialogue("Mako", "Vale. Pregunta importante."),
    rabbitaDialogue("Narrador", "Todos la miraron."),
    rabbitaDialogue("Mako", "¿Las puertas tienen pinta de esconder algo increíble?"),
    rabbitaDialogue("Narrador", "Blue dudó unos segundos."),
    rabbitaDialogue("Blue", "...Sí."),
    rabbitaDialogue("Narrador", "Mako golpeó la mesa emocionada."),
    rabbitaDialogue("Mako", "¡Sabía que esta isla me iba a gustar muchísimo!"),
    rabbitaDialogue("Narrador", "Minutu seguía leyendo las notas sin levantar la cabeza."),
    rabbitaDialogue("Narrador", "Cada vez parecía más concentrado."),
    rabbitaDialogue("Narrador", "Blue respiró hondo."),
    rabbitaDialogue("Blue", "Hace dos días fui a buscar a Sylus."),
    rabbitaDialogue("Narrador", "Su voz bajó ligeramente."),
    rabbitaDialogue("Blue", "Y había desaparecido."),
    rabbitaDialogue("Narrador", "Silencio."),
    rabbitaDialogue("Blue", "No había señales de lucha. Ni sangre. Ni herramientas."),
    rabbitaDialogue("Narrador", "Miró las hojas."),
    rabbitaDialogue("Blue", "Solo dejó esto."),
    rabbitaDialogue("Narrador", "Sacó varias páginas más."),
    rabbitaDialogue("Narrador", "Eran distintas al resto."),
    rabbitaDialogue("Narrador", "Más desordenadas."),
    rabbitaDialogue("Narrador", "Escritas con rapidez."),
    rabbitaDialogue("Narrador", "Como si hubieran sido redactadas antes de marcharse."),
    rabbitaDialogue("Blue", "Parecen instrucciones."),
    rabbitaDialogue("Narrador", "Reina se acercó ligeramente."),
    rabbitaDialogue("Narrador", "Blue empezó a leer."),
    rabbitaDialogue("Blue", "“Debes ir a la puerta.”"),
    rabbitaDialogue("Narrador", "Pasó la página."),
    rabbitaDialogue("Blue", "“Cambia el orden de los engranajes.”"),
    rabbitaDialogue("Narrador", "Otra."),
    rabbitaDialogue("Blue", "“Haz que conecten.”"),
    rabbitaDialogue("Narrador", "Minutu levantó lentamente la vista."),
    rabbitaDialogue("Blue", "“Luego ve al centro.”"),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "“Sigue el latido.”"),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Toda la mesa quedó en silencio cuando el sonido volvió a atravesar la isla."
    ),
    rabbitaDialogue("Narrador", "Blue bajó lentamente la última hoja."),
    rabbitaDialogue("Blue", "“Allí encontrarás el problema.”"),
    rabbitaDialogue("Narrador", "Sus dedos temblaron apenas un poco."),
    rabbitaDialogue("Blue", "“Y también la solución.”"),
    rabbitaDialogue("Narrador", "Durante unos segundos nadie habló."),
    rabbitaDialogue(
      "Narrador",
      "Incluso Mako parecía haber entendido que aquello iba en serio."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y entonces... Minutu frunció el ceño."
    ),
    rabbitaDialogue(
      "Narrador",
      "Muy lentamente apartó una de las páginas. Debajo había un grabado parcialmente oculto entre esquemas mecánicos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Todos lo vieron al mismo tiempo. El símbolo. El círculo fragmentado en cinco partes."
    ),
    rabbitaDialogue("Narrador", "Silencio absoluto."),
    rabbitaDialogue("Narrador", "Mako abrió muchísimo los ojos."),
    rabbitaDialogue("Mako", "¡¡¡EHHHHH!!!"),
    rabbitaDialogue("Narrador", "Metió inmediatamente la mano dentro de su ropa."),
    rabbitaDialogue(
      "Minutu",
      "Cada vez que haces eso temo muchísimo lo que va a ocurrir después."
    ),
    rabbitaDialogue(
      "Narrador",
      "Mako ignoró completamente el comentario. Sacó la aguja metálica de la brújula que llevaba colgada al cuello."
    ),
    rabbitaDialogue(
      "Narrador",
      "La dejó sobre la mesa. El mismo símbolo estaba grabado allí."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue se quedó inmóvil. Miró la aguja. Luego las notas. Luego otra vez la aguja."
    ),
    rabbitaDialogue("Blue", "...No puede ser."),
    rabbitaDialogue("Narrador", "Reina se inclinó hacia ella."),
    rabbitaDialogue("Reina", "¿Qué pasa?"),
    rabbitaDialogue("Narrador", "Blue señaló lentamente uno de los planos."),
    rabbitaDialogue("Blue", "Ese grabado también está en la puerta oxidada."),
    rabbitaDialogue("Narrador", "Silencio."),
    rabbitaDialogue(
      "Narrador",
      "Rocky sonrió lentamente. Esa sonrisa peligrosa que normalmente significaba aventura, problemas, o ambas."
    ),
    rabbitaDialogue("Rocky", "Bueno."),
    rabbitaDialogue("Narrador", "Miró al resto."),
    rabbitaDialogue("Rocky", "Creo que ya sabemos cuál es nuestro siguiente destino."),
    rabbitaDialogue("Narrador", "Mako levantó ambos brazos emocionadísima."),
    rabbitaDialogue("Mako", "¡¡¡PUERTA MISTERIOSA SUBTERRÁNEA!!!"),
    rabbitaDialogue("Narrador", "Minutu se masajeó el puente de la nariz."),
    rabbitaDialogue("Minutu", "Por supuesto."),
    rabbitaDialogue(
      "Narrador",
      "Blue todavía seguía mirando el símbolo. Como si estuviera intentando aceptar que aquello acababa de dejar de ser una coincidencia."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y mientras otro latido metálico atravesaba Rabbita... los cinco tomaron la decisión."
    ),
    rabbitaDialogue("Narrador", "Iban a visitar la puerta de los engranajes."),
    {
      type: "background",
      image: "Fondo_Ciudad.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Abandonaron la taberna mientras las tuberías del techo seguían temblando con aquellos latidos metálicos lejanos."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "El aire nocturno de Rabbita olía a hierro caliente, aceite quemado y lluvia."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue caminaba delante del grupo sujetando las notas de Meca Sylus contra el pecho."
    ),
    rabbitaDialogue(
      "Narrador",
      "Mako seguía prácticamente pegada a ella como si hubiera decidido que Blue la adoptara para siempre."
    ),
    rabbitaDialogue(
      "Narrador",
      "Minutu llevaba varios documentos enrollados bajo el brazo mientras seguía revisando cálculos incluso andando."
    ),
    rabbitaDialogue("Narrador", "Rocky observaba todo fascinado."),
    rabbitaDialogue(
      "Narrador",
      "Y Reina no dejaba de notar algo extraño en aquella isla."
    ),
    rabbitaDialogue(
      "Narrador",
      "No parecía simplemente una ciudad mecánica. Parecía... algo enfermo."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue los condujo por zonas cada vez menos transitadas."
    ),
    rabbitaDialogue(
      "Narrador",
      "Bajaron escaleras metálicas oxidadas. Cruzaron puentes suspendidos sobre enormes conductos de vapor."
    ),
    rabbitaDialogue(
      "Narrador",
      "Pasaron junto a motores gigantescos que funcionaban con sonidos preocupantes."
    ),
    rabbitaDialogue(
      "Narrador",
      "Algunas calles directamente desaparecían bajo tuberías del tamaño de edificios."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y cuanto más descendían... más fuerte se escuchaba el sonido."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Las paredes vibraban ligeramente."),
    rabbitaDialogue("Narrador", "Mako miró alrededor."),
    rabbitaDialogue(
      "Mako",
      "Vale. Confirmado. Esta isla definitivamente está viva o poseída. Una de dos."
    ),
    rabbitaDialogue("Minutu", "Preferiría ninguna."),
    rabbitaDialogue(
      "Narrador",
      "Blue apartó varias cadenas colgantes y se detuvo frente a un enorme muro metálico oculto entre estructuras industriales abandonadas."
    ),
    rabbitaDialogue("Narrador", "Entonces la vieron."),
    rabbitaDialogue("Narrador", "La puerta."),
    {
      type: "background",
      image: "Fondo_Puerta_de_los_engranajes.jpeg"
    },
    rabbitaDialogue("Narrador", "Todos se quedaron en silencio unos segundos."),
    rabbitaDialogue("Narrador", "Era gigantesca."),
    rabbitaDialogue("Narrador", "Mucho más grande de lo que esperaban."),
    rabbitaDialogue(
      "Narrador",
      "Al menos cinco metros de alto. Construida con capas y capas de metal ennegrecido por el tiempo y el agua salada."
    ),
    rabbitaDialogue("Narrador", "Toda la superficie estaba cubierta por mecanismos."),
    rabbitaDialogue("Narrador", "Engranajes enormes. Pequeños. Circulares. Dentados. Rotatorios."),
    rabbitaDialogue(
      "Narrador",
      "Algunos completamente inmóviles. Otros girando lentamente con sonidos secos y oxidados."
    ),
    rabbitaDialogue(
      "Narrador",
      "Cadenas cruzaban la puerta de lado a lado como venas mecánicas."
    ),
    rabbitaDialogue(
      "Narrador",
      "Tuberías antiguas desaparecían dentro de la estructura. Había pistones bloqueados."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y encima de la puerta... el símbolo que tan bien conocían ya. Grabado sobre una enorme placa metálica."
    ),
    rabbitaDialogue("Narrador", "Rocky levantó lentamente la cabeza."),
    rabbitaDialogue("Rocky", "Vale... esto es increíble."),
    rabbitaDialogue("Narrador", "Minutu ya se había acercado completamente fascinado."),
    rabbitaDialogue(
      "Narrador",
      "Sus ojos recorrían cada engranaje como si estuviera viendo un mapa de guerra."
    ),
    rabbitaDialogue("Minutu", "Esto no es solo una puerta."),
    rabbitaDialogue("Narrador", "Blue asintió lentamente."),
    rabbitaDialogue("Blue", "Mi mentor decía que era una especie de mecanismo de sincronización."),
    rabbitaDialogue("Narrador", "Reina observó los engranajes."),
    rabbitaDialogue("Reina", "¿Qué quería decir con eso?"),
    rabbitaDialogue("Narrador", "Blue abrió una de las notas de Sylus."),
    rabbitaDialogue("Blue", "“El sistema no responde porque las conexiones están rotas.”"),
    rabbitaDialogue("Narrador", "Pasó la página."),
    rabbitaDialogue("Blue", "“Las piezas siguen ahí. Solo hay que volver a hacerlas encajar.”"),
    rabbitaDialogue("Narrador", "Entonces señaló varios engranajes dispersos por la estructura."),
    rabbitaDialogue(
      "Blue",
      "La puerta no funciona porque los mecanismos dejaron de conectarse entre sí hace muchísimo tiempo."
    ),
    rabbitaDialogue("Narrador", "Minutu entrecerró los ojos."),
    rabbitaDialogue("Narrador", "Y entonces lo entendió."),
    rabbitaDialogue("Minutu", "No tenemos que forzar la puerta."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Minutu", "Tenemos que reconstruir el circuito mecánico."),
    rabbitaDialogue("Narrador", "Silencio."),
    rabbitaDialogue(
      "Narrador",
      "Todos levantaron lentamente la mirada hacia aquella monstruosidad de metal."
    ),
    rabbitaDialogue(
      "Narrador",
      "Había docenas de engranajes. Algunos conectaban. Otros no. Muchos estaban desalineados."
    ),
    rabbitaDialogue("Narrador", "Y varios parecían poder moverse manualmente."),
    rabbitaDialogue(
      "Narrador",
      "En algún lugar dentro de aquella estructura... había un motor central esperando activarse."
    ),
    rabbitaDialogue("Narrador", "Mako sonrió lentamente."),
    rabbitaDialogue("Mako", "Ooooooh."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Mako", "Es un puzle gigante."),
    rabbitaDialogue("Narrador", "Rocky se crujió los nudillos."),
    rabbitaDialogue("Rocky", "Perfecto."),
    rabbitaDialogue("Minutu", "No digas “perfecto” ante un mecanismo ancestral desconocido."),
    rabbitaDialogue("Rocky", "Voy a decirlo más fuerte entonces."),
    rabbitaDialogue("Narrador", "Minutu suspiró profundamente."),
    rabbitaDialogue("Narrador", "Blue ajustó lentamente sus gafas mientras observaba la puerta."),
    rabbitaDialogue("Blue", "Si conseguimos conectar correctamente todos los engranajes..."),
    rabbitaDialogue("Narrador", "Otro latido atravesó las paredes."),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Blue levantó lentamente la mirada hacia el centro de la puerta."),
    rabbitaDialogue("Blue", "...creo que conseguiremos abrirla."),
    {
      type: "minigame",
      game: "engranajes",
      resetOnOpen: true,
      allowClose: false
    },
    {
      type: "background",
      image: "Fondo_Puerta_de_los_engranajes.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Los engranajes empezaron a moverse uno tras otro."
    ),
    rabbitaDialogue("Narrador", "CLANK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLANK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLANK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Primero lentamente. Como si la propia puerta dudara de volver a despertar después de siglos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue giró el último mecanismo apenas unos centímetros."
    ),
    rabbitaDialogue("Narrador", "Y entonces... toda la estructura respondió."),
    rabbitaDialogue(
      "Narrador",
      "Los engranajes comenzaron a encajar entre sí en cadena. Los pequeños activaron a los medianos. Los medianos hicieron vibrar a los enormes."
    ),
    rabbitaDialogue(
      "Narrador",
      "Las cadenas tensas empezaron a moverse. El metal oxidado tembló."
    ),
    rabbitaDialogue(
      "Narrador",
      "Vapor escapó violentamente desde las tuberías laterales."
    ),
    rabbitaDialogue("Narrador", "SHHHHHHHHHH-"),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Blue abrió los ojos con incredulidad."),
    rabbitaDialogue("Blue", "Está... funcionando."),
    rabbitaDialogue("Narrador", "Rocky soltó una carcajada emocionada."),
    rabbitaDialogue("Rocky", "¡LO HEMOS CONSEGUIDO!"),
    rabbitaDialogue(
      "Narrador",
      "Mako estaba saltando alrededor de la puerta como si hubiera ganado una competición inexistente."
    ),
    rabbitaDialogue("Mako", "¡¡¡SOMOS GENIOS MECÁNICOS!!!"),
    rabbitaDialogue(
      "Minutu",
      "No. Nosotros hemos resuelto el mecanismo. Tú has girado cosas aleatoriamente."
    ),
    rabbitaDialogue(
      "Mako",
      "Y aun así funcionó. Eso me convierte técnicamente en genio."
    ),
    rabbitaDialogue("Narrador", "Entonces ocurrió."),
    {
      type: "background",
      image: "Fondo_puerta_engranajes_abierta.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Un sonido profundo atravesó toda la estructura. Muchísimo más grande. Muchísimo más antiguo."
    ),
    rabbitaDialogue("Narrador", "KRRRRRRRRRRRRRRRRR-"),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "La puerta entera empezó a separarse lentamente por el centro."
    ),
    rabbitaDialogue(
      "Narrador",
      "Capas gigantescas de metal oxidado se desplazaban unas sobre otras mientras siglos de polvo caían desde arriba."
    ),
    rabbitaDialogue(
      "Narrador",
      "El eco resonó por todos los túneles subterráneos de Rabbita."
    ),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Pero esta vez... el latido sonó diferente. Más fuerte. Más cercano."
    ),
    rabbitaDialogue(
      "Narrador",
      "Como si algo allí abajo acabara de notar que habían abierto la entrada."
    ),
    {
      type: "background",
      image: "Fondo_Túnel.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Durante unos segundos ninguno habló. Solo observaban la oscuridad al otro lado."
    ),
    rabbitaDialogue(
      "Narrador",
      "Un enorme túnel descendía hacia las entrañas de la isla. Circular. Metálico. Interminable."
    ),
    rabbitaDialogue(
      "Narrador",
      "Tuberías gigantes recorrían paredes y techo como arterias industriales."
    ),
    rabbitaDialogue(
      "Narrador",
      "Había raíles oxidados. Cadenas colgantes. Engranajes parcialmente incrustados en las paredes."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y cada pocos metros... luces antiguas parpadeaban débilmente como si aún quedara energía en algún lugar profundo."
    ),
    rabbitaDialogue(
      "Narrador",
      "El aire que salió desde el interior era distinto. Viejo. Húmedo. Pesado. Como el aliento de algo dormido."
    ),
    rabbitaDialogue("Narrador", "Mako se asomó ligeramente."),
    rabbitaDialogue("Mako", "Vale."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Mako", "Esto da muchísimo miedo."),
    rabbitaDialogue("Narrador", "Rocky sonrió."),
    rabbitaDialogue("Rocky", "Sí."),
    rabbitaDialogue("Mako", "Me encanta."),
    rabbitaDialogue("Narrador", "Blue observaba el túnel completamente inmóvil."),
    rabbitaDialogue("Narrador", "Sus dedos apretaban las notas de Sylus."),
    rabbitaDialogue("Blue", "¿Creéis que mi mentor consiguió entrar aquí?"),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "¿Y no pudo volver a salir?"),
    rabbitaDialogue("Narrador", "El silencio volvió durante un instante."),
    rabbitaDialogue("Narrador", "Entonces Reina dio un paso adelante."),
    rabbitaDialogue("Reina", "Vamos."),
    rabbitaDialogue(
      "Narrador",
      "Y así... los cinco descendieron hacia el interior de Rabbita."
    ),
    rabbitaDialogue(
      "Narrador",
      "A medida que avanzaban, el ruido de la ciudad desapareció lentamente detrás de ellos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Ya no había voces. Ni máquinas funcionando. Ni tabernas. Solo el eco metálico de sus propios pasos."
    ),
    rabbitaDialogue("Narrador", "CLANK."),
    rabbitaDialogue("Narrador", "CLANK."),
    rabbitaDialogue("Narrador", "CLANK."),
    rabbitaDialogue(
      "Narrador",
      "El túnel seguía descendiendo. Y descendiendo. Y descendiendo."
    ),
    rabbitaDialogue(
      "Narrador",
      "Minutu empezó a contar el tiempo mentalmente casi desde el principio. Al cabo de unos minutos frunció el ceño."
    ),
    rabbitaDialogue("Minutu", "Llevamos exactamente treinta y siete minutos caminando."),
    rabbitaDialogue("Narrador", "Rocky miró alrededor."),
    rabbitaDialogue("Rocky", "¿Y?"),
    rabbitaDialogue(
      "Minutu",
      "Y eso significa que este túnel no tiene sentido estructural."
    ),
    rabbitaDialogue("Narrador", "Blue levantó ligeramente la vista."),
    rabbitaDialogue("Blue", "¿Cómo que no?"),
    rabbitaDialogue("Narrador", "Minutu señaló las paredes."),
    rabbitaDialogue(
      "Minutu",
      "La inclinación debería haber cambiado hace rato. Pero seguimos descendiendo en círculos."
    ),
    rabbitaDialogue("Narrador", "Mako miró alrededor dramáticamente."),
    rabbitaDialogue("Mako", "Oh no."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Mako", "¿Estamos en una mazmorra mecánica ancestral?"),
    rabbitaDialogue("Minutu", "No lo digas tan ilusionada."),
    rabbitaDialogue("Narrador", "Siguieron avanzando."),
    rabbitaDialogue(
      "Narrador",
      "El lugar se volvía cada vez más extraño. Había tuberías atravesando paredes. Cables que chisporroteaban."
    ),
    rabbitaDialogue(
      "Narrador",
      "Engranajes gigantes se movían lentamente detrás de rejas oxidadas. Cadenas colgaban desde techos que no alcanzaban a ver."
    ),
    rabbitaDialogue("Narrador", "Y de vez en cuando..."),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "El latido recorría toda la estructura. Más fuerte cada vez. Más profundo. Más vivo."
    ),
    rabbitaDialogue(
      "Narrador",
      "Blue empezó a mirar constantemente los papeles de Sylus. Pero incluso ella parecía perder la orientación poco a poco."
    ),
    rabbitaDialogue(
      "Narrador",
      "Los túneles se bifurcaban. Luego se cruzaban. Después volvían al mismo sitio."
    ),
    rabbitaDialogue(
      "Narrador",
      "Pasaron junto a una enorme tubería rota de la que salía vapor azul."
    ),
    rabbitaDialogue("Narrador", "Diez minutos después... volvieron a verla."),
    rabbitaDialogue("Narrador", "Reina se detuvo en seco."),
    rabbitaDialogue("Reina", "Ya hemos pasado por aquí."),
    rabbitaDialogue("Narrador", "Silencio."),
    rabbitaDialogue("Narrador", "Mako miró la tubería."),
    rabbitaDialogue("Narrador", "Luego a Reina."),
    rabbitaDialogue("Narrador", "Luego a la tubería otra vez."),
    rabbitaDialogue("Mako", "...Ah."),
    rabbitaDialogue("Narrador", "Minutu cerró lentamente los ojos."),
    rabbitaDialogue("Minutu", "Perfecto."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue(
      "Minutu",
      "Estamos dentro de un laberinto industrial gigante enterrado bajo una isla mecánica ancestral."
    ),
    rabbitaDialogue("Narrador", "Rocky sonrió."),
    rabbitaDialogue("Rocky", "Suena increíble cuando lo dices así."),
    rabbitaDialogue("Minutu", "No pretendía que sonara bien."),
    rabbitaDialogue("Narrador", "Blue observaba nerviosa los túneles."),
    rabbitaDialogue("Blue", "Esto no aparece en ninguno de los planos."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "Es como si la estructura hubiera cambiado."),
    rabbitaDialogue("Narrador", "Otro latido recorrió las paredes."),
    rabbitaDialogue("Narrador", "CLONK..."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Y esta vez... algunas tuberías se movieron. Muy ligeramente."
    ),
    rabbitaDialogue(
      "Reina",
      "Vale... Suficiente. No le demos rienda suelta al pánico. Intentemos encontrar el camino de salida, ¿de acuerdo?"
    ),
    rabbitaDialogue(
      "Narrador",
      "El grupo siguió avanzando entre pasillos imposibles. Perdidos. Rodeados de hierro, cadenas, engranajes y oscuridad."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y en algún lugar, muchísimo más abajo... algo seguía latiendo dentro de Rabbita."
    ),
    {
      type: "minigame",
      game: "laberinto",
      resetOnOpen: true,
      allowClose: false,
      copy: {
        eyebrow: "Túneles bajo Rabbita",
        title: "Laberinto de Rabbita",
        subtitle: "Seguid el latido entre tuberías, metal y pasillos que parecen moverse solos.",
        sectionKicker: "Ruta subterránea",
        sectionTitle: "Trazad una salida entre hierro y vapor",
        initialMessage: "Avanzad por los túneles oscuros hasta encontrar la salida.",
        outOfBoundsMessage: "El pasillo termina en una placa metálica sellada.",
        wallMessage: "Una pared de metal bloquea el paso.",
        stepMessage: "El eco del corazón de Rabbita guía vuestros pasos.",
        successMessage: "¡Habéis encontrado la salida del laberinto!"
      }
    },
    {
      type: "background",
      image: "Fondo_Túnel.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Cuando por fin encontraron la salida del laberinto... ninguno supo exactamente cuánto tiempo había pasado."
    ),
    rabbitaDialogue(
      "Narrador",
      "Minutu insistía en que habían estado allí dentro más de tres horas."
    ),
    rabbitaDialogue("Narrador", "Mako juraba que mínimo ocho."),
    rabbitaDialogue(
      "Narrador",
      "Rocky decía que había perdido totalmente la noción del tiempo en el momento en que una tubería empezó a moverse \"como si respirara\"."
    ),
    rabbitaDialogue("Narrador", "Blue simplemente parecía agotada. Al igual que Reina."),
    rabbitaDialogue(
      "Narrador",
      "Los túneles terminaron desembocando en una enorme compuerta circular parcialmente abierta. Más allá... solo había oscuridad."
    ),
    rabbitaDialogue("Narrador", "Entraron."),
    rabbitaDialogue("Narrador", "Y entonces la sala se iluminó."),
    rabbitaDialogue("Narrador", "BOOOOOMMMMMM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Una luz anaranjada recorrió las paredes durante apenas un segundo antes de apagarse otra vez. Luego oscuridad. Luego otro destello. Y otro. Como un corazón intentando seguir latiendo."
    ),
    rabbitaDialogue("Narrador", "Todos levantaron lentamente la cabeza."),
    {
      type: "background",
      image: "Fondo_camara_corazon_apagado.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "La sala era gigantesca. Descomunal. Más alta que cualquier edificio que hubieran visto en Rabbita."
    ),
    rabbitaDialogue(
      "Narrador",
      "Columnas metálicas subían hacia un techo perdido entre sombras. Miles de tuberías recorrían paredes y suelo. Engranajes monumentales giraban lentamente alrededor de una estructura central suspendida sobre un abismo mecánico."
    ),
    rabbitaDialogue(
      "Narrador",
      "Y allí estaba. El corazón de Rabbita. Una enorme máquina circular llena de placas metálicas, conductos luminosos y mecanismos internos que se encendían y apagaban constantemente."
    ),
    {
      type: "background",
      image: "Corazón_gif.gif"
    },
    rabbitaDialogue("Narrador", "Cada vez que emitía luz..."),
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Toda la sala temblaba. Pero algo iba mal."),
    rabbitaDialogue(
      "Narrador",
      "Incluso desde lejos podía verse. Una sección lateral del mecanismo chirriaba violentamente. Varios engranajes intentaban girar... pero algo los bloqueaba. Cada vez que el corazón trataba de activarse completamente, el sistema fallaba."
    ),
    rabbitaDialogue("Narrador", "KRRRK-"),
    rabbitaDialogue("Narrador", "CLANK."),
    rabbitaDialogue("Narrador", "SHHHHHH-"),
    rabbitaDialogue("Narrador", "Blue abrió los ojos."),
    rabbitaDialogue("Blue", "Ese sistema debería girar sincronizado..."),
    rabbitaDialogue("Narrador", "Minutu ya estaba analizando la estructura."),
    rabbitaDialogue("Minutu", "Hay una obstrucción."),
    rabbitaDialogue(
      "Narrador",
      "Reina entrecerró los ojos hacia el lateral del mecanismo. Y entonces lo vio. Un pedazo de metal enorme había quedado encajado entre dos engranajes internos. Probablemente se había desprendido hacía muchísimo tiempo."
    ),
    rabbitaDialogue(
      "Narrador",
      "Cada vez que el mecanismo intentaba girar... la pieza frenaba todo el sistema."
    ),
    rabbitaDialogue("Narrador", "Rocky se acercó al borde de la plataforma."),
    rabbitaDialogue("Rocky", "Entonces solo tenemos que quitarlo."),
    rabbitaDialogue("Narrador", "Minutu giró la cabeza inmediatamente."),
    rabbitaDialogue("Minutu", "No."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Minutu", "Absolutamente no."),
    rabbitaDialogue("Narrador", "Mako señaló el mecanismo."),
    rabbitaDialogue("Mako", "Sí parece bastante mortal."),
    rabbitaDialogue("Narrador", "Blue observó nerviosa el sistema."),
    rabbitaDialogue("Blue", "Si el engranaje vuelve a activarse mientras alguien tiene el brazo ahí..."),
    rabbitaDialogue("Narrador", "Silencio."),
    rabbitaDialogue("Narrador", "Rocky sonrió igualmente."),
    rabbitaDialogue("Rocky", "Entonces será mejor hacerlo rápido."),
    rabbitaDialogue("Narrador", "Minutu se llevó una mano a la cara."),
    rabbitaDialogue("Minutu", "Claro. Claro que sí. Total... ¿qué podría salir mal?"),
    rabbitaDialogue(
      "Narrador",
      "Antes de que nadie pudiera detenerlo, Rocky saltó hacia una plataforma lateral cercana al mecanismo. Las luces del corazón volvieron a encenderse."
    ),
    rabbitaDialogue("Narrador", "BOOOOMMMMM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "El enorme engranaje empezó a moverse lentamente. Rocky consiguió agarrarse a unas cadenas mientras avanzaba hacia la obstrucción. El metal vibraba bajo sus pies."
    ),
    rabbitaDialogue("Narrador", "Blue gritó desde abajo."),
    {
      type: "background",
      image: "Fondo_camara_corazon encendido.jpeg"
    },
    rabbitaDialogue("Blue", "¡Rocky! ¡Cuando el corazón se ilumina el sistema vuelve a activarse!"),
    rabbitaDialogue("Rocky", "¡Entonces tendré que hacerlo entre latidos!"),
    rabbitaDialogue("Narrador", "Mako estaba agarrando a Minutu del brazo emocionadísima."),
    rabbitaDialogue("Mako", "¡Esto es increíble!"),
    rabbitaDialogue("Minutu", "Voy a desarrollar siete enfermedades nuevas."),
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Las luces se apagaron otra vez."),
    rabbitaDialogue(
      "Narrador",
      "Rocky aprovechó el instante. Metió el brazo entre los engranajes y agarró el trozo de metal atascado."
    ),
    rabbitaDialogue("Narrador", "No salió."),
    rabbitaDialogue("Narrador", "Rocky apretó los dientes. El metal estaba completamente encajado."),
    rabbitaDialogue("Narrador", "Entonces..."),
    rabbitaDialogue("Narrador", "BOOOOOOMMMMMM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "La sala volvió a iluminarse. Los engranajes comenzaron a moverse."),
    rabbitaDialogue("Blue", "¡¡¡ROCKY!!!"),
    rabbitaDialogue("Narrador", "Rocky tiró con todas sus fuerzas."),
    rabbitaDialogue("Narrador", "CRAAAAANK."),
    rabbitaDialogue(
      "Narrador",
      "El pedazo metálico salió despedido justo antes de que los engranajes se cerraran violentamente. Y entonces... Todo Rabbita respondió."
    ),
    rabbitaDialogue("Narrador", "KRRRRRRRRRRRRRRRRRRRR-"),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Los mecanismos comenzaron a activarse en cadena. Uno tras otro. Como una reacción dormida durante siglos."
    ),
    rabbitaDialogue(
      "Narrador",
      "Los engranajes gigantes empezaron a girar correctamente. Las tuberías vibraron. Las luces recorrieron toda la sala. Y el corazón... empezó a latir de verdad."
    ),
    rabbitaDialogue("Narrador", "BOOOOOOOOOOOOMMMMMMM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Una luz inmensa atravesó el núcleo mecánico. Más brillante. Más intensa. Más viva."),
    rabbitaDialogue("Narrador", "CLONK."),
    rabbitaDialogue("Narrador", "CLONK."),
    rabbitaDialogue("Narrador", "CLONK."),
    rabbitaDialogue("Narrador", "Ya no sonaba enfermo. Sonaba poderoso."),
    rabbitaDialogue("Narrador", "Blue observaba la escena completamente inmóvil. Casi emocionada."),
    rabbitaDialogue("Blue", "Lo hemos... arreglado..."),
    rabbitaDialogue(
      "Narrador",
      "Rocky aterrizó junto al grupo sujetando aún el pedazo de metal que había sacado. Pero al mirarlo... frunció el ceño."
    ),
    rabbitaDialogue("Rocky", "Eh."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Rocky", "Creo que esto no era solo chatarra."),
    rabbitaDialogue(
      "Narrador",
      "Todos se acercaron. Era un engranaje antiguo. Torcido. Dañado por golpes y presión. Y grabado sobre uno de sus lados... estaba el símbolo. El círculo fragmentado en cinco partes."
    ),
    rabbitaDialogue("Narrador", "Mako abrió muchísimo los ojos."),
    rabbitaDialogue("Mako", "¡¡¡OTRA PIEZA!!!"),
    rabbitaDialogue(
      "Narrador",
      "Minutu cogió el engranaje cuidadosamente. Y entonces vio algo más. Casi borrados por los golpes... había números grabados junto al símbolo."
    ),
    rabbitaDialogue("Minutu", "...Aquí también."),
    rabbitaDialogue("Narrador", "Blue ajustó lentamente sus gafas."),
    rabbitaDialogue("Blue", "Entonces Sylus tenía razón..."),
    rabbitaDialogue("Narrador", "Pero de repente... La sala empezó a cambiar."),
    rabbitaDialogue("Narrador", "KRRRRRRRRR-"),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Las paredes se movieron lentamente. Los mecanismos giraron. La enorme puerta por la que habían entrado se cerró tras ellos."
    ),
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Mako señaló inmediatamente."),
    rabbitaDialogue("Mako", "Vale."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Mako", "Eso definitivamente parece una trampa."),
    rabbitaDialogue("Narrador", "Pero al mismo tiempo... otra puerta empezó a abrirse lateralmente."),
    rabbitaDialogue("Narrador", "Una salida."),
    rabbitaDialogue("Narrador", "Reina observó el nuevo camino."),
    rabbitaDialogue("Reina", "Creo que quiere que salgamos."),
    rabbitaDialogue("Minutu", "No me gusta que la isla parezca tener intenciones."),
    {
      type: "background",
      image: "Fondo_Túnel.jpeg"
    },
    rabbitaDialogue("Narrador", "Y así... siguieron el nuevo túnel. Esta vez sin laberintos. Sin bifurcaciones. Sin perderse."),
    rabbitaDialogue("Narrador", "Como si Rabbita misma estuviera guiándolos hacia el exterior."),
    rabbitaDialogue("Narrador", "Y cuando finalmente salieron... la isla entera había cambiado."),
    {
      type: "background",
      image: "Fondo_Ciudad.jpeg"
    },
    rabbitaDialogue(
      "Narrador",
      "Las chimeneas ya no expulsaban humo negro. Los engranajes giraban con fuerza. Las luces de los edificios volvían a encenderse. Las máquinas rugían. La gente gritaba emocionada desde las calles."
    ),
    rabbitaDialogue(
      "Narrador",
      "Rabbita seguía siendo un caos. Pero ahora era un caos vivo. Incluso el suelo parecía moverse suavemente bajo sus pies."
    ),
    rabbitaDialogue("Narrador", "Mako abrió muchísimo los ojos."),
    rabbitaDialogue("Mako", "LA ISLA SE ESTÁ MOVIENDO."),
    rabbitaDialogue("Narrador", "Entonces una voz resonó detrás de ellos."),
    rabbitaDialogue("?????", "Lo hiciste. Sabía que lo conseguirías.", "sylus"),
    rabbitaDialogue("Narrador", "Todos se giraron."),
    rabbitaDialogue(
      "Narrador",
      "Un hombre de unos cincuenta y muchos. Cabello blanco largo. Camisa playera abierta. Gafas oscuras apoyadas sobre la cabeza. Varias partes mecánicas visibles recorrían su cuerpo: la pierna izquierda, el brazo izquierdo, parte del pecho, el ojo y la oreja. Y bajo el brazo... una rubia espectacular que parecía estar muy a gusto donde estaba."
    ),
    rabbitaDialogue("Narrador", "Blue se quedó congelada."),
    rabbitaDialogue("Blue", "...Mentor."),
    characterStep("sylus", { animation: "enter", position: "right", scale: 1.06 }),
    rabbitaDialogue("Narrador", "Sylus sonrió tranquilamente."),
    rabbitaDialogue("Sylus", "Hola, chiquilla."),
    rabbitaDialogue("Narrador", "Blue lo señaló inmediatamente."),
    rabbitaDialogue("Blue", "¡¿ESTABAS VIVO?!"),
    rabbitaDialogue("Narrador", "Sylus se encogió de hombros."),
    rabbitaDialogue("Sylus", "Necesitaba un descanso."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Sylus", "Me estaba volviendo loco aquí abajo."),
    rabbitaDialogue("Narrador", "Miró alrededor."),
    rabbitaDialogue("Sylus", "Ya sabes... uno tiene que hacer lo que necesita cuando lo necesita."),
    rabbitaDialogue("Narrador", "Blue murmuró por lo bajo:"),
    rabbitaDialogue("Blue", "Viejo verde..."),
    rabbitaDialogue("Narrador", "La rubia sonrió divertida."),
    rabbitaDialogue("Narrador", "Mako levantó inmediatamente una mano."),
    rabbitaDialogue("Mako", "Me cae increíblemente bien este hombre."),
    rabbitaDialogue("Minutu", "Claro que sí."),
    rabbitaDialogue("Narrador", "Tras las presentaciones, le contaron todo lo ocurrido. La puerta. El laberinto. El corazón."),
    rabbitaDialogue("Narrador", "Sylus escuchó todo con una sonrisa orgullosa mientras asentía lentamente."),
    rabbitaDialogue("Narrador", "Finalmente miró a Blue."),
    rabbitaDialogue("Sylus", "Siempre fuiste mi mejor ayudante."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Sylus", "La más lista también."),
    rabbitaDialogue("Narrador", "Blue bajó ligeramente la mirada."),
    rabbitaDialogue("Narrador", "Sylus sonrió."),
    rabbitaDialogue("Sylus", "Pero no puedes pasarte toda la vida encerrada entre tuberías y cables."),
    rabbitaDialogue("Narrador", "Miró hacia el mar."),
    rabbitaDialogue("Sylus", "El mundo ahí fuera es muchísimo más grande que Rabbita."),
    rabbitaDialogue("Narrador", "Rocky dio un paso adelante sonriendo."),
    rabbitaDialogue("Rocky", "Entonces ven con nosotros."),
    rabbitaDialogue("Narrador", "Reina asintió suavemente."),
    rabbitaDialogue("Reina", "Nos vendrá bien alguien capaz de entender máquinas imposibles."),
    rabbitaDialogue(
      "Narrador",
      "Blue abrió un poco los ojos. Como si ni siquiera hubiera considerado la posibilidad. Pero Mako ya estaba abrazándola otra vez."
    ),
    rabbitaDialogue("Mako", "Oh no no no."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Mako", "Tú vienes."),
    rabbitaDialogue("Blue", "¿Qué?"),
    rabbitaDialogue("Mako", "Eso lo decidí literalmente desde el primer momento que te vi."),
    rabbitaDialogue("Blue", "¡Pero ni siquiera me conocías!"),
    rabbitaDialogue("Mako", "Detalles."),
    rabbitaDialogue("Narrador", "Minutu suspiró profundamente."),
    rabbitaDialogue("Minutu", "La tripulación vuelve a crecer de forma completamente descontrolada."),
    rabbitaDialogue(
      "Narrador",
      "Y así... mientras Rabbita despertaba lentamente de un letargo de décadas... cinco figuras regresaron al Nyinyus."
    ),
    rabbitaDialogue("Narrador", "Y el barco volvió a zarpar."),
    {
      type: "background",
      image: "FONDO TRANSICIÓN_2.png"
    },
    rabbitaDialogue(
      "Narrador",
      "Dejando atrás el humo, los engranajes, el corazón mecánico enterrado bajo la isla, y la gigantesca Rabbita ancestral que ahora... parecía volver a moverse lentamente sobre el océano."
    ),
    rabbitaDialogue("Narrador", "El viento llenó las velas. Y una nueva integrante observó el horizonte por primera vez."),
    rabbitaDialogue(
      "Narrador",
      "El Nyinyus se alejaba lentamente de Rabbita mientras el sol empezaba a teñir el horizonte de tonos anaranjados."
    ),
    rabbitaDialogue(
      "Narrador",
      "El mar alrededor de la isla seguía vibrando ligeramente. Pero ya no transmitía decadencia. Ahora parecía... energía."
    ),
    rabbitaDialogue("Narrador", "Rocky sujetaba el timón con una sonrisa enorme."),
    rabbitaDialogue(
      "Narrador",
      "Mako estaba subida sobre la barandilla saludando exageradamente al puerto. Blue observaba la isla en silencio. Y Minutu seguía intentando aceptar mentalmente que acababan de \"reparar el corazón mecánico oculto dentro de una isla ancestral viviente\"."
    ),
    rabbitaDialogue("Minutu", "Quiero dejar constancia de que esto supera ampliamente mis límites aceptables de normalidad."),
    rabbitaDialogue("Narrador", "Reina sonrió ligeramente."),
    rabbitaDialogue("Narrador", "Entonces..."),
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "El sonido volvió a atravesar el océano. Pero esta vez no vino desde debajo de ellos. Vino desde Rabbita."
    ),
    rabbitaDialogue("Narrador", "Todos se giraron. Y la isla... se movió."),
    rabbitaDialogue("Narrador", "Primero fue algo pequeño. Un temblor. Luego otro."),
    rabbitaDialogue(
      "Narrador",
      "Grandes columnas de vapor comenzaron a salir disparadas desde distintos puntos de la ciudad. Los enormes engranajes exteriores empezaron a girar muchísimo más rápido."
    ),
    rabbitaDialogue("Narrador", "KRRRRRRRRRRR-"),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Blue abrió mucho los ojos."),
    rabbitaDialogue("Blue", "...No puede ser."),
    rabbitaDialogue("Narrador", "El puerto entero empezó a desplazarse. Literalmente."),
    rabbitaDialogue(
      "Narrador",
      "Las plataformas metálicas donde estaban atracados los barcos comenzaron a recolocarse como piezas de un mecanismo gigantesco. Puentes enteros se plegaban. Calles completas giraban sobre sí mismas. Edificios industriales ascendían lentamente mientras enormes cadenas tensaban estructuras imposibles."
    ),
    rabbitaDialogue("Narrador", "Rocky empezó a reírse como un niño pequeño."),
    rabbitaDialogue("Rocky", "¡¡¡NO PUEDE SER REAL!!!"),
    rabbitaDialogue("Narrador", "Minutu observaba la escena completamente pálido."),
    rabbitaDialogue("Minutu", "Oh."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Minutu", "Oh no."),
    rabbitaDialogue(
      "Narrador",
      "Las chimeneas comenzaron a hundirse dentro de la estructura. Los barrios exteriores se desplazaban. Las plataformas inferiores se recolocaban como placas mecánicas gigantescas. Y entonces... el mar explotó."
    ),
    rabbitaDialogue("Narrador", "BOOOOOOOOOOOOOOMMMMM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Agua y vapor salieron disparados alrededor de Rabbita mientras algo gigantesco emergía lentamente de debajo la isla."),
    rabbitaDialogue("Narrador", "Mako señaló histérica."),
    rabbitaDialogue("Mako", "¡¡¡ESTÁ SALIENDO ALGO!!!"),
    rabbitaDialogue("Narrador", "Blue se quedó completamente inmóvil."),
    rabbitaDialogue("Blue", "No..."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Blue", "La isla nunca fue una isla..."),
    rabbitaDialogue(
      "Narrador",
      "El océano tembló. Enormes piezas metálicas empezaron a elevarse desde las profundidades. Gigantescos mecanismos ocultos durante siglos emergieron cubiertos de agua y algas. Y lentamente... Rabbita empezó a levantarse."
    ),
    rabbitaDialogue(
      "Narrador",
      "Las \"montañas\" metálicas se recolocaron formando hombros. Los barrios industriales se desplazaban encajándose como armaduras. Los puertos se plegaron sobre sí mismos. Los enormes engranajes laterales comenzaron a girar como articulaciones."
    ),
    rabbitaDialogue("Narrador", "El Nyinyus parecía diminuto frente a aquello."),
    rabbitaDialogue(
      "Narrador",
      "Entonces aparecieron las orejas. Dos estructuras mecánicas gigantescas se desplegaron desde la parte superior de la isla mientras toneladas de agua caían al océano."
    ),
    {
      type: "background",
      image: "Coloso_Rabbita.jpeg"
    },
    rabbitaDialogue("Narrador", "Rocky abrió la boca lentamente."),
    rabbitaDialogue("Rocky", "...Es un conejo."),
    rabbitaDialogue("Minutu", "Es un robot."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Reina", "Un robot conejo tamaño isla."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Minutu", "Ya no sé qué está pasando con mi vida."),
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "CLONK."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue(
      "Narrador",
      "Ahora el sonido era ensordecedor. Los ojos del gigantesco Rabbita mecánico se iluminaron lentamente con una luz anaranjada. Todo el cuerpo terminó de incorporarse sobre el océano."
    ),
    rabbitaDialogue(
      "Narrador",
      "Una fortaleza viviente. Un coloso metálico. Un antiguo titán oculto bajo la apariencia de una isla moribunda. Y entonces... el gigantesco Rabbita dio un paso."
    ),
    rabbitaDialogue("Narrador", "BAAAAAAAAM."),
    {
      type: "effect",
      name: "shake"
    },
    rabbitaDialogue("Narrador", "Una ola gigantesca sacudió el mar alrededor."),
    rabbitaDialogue("Narrador", "Mako estaba llorando de emoción."),
    rabbitaDialogue("Mako", "¡¡¡ESTO ES LO MÁS INCREÍBLE QUE HE VISTO EN MI VIDA!!!"),
    rabbitaDialogue("Narrador", "Blue seguía mirando la escena completamente incapaz de procesarla."),
    rabbitaDialogue("Blue", "Vivíamos encima de un conejo mecánico gigante..."),
    rabbitaDialogue("Narrador", "Reina se encogió de hombros."),
    rabbitaDialogue("Reina", "Sí."),
    rabbitaDialogue("Narrador", "Pausa."),
    rabbitaDialogue("Reina", "Era bastante evidente."),
    rabbitaDialogue("Narrador", "Minutu giró lentamente la cabeza."),
    rabbitaDialogue("Minutu", "¿¡EVIDENTE PARA QUIÉN!?"),
    rabbitaDialogue("Narrador", "Reina señaló al gigantesco Rabbita."),
    rabbitaDialogue("Reina", "Míralo. Tiene orejas."),
    rabbitaDialogue("Narrador", "Mako asintió seriamente."),
    rabbitaDialogue("Mako", "Argumento sólido."),
    rabbitaDialogue(
      "Narrador",
      "El gigantesco Rabbita mecánico rugió una vez más mientras el corazón recién reparado brillaba dentro de su pecho. Y entonces... lentamente... el coloso comenzó a caminar a través del océano. Dejando enormes olas detrás. Convirtiendo Rabbita en una isla en movimiento."
    ),
    {
      type: "background",
      image: "FONDO TRANSICIÓN_2.png"
    },
    rabbitaDialogue("Narrador", "Mientras el Nyinyus continuaba avanzando hacia el horizonte."),
    rabbitaDialogue(
      "Narrador",
      "Y sobre la cubierta... cinco personas observaban cómo acababan de dejar atrás una isla... que en realidad siempre había sido un gigante dormido."
    ),
    {
      type: "goto",
      nextScene: "ornithea_llegada"
    }
  ]
});
