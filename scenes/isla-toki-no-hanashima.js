const hanashimaDialogue = (speaker, text) => ({
  type: "dialogue",
  speaker,
  text
});

Object.assign(story, {
  toki_hanashima_llegada: [
    {
      type: "clearCharacters"
    },
    {
      type: "sound",
      file: "One_Piece_Welcome_Wano.mp3",
      loop: true,
      volume: 0.55
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN_0.png"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina, entusiasmados con su nueva aventura, surcaban los mares en su barco: el Nyinyus."
    },
    {
      type: "background",
      image: "Isla_Toki_no_Hanashima.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Nyinyus atravesó lentamente la niebla de la mañana mientras los primeros rayos de sol iluminaban la primera isla del mapa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "A lo lejos, Toki no Hanashima emergía entre pétalos de cerezo flotando sobre el mar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era preciosa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Puentes rojos cruzaban canales cristalinos. Pagodas de varios pisos se elevaban entre jardines perfectamente cuidados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Farolillos colgaban sobre calles empedradas. Campanas sonaban a intervalos exactos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sobre toda la isla... había relojes. Gigantes. Pequeños. Colgados. Grabados. Pintados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Como si el tiempo allí fuera algo sagrado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky apoyó ambos brazos sobre la barandilla del barco."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale. Esta isla es increíble. Y muy tranquila."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina sonrió ligeramente mientras observaba el puerto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Es preciosa."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces sonó una campana."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "BOOOOOONG."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y toda la isla... empezó a correr."
    },
    {
      type: "background",
      image: "Hanashima_ciudad.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Personas cruzaban las calles a toda velocidad. Sirvientes cargaban bandejas. Samuráis gritaban horarios. Monjes discutían delante de enormes pergaminos. Floristas lloraban abrazados a centros de mesa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un hombre pasó corriendo delante del puerto completamente desesperado."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "LAS FLORES DE LA CASA DEL CRISANTEMO NO PUEDEN IR DOS CENTÍMETROS MÁS ALTAS QUE LAS DEL DRAGÓN ROJO."
    },
    {
      type: "dialogue",
      speaker: "Otro",
      text: "EL MAESTRO DE CEREMONIAS HA HECHO UNA REVERENCIA DE CINCO SEGUNDOS. CINCO."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una anciana perseguía a un cocinero con una sandalia."
    },
    {
      type: "dialogue",
      speaker: "Anciana",
      text: "ALGUIEN HA CAMBIADO LOS DULCES DE LAS 08:03 POR LOS DE LAS 08:04."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observó el caos."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "...Retiró lo de tranquila."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Nyinyus terminó de atracar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Nada más bajar del barco... un grupo de sirvientes chocó contra ellos cargando farolillos. Luego pasó corriendo un samurái llorando. Después otro hombre apareció sujetando un pergamino gigante."
    },
    {
      type: "dialogue",
      speaker: "Hombre",
      text: "NO ENCUENTRO LOS ANILLOS. ESTO EMPIEZA A NO IR BIEN."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intentó apartarse del caos."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Creo que hemos llegado en mal momento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces escucharon una voz. Una voz completamente agotada."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "No. Esto hace ya 2 días, 5 horas, 41 minutos y 16 segundos que no va nada bien."
    },
    characterStep("minutu", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sentado sobre varias cajas junto al puerto había un pato samurái vestido con ropas moradas llenas de símbolos horarios y relojes bordados."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Llevaba una katana al hombro, varios relojes de bolsillo colgando, una cicatriz en el ojo izquierdo y una montaña absurda de pergaminos a su alrededor."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Tenía cara de haber dormido aproximadamente catorce minutos en los últimos tres días."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En una mano sostenía un reloj abierto. En la otra... un documento titulado: \"Boda_final_DE_VERDAD_ahora_si\"."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El pato revisaba papeles mientras murmuraba para sí mismo."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "No. No. No. Si la mesa siete mira directamente a la nueve, esto termina en conflicto diplomático."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pasó otra página."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "¿Quién ha aprobado cuarenta y siete tipos distintos de arroz ceremonial?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otro samurái apareció corriendo hacia él."
    },
    {
      type: "dialogue",
      speaker: "Samurái",
      text: "Ministro Silentium. La familia Dragón Rojo exige tres segundos más de música durante la entrada principal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El pato cerró lentamente los ojos. Respiró profundamente."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "En una batalla al menos el enemigo avisa cuando quiere destruirte."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces levantó la vista. Y vio a Rocky y Reina."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los observó unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky levantó una mano saludando. Reina inclinó ligeramente la cabeza con educación."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Perfecto. Refuerzos."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Perdón?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El pato se levantó de golpe. Más pergaminos cayeron al suelo."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "No sé quiénes sois. No sé por qué habéis llegado justo ahora. Pero el destino os ha traído en el peor momento posible para vosotros y en el mejor momento posible para mí."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Les puso pergaminos en las manos sin preguntar."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Necesito encontrar unos anillos desaparecidos, reorganizar invitados potencialmente hostiles, decidir si los músicos deben entrar siete o nueve segundos después del sake ceremonial y evitar una guerra civil causada por unas flores."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky empezó a fruncir el ceño."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Me estoy agobiando un poco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El pato lo ignoró completamente."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Mi nombre es Minutu D. Silentium. Ministro de Estrategia Bélica de Toki no Hanashima."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Y actualmente rehén psicológico de una boda."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El caos del puerto seguía creciendo alrededor de ellos. Sirvientes corrían. Campanas sonaban. Alguien gritaba algo sobre flores ofensivas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en mitad de todo aquello... Minutu seguía entregando pergaminos como un hombre al borde del colapso."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Necesito confirmar el protocolo de entrada, la posición ceremonial de los músicos y si cuarenta invitados pueden matarse entre sí solo por compartir mesa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observó el enorme montón de documentos."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Cuántos pergaminos llevas encima?"
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Demasiados. Y todos son amenazas distintas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mientras hablaba, uno de los pergaminos cayó parcialmente al suelo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se agachó para recogerlo. Y entonces lo vio."
    },
    {
      type: "inspect",
      collectible: "pergamino",
      image: "PERGAMINO_DEL_KYUBI_CELESTIAL.jpeg",
      buttonText: "Pergamino",
      alt: "Pergamino con una máscara de zorro y un símbolo circular fragmentado",
      autoOpen: true
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una ilustración. Una máscara de zorro azul y blanco. Preciosa y antigua. Con detalles dorados y nueve colas dibujadas alrededor."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y justo al lado... el símbolo. El círculo fragmentado en cinco partes. El mismo símbolo del mapa de la abuela."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se quedó inmóvil unos segundos. Luego levantó lentamente el pergamino."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Espera un momento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu seguía revisando horarios sin mirarla."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Si es sobre la mesa ocho, ya he aceptado espiritualmente que no tiene solución."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina le enseñó el dibujo."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Qué es esto?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu finalmente levantó la vista. Y suspiró. Ese suspiro de alguien que acababa de recordar otra responsabilidad más."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Ah. Eso."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cogió el pergamino."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "La Máscara del Kyubi Celestial."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Suena importante."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Demasiado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu desenrolló un poco más el documento. Aparecieron dibujos antiguos, templos, un zorro gigante de nueve colas y símbolos ceremoniales."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Según la tradición de Toki no Hanashima... la máscara solo puede ser obtenida por quienes realmente deciden caminar juntos."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Eso suena profundo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Lo es. Y extremadamente incómodo de organizar logísticamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Señaló el dibujo."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "El rey quiere entregársela a los futuros esposos como regalo ceremonial para unir las dos casas nobles."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Pero está sellada en un santuario antiguo. Y protegida por pruebas espirituales."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intercambió una mirada con Rocky. El símbolo estaba ahí. Tenía que estar relacionado con el mapa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces un monje apareció corriendo colina abajo."
    },
    {
      type: "dialogue",
      speaker: "Monje",
      text: "MINISTRO SILENTIUM."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu cerró los ojos lentamente."
    },
    {
      type: "dialogue",
      speaker: "Monje",
      text: "La Casa del Crisantemo exige saber si los pétalos ceremoniales caerán exactamente en el segundo acordado."
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
      text: "Claro. Porque evidentemente ESO es ahora mismo una prioridad militar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El monje empezó a arrastrarlo ligeramente mientras seguía hablándole."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y mientras Minutu estaba distraído... Reina se acercó un poco a Rocky."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Tenemos que ir a por esa máscara."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Sí. Yo estaba pensando exactamente lo mismo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina señaló discretamente el símbolo del pergamino."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Si tiene el símbolo del mapa dibujado al lado... no puede ser casualidad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Además parece más divertido que organizar mesas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Desde el fondo se escuchó la voz de Minutu."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "ESTO ES UN INFIERNO DE ORGANIZACIÓN."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cuando el monje finalmente se marchó... Minutu volvió completamente derrotado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Tenía la mirada vacía de un hombre que había perdido una discusión contra flores decorativas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina dio un paso hacia el."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Vemos que estás bastante... estresado."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "He calculado siete posibles guerras familiares antes del aperitivo. Ya no siento emociones humanas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina sonrió ligeramente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Te entendemos. Nosotros también vamos a casarnos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu los miró por primera vez con algo parecido a interés real."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky levantó una mano."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Por eso hemos decidido ayudarte."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu parpadeó."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Conseguiremos la máscara por ti."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Más silencio."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "¿De verdad?"
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Así te quitamos una preocupación de encima. ¿Te parece bien?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante unos segundos... Minutu pareció emocionalmente cerca de llorar. Pero se contuvo por dignidad samurái. Más o menos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Acepto. Acepto muchísimo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sacó inmediatamente otros tres pergaminos."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Bien. La máscara se encuentra en el Santuario del Kyubi Celestial."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Empezó a señalar rutas y mapas con precisión enfermiza."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Para llegar a la máscara debéis superar tres pruebas, según dicta la tradición. El espíritu del zorro juzgará si sois dignos o no."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Y qué pasa si no lo somos?"
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Probablemente sobreviváis. Creo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¿Crees?"
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Las leyendas son sorprendentemente ambiguas con ese detalle."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Minutu les entregó un pequeño mapa marcado con tinta roja."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "Primero debéis cruzar el Puente de los Compromisos. Después llegaréis al Templo del Banquete Eterno. Y finalmente..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa dramática."
    },
    {
      type: "dialogue",
      speaker: "Minutu",
      text: "El Santuario del Kyubi."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento arrastró pétalos de cerezo entre las calles. Las campanas resonaban sobre la isla."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y el misterio de Toki no Hanashima... parecía llamarlos."
    },
    {
      type: "clearCharacters",
      ids: ["minutu"]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Siguiendo el pequeño mapa marcado con tinta roja, Rocky y Reina dejaron atrás el caos de la ciudad y continuaron hacia las zonas más antiguas de la isla."
    },
    {
      type: "background",
      image: "Fondo_Tori.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los pétalos de cerezo flotaban lentamente alrededor del enorme Tori rojo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina se detuvieron frente a él."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Era gigantesco. Mucho más de lo que parecía desde lejos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las columnas estaban cubiertas de símbolos antiguos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Campanillas colgaban moviéndose suavemente con el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y detrás del arco... no había nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Solo una especie de vacío brillante."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miró el interior del Tori."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Bueno. Eso parece como si nos fuera a llevar a otro lugar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina observó las columnas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Se veían antiguas y gastadas, pero a la vez parecía que fueran a aguantar miles de años más."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Creo que tenemos que cruzar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky sonrió."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vamos. ¿Qué es lo peor que podría pasar?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En cuanto atravesaron el Tori... el mundo desapareció."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El suelo dejó de existir. El cielo también."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo se volvió luz. Pétalos. Constelaciones. Fragmentos de recuerdos flotando en la oscuridad."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante unos segundos... parecía que estaban cayendo y avanzando al mismo tiempo."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "¡Uooooo! ¡Cómo mola, ¿no?!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina intentó mantener el equilibrio mientras el espacio entero giraba alrededor de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces... todo se detuvo."
    },
    {
      type: "background",
      image: "Hanashima_puente.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Aparecieron frente a un enorme puente rojo adornado con cintas, amuletos y faroles de piedra."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Al fondo, una cascada que caía entre templos rodeados de cerezos en flor formaba un río de agua cristalina que pasaba por debajo del puente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los pétalos rosados flotaban en el aire mientras contemplaban el Puente de los Compromisos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento soplaba suavemente entre cintas de deseos atadas a los pilares."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero había un problema."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El puente estaba incompleto. Grandes tramos habían desaparecido. No había forma de llegar al otro lado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky se acercó al borde. Había agua por todas partes."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Bueno… Eso complica un poco las cosas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina observó los huecos del puente."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Quizá hay otro camino."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces... una voz resonó por todo el lugar. Profunda y antigua. Venía de todas partes y de ninguna a la vez."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Si cruzar queréis..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento levantó pétalos alrededor de ellos."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "...vuestro compromiso demostraréis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las cintas del puente empezaron a moverse. Símbolos brillaron sobre la madera."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Cada verdad construirá el camino. Cada mentira... lo romperá."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky levantó una ceja."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale. Esto da bastante miedo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Escucharon un ruido susurrante y, al mirar, vieron un cartel en blanco en el que iban apareciendo símbolos hasta formar letras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La primera pregunta apareció grabada en el lienzo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina se miraron. Reina sonrió ligeramente. Y se dispusieron a contestar las preguntas."
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "Si el viaje se vuelve más difícil de lo esperado...",
      options: [
        {
          text: "A) Buscaríais cómo adaptaros juntos",
          nextStep: true
        },
        {
          text: "B) Empezaríais a preguntaros si merece la pena seguir",
          nextStep: true
        }
      ]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Se miraron apenas un instante. No necesitaron más. La primera respuesta hizo aparecer el primer escalón."
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué significa acompañar a alguien?",
      options: [
        {
          text: "A) Caminar incluso en días malos",
          nextStep: true
        },
        {
          text: "B) Estar solo cuando todo va bien",
          nextStep: true
        }
      ]
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué es más difícil?",
      options: [
        {
          text: "A) Ser sinceros",
          nextStep: true
        },
        {
          text: "B) Fingir que todo está bien",
          nextStep: true
        }
      ]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Con cada verdad, la madera roja se alargaba sobre el vacío. Un tramo. Luego otro."
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué significa realmente caminar junto a alguien?",
      options: [
        {
          text: "A) Adaptar vuestro ritmo mutuamente",
          nextStep: true
        },
        {
          text: "B) Esperar que el otro siga el tuyo",
          nextStep: true
        }
      ]
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "Si todo sale mal...",
      options: [
        {
          text: "A) Buscaríais una forma de reíros juntos",
          nextStep: true
        },
        {
          text: "B) Convertiríais el desastre en una competición de culpables",
          nextStep: true
        }
      ]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los pétalos giraban a su alrededor mientras nuevos escalones se encajaban en su sitio con suaves crujidos de madera antigua."
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué haríais si uno de vosotros duda antes de cruzar el puente?",
      options: [
        {
          text: "A) Tenderle la mano",
          nextStep: true
        },
        {
          text: "B) Cruzar primero para demostrar que no era difícil",
          nextStep: true
        }
      ]
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué une más a dos personas?",
      options: [
        {
          text: "A) Haber superado cosas juntos",
          nextStep: true
        },
        {
          text: "B) Nunca haber tenido problemas",
          nextStep: true
        }
      ]
    },
    {
      type: "choice",
      speaker: "Lienzo",
      text: "¿Qué es más peligroso?",
      options: [
        {
          text: "A) No hablar las cosas",
          nextStep: true
        },
        {
          text: "B) Equivocarse de vez en cuando",
          nextStep: true
        }
      ]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mientras iban respondiendo, el puente formaba o hacía desaparecer los escalones, uno a uno."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Hasta que llegó la última pregunta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y el viento se detuvo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El último escalón se encajó en su sitio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Durante unos segundos... no ocurrió nada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces:"
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "BOOOOOOOONG."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una campana resonó en la distancia."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El puente entero brilló de golpe. Como si la luz saliera de él."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y cuando se atenuó el brillo, vieron que ya podían pasar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Puente de los Compromisos estaba completo."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Quienes avanzan juntos... encuentran caminos donde antes solo había vacío."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento volvió a soplar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y al otro lado del puente... entre cerezos blancos y farolillos apagados... podía verse el siguiente destino."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Templo del Banquete Eterno."
    },
    {
      type: "background",
      image: "Hanashima_puente.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observó el puente completo delante de ellos."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale. Eso ha sido bastante increíble."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina miró al otro lado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entre la niebla y los árboles podía verse un enorme edificio iluminado por farolillos dorados. Un templo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cruzaron el Puente de los Compromisos mientras el viento movía las cintas de deseos atadas a los pilares."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y cuanto más avanzaban... más extraña se volvía la atmósfera."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "No había pájaros. No había gente. Ni siquiera se escuchaba el agua."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Solo música. Lejana."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Como si alguien estuviera celebrando algo a lo lejos."
    },
    {
      type: "background",
      image: "Fondo_Castillo.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Finalmente llegaron ante unas enormes puertas de madera roja y negra."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sobre ellas había un símbolo tallado: dos copas unidas por una cadena dorada."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y debajo, grabado en piedra:"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "EL TEMPLO DEL BANQUETE ETERNO"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky levantó una ceja."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Eso suena divertidamente aterrador."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las puertas se abrieron solas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El interior era gigantesco, adornado con columnas rojas, detalles dorados y estandartes con inscripciones que celebraban el matrimonio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mesas infinitas recorrían todo el salón."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Farolillos flotaban en el aire. Fuentes de sake llenas se repartían por toda la estancia."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y el sonido de instrumentos tradicionales surgía desde los rincones."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo estaba preparado para una boda perfecta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero no había nadie."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina avanzó lentamente."
    },
    {
      type: "background",
      image: "Fondo_Banquete.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "¿Hola?"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces sonó una campana."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "BOOOOOOOONG."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y todos los farolillos del salón se encendieron al mismo tiempo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo apareció."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Figuras transparentes empezaron a materializarse alrededor de las mesas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Invitados espirituales. Decenas. Con vestidos ceremoniales. Con kimonos antiguos. Nobles. Samuráis. Monjes. Familias enteras."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en menos de tres segundos... todo se convirtió en caos."
    },
    {
      type: "dialogue",
      speaker: "Invitada",
      text: "¡¡¡YO NO PIENSO SENTARME CERCA DE ESA MUJER!!!"
    },
    {
      type: "dialogue",
      speaker: "Invitado",
      text: "¡¡¡SU FAMILIA INSULTÓ A MI PEZ EN EL FESTIVAL DE PRIMAVERA!!!"
    },
    {
      type: "dialogue",
      speaker: "Otro",
      text: "¡¡¡ALGUIEN HA CAMBIADO MI COPA DE SAKE POR UNA DE VINO!!!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky observó el desastre."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Ah. Ahora entiendo por qué Minutu parece muerto por dentro."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Cuando las sombras del conflicto ante vosotros se alcen, la mirada no desviaréis."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Aquello que el destino os ponga delante... juntos resolver deberéis."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Una anciana noble golpeó el suelo con su bastón."
    },
    characterStep("aiko", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Fukuro",
      text: "¡Como matrona de los Fukuro y maestra del té exijo otra mesa! ¡Aiko Fukuro no se sentará cerca de ese hombre desvergonzado que no mostró respeto hace cuatro años!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Un gigante samurái completamente borracho apareció subido encima de una mesa."
    },
    {
      type: "clearCharacters",
      ids: ["aiko"]
    },
    characterStep("kenji", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Kenji",
      text: "¡¡YO, KENJI GUROMARU, LO EXIJO!! ¡¡¡SI NO HAY COMPETICIÓN DE SAKE, ESTA BODA NO VALE NADA!!!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Saltó sobre otra mesa rompiendo platos y lo que encontrara."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Mientras tanto, una mujer elegantísima sonreía mientras miraba por encima del hombro a una joven con un enorme sombrero lleno de flores."
    },
    {
      type: "clearCharacters",
      ids: ["kenji"]
    },
    characterStep("miko", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Lady Miko",
      text: "Oh... qué interesante elección de tocado. Muy... atrevido de tu parte."
    },
    {
      type: "dialogue",
      speaker: "Joven",
      text: "Oh, muchas gracias, Lady Miko."
    },
    {
      type: "dialogue",
      speaker: "Lady Miko",
      text: "Tiene esa energía tan... valiente... de alguien que claramente hizo lo mejor que pudo. Me recuerda mucho a los funerales ceremoniales del norte. Aunque quizá eso era exactamente lo que buscabais."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La sonrisa de la muchacha empezó a romperse lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Tartamudeó una disculpa y se marchó corriendo, mientras lloraba."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Lady Miko se giró hacia otra víctima."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces se abrió otra puerta de golpe. Y entró un hombre cargando un shamisen gigante, dos cabras y tres personas que nadie conocía."
    },
    {
      type: "clearCharacters",
      ids: ["miko"]
    },
    characterStep("ren", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Ren",
      text: "¡He traído acompañantes!"
    },
    {
      type: "dialogue",
      speaker: "Todos",
      text: "¡Otra vez no, Ren!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en mitad del caos... un poeta dramático comenzó a llorar dramáticamente abrazado a una columna."
    },
    {
      type: "clearCharacters",
      ids: ["ren"]
    },
    characterStep("nobu", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Poeta",
      text: "¡LAS BODAS SON TAN HERMOSAS! ¡ES TAN BONITO EL AMOR! ¡DEMASIADO BONITO PARA ESTE MUNDO CRUEL!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Otros invitados empezaron a llorar también al escucharlo hablar."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces llegó el golpe final."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Dos antiguos amantes comenzaron a discutir en mitad del salón."
    },
    {
      type: "clearCharacters",
      ids: ["nobu"]
    },
    characterStep("hana_takeshi", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Hana",
      text: "¡TÚ ARRUINASTE NUESTRA RELACIÓN, TAKESHI!"
    },
    {
      type: "dialogue",
      speaker: "Takeshi",
      text: "¡TÚ QUERÍAS CONTROLARLO TODO, HANA!"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Medio salón tomó partido inmediatamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky miró alrededor."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo el templo era un desastre absoluto. Invitados gritando. Copas volando. Música descontrolada. Cabras corriendo entre las mesas."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y entonces apareció la voz."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La misma del puente."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Si armonía deseáis encontrar... al banquete deberéis sobrevivir."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "?????",
      text: "Sin destruir lo que habéis venido a celebrar."
    },
    {
      type: "clearCharacters",
      ids: ["hana_takeshi"]
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina respiró hondo. Rocky sonrió lentamente."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale. Tenemos que arreglar esto."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Qué desastre..."
    },
    {
      type: "minigame",
      game: "weddingSeating",
      resetOnOpen: true,
      allowClose: false,
      completeDelayMs: 500
    },
    {
      type: "background",
      image: "Fondo_Banquete.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Templo del Banquete Eterno parecía haber sobrevivido... milagrosamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las mesas seguían en pie. Más o menos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los invitados espirituales seguían discutiendo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pero ahora brindaban, reían, bailaban, o lloraban emocionalmente sobre la comida ceremonial."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Lo cual, considerando cómo había empezado todo... era prácticamente un éxito histórico."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Goromaru cantaba abrazado a tres músicos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Lady Fukuro criticaba discretamente a otros invitados junto a Rocky como si fueran viejos amigos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Lady Suzume seguía siendo aterradora... pero ahora usaba sus comentarios para destruir únicamente a gente insufrible."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y hasta Akemi y Raizo habían dejado de gritarse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Ahora discutían sentados. Lo cual era un progreso."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky cayó sentado sobre un cojín ceremonial completamente agotado."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Creo... que acabamos de sobrevivir a la boda más peligrosa del planeta."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina se sentó a su lado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "También estaba agotada, pero sonreía."
    },
    {
      type: "dialogue",
      speaker: "Reina",
      text: "Y eso que ni siquiera era nuestra boda."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "No pienso organizar jamás una."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Reina lo miró."
    },
    {
      type: "dialogue",
      speaker: "Rocky",
      text: "Vale. La nuestra sí."
    },
    {
      type: "effect",
      name: "shake"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces ocurrió."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "CLONK."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todas las copas del salón vibraron al mismo tiempo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La música se detuvo."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los invitados espirituales levantaron lentamente la cabeza."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y al fondo del templo... unas enormes puertas doradas empezaron a abrirse."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina avanzaron lentamente."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Detrás de ellos, el ruido del banquete desaparecía poco a poco."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Como si el jardín existiera fuera del mundo."
    },
    {
      type: "background",
      image: "Fondo_Jardín.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Más allá de las puertas... había un jardín imposible."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Cerezos blancos. Farolillos flotando en el aire. Ríos de agua cristalina. Luciérnagas azules moviéndose entre pétalos suspendidos por el viento."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Todo parecía silencioso. Sagrado."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "En el centro del jardín se alzaba un enorme pedestal de piedra."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y sobre él... descansaba una máscara."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La Máscara del Kyūbi Celestial."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Blanca y azul, con detalles dorados que brillaban suavemente bajo la luz de la luna."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y alrededor de ella... el viento parecía girar en círculos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Los pétalos comenzaron a elevarse alrededor del pedestal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y una figura apareció entre ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Gigantesca. Un zorro de nueve colas hecho de luz azul y fuego celestial."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Kyūbi."
    },
    characterStep("kyubi", { animation: "enter" }),
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sus ojos brillaban como estrellas antiguas. Y cuando habló... su voz resonó en todo el jardín."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "He observado vuestros pasos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las nueve colas se movieron lentamente detrás de él."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "He visto cómo camináis cuando el puente desaparece."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento recorrió el jardín."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Cómo habláis cuando el caos os rodea."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Y cómo seguís avanzando... cuando sería más sencillo soltaros la mano."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Rocky y Reina permanecieron en silencio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El Kyūbi los observó unos segundos."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Muchos creen que una unión nace de la perfección."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Sus ojos brillaron."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Pero lo eterno jamás fue aquello que nunca se rompe."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las colas de fuego azul iluminaron los árboles."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Lo eterno... es aquello que decide reconstruirse una y otra vez."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El jardín entero empezó a llenarse de luz."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "El camino ante vosotros no será recto."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pausa."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "Pero quienes siguen eligiéndose incluso cuando el viento cambia..."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Las nueve colas se extendieron lentamente."
    },
    {
      type: "dialogue",
      speaker: "Kyūbi",
      text: "...son dignos de continuar el viaje."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Entonces el viento se levantó."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La máscara empezó a flotar sobre el pedestal."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Pétalos giraron alrededor de Rocky y Reina."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y lentamente... la Máscara del Kyūbi Celestial viajó por el aire hasta detenerse frente a Reina."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Ella la sostuvo entre sus manos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y en el instante en que sus dedos tocaron la máscara... todo se volvió borroso."
    },
    {
      type: "clearCharacters",
      ids: ["kyubi"]
    },
    {
      type: "background",
      image: "Fondo_Tori.jpeg"
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El jardín desapareció."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La luz se rompió en fragmentos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El viento rugió alrededor de ellos."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Y un segundo después... Rocky y Reina aparecieron nuevamente frente al enorme Tori rojo del principio."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "El mismo camino. Los mismos árboles. El mismo viento suave."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Como si nada hubiera ocurrido."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "Excepto por una cosa."
    },
    {
      type: "dialogue",
      speaker: "Narrador",
      text: "La máscara seguía entre las manos de Reina."
    },
    {
      type: "background",
      image: "Fondo_Tori.jpeg"
    },
    characterStep("rocky", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    hanashimaDialogue("Narrador", "Rocky observó la máscara."),
    hanashimaDialogue("Rocky", "Vale. Tenemos el objeto misterioso."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Rocky", "Ahora solo falta entender por qué demonios es importante."),
    hanashimaDialogue("Narrador", "Reina giró lentamente la máscara entre sus manos. Los detalles dorados reflejaban la luz del atardecer. Las marcas azules parecían casi vivas. Entonces lo vieron, en la parte trasera. Grabado cuidadosamente en la madera blanca: el símbolo. El círculo fragmentado en cinco partes."),
    hanashimaDialogue("Reina", "Aquí está."),
    hanashimaDialogue("Narrador", "Rocky se acercó rápidamente."),
    hanashimaDialogue("Rocky", "Entonces sí estaba relacionado con el mapa."),
    hanashimaDialogue("Narrador", "Reina pasó los dedos por el grabado. Pero no ocurrió nada. No había mecanismo. Ni compartimentos. Solo el símbolo."),
    hanashimaDialogue("Rocky", "...Eso es un poco decepcionante."),
    hanashimaDialogue("Narrador", "Reina bajó ligeramente la mirada."),
    hanashimaDialogue("Reina", "No entiendo qué se supone que debemos hacer con esto."),
    hanashimaDialogue("Narrador", "El viento sopló entre los árboles. Durante unos segundos ninguno habló. Porque por primera vez desde que habían empezado el viaje... no tenían claro cuál era el siguiente paso."),
    hanashimaDialogue("Narrador", "Rocky apoyó las manos detrás de la cabeza."),
    hanashimaDialogue("Rocky", "Bueno. Siempre podemos huir con la máscara y fingir que nunca prometimos nada."),
    hanashimaDialogue("Narrador", "Reina lo miró."),
    hanashimaDialogue("Rocky", "Estoy bromeando."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Rocky", "Más o menos."),
    hanashimaDialogue("Narrador", "Reina soltó una pequeña risa cansada. Pero volvió a mirar la máscara."),
    hanashimaDialogue("Reina", "No. Se lo prometimos a Minutu."),
    {
      type: "background",
      image: "Hanashima_ciudad.jpeg"
    },
    hanashimaDialogue("Narrador", "Regresaron atravesando los caminos de Toki no Hanashima mientras las luces de la celebración seguían iluminando la isla. Pero algo había cambiado. Ahora, había aún más caos, si era posible. Sirvientes corriendo. Samuráis discutiendo. Invitados perdidos. Monjes entrando en crisis existenciales. Y, en medio de todo eso... tenían que encontrar a Minutu."),
    hanashimaDialogue("Narrador", "Lo encontraron dentro de un enorme salón ceremonial. Y en cuanto entraron... ambos se detuvieron. Porque era demasiado parecido. No era exactamente el Banquete Eterno. Pero se parecía lo suficiente como para provocarles un escalofrío."),
    {
      type: "background",
      image: "Fondo_Salon_Ceremonial.jpeg"
    },
    characterStep("minutu", { animation: "enter" }),
    characterStep("rocky", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    hanashimaDialogue("Narrador", "Minutu estaba enterrado bajo montañas de documentos. Literalmente. Había pergaminos abiertos, cronogramas colgando, mapas, listas, relojes, y al menos cinco versiones distintas de una distribución de mesas."),
    hanashimaDialogue("Narrador", "Solo se le veía el pico, un ojo, y parte del moño samurái."),
    hanashimaDialogue("Narrador", "Estaba escribiendo algo frenéticamente mientras murmuraba solo."),
    hanashimaDialogue("Minutu", "Si desplazo la mesa siete dos metros quizá evitamos un incidente diplomático... No. No, porque entonces el tío del sake quedaría cerca de los tambores... Eso provocaría una catástrofe sonora..."),
    hanashimaDialogue("Rocky", "Creo que ya ha cruzado el límite de la cordura."),
    hanashimaDialogue("Narrador", "Minutu levantó la vista. Los vio. Y durante unos segundos... pareció experimentar alivio espiritual auténtico."),
    hanashimaDialogue("Minutu", "...Lo habéis conseguido."),
    hanashimaDialogue("Narrador", "Salió de debajo de los pergaminos como un superviviente de guerra."),
    hanashimaDialogue("Minutu", "¿Tenéis la máscara?"),
    hanashimaDialogue("Narrador", "Reina levantó lentamente el objeto."),
    hanashimaDialogue("Reina", "Sí. La tenemos."),
    hanashimaDialogue("Narrador", "Minutu cerró los ojos."),
    hanashimaDialogue("Minutu", "Perfecto. Perfecto. Una variable menos en mi sufrimiento."),
    hanashimaDialogue("Narrador", "Pero Reina no sonrió. Minutu lo notó inmediatamente."),
    hanashimaDialogue("Minutu", "...No. No pongas esa cara. Más problemas no, por favor."),
    hanashimaDialogue("Narrador", "Reina intercambió una mirada con Rocky. Y respiró hondo."),
    hanashimaDialogue("Reina", "No fuimos del todo sinceros contigo."),
    hanashimaDialogue("Narrador", "Minutu se quedó inmóvil."),
    hanashimaDialogue("Rocky", "Eso normalmente suena peor de lo que es."),
    hanashimaDialogue("Minutu", "No. Normalmente suena exactamente igual de horrible que luego resulta ser."),
    hanashimaDialogue("Narrador", "Entonces le contaron todo. El mapa de la abuela. Las cinco islas. El símbolo fragmentado. La búsqueda del One Piece. Y finalmente... la máscara."),
    hanashimaDialogue("Narrador", "Reina giró el objeto mostrando el símbolo grabado detrás."),
    hanashimaDialogue("Reina", "Sabíamos que estaba relacionado con nuestro viaje. Por eso quisimos conseguirla."),
    hanashimaDialogue("Narrador", "Minutu observó el símbolo en silencio. Luego la máscara. Luego a ellos."),
    hanashimaDialogue("Narrador", "Pasaron varios segundos. Demasiados."),
    hanashimaDialogue("Rocky", "¿Estás bien?"),
    hanashimaDialogue("Narrador", "Minutu seguía completamente quieto. Como si estuviera calculando posibilidades, consecuencias, riesgos, rutas, traiciones, y probablemente horarios. Finalmente habló."),
    hanashimaDialogue("Minutu", "Puedo intentar hablar con el rey. Conseguir tiempo. Quizá retrasar parte de la ceremonia mientras investigáis esto."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "Pero no prometo nada. Ahora mismo el reino entero está sostenido por pergaminos y estrés psicológico."),
    hanashimaDialogue("Narrador", "Entonces miró lentamente la máscara."),
    hanashimaDialogue("Minutu", "Decidme una cosa."),
    hanashimaDialogue("Narrador", "Su tono había cambiado. Más serio."),
    hanashimaDialogue("Minutu", "En los textos sagrados se dice que las pruebas del Kyūbi revelan si dos personas realmente deberían caminar juntas."),
    hanashimaDialogue("Narrador", "Bajó lentamente los documentos que llevaba."),
    hanashimaDialogue("Minutu", "¿Es cierto?"),
    hanashimaDialogue("Narrador", "Rocky y Reina se miraron. Y entonces... empezaron a contarlo todo. El puente. Las preguntas. El Banquete Eterno. El caos. Las discusiones. Las risas. La forma en la que se habían sostenido mutuamente durante todo el recorrido. No hablaban como héroes. Ni como personas que intentaban impresionar a nadie. Solo... como dos personas contando algo que habían vivido juntos de verdad."),
    hanashimaDialogue("Narrador", "Y mientras hablaban... Minutu dejó de escribir. Dejó de ordenar pergaminos. Incluso dejó de calcular cosas mentalmente. Solo escuchaba. En silencio."),
    hanashimaDialogue("Narrador", "Pero no era el único. Al fondo del salón... tras una puerta parcialmente abierta... había alguien observando. Y cuanto más escuchaba hablar a Rocky y Reina... más cambiaba su expresión."),
    hanashimaDialogue("Narrador", "Rocky fue el primero en notarlo. Una sombra detrás de la puerta parcialmente abierta. Alguien estaba escuchando."),
    hanashimaDialogue("Narrador", "Reina giró la cabeza inmediatamente. Y durante un instante... sus miradas se cruzaron. La mujer del kimono blanco permaneció completamente inmóvil. Elegante. Serena. Pero claramente afectada por lo que acababa de escuchar."),
    hanashimaDialogue("Narrador", "Entonces inclinó ligeramente la cabeza... y se marchó por el pasillo con dignidad absoluta."),
    hanashimaDialogue("Rocky", "Raro..."),
    hanashimaDialogue("Narrador", "Reina miró hacia la puerta."),
    hanashimaDialogue("Reina", "¿Quién era?"),
    hanashimaDialogue("Narrador", "Minutu tardó unos segundos en responder."),
    hanashimaDialogue("Minutu", "...Lady Rin. De la Casa del Crisantemo."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "La mujer que está a punto de casarse mañana."),
    hanashimaDialogue("Narrador", "Silencio."),
    hanashimaDialogue("Rocky", "Cuánta prisa..."),
    hanashimaDialogue("Reina", "A mí me parecía afectada."),
    hanashimaDialogue("Minutu", "Por favor no digas eso. No quiero más problemas."),
    hanashimaDialogue("Narrador", "Y siguieron hablando... Lo que empezó como una conversación terminó convirtiéndose en una operación militar de emergencia."),
    hanashimaDialogue("Narrador", "Rocky y Reina decidieron ayudar a Minutu con toda la organización de la boda. Y sorprendentemente... después de sobrevivir al Banquete Eterno... pudieron ayudar bastante."),
    hanashimaDialogue("Narrador", "Durante el resto de la tarde, los tres permanecieron encerrados en el salón ceremonial. Pergaminos volaban. Relojes sonaban. Mapas eran reorganizados."),
    hanashimaDialogue("Narrador", "Rocky improvisaba soluciones imposibles. Reina calmaba discusiones diplomáticas antes de que empezaran. Y Minutu... bueno... Minutu parecía estar experimentando algo parecido a la felicidad administrativa."),
    hanashimaDialogue("Minutu", "No puedo creer que esto esté funcionando."),
    hanashimaDialogue("Rocky", "Nosotros tampoco."),
    hanashimaDialogue("Narrador", "Minutu observó una lista enorme."),
    hanashimaDialogue("Minutu", "Habéis hecho en una tarde el trabajo equivalente a cuatro días y medio de sufrimiento."),
    hanashimaDialogue("Narrador", "Reina sonrió."),
    hanashimaDialogue("Narrador", "Minutu se quedó quieto unos segundos."),
    hanashimaDialogue("Minutu", "Creo... que acabo de salvar tres plumas del estrés."),
    hanashimaDialogue("Narrador", "A la mañana siguiente... fueron al salón del trono."),
    {
      type: "background",
      image: "Fondo_Salon_Trono.jpeg"
    },
    characterStep("rey_hanabusa", { animation: "enter" }),
    characterStep("minutu", { animation: "enter" }),
    characterStep("rocky", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    hanashimaDialogue("Narrador", "El Rey Hanabusa III estaba sentado sobre un enorme trono decorado con oro, flores y abanicos ceremoniales."),
    hanashimaDialogue("Narrador", "A ambos lados del salón nobles, samuráis, patriarcas, matriarcas, y representantes de las Casas del Crisantemo y del Dragón Rojo."),
    hanashimaDialogue("Narrador", "En el centro... la Máscara del Kyūbi Celestial."),
    hanashimaDialogue("Narrador", "Minutu avanzó lentamente. Sujetando seis pergaminos, dos planes alternativos, y una mirada de agotamiento."),
    hanashimaDialogue("Minutu", "Majestad. Considero que quizá... solo quizá..."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "La máscara debería guardarse para después de la boda."),
    hanashimaDialogue("Narrador", "Los nobles empezaron a murmurar. Minutu continuó."),
    hanashimaDialogue("Minutu", "O quizá para el nacimiento del primer heredero. O para una futura ceremonia. O para literalmente cualquier momento menos ahora mismo."),
    hanashimaDialogue("Narrador", "El caos volvió inmediatamente."),
    hanashimaDialogue("Noble", "¡¡¡LA TRADICIÓN EXIGE QUE SEA HOY!!!"),
    hanashimaDialogue("Crisantemo", "¡¡¡LA CASA DEL CRISANTEMO NO APLAZA REGALOS SAGRADOS!!!"),
    hanashimaDialogue("Consejero", "¡¡¡EL HORARIO YA ESTÁ IMPRESO!!!"),
    hanashimaDialogue("Narrador", "Minutu cerró lentamente los ojos."),
    hanashimaDialogue("Minutu", "Ah. Sí. Aquí viene otra vez."),
    hanashimaDialogue("Narrador", "Entonces... una voz suave atravesó el salón."),
    characterStep("lady_rin", { animation: "enter" }),
    hanashimaDialogue("Lady Rin", "No habrá boda."),
    hanashimaDialogue("Narrador", "Silencio absoluto. Completo. Incluso Minutu dejó caer un pergamino."),
    hanashimaDialogue("Narrador", "Lady Rin avanzó lentamente hasta el centro del salón. Su kimono blanco se movía suavemente mientras todas las miradas se clavaban en ella."),
    hanashimaDialogue("Lady Rin", "Anoche os escuché."),
    hanashimaDialogue("Narrador", "Miró a Rocky y Reina."),
    hanashimaDialogue("Lady Rin", "Escuché lo que vivisteis para conseguir la máscara. Las pruebas. Las conversaciones. La forma en la que caminasteis juntos."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Lady Rin", "Y comprendí algo."),
    hanashimaDialogue("Narrador", "Bajó ligeramente la mirada."),
    hanashimaDialogue("Lady Rin", "Nunca he tenido una conversación así con Lord Kazan."),
    hanashimaDialogue("Narrador", "Los nobles empezaron a removerse incómodos."),
    hanashimaDialogue("Lady Rin", "Sé por qué existe esta unión."),
    hanashimaDialogue("Narrador", "Miró a los patriarcas de ambas casas."),
    hanashimaDialogue("Lady Rin", "Sé que nuestras familias buscan estabilidad. Prosperidad. Paz para la isla."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Lady Rin", "Pero también es mi vida."),
    hanashimaDialogue("Narrador", "Silencio."),
    hanashimaDialogue("Lady Rin", "No digo que no quiera casarme."),
    hanashimaDialogue("Narrador", "Entonces miró hacia Lord Kazan."),
    hanashimaDialogue("Lady Rin", "Pero todo esto está ocurriendo demasiado deprisa. Me gustaría conoceros antes. De verdad."),
    hanashimaDialogue("Narrador", "Los nobles empezaron a discutir inmediatamente."),
    hanashimaDialogue("Noble", "¡¡¡ESTO ES UN ESCÁNDALO!!!"),
    hanashimaDialogue("Consejero", "¡¡¡LA CEREMONIA YA ESTÁ PREPARADA!!!"),
    hanashimaDialogue("Patriarca", "¡¡¡LAS DOS CASAS YA HAN FIRMADO!!!"),
    hanashimaDialogue("Narrador", "El rey intentaba hablar. Los consejeros gritaban. Minutu parecía estar a punto de abandonar su cuerpo. Y entonces... Lord Kazan habló."),
    characterStep("lord_kazan", { animation: "enter" }),
    hanashimaDialogue("Lord Kazan", "A mí también me gustaría eso."),
    hanashimaDialogue("Narrador", "Silencio."),
    hanashimaDialogue("Narrador", "Lady Rin levantó lentamente la mirada. Y por primera vez... se miraron de verdad. No como símbolos. No como herederos. Como dos personas. Y justo ahí... una chispa se prendió."),
    {
      type: "effect",
      name: "shake"
    },
    hanashimaDialogue("Narrador", "El viento atravesó el salón del trono. Las luces temblaron. Pétalos blancos empezaron a girar alrededor de la máscara. Y entonces apareció el Kyūbi Celestial. Gigantesco. Hecho de luz azul y fuego espiritual."),
    {
      type: "clearCharacters"
    },
    characterStep("kyubi", { animation: "enter" }),
    hanashimaDialogue("Narrador", "Todo el salón quedó paralizado."),
    hanashimaDialogue("Kyūbi", "Mis pruebas habéis pasado..."),
    hanashimaDialogue("Narrador", "Las nueve colas se movieron lentamente detrás de él."),
    hanashimaDialogue("Kyūbi", "...más aun así... mucho habéis logrado."),
    hanashimaDialogue("Narrador", "Sus ojos brillaron observando a Lord Kazan y Lady Rin."),
    hanashimaDialogue("Kyūbi", "Una falsa unión habéis cambiado."),
    hanashimaDialogue("Narrador", "El viento recorrió el salón."),
    hanashimaDialogue("Kyūbi", "Y dos corazones... se han encontrado."),
    hanashimaDialogue("Narrador", "Entonces giró lentamente la cabeza hacia Rocky y Reina."),
    hanashimaDialogue("Kyūbi", "Mirad el regalo."),
    hanashimaDialogue("Narrador", "La máscara empezó a brillar."),
    hanashimaDialogue("Kyūbi", "Allí... escondido está lo buscado."),
    hanashimaDialogue("Narrador", "Y en el siguiente instante... desapareció. Como si jamás hubiera estado allí."),
    {
      type: "clearCharacters",
      ids: ["kyubi"]
    },
    characterStep("rey_hanabusa", { animation: "enter" }),
    characterStep("minutu", { animation: "enter" }),
    hanashimaDialogue("Narrador", "Nadie habló. Nadie respiró. El Rey Hanabusa tenía los ojos completamente abiertos."),
    hanashimaDialogue("Rey Hanabusa", "...Habéis presenciado una visión sagrada del Kyūbi."),
    hanashimaDialogue("Narrador", "Se levantó lentamente del trono."),
    hanashimaDialogue("Rey Hanabusa", "Desde este día... Rocky y Reina serán reconocidos como Amigos Honoríficos de Toki no Hanashima."),
    hanashimaDialogue("Narrador", "Los nobles quedaron completamente desconcertados. Pero nadie se atrevió a discutir después de que un zorro divino apareciera en mitad del salón."),
    hanashimaDialogue("Narrador", "El rey levantó un brazo."),
    hanashimaDialogue("Rey Hanabusa", "La boda queda aplazada."),
    hanashimaDialogue("Narrador", "Los nobles empezaron a protestar."),
    hanashimaDialogue("Rey Hanabusa", "¡Hasta que Lord Kazan y Lady Rin estén preparados!"),
    hanashimaDialogue("Narrador", "Lord Kazan sonrió por primera vez en toda la historia. Lady Rin también."),
    hanashimaDialogue("Narrador", "Entonces el rey miró a Minutu, que seguía sujetando pergaminos roto mentalmente."),
    hanashimaDialogue("Rey Hanabusa", "Y tú."),
    hanashimaDialogue("Narrador", "Minutu levantó lentamente la cabeza."),
    hanashimaDialogue("Rey Hanabusa", "Te ordeno tomarte vacaciones."),
    hanashimaDialogue("Narrador", "Silencio."),
    hanashimaDialogue("Minutu", "..."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "No sé cómo procesar esta información."),
    hanashimaDialogue("Narrador", "Más tarde... los tres regresaron al salón ceremonial."),
    {
      type: "background",
      image: "Fondo_Salon_Ceremonial.jpeg"
    },
    characterStep("rocky", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    characterStep("minutu", { animation: "enter" }),
    hanashimaDialogue("Narrador", "El lugar estaba mucho más tranquilo ahora. Rocky dejó la máscara sobre la mesa. Reina volvió a observar el símbolo fragmentado. Y entonces lo vieron."),
    hanashimaDialogue("Narrador", "Justo encima del círculo... habían aparecido números. Grabados que antes no estaban allí."),
    hanashimaDialogue("Rocky", "Vale. Eso definitivamente NO estaba antes."),
    hanashimaDialogue("Narrador", "Minutu observó los números. Luego sacó una libreta, tres reglas, un reloj, y dos pergaminos."),
    hanashimaDialogue("Minutu", "No entiendo qué significan todavía."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "Pero al menos ahora tenéis algo por lo que empezar..."),
    hanashimaDialogue("Narrador", "El sol empezaba a caer sobre Toki no Hanashima cuando recorrieron la ciudad para llegar al puerto."),
    {
      type: "background",
      image: "Hanashima_ciudad.jpeg"
    },
    characterStep("rocky", { animation: "enter" }),
    characterStep("minutu", { animation: "enter" }),
    characterStep("reina", { animation: "enter" }),
    hanashimaDialogue("Narrador", "El Nyinyus esperaba junto al muelle. Las velas ondeaban suavemente con el viento."),
    hanashimaDialogue("Narrador", "Rocky se giró hacia Minutu."),
    hanashimaDialogue("Rocky", "Oye..."),
    hanashimaDialogue("Narrador", "Minutu estaba revisando un documento llamado: \"Posibles catástrofes marítimas previsibles\"."),
    hanashimaDialogue("Rocky", "Ahora que estás oficialmente de vacaciones..."),
    hanashimaDialogue("Narrador", "Minutu levantó una ceja."),
    hanashimaDialogue("Rocky", "¿Qué te parecería unirte a nosotros?"),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Rocky", "No prometo tranquilidad. Pero sí aventura. Y probablemente bastantes malas decisiones."),
    hanashimaDialogue("Narrador", "Minutu permaneció en silencio. Miró el barco, el mar, los pergaminos, y después a Rocky y Reina."),
    hanashimaDialogue("Narrador", "Pensó. Mucho. Demasiado. Finalmente suspiró."),
    hanashimaDialogue("Minutu", "He visto vuestra forma de improvisar."),
    hanashimaDialogue("Narrador", "Pausa."),
    hanashimaDialogue("Minutu", "Sinceramente... sois un peligro para la navegación, la logística y la estabilidad emocional de cualquier estratega."),
    hanashimaDialogue("Narrador", "Rocky sonrió."),
    hanashimaDialogue("Narrador", "Minutu se ajustó lentamente uno de los relojes que llevaba."),
    hanashimaDialogue("Minutu", "Así que claramente necesitáis supervisión profesional."),
    hanashimaDialogue("Narrador", "Y así... Minutu D. Silentium, \"El Planicida\", subió al Nyinyus como estratega oficial de la tripulación."),
    hanashimaDialogue("Narrador", "Las velas se desplegaron."),
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN_1.png"
    },
    hanashimaDialogue("Narrador", "Toki no Hanashima quedó atrás lentamente entre pétalos flotando sobre el mar. Y mientras el barco avanzaba hacia el horizonte... tres figuras observaban el siguiente destino."),
    hanashimaDialogue("Narrador", "El orden imposible de la Isla Toki no Hanashima quedó atrás poco a poco... Durante días navegaron entre mares tranquilos. Hasta que el horizonte empezó a girar."),
    hanashimaDialogue("Narrador", "Minutu aún seguía reorganizando horarios en cubierta cuando el cielo empezó a oscurecerse de forma antinatural."),
    hanashimaDialogue("Narrador", "El aire cambió antes que el paisaje. Más pesado. Más salvaje. Como si el propio océano estuviera intentando advertirles."),
    hanashimaDialogue("Narrador", "Y entonces la vieron. Entre huracanes y estructuras imposibles..."),
    {
      type: "goto",
      nextScene: "tempestaria_llegada"
    }
  ]
});
