const ornitheaDialogue = (speaker, text) => ({
  type: "dialogue",
  speaker,
  text
});

Object.assign(story, {
  ornithea_llegada: [
    {
      type: "clearCharacters"
    },
    {
      type: "background",
      image: "FONDO TRANSICIÓN_2.png"
    },
    ornitheaDialogue(
      "Narrador",
      "El Nyinyus navegó durante horas entre corrientes extrañamente silenciosas."
    ),
    ornitheaDialogue(
      "Narrador",
      "El mar alrededor de Ornithea parecía distinto al resto del Grand Line. Más tranquilo. Más denso. Como si el propio aire pesara."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y entonces apareció la niebla. No llegó poco a poco. Simplemente… estaba ahí."
    ),
    {
      type: "background",
      image: "Fondo_Isla_Ornithea.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Enormes bancos blancos devoraron el horizonte hasta tragarse completamente el océano."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las velas desaparecieron parcialmente. El mascarón del Nyinyus apenas se distinguía desde cubierta. Incluso los sonidos parecían apagarse dentro de aquella bruma espesa."
    ),
    ornitheaDialogue("Narrador", "Blue ajustó ligeramente sus gafas."),
    ornitheaDialogue("Blue", "Esta niebla no es normal, ¿no?"),
    ornitheaDialogue(
      "Narrador",
      "Minutu ya tenía mala cara desde hacía rato."
    ),
    ornitheaDialogue("Minutu", "Por supuesto que no lo es."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Minutu", "Nada en este viaje es normal."),
    ornitheaDialogue("Narrador", "Entonces la vieron."),
    ornitheaDialogue(
      "Narrador",
      "O más bien… empezaron a verla entre huecos de niebla. Sombras suspendidas en el aire. Puentes colgantes. Casas apoyadas sobre enormes pilares de roca."
    ),
    ornitheaDialogue(
      "Narrador",
      "Pequeñas islas flotantes moviéndose lentamente entre las nubes bajas. Molinos de viento. Faroles de colores. Telas colgando entre estructuras imposibles."
    ),
    ornitheaDialogue(
      "Narrador",
      "Todo Ornithea parecía construido entre el mar y el cielo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Potentes corrientes de aire emergían desde enormes grietas de la montaña, sosteniendo plataformas enteras suspendidas sobre el vacío."
    ),
    ornitheaDialogue(
      "Narrador",
      "Algunas mini islas se desplazaban lentamente arrastradas por el viento, cambiando constantemente la forma de la ciudad."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y aunque apenas podían verlo… se intuía algo más bajo la niebla. Color. Muchísimo color. Edificios pintados. Puentes decorados. Banderines. Cristales. Madera teñida."
    ),
    ornitheaDialogue(
      "Narrador",
      "Como si Ornithea fuera una de las islas más vivas y hermosas del mundo… escondida permanentemente detrás de una cortina blanca."
    ),
    ornitheaDialogue(
      "Narrador",
      "Mako estaba completamente fascinada."
    ),
    ornitheaDialogue("Mako", "Vale… esta isla tiene un rollo increíble."),
    ornitheaDialogue("Minutu", "Esta isla tiene un rollo de accidente marítimo."),
    ornitheaDialogue(
      "Narrador",
      "Otro banco de niebla cubrió completamente el barco."
    ),
    ornitheaDialogue("Narrador", "Y entonces… se perdieron. Literalmente."),
    ornitheaDialogue("Narrador", "Blue miraba mapas."),
    ornitheaDialogue("Narrador", "Minutu intentaba orientarse."),
    ornitheaDialogue(
      "Narrador",
      "Reina guiaba a Rocky mientras este giraba el timón intentando seguir lo poco visible del mar."
    ),
    ornitheaDialogue(
      "Narrador",
      "Pero nada funcionaba. Las corrientes cambiaban. Los sonidos rebotaban extrañamente. Las siluetas de la isla aparecían en lugares distintos cada pocos minutos."
    ),
    ornitheaDialogue("Narrador", "Minutu apretó el puente de la nariz."),
    ornitheaDialogue("Minutu", "Perfecto."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Minutu", "La isla se mueve."),
    ornitheaDialogue("Narrador", "Y entonces lo escucharon."),
    ornitheaDialogue("Narrador", "Fiuuuuu…"),
    ornitheaDialogue("Narrador", "Un silbido suave atravesó la niebla."),
    ornitheaDialogue("Narrador", "Todos levantaron la cabeza."),
    ornitheaDialogue("Narrador", "Fiuuuuu… Fiuuuuu…"),
    ornitheaDialogue(
      "Narrador",
      "Otro silbido respondió más lejos. Y luego otro. Y otro. Como ecos hablándose entre sí."
    ),
    ornitheaDialogue("Narrador", "Blue frunció ligeramente el ceño."),
    ornitheaDialogue("Blue", "¿La gente… se orienta así?"),
    ornitheaDialogue(
      "Narrador",
      "Entre la niebla empezaron a aparecer respuestas. Silbidos desde casas invisibles. Desde puentes ocultos. Desde pequeñas barcas. Desde algún lugar mucho más arriba."
    ),
    ornitheaDialogue("Narrador", "Ornithea hablaba silbando."),
    ornitheaDialogue("Narrador", "Mako se apoyó sobre la barandilla."),
    ornitheaDialogue("Mako", "Eso es adorable y misterioso al mismo tiempo."),
    ornitheaDialogue(
      "Narrador",
      "Entonces llegó el tercer silbido. Más agudo. Más claro."
    ),
    ornitheaDialogue("Narrador", "Fiuuuuu…"),
    ornitheaDialogue("Narrador", "Y esta vez… algo se movió entre la niebla."),
    {
      type: "background",
      image: "Fondo_pájaro.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Una figura negra cruzó lentamente frente al barco. Un pájaro. Grande. Elegante. Oscuro como tinta."
    ),
    ornitheaDialogue(
      "Narrador",
      "Pero cuando atravesó uno de los pocos rayos de sol que lograban perforar la niebla… las plumas brillaron. Azules. Verdes. Moradas. Dorada luz iridiscente recorrió su cuerpo durante apenas un segundo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Reina entrecerró los ojos. Y entonces lo vio. Algo colgando de su cuello. Muy pequeño. Metálico."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y por un instante… le pareció reconocer una forma."
    ),
    ornitheaDialogue("Reina", "Esperad…"),
    ornitheaDialogue(
      "Narrador",
      "El pájaro giró ligeramente sobre el aire. Y desapareció otra vez dentro de la niebla."
    ),
    ornitheaDialogue("Narrador", "Rocky miró alrededor."),
    ornitheaDialogue("Rocky", "¿Qué pasa?"),
    ornitheaDialogue(
      "Narrador",
      "Reina seguía observando el lugar donde había desaparecido."
    ),
    ornitheaDialogue("Reina", "Creo que… Creo que llevaba el símbolo."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Minutu levantó lentamente la cabeza."),
    ornitheaDialogue("Narrador", "Mako sonrió."),
    ornitheaDialogue("Narrador", "Blue ajustó sus gafas inmediatamente."),
    ornitheaDialogue("Narrador", "Y justo entonces…"),
    ornitheaDialogue("Narrador", "Fiuuuuu…"),
    ornitheaDialogue(
      "Narrador",
      "El mismo silbido volvió a sonar delante del barco. Como si los estuviera guiando."
    ),
    ornitheaDialogue("Narrador", "Rocky sonrió."),
    ornitheaDialogue("Rocky", "Pues supongo que seguimos al pájaro misterioso."),
    ornitheaDialogue("Minutu", "Eso no debería ser nunca una frase razonable."),
    ornitheaDialogue("Narrador", "Pero aun así… siguieron avanzando."),
    ornitheaDialogue(
      "Narrador",
      "Y poco a poco… entre la niebla… empezaron a aparecer los primeros muelles de Ornithea."
    ),
    ornitheaDialogue(
      "Narrador",
      "Cuando finalmente lograron atracar en el puerto… el pájaro ya no estaba."
    ),
    {
      type: "background",
      image: "Fondo_ciudad_ornithea.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El Nyinyus quedó finalmente anclado entre pilares de madera húmeda y plataformas suspendidas que apenas podían verse entre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Ornithea estaba viva. Pero no como Rabbita. Aquello era… distinto. Silbidos. Suaves. Lejanos. Respondiéndose entre sí desde distintos puntos ocultos de la isla."
    ),
    ornitheaDialogue("Narrador", "Fiuuuuu…"),
    ornitheaDialogue("Narrador", "Fiiiii…"),
    ornitheaDialogue("Narrador", "Fiu-fiu."),
    ornitheaDialogue(
      "Narrador",
      "La niebla cubría prácticamente todo. Apenas dejaba distinguir las formas generales de los edificios elevados sobre pilares y puentes colgantes que desaparecían entre las nubes blancas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Algunas estructuras parecían directamente suspendidas en el aire, sostenidas por enormes corrientes ascendentes que surgían desde el interior de la isla."
    ),
    ornitheaDialogue(
      "Narrador",
      "A veces una mini isla flotante aparecía entre la niebla durante unos segundos… y luego volvía a desaparecer lentamente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Había faroles de colores. Telas colgando entre casas. Molinos. Jardines suspendidos. Y sombras moviéndose constantemente entre la bruma."
    ),
    ornitheaDialogue(
      "Narrador",
      "Seguramente Ornithea era preciosa. Pero la niebla se guardaba casi toda la belleza para sí misma."
    ),
    ornitheaDialogue(
      "Narrador",
      "Mako bajó del barco mirando alrededor fascinada."
    ),
    ornitheaDialogue("Mako", "Vale. Esto parece un sueño raro."),
    ornitheaDialogue(
      "Narrador",
      "Minutu sujetaba una cuerda del muelle con expresión de absoluta desconfianza."
    ),
    ornitheaDialogue("Minutu", "Esto parece exactamente el tipo de lugar donde desaparece gente."),
    ornitheaDialogue(
      "Narrador",
      "Blue observaba cómo varias personas se comunicaban mediante pequeños silbidos mientras cruzaban los puentes."
    ),
    ornitheaDialogue("Blue", "Creo que los usan para orientarse."),
    ornitheaDialogue("Narrador", "Rocky levantó una ceja."),
    ornitheaDialogue("Rocky", "Eso es increíble."),
    ornitheaDialogue("Minutu", "Eso es preocupante."),
    ornitheaDialogue("Narrador", "Reina apenas los escuchaba."),
    ornitheaDialogue(
      "Narrador",
      "Seguía mirando entre la niebla. Buscando al cuervo. Porque estaba segura de haberlo visto. El brillo iridiscente. La pequeña esfera colgando de su cuello."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y durante un instante… habría jurado que aquella esfera llevaba grabado el símbolo del círculo fragmentado. Pero ahora el ave había desaparecido."
    ),
    ornitheaDialogue(
      "Narrador",
      "Reina empezó a preguntar apenas cruzaron el puerto."
    ),
    ornitheaDialogue("Reina", "Disculpe. ¿Ha visto un cuervo negro? Con reflejos de colores."),
    ornitheaDialogue("Narrador", "Un pescador ni siquiera levantó la vista."),
    ornitheaDialogue("Pescador", "Aquí hay mucha niebla."),
    ornitheaDialogue("Narrador", "Otro hombre soltó una carcajada."),
    ornitheaDialogue("Hombre", "Claro. Y yo he visto peces tocando el violín."),
    ornitheaDialogue("Narrador", "Mako señaló dramáticamente al hombre."),
    ornitheaDialogue("Mako", "Eso podría existir perfectamente."),
    ornitheaDialogue("Minutu", "No lo animes."),
    ornitheaDialogue(
      "Narrador",
      "Siguieron avanzando entre callejones elevados y puentes cubiertos por bruma hasta que finalmente una anciana los observó desde un pequeño puesto lleno de pájaros posados tranquilamente a su alrededor y campanillas de viento."
    ),
    characterStep("anciana", { animation: "enter" }),
    ornitheaDialogue("Anciana", "¿Otra vez historias del cuervo iridiscente?"),
    ornitheaDialogue("Narrador", "Reina se detuvo."),
    ornitheaDialogue("Reina", "Entonces sí existe."),
    ornitheaDialogue("Narrador", "La mujer resopló."),
    ornitheaDialogue("Anciana", "No existe. Pero Haze lleva años diciendo que sí."),
    ornitheaDialogue("Narrador", "Rocky inclinó ligeramente la cabeza."),
    ornitheaDialogue("Rocky", "¿Quién es Haze?"),
    ornitheaDialogue(
      "Narrador",
      "La anciana soltó una pequeña risa cansada."
    ),
    ornitheaDialogue(
      "Anciana",
      "Una muchacha fantasiosa que vive más pendiente de los pájaros que de las personas."
    ),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Anciana", "Cree en cuentos, señales y tonterías de niños."),
    ornitheaDialogue("Narrador", "Mako levantó la mano emocionada."),
    ornitheaDialogue("Mako", "Oh, me va a caer increíble."),
    ornitheaDialogue(
      "Narrador",
      "La anciana ignoró completamente el comentario."
    ),
    ornitheaDialogue("Reina", "¿Dónde podemos encontrarla?"),
    ornitheaDialogue(
      "Narrador",
      "La mujer levantó lentamente un dedo señalando hacia las zonas más profundas de la isla. Hacia donde la niebla era todavía más espesa."
    ),
    ornitheaDialogue("Anciana", "Bosque adentro."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Anciana", "Vive apartada del pueblo."),
    ornitheaDialogue("Blue", "¿Y cómo llegamos?"),
    ornitheaDialogue(
      "Narrador",
      "La anciana se quedó callada unos segundos."
    ),
    ornitheaDialogue("Narrador", "Luego respondió:"),
    ornitheaDialogue("Anciana", "Con cuidado."),
    ornitheaDialogue(
      "Narrador",
      "El viento movió ligeramente las campanas del puesto."
    ),
    ornitheaDialogue(
      "Anciana",
      "Ornithea no perdona a quienes no saben escucharla."
    ),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue(
      "Anciana",
      "La niebla cambia los caminos. Los puentes desaparecen. Las corrientes mueven las islas pequeñas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Minutu ya parecía arrepentirse de existir otra vez."
    ),
    ornitheaDialogue("Anciana", "Si no sabéis moveros por aquí…"),
    ornitheaDialogue(
      "Narrador",
      "Sus ojos recorrieron al grupo lentamente."
    ),
    ornitheaDialogue("Anciana", "Podríais perderos para siempre."),
    ornitheaDialogue(
      "Narrador",
      "La anciana los observó alejarse unos pasos entre la niebla. Entonces habló una última vez."
    ),
    ornitheaDialogue("Anciana", "Eh."),
    ornitheaDialogue("Narrador", "El grupo se giró."),
    ornitheaDialogue(
      "Narrador",
      "La mujer señaló lentamente el bosque cubierto por bruma."
    ),
    ornitheaDialogue("Anciana", "Fijaos en los silbidos."),
    ornitheaDialogue(
      "Narrador",
      "Y luego volvió a sus pájaros como si la conversación hubiera terminado."
    ),
    {
      type: "background",
      image: "Puente_colgante.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El grupo avanzó hacia el interior del bosque. La niebla los envolvió casi inmediatamente."
    ),
    ornitheaDialogue(
      "Narrador",
      "No era una niebla normal. No parecía simplemente humedad suspendida en el aire. Parecía… espesa. Como si la isla quisiera ocultarse."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las enormes raíces y árboles de Ornithea crecían entre plataformas suspendidas, pasarelas de madera y pequeñas islas flotantes unidas por puentes colgantes."
    ),
    ornitheaDialogue(
      "Narrador",
      "Algunas partes del bosque directamente desaparecían bajo el vacío. Otras quedaban suspendidas sobre corrientes de aire que emitían un silbido constante."
    ),
    ornitheaDialogue("Narrador", "Fiiiiiiiuuuuu…"),
    ornitheaDialogue("Narrador", "Blue ajustó ligeramente sus gafas."),
    ornitheaDialogue("Blue", "No veo más allá de diez metros."),
    ornitheaDialogue(
      "Minutu",
      "Perfecto. Bosque desconocido. Niebla sobrenatural. Puentes suspendidos. Excelente combinación."
    ),
    ornitheaDialogue("Narrador", "Mako sonrió."),
    ornitheaDialogue("Mako", "A mí me parece emocionante."),
    ornitheaDialogue(
      "Narrador",
      "Reina iba delante observando cualquier movimiento extraño. Y entonces lo escucharon."
    ),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Dos silbidos cortos."),
    ornitheaDialogue("Narrador", "Todos se detuvieron."),
    ornitheaDialogue("Rocky", "¿Eso ha sido…?"),
    ornitheaDialogue("Blue", "¿El viento?"),
    ornitheaDialogue("Narrador", "Minutu frunció ligeramente el ceño."),
    ornitheaDialogue("Minutu", "No. Había cadencia."),
    ornitheaDialogue(
      "Narrador",
      "Delante de ellos el sendero se dividía en dos. Uno descendía hacia una zona llena de raíces cubiertas de musgo. El otro cruzaba un pequeño puente colgante suspendido sobre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "En un árbol posado encima del otro camino de raíces había una gaviota observándolos tranquilamente."
    ),
    ornitheaDialogue("Narrador", "Mako señaló emocionada."),
    ornitheaDialogue("Mako", "¡Un pajarito!"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Dos silbidos cortos."),
    ornitheaDialogue("Narrador", "Los silbidos venían de más allá del puente."),
    ornitheaDialogue("Narrador", "Rocky sonrió."),
    ornitheaDialogue("Rocky", "Bueno. ¿Por dónde vamos?"),
    {
      type: "choice",
      text: "¿Por dónde vais?",
      options: [
        {
          text: "CAMINO DE RAÍCES",
          nextScene: "ornithea_camino_raices"
        },
        {
          text: "PUENTE COLGANTE",
          nextScene: "ornithea_puente_colgante"
        }
      ]
    }
  ],

  ornithea_puente_colgante: [
    {
      type: "background",
      image: "Puente_colgante.jpeg"
    },
    ornitheaDialogue("Narrador", "Reina asintió lentamente."),
    ornitheaDialogue("Reina", "Probemos ese camino."),
    ornitheaDialogue("Narrador", "Y cruzaron el puente."),
    ornitheaDialogue(
      "Narrador",
      "Durante un rato funcionó. El bosque se volvió menos agresivo. Los puentes parecían más estables."
    ),
    ornitheaDialogue(
      "Narrador",
      "Incluso la niebla se abría ligeramente a veces dejando ver pequeñas islas flotantes cubiertas de flores y molinos de viento."
    ),
    {
      type: "background",
      image: "Fondo_rio.jpeg"
    },
    ornitheaDialogue("Narrador", "Entonces llegaron al río."),
    ornitheaDialogue(
      "Narrador",
      "Un enorme cauce atravesaba el bosque entre rocas y árboles inclinados."
    ),
    ornitheaDialogue(
      "Narrador",
      "Había tres posibles caminos: unas piedras para cruzar el agua, una pasarela de madera, y un sendero elevado rodeando el río."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon:"),
    ornitheaDialogue("Narrador", "Fiuuuuu… Fiu."),
    ornitheaDialogue(
      "Narrador",
      "Un silbido largo. Uno corto. Provenía del sendero elevado."
    ),
    ornitheaDialogue("Narrador", "Blue levantó lentamente la mirada."),
    ornitheaDialogue("Blue", "Eso ha sonado… diferente."),
    ornitheaDialogue(
      "Narrador",
      "Sobre la pasarela metálica varias gaviotas observaban el agua."
    ),
    ornitheaDialogue("Mako", "Tienen ojos rarísimos."),
    ornitheaDialogue(
      "Narrador",
      "Minutu recordó inmediatamente las palabras de la anciana."
    ),
    ornitheaDialogue("Minutu", "“Fijaos en los silbidos.”"),
    ornitheaDialogue("Rocky", "Entonces, ¿vamos por el sendero elevado?"),
    ornitheaDialogue(
      "Narrador",
      "El sendero elevado desaparecía parcialmente entre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y las piedras del río parecían resbaladísimas."
    ),
    ornitheaDialogue("Mako", "Vale. Yo voto por las piedras porque parece más divertido."),
    ornitheaDialogue("Minutu", "Eso jamás será un criterio válido."),
    ornitheaDialogue("Reina", "Entonces, ¿qué? ¿Por dónde?"),
    {
      type: "choice",
      text: "¿Por dónde vais?",
      options: [
        {
          text: "SENDERO ELEVADO",
          nextScene: "ornithea_sendero_elevado"
        },
        {
          text: "PUENTE DE MADERA",
          nextScene: "ornithea_puente_madera"
        },
        {
          text: "PIEDRAS DEL RÍO",
          nextScene: "ornithea_piedras_rio"
        }
      ]
    }
  ],

  ornithea_piedras_rio: [
    {
      type: "background",
      image: "Fondo_rio.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El grupo decidió cruzar el río saltando por las piedras."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las rocas sobresalían apenas por encima de la corriente oscura."
    ),
    ornitheaDialogue(
      "Narrador",
      "Algunas estaban cubiertas de musgo húmedo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Otras parecían desplazarse ligeramente bajo el agua."
    ),
    ornitheaDialogue(
      "Narrador",
      "Minutu observó el río con absoluta desconfianza."
    ),
    ornitheaDialogue(
      "Minutu",
      "Quiero dejar constancia de que esta decisión es objetivamente terrible."
    ),
    ornitheaDialogue("Narrador", "Mako ya había saltado a la primera piedra."),
    ornitheaDialogue("Mako", "¡Cobarde!"),
    ornitheaDialogue("Narrador", "Rocky fue detrás riéndose."),
    ornitheaDialogue("Narrador", "Reina avanzó con cuidado."),
    ornitheaDialogue(
      "Narrador",
      "Blue tardó muchísimo más en decidir dónde poner el pie."
    ),
    ornitheaDialogue("Blue", "No me gusta cómo suena el agua…"),
    ornitheaDialogue(
      "Narrador",
      "El río emitía pequeños silbidos extraños entre las rocas."
    ),
    ornitheaDialogue("Narrador", "Fiuuu…"),
    ornitheaDialogue("Narrador", "Fiiii…"),
    ornitheaDialogue("Narrador", "Como si el propio cauce respirara."),
    ornitheaDialogue(
      "Narrador",
      "Al principio parecía funcionar. Saltaban. Avanzaban. La niebla incluso se abría ligeramente dejando ver el otro lado."
    ),
    ornitheaDialogue(
      "Narrador",
      "Entonces Mako aterrizó sobre una piedra más grande que las demás."
    ),
    ornitheaDialogue("Narrador", "Y la piedra… se hundió."),
    ornitheaDialogue("Mako", "…Ah."),
    ornitheaDialogue("Narrador", "Mako logró saltar a otra piedra. Entonces…"),
    ornitheaDialogue("Narrador", "BOOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    ornitheaDialogue(
      "Narrador",
      "Un movimiento en el agua hizo que todas las piedras rodaran."
    ),
    ornitheaDialogue("Narrador", "Todos perdieron el equilibrio."),
    ornitheaDialogue("Narrador", "Rocky resbaló hacia un lado."),
    ornitheaDialogue(
      "Narrador",
      "Blue gritó al quedarse haciendo equilibrios encima de una roca."
    ),
    ornitheaDialogue("Narrador", "Reina consiguió sujetarse a una raíz."),
    ornitheaDialogue("Minutu", "¡AAAAH!"),
    ornitheaDialogue(
      "Narrador",
      "Minutu consiguió recuperar el equilibrio por centímetros mientras Mako se reía como si aquello fuera un espectáculo e intentaba no caerse también."
    ),
    ornitheaDialogue("Mako", "¡Vale! ¡Eso sí ha sido divertido!"),
    ornitheaDialogue(
      "Narrador",
      "El grupo siguió, avanzando más rápido antes de que el camino de piedras desapareciera. Saltaban. Resbalaban. Se agarraban entre ellos."
    ),
    ornitheaDialogue("Narrador", "Y cada pocos metros:"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue(
      "Narrador",
      "Los dos silbidos cortos seguían apareciendo entre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Finalmente Rocky dio el último salto hasta tierra firme."
    ),
    ornitheaDialogue("Rocky", "¡Sí! ¡Lo conseguimos!"),
    ornitheaDialogue(
      "Narrador",
      "Blue llegó la última completamente agotada."
    ),
    ornitheaDialogue("Blue", "Cruzar un río no debería ser tan complicado."),
    {
      type: "background",
      image: "Fondo_Bosque.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El grupo avanzó varios minutos más después de cruzar el río. O al menos… creían que avanzaban."
    ),
    ornitheaDialogue(
      "Narrador",
      "Porque Ornithea seguía cambiando constantemente a su alrededor."
    ),
    ornitheaDialogue("Narrador", "La niebla ocultaba los puentes."),
    ornitheaDialogue("Narrador", "Los árboles parecían moverse."),
    ornitheaDialogue(
      "Narrador",
      "Y las pequeñas islas flotantes cambiaban lentamente de posición sobre sus cabezas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue observaba los alrededores completamente perdida."
    ),
    ornitheaDialogue("Blue", "No reconozco nada de esto."),
    ornitheaDialogue(
      "Narrador",
      "Minutu estaba revisando notas que ya claramente habían dejado de servir."
    ),
    ornitheaDialogue("Minutu", "Eso es porque esta isla odia activamente los mapas."),
    ornitheaDialogue(
      "Narrador",
      "Mako caminaba despreocupadamente balanceándose sobre una raíz enorme."
    ),
    ornitheaDialogue("Mako", "Yo ya he aceptado que probablemente moriremos aquí."),
    ornitheaDialogue("Rocky", "Tú aceptas eso demasiado rápido."),
    ornitheaDialogue("Narrador", "Y entonces… crunch. Crunch crunch."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Todos se detuvieron."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue("Narrador", "El sonido venía justo encima de ellos."),
    ornitheaDialogue("Narrador", "Reina levantó lentamente la cabeza."),
    ornitheaDialogue("Narrador", "Y allí estaba."),
    ornitheaDialogue(
      "Narrador",
      "Una chica sentada tranquilamente sobre la rama de un árbol gigantesco, parcialmente oculta por la niebla."
    ),
    ornitheaDialogue("Narrador", "Cabello claro moviéndose suavemente con el viento."),
    ornitheaDialogue("Narrador", "Mirada distraída."),
    ornitheaDialogue("Narrador", "Piernas balanceándose en el aire."),
    ornitheaDialogue("Narrador", "Y un pequeño puñado de pipas en las manos."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue(
      "Narrador",
      "Los observaba como si llevara ahí muchísimo rato."
    ),
    ornitheaDialogue("Rocky", "Pero qué…"),
    ornitheaDialogue("Reina", "Esto… ¿Hola?"),
    ornitheaDialogue(
      "Narrador",
      "La chica los miró unos segundos más antes de responder."
    ),
    ornitheaDialogue("?????", "Hola."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue("Minutu", "¿Cuánto hace que estás ahí?"),
    ornitheaDialogue(
      "Narrador",
      "La muchacha pareció pensar unos segundos."
    ),
    ornitheaDialogue("?????", "No sé."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("?????", "Creo que desde antes del río."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Blue", "Y, ¿simplemente nos observabas mientras nos perdíamos?"),
    ornitheaDialogue(
      "Narrador",
      "La desconocida se encogió ligeramente de hombros."
    ),
    ornitheaDialogue("?????", "Supongo."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue(
      "Narrador",
      "Luego inclinó ligeramente la cabeza observándolos."
    ),
    ornitheaDialogue("?????", "¿Qué hacéis aquí?"),
    ornitheaDialogue("Narrador", "Rocky soltó una pequeña risa cansada."),
    ornitheaDialogue("Rocky", "Excelente pregunta."),
    ornitheaDialogue("Narrador", "Reina dio un paso adelante."),
    ornitheaDialogue("Reina", "Estamos buscando a alguien. Una chica llamada Haze."),
    ornitheaDialogue("Narrador", "La chica parpadeó una vez."),
    ornitheaDialogue("?????", "¿Por qué?"),
    ornitheaDialogue("Minutu", "Porque nos dijeron que sabe de pájaros."),
    ornitheaDialogue("Narrador", "La chica asintió lentamente."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue("Narrador", "Reina continuó."),
    ornitheaDialogue("Reina", "Estamos buscando un cuervo negro iridiscente."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "La expresión distraída de la chica cambió apenas un instante. Muy poco. Pero cambió."
    ),
    ornitheaDialogue(
      "Narrador",
      "Entonces bajó tranquilamente del árbol. No saltó. No hizo nada espectacular."
    ),
    ornitheaDialogue(
      "Narrador",
      "Simplemente… en un momento estaba arriba. Un segundo más tarde, había niebla, y al siguiente apareció abajo."
    ),
    characterStep("haze", { animation: "enter" }),
    ornitheaDialogue("Narrador", "Blue frunció el ceño inmediatamente."),
    ornitheaDialogue("Blue", "¿Cómo has…?"),
    ornitheaDialogue("?????", "Ah."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("?????", "Haberlo dicho antes."),
    ornitheaDialogue("Narrador", "Se señaló a sí misma."),
    ornitheaDialogue("Haze", "Yo soy Haze."),
    ornitheaDialogue("Narrador", "Mako abrió muchísimo los ojos."),
    ornitheaDialogue("Mako", "¡La Pajaritos!"),
    ornitheaDialogue("Narrador", "Haze la observó unos segundos."),
    ornitheaDialogue("Haze", "Eso ha sonado a burla."),
    ornitheaDialogue("Mako", "Era con cariño."),
    ornitheaDialogue("Narrador", "Haze pareció aceptarlo inmediatamente."),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue("Rocky", "Entonces… ¿conoces al cuervo?"),
    ornitheaDialogue("Narrador", "Haze miró hacia la niebla."),
    ornitheaDialogue("Narrador", "Durante unos segundos no respondió."),
    ornitheaDialogue(
      "Haze",
      "Mi madre me contaba una historia cuando era pequeña."
    ),
    ornitheaDialogue("Narrador", "El viento movió lentamente las ramas."),
    ornitheaDialogue(
      "Haze",
      "Decía que existe un cuervo negro que aparece cuando alguien está completamente perdido."
    ),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue(
      "Haze",
      "Y que si lo sigues… siempre acabas encontrando el camino correcto."
    ),
    ornitheaDialogue("Narrador", "Blue ajustó ligeramente sus gafas."),
    ornitheaDialogue("Blue", "¿Un cuento infantil?"),
    ornitheaDialogue("Haze", "Sí."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Pero creo que era real."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Haze volvió a mirar la niebla."),
    ornitheaDialogue("Haze", "Lo vi una vez. Hace muchos años."),
    ornitheaDialogue(
      "Narrador",
      "Su voz seguía siendo tranquila. Pero por primera vez… parecía realmente presente."
    ),
    ornitheaDialogue("Haze", "Fue el día que murió mi madre."),
    ornitheaDialogue("Narrador", "El grupo quedó en silencio."),
    ornitheaDialogue("Narrador", "Incluso Mako dejó de moverse."),
    ornitheaDialogue(
      "Haze",
      "El cuervo me llevó hasta un lugar extraño en el centro de Ornithea."
    ),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Y después desapareció."),
    ornitheaDialogue("Narrador", "Reina intercambió una mirada con Rocky."),
    ornitheaDialogue("Reina", "¿Sabes cómo volver allí?"),
    ornitheaDialogue(
      "Narrador",
      "Haze se quedó completamente quieta unos segundos. Pensando. Muchísimo. Tanto que Minutu empezó a preocuparse."
    ),
    ornitheaDialogue("Minutu", "¿Se ha quedado dormida con los ojos abiertos?"),
    ornitheaDialogue("Haze", "Puede."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "No me acuerdo del todo."),
    ornitheaDialogue("Narrador", "Minutu cerró lentamente los ojos."),
    ornitheaDialogue("Minutu", "Perfecto."),
    ornitheaDialogue(
      "Narrador",
      "Pero entonces Haze sonrió apenas. Muy ligeramente."
    ),
    ornitheaDialogue("Haze", "Aunque tranquilos."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Encontraré el camino."),
    ornitheaDialogue("Reina", "¿Cómo?"),
    ornitheaDialogue(
      "Narrador",
      "Haze miró hacia algún punto invisible dentro de la niebla."
    ),
    ornitheaDialogue("Narrador", "Crunch."),
    ornitheaDialogue("Haze", "No lo sé."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "De alguna manera siempre lo encuentro."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Mako sonrió emocionadísima."),
    ornitheaDialogue("Mako", "¡SÍ! ¡Es oficialmente una de nosotros!"),
    ornitheaDialogue("Minutu", "NO PODEMOS DECIDIR ESO TAN RÁPIDO."),
    ornitheaDialogue(
      "Narrador",
      "Rocky empezó a reírse. Reina suspiró resignada."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y aun con todas las dudas del mundo… decidieron seguir a Haze bosque adentro."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze caminaba delante del grupo con las manos detrás de la espalda como si estuviera paseando sin rumbo en lugar de guiarlos a través de una isla imposible."
    ),
    ornitheaDialogue(
      "Narrador",
      "La niebla cubría todo. A veces podían ver puentes suspendidos. Otras veces… absolutamente nada."
    ),
    ornitheaDialogue(
      "Narrador",
      "Los silbidos atravesaban constantemente el bosque."
    ),
    ornitheaDialogue("Narrador", "Fiu."),
    ornitheaDialogue("Narrador", "Fiuuuuu."),
    ornitheaDialogue("Narrador", "Fiu fiu."),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu fiu."),
    ornitheaDialogue(
      "Narrador",
      "Y poco a poco… empezaban a entender que Ornithea hablaba. O al menos intentaba hacerlo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue tomaba notas mentales constantemente."
    ),
    ornitheaDialogue("Narrador", "Minutu intentaba memorizar patrones."),
    ornitheaDialogue("Narrador", "Mako simplemente iba saludando pájaros."),
    ornitheaDialogue(
      "Narrador",
      "Reina iba observándolo todo, extremadamente pendiente de ver al cuervo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y Rocky estaba disfrutando muchísimo de la aventura."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze caminaba tranquilamente sobre una raíz gigantesca suspendida sobre el vacío."
    ),
    ornitheaDialogue("Haze", "Creo que era por aquí."),
    ornitheaDialogue("Minutu", "“Creo” no transmite seguridad."),
    ornitheaDialogue("Haze", "Nunca la transmite. Por eso funciona tan bien."),
    ornitheaDialogue(
      "Narrador",
      "Mako caminaba pegada a Blue mientras intentaba imitar silbidos de pájaros."
    ),
    ornitheaDialogue("Blue", "Eso no suena ni remotamente parecido."),
    ornitheaDialogue("Mako", "Estoy conectando con Ornithea emocionalmente."),
    ornitheaDialogue("Minutu", "Ornithea va a pedir una orden de alejamiento."),
    ornitheaDialogue("Narrador", "Entonces el sendero se dividió en tres."),
    ornitheaDialogue(
      "Narrador",
      "Uno descendía hacia una zona llena de piedras, como monolitos."
    ),
    ornitheaDialogue(
      "Narrador",
      "Otro cruzaba un puente colgante cubierto de niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y el tercero subía hacia unas pequeñas islas suspendidas entre corrientes de aire."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon:"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Dos silbidos cortos."),
    ornitheaDialogue(
      "Narrador",
      "Todos se quedaron quietos. Provenía de las islas suspendidas."
    ),
    ornitheaDialogue("Narrador", "Inmediatamente después…"),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu fiu."),
    ornitheaDialogue(
      "Narrador",
      "Un silbido largo y dos cortos. Y provenía del sendero de los monolitos."
    ),
    ornitheaDialogue(
      "Narrador",
      "Encima de los monolitos varias gaviotas observaban inmóviles."
    ),
    ornitheaDialogue("Reina", "¿Están poniendo mala cara o soy yo?."),
    ornitheaDialogue("Minutu", "Por mucho que quiera negarlo, lo parece."),
    ornitheaDialogue(
      "Narrador",
      "Sobre el puente colgante… descansaba un enorme albatros plateado. Tranquilo. Quieto. Observándolos casi con dignidad."
    ),
    ornitheaDialogue("Narrador", "Haze sonrió ligeramente."),
    ornitheaDialogue("Haze", "Si un albatros plateado gira… tú giras."),
    ornitheaDialogue("Rocky", "No entiendo qué significa eso."),
    ornitheaDialogue("Haze", "Yo tampoco del todo."),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Ir hacia los monolitos.",
          nextScene: "ornithea_monolitos"
        },
        {
          text: "Cruzar el puente.",
          nextScene: "ornithea_puente_albatros"
        },
        {
          text: "Subir hacia las islas suspendidas.",
          nextScene: "ornithea_islas_suspendidas"
        }
      ]
    }
  ],

  ornithea_sendero_elevado: [
    {
      type: "background",
      image: "Fondo_rio.jpeg"
    },
    ornitheaDialogue("Narrador", "Finalmente decidieron rodear el río."),
    ornitheaDialogue(
      "Narrador",
      "El camino empezó a estrecharse. Luego descendió. Luego volvió a subir."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y veinte minutos después… volvieron a encontrarse en un río."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Mako miró lentamente alrededor."),
    ornitheaDialogue("Mako", "…Ah."),
    ornitheaDialogue("Narrador", "Minutu cerró los ojos."),
    ornitheaDialogue("Minutu", "Estamos atrapados en un bosque donde nada es lo que parece."),
    ornitheaDialogue(
      "Narrador",
      "Volvían a ver las piedras para cruzar el agua, la pasarela de madera, y el sendero elevado que rodeaba el río."
    ),
    ornitheaDialogue("Narrador", "Blue observó nerviosa la niebla."),
    ornitheaDialogue("Blue", "Esto no tiene sentido físico."),
    ornitheaDialogue("Mako", "La isla claramente no ha recibido esa información."),
    {
      type: "choice",
      text: "¿Por dónde vais?",
      options: [
        {
          text: "SENDERO ELEVADO",
          nextScene: "ornithea_sendero_elevado"
        },
        {
          text: "PUENTE DE MADERA",
          nextScene: "ornithea_puente_madera"
        },
        {
          text: "PIEDRAS DEL RÍO",
          nextScene: "ornithea_piedras_rio"
        }
      ]
    }
  ],

  ornithea_puente_madera: [
    {
      type: "background",
      image: "Fondo_rio.jpeg"
    },
    ornitheaDialogue("Narrador", "Decidieron cruzar por la pasarela de madera."),
    ornitheaDialogue(
      "Narrador",
      "La estructura colgaba sobre el río sostenida por cuerdas antiguas cubiertas de humedad y musgo. La niebla ocultaba parcialmente el otro extremo."
    ),
    ornitheaDialogue("Narrador", "CRRRRK…"),
    ornitheaDialogue(
      "Narrador",
      "La madera crujió apenas puso Rocky el primer pie."
    ),
    ornitheaDialogue("Narrador", "Minutu se quedó completamente quieto."),
    ornitheaDialogue("Minutu", "Eso no ha sonado bien."),
    ornitheaDialogue("Narrador", "Mako ya estaba cruzando igualmente."),
    ornitheaDialogue("Mako", "¡Si se rompe, saltamos!"),
    ornitheaDialogue(
      "Narrador",
      "Blue observaba las cuerdas con creciente preocupación."
    ),
    ornitheaDialogue("Blue", "No creo que esa sea una estrategia válida."),
    ornitheaDialogue(
      "Narrador",
      "El puente empezó a balancearse lentamente sobre el agua."
    ),
    ornitheaDialogue(
      "Narrador",
      "Debajo… el río no parecía normal. La corriente era demasiado oscura."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y la niebla que flotaba sobre ella ocultaba completamente la profundidad."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon otro sonido."),
    ornitheaDialogue("Narrador", "CRAAAAK."),
    ornitheaDialogue(
      "Narrador",
      "Una de las cuerdas laterales se tensó violentamente."
    ),
    ornitheaDialogue("Reina", "¡Rápido!"),
    ornitheaDialogue("Narrador", "El grupo aceleró el paso. Mala idea."),
    ornitheaDialogue(
      "Narrador",
      "Las tablas empezaron a partirse una tras otra bajo sus pies."
    ),
    ornitheaDialogue("Narrador", "CRACK."),
    ornitheaDialogue("Narrador", "CRACK."),
    ornitheaDialogue("Narrador", "CRRRRK."),
    ornitheaDialogue("Narrador", "Mako soltó una carcajada nerviosa."),
    ornitheaDialogue("Mako", "¡Vale! ¡Ahora sí tiene un rollo de peligro total!"),
    ornitheaDialogue("Narrador", "Y entonces… la cuerda principal se rompió."),
    ornitheaDialogue("Narrador", "BOOOOM."),
    {
      type: "effect",
      name: "shake"
    },
    ornitheaDialogue(
      "Narrador",
      "La pasarela entera se inclinó de golpe hacia un lado. Todos resbalaron."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue estuvo a punto de caer al vacío antes de que Reina la agarrara del brazo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Rocky consiguió sujetarse a una cuerda colgante."
    ),
    ornitheaDialogue(
      "Narrador",
      "Minutu gritó algo completamente ininteligible por primera vez desde que lo conocían."
    ),
    ornitheaDialogue("Narrador", "Y la pasarela… desapareció."),
    ornitheaDialogue(
      "Narrador",
      "La estructura se desplomó lentamente dentro de la niebla y fue tragada por la corriente oscura del río hasta desaparecer completamente."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "El grupo quedó colgando precariamente sobre las rocas cercanas y las raíces del borde."
    ),
    ornitheaDialogue(
      "Mako",
      "Vale. Creo que este camino no es el bueno."
    ),
    ornitheaDialogue(
      "Narrador",
      "Minutu respiraba como un hombre al borde de una crisis nerviosa."
    ),
    ornitheaDialogue("Minutu", "El bosque está intentando asesinarnos."),
    ornitheaDialogue("Narrador", "Reina respiró hondo."),
    ornitheaDialogue("Reina", "Volvamos a la orilla poco a poco."),
    {
      type: "choice",
      text: "¿Por dónde vais?",
      options: [
        {
          text: "SENDERO ELEVADO",
          nextScene: "ornithea_sendero_elevado"
        },
        {
          text: "PUENTE DE MADERA",
          nextScene: "ornithea_puente_madera"
        },
        {
          text: "PIEDRAS DEL RÍO",
          nextScene: "ornithea_piedras_rio"
        }
      ]
    }
  ],

  ornithea_monolitos: [],

  ornithea_puente_albatros: [],

  ornithea_islas_suspendidas: [],

  ornithea_camino_raices: [
    {
      type: "background",
      image: "Puente_colgante.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Siguieron el camino de raíces cubiertas de musgo. La gaviota permaneció observándolos desde la rama mientras se internaban entre los árboles."
    ),
    ornitheaDialogue(
      "Narrador",
      "El sendero descendía lentamente entre raíces gigantescas y rocas húmedas. La niebla allí era aún más espesa. Apenas podían verse entre ellos."
    ),
    ornitheaDialogue("Narrador", "Fiuuuuu… Fiu."),
    ornitheaDialogue("Narrador", "Un silbido largo. Uno corto."),
    ornitheaDialogue("Narrador", "Mako caminaba delante apartando ramas."),
    ornitheaDialogue("Mako", "Vale, este sitio ya no tiene un rollo guay."),
    ornitheaDialogue("Narrador", "Blue observó alrededor inquieta."),
    ornitheaDialogue("Blue", "No me gusta este silencio."),
    ornitheaDialogue(
      "Narrador",
      "Y cuanto más avanzaban… más extraño se volvía el bosque. Los árboles parecían repetirse. Las raíces formaban círculos. Y las piedras estaban cubiertas de marcas de garras y plumas negras."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon agua."),
    ornitheaDialogue("Rocky", "¿Un río?"),
    ornitheaDialogue(
      "Narrador",
      "El grupo aceleró el paso esperando encontrar una salida del bosque. Pero cuando atravesaron la niebla… se detuvieron."
    ),
    ornitheaDialogue(
      "Narrador",
      "Porque delante de ellos… estaba el mismo cruce. El puente colgante. La gaviota. Las raíces cubiertas de musgo."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Reina parpadeó lentamente."),
    ornitheaDialogue("Mako", "…Vale. Esto es raro."),
    ornitheaDialogue("Narrador", "Minutu cerró los ojos."),
    ornitheaDialogue("Minutu", "Perfecto. El bosque nos acaba de escupir de vuelta."),
    {
      type: "choice",
      text: "¿Por dónde vais?",
      options: [
        {
          text: "CAMINO DE RAÍCES",
          nextScene: "ornithea_camino_raices"
        },
        {
          text: "PUENTE COLGANTE",
          nextScene: "ornithea_puente_colgante"
        }
      ]
    }
  ]
});
