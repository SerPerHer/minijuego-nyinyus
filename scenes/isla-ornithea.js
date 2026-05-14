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
    {
      type: "background",
      image: "Fondo_islas.jpeg"
    },
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

  ornithea_monolitos: [
    {
      type: "background",
      image: "Fondo_islas.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El sendero descendía entre monolitos cubiertos de moho y hongos. La niebla allí era muchísimo más densa. Las gaviotas seguían observándolos. Demasiado."
    ),
    ornitheaDialogue("Narrador", "Entonces una de ellas gritó. Y el suelo cedió."),
    ornitheaDialogue(
      "Narrador",
      "Rocky consiguió agarrar a Blue justo antes de que ambos desaparecieran por una plataforma rota oculta bajo el musgo. Abajo solo había vacío y corrientes de aire."
    ),
    ornitheaDialogue("Minutu", "¡PELIGRO! ¡QUÉ SORPRESA!"),
    ornitheaDialogue(
      "Narrador",
      "Las gaviotas empezaron a sobrevolarlos riéndose con sonidos horribles."
    ),
    ornitheaDialogue("Narrador", "Haze observó el agujero tranquilamente."),
    ornitheaDialogue("Haze", "Sí. Las de ojos saltones no traen nada bueno."),
    ornitheaDialogue("Rocky", "Volvamos."),
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

  ornithea_puente_albatros: [
    {
      type: "background",
      image: "Fondo_islas.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El puente colgante se balanceaba lentamente entre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "El albatros caminó delante de ellos unos metros. Luego levantó vuelo lentamente. Y delante de ellos… El lugar era precioso. Flores. Campanas de viento. Pequeños estanques flotantes. Y absolutamente ningún camino."
    ),
    ornitheaDialogue("Blue", "…Creo que estamos dando vueltas."),
    ornitheaDialogue("Mako", "Pero son vueltas MUY bonitas."),
    ornitheaDialogue("Minutu", "Eso no ayuda."),
    ornitheaDialogue("Narrador", "Entonces escucharon:"),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu."),
    ornitheaDialogue("Narrador", "Un silbido largo y uno corto."),
    ornitheaDialogue("Narrador", "Haze observó el paisaje unos segundos."),
    ornitheaDialogue("Haze", "Ah. Puede que este no sea el camino."),
    ornitheaDialogue("Minutu", "“Puede.” Fantástico… De regreso al inicio…"),
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

  ornithea_islas_suspendidas: [
    {
      type: "background",
      image: "Fondo_islas.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Subieron hacia las pequeñas islas suspendidas. No veían prácticamente nada, pero de golpe el viento cambió."
    ),
    ornitheaDialogue(
      "Narrador",
      "La niebla se abrió apenas unos segundos dejando ver algo a lo lejos. Miles de aves cruzando el cielo. De todos los colores imaginables y de todos los tamaños. Durante solo un instante fue como volar con ellos por el cielo."
    ),
    ornitheaDialogue("Narrador", "Luego volvió a cerrarse."),
    ornitheaDialogue("Reina", "¿Habéis visto eso?"),
    ornitheaDialogue("Blue", "Sí…"),
    ornitheaDialogue("Narrador", "Haze parecía completamente tranquila."),
    ornitheaDialogue("Haze", "Vamos bien."),
    ornitheaDialogue(
      "Narrador",
      "Cuanto más subían… más extraño se volvía… Las raíces crecían flotando parcialmente en el aire. Las pequeñas islas suspendidas cambiaban lentamente de posición empujadas por corrientes invisibles. Y decenas de aves cruzaban constantemente entre la niebla como sombras vivas."
    ),
    ornitheaDialogue("Narrador", "Mako miraba hacia abajo fascinada."),
    ornitheaDialogue(
      "Mako",
      "Vale. Si me caigo desde aquí probablemente me convierto en leyenda."
    ),
    ornitheaDialogue("Minutu", "O en una plasta contra el suelo."),
    ornitheaDialogue(
      "Narrador",
      "Haze caminaba delante completamente tranquila sobre una pasarela inclinada que se balanceaba peligrosamente."
    ),
    ornitheaDialogue("Narrador", "Blue observó las corrientes de aire."),
    ornitheaDialogue("Blue", "No entiendo cómo se sostienen estas islas."),
    ornitheaDialogue("Reina", "No creo que nadie lo entienda."),
    ornitheaDialogue("Narrador", "Rocky empezó a reírse."),
    ornitheaDialogue(
      "Narrador",
      "Siguieron avanzando entre plataformas y puentes estrechos hasta que el camino terminó abruptamente en una enorme isla suspendida cubierta de roca húmeda y vegetación."
    ),
    {
      type: "background",
      image: "Fondo_géiseres.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "A la izquierda, una enorme liana descendía hacia la niebla profunda, perdiéndose completamente de vista. Varias raíces colgaban alrededor como si formaran una especie de descenso natural."
    ),
    ornitheaDialogue(
      "Narrador",
      "A la derecha, unas gigantescas placas de piedra flotaban sobre un abismo mientras potentes géiseres de aire salían disparados desde abajo a intervalos irregulares."
    ),
    ornitheaDialogue("Narrador", "BOOOOOSH."),
    ornitheaDialogue(
      "Narrador",
      "Las ráfagas levantaban hojas, niebla y plumas constantemente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Encima de las placas descansaba un pequeño albatros plateado completamente tranquilo pese al viento."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon:"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Dos silbidos cortos."),
    ornitheaDialogue("Narrador", "Poco después:"),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu."),
    ornitheaDialogue(
      "Narrador",
      "Un silbido largo y uno corto. El sonido parecía venir desde la zona de la liana."
    ),
    ornitheaDialogue(
      "Narrador",
      "Mako se acercó peligrosamente al borde observando los géiseres de aire."
    ),
    ornitheaDialogue("Mako", "Esto parece peligrosísimo."),
    ornitheaDialogue("Narrador", "Rocky sonrió."),
    ornitheaDialogue("Rocky", "Sí."),
    ornitheaDialogue(
      "Narrador",
      "Blue observó cómo las placas se movían ligeramente con las corrientes."
    ),
    ornitheaDialogue("Blue", "No creo que estén estables."),
    ornitheaDialogue("Minutu", "Esto mejora por momentos..."),
    ornitheaDialogue(
      "Narrador",
      "Haze observó ambos caminos en silencio mientras el viento movía lentamente su pelo."
    ),
    ornitheaDialogue(
      "Haze",
      "Creo que una vez soñé con este sitio. O quizá me caí aquí de pequeña. No estoy segura."
    ),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Descender por la liana.",
          nextScene: "ornithea_descenso_liana"
        },
        {
          text: "Cruzar los géiseres saltando entre las placas de piedra.",
          nextScene: "ornithea_geiseres"
        }
      ]
    }
  ],

  ornithea_descenso_liana: [
    {
      type: "background",
      image: "Fondo_géiseres.jpeg"
    },
    ornitheaDialogue("Narrador", "El grupo decidió descender por la liana."),
    ornitheaDialogue(
      "Narrador",
      "La enorme y gruesa raíz vegetal crujía suavemente mientras bajaban envueltos completamente por la niebla. Cuanto más descendían… menos podían ver. El bosque desapareció arriba. Las islas suspendidas también."
    ),
    ornitheaDialogue(
      "Narrador",
      "Ahora solo había humedad, raíces, roca mojada, y oscuridad."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue bajaba agarrándose con muchísima tensión."
    ),
    ornitheaDialogue("Blue", "No me gusta no ver el fondo."),
    ornitheaDialogue("Narrador", "Mako descendía bastante más rápido."),
    ornitheaDialogue("Mako", "¡Eso es lo divertido!"),
    ornitheaDialogue("Minutu", "Voy a desarrollar siete fobias nuevas en esta isla."),
    ornitheaDialogue("Narrador", "La liana seguía descendiendo. Y descendiendo. Demasiado."),
    ornitheaDialogue("Narrador", "Rocky levantó ligeramente la mirada."),
    ornitheaDialogue("Rocky", "¿No llevamos muchísimo rato bajando?"),
    ornitheaDialogue("Narrador", "Entonces escucharon algo."),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu."),
    ornitheaDialogue("Narrador", "Un silbido largo y uno corto."),
    ornitheaDialogue("Narrador", "Muy cerca."),
    ornitheaDialogue("Narrador", "Y justo después…"),
    ornitheaDialogue("Narrador", "CRAAAAK."),
    ornitheaDialogue("Narrador", "La liana entera se tensó violentamente."),
    ornitheaDialogue("Blue", "…¿Eso ha sido la liana rompiéndose?"),
    ornitheaDialogue("Narrador", "Mako levantó lentamente la cabeza."),
    ornitheaDialogue("Mako", "Sip."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Y entonces la raíz empezó a deslizarse."),
    ornitheaDialogue("Narrador", "Todo ocurrió rapidísimo."),
    ornitheaDialogue(
      "Narrador",
      "La enorme liana se soltó parcialmente de las rocas y comenzó a balancearse violentamente sobre el vacío."
    ),
    ornitheaDialogue("Rocky", "¡AGARRAOS!"),
    ornitheaDialogue(
      "Narrador",
      "El grupo quedó colgando mientras la niebla giraba a su alrededor y las corrientes de aire empujaban la liana de un lado a otro."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue estaba abrazada a la raíz con los ojos completamente abiertos."
    ),
    ornitheaDialogue("Blue", "NO QUIERO MORIR EN UNA ENSALADA VERTICAL."),
    ornitheaDialogue("Narrador", "Mako se reía como una psicópata."),
    ornitheaDialogue("Minutu", "¡¿POR QUÉ TE DIVIERTE ESTO?!"),
    ornitheaDialogue("Mako", "¡PORQUE ES EMOCIONAAANTE!"),
    ornitheaDialogue(
      "Narrador",
      "La liana terminó golpeando violentamente una pared rocosa."
    ),
    ornitheaDialogue("Narrador", "BOOOOM."),
    ornitheaDialogue(
      "Narrador",
      "Todos consiguieron saltar hacia una pequeña plataforma natural cubierta de raíces justo antes de que la liana desapareciera completamente dentro de la niebla."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Todos respiraban agitadamente."),
    ornitheaDialogue("Narrador", "Blue todavía abrazada al suelo."),
    ornitheaDialogue(
      "Narrador",
      "Minutu se levantó lentamente limpiándose la ropa."
    ),
    ornitheaDialogue(
      "Minutu",
      "La isla acaba de rechazar activamente nuestra existencia."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze observó tranquilamente el vacío por donde había desaparecido la liana."
    ),
    ornitheaDialogue("Haze", "Hmm."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Sí. Creo que no era por ahí."),
    ornitheaDialogue("Rocky", "¿Y ahora cómo volvemos?"),
    ornitheaDialogue("Reina", "Mirad. Creo que por ahí podemos volver."),
    ornitheaDialogue(
      "Narrador",
      "Todos se giraron y vieron unas raíces puestas a un lado de la isla flotante de la que acababan de bajar. Sin muchas más opciones, volvieron a subir."
    ),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Descender por la liana.",
          nextScene: "ornithea_descenso_liana"
        },
        {
          text: "Cruzar los géiseres saltando entre las placas de piedra.",
          nextScene: "ornithea_geiseres"
        }
      ]
    }
  ],

  ornithea_geiseres: [
    {
      type: "background",
      image: "Fondo_géiseres.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El grupo decidió cruzar por las placas de piedra."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las enormes losas flotaban suspendidas sobre el vacío entre violentos géiseres de aire que surgían desde las profundidades de Ornithea."
    ),
    ornitheaDialogue("Narrador", "BOOOOOSH."),
    ornitheaDialogue(
      "Narrador",
      "Una ráfaga atravesó el abismo, alborotando sus cabellos."
    ),
    ornitheaDialogue("Narrador", "Blue miró inmediatamente hacia abajo."),
    ornitheaDialogue("Blue", "No veo el fondo."),
    ornitheaDialogue("Minutu", "Eso es porque probablemente no existe."),
    ornitheaDialogue("Narrador", "Mako ya había saltado a la primera placa."),
    ornitheaDialogue("Mako", "¡¡¡ESTO ES INCREÍBLE!!!"),
    ornitheaDialogue("Narrador", "La piedra se movió ligeramente bajo su peso."),
    ornitheaDialogue(
      "Narrador",
      "Rocky fue detrás riéndose mientras el viento les golpeaba constantemente desde abajo. Las corrientes eran absurdamente fuertes. A veces parecían empujarlos. Otras… casi lanzarlos por los aires."
    ),
    ornitheaDialogue(
      "Narrador",
      "El pequeño albatros plateado seguía avanzando tranquilamente de placa en placa como si aquello fuera el suelo más normal del mundo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze lo observaba mientras caminaba distraídamente por el borde de una losa."
    ),
    ornitheaDialogue("Haze", "Los albatros siempre saben dónde poner los pies."),
    ornitheaDialogue("Minutu", "Ojalá nosotros también."),
    ornitheaDialogue("Narrador", "BOOOOSH."),
    ornitheaDialogue("Narrador", "Otro géiser explotó debajo de ellos."),
    ornitheaDialogue("Narrador", "Blue perdió el equilibrio un instante."),
    ornitheaDialogue(
      "Narrador",
      "Reina consiguió agarrarla antes de que saliera despedida."
    ),
    ornitheaDialogue("Blue", "¡Gracias!"),
    ornitheaDialogue(
      "Narrador",
      "Reina tragó saliva, intentando no mirar hacia abajo."
    ),
    ornitheaDialogue("Reina", "No hay de qué."),
    ornitheaDialogue(
      "Narrador",
      "Mako extendió ambos brazos dejando que el viento la sostuviera unos segundos."
    ),
    ornitheaDialogue("Mako", "¡ESTOY VOLANDOOOO!"),
    ornitheaDialogue(
      "Narrador",
      "Minutu y Reina estaban un poco pálidos, observándola."
    ),
    ornitheaDialogue(
      "Narrador",
      "El grupo siguió avanzando entre saltos y corrientes imposibles mientras la niebla se movía alrededor como un océano suspendido."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y entonces… empezó a cambiar. El viento ya no sonaba agresivo. Los silbidos eran distintos ahora. Más suaves. Más armónicos."
    ),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Dos silbidos cortos."),
    ornitheaDialogue(
      "Narrador",
      "Las corrientes comenzaron a elevar pequeñas plumas blancas alrededor de las placas. Y poco a poco… la niebla empezó a abrirse. Primero apenas un poco. Luego más. Y finalmente pudieron verlo. Muy a lo lejos."
    ),
    {
      type: "background",
      image: "Fondo_arboles_gigantescos.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Árboles gigantescos elevándose por encima de la niebla. Cientos de aves cruzando el cielo. Y destellos de colores moviéndose entre las ramas."
    ),
    ornitheaDialogue("Narrador", "Rocky levantó lentamente la cabeza."),
    ornitheaDialogue("Rocky", "…Parece que estamos cerca."),
    ornitheaDialogue("Narrador", "Incluso Haze parecía más atenta ahora."),
    ornitheaDialogue("Haze", "Sí. Creo que sí."),
    ornitheaDialogue(
      "Narrador",
      "El grupo siguió avanzando mientras Ornithea cambiaba lentamente a su alrededor. Ya no parecía un bosque hostil. Ahora todo se sentía… antiguo. Silencioso. Casi sagrado."
    ),
    ornitheaDialogue(
      "Narrador",
      "La niebla seguía cubriéndolo todo, pero ya no era opresiva. Los rayos de luz atravesaban poco a poco las corrientes de aire iluminando pequeñas plumas suspendidas en el ambiente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y cada vez había más aves. Cientos. Volaban entre los árboles gigantescos. Descansaban sobre raíces suspendidas. Cruzaban las corrientes de aire como si el viento las llevara exactamente donde debían estar."
    ),
    ornitheaDialogue("Narrador", "Incluso los silbidos habían cambiado."),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "Suaves. Tranquilos."),
    ornitheaDialogue("Narrador", "Blue observaba el cielo completamente fascinada."),
    ornitheaDialogue("Blue", "Nunca había visto tantas especies juntas."),
    ornitheaDialogue(
      "Narrador",
      "Mako iba girando sobre sí misma intentando seguirlas todas."
    ),
    ornitheaDialogue("Mako", "¡MIRA ESA! ¡Y ESA! ¡Y ESA TAMBIÉN!"),
    ornitheaDialogue(
      "Minutu",
      "Voy a asumir que todas te parecen increíbles."
    ),
    ornitheaDialogue("Mako", "Correcto."),
    ornitheaDialogue(
      "Narrador",
      "Reina se reía, encantada mientras seguía con la mirada todas las aves que los sobrevolaban."
    ),
    ornitheaDialogue("Reina", "Podría quedarme aquí todo el día."),
    ornitheaDialogue(
      "Narrador",
      "Haze caminaba delante completamente distraída mirando las ramas más altas. Entonces se detuvo. El camino volvía a dividirse."
    ),
    {
      type: "background",
      image: "Fondo_arbol_hueco.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "A la izquierda, una enorme pasarela natural formada por raíces blancas cruzaba lentamente hacia una zona iluminada por pequeñas esporas brillantes suspendidas en el aire."
    ),
    ornitheaDialogue(
      "Narrador",
      "A la derecha, unas plataformas estrechas descendían entre acantilados cubiertos de niebla y corrientes de aire."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y en el centro… un árbol gigantesco completamente hueco por dentro. El interior descendía en espiral hacia oscuridad absoluta."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon:"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue(
      "Narrador",
      "Dos silbidos cortos. Provenía de la pasarela de raíces."
    ),
    ornitheaDialogue("Narrador", "Poco después:"),
    ornitheaDialogue("Narrador", "Fiuuuuu… fiu. Fiu."),
    ornitheaDialogue(
      "Narrador",
      "Un silbido largo y dos cortos. Este silbido parecía venir de las plataformas de la derecha."
    ),
    ornitheaDialogue(
      "Narrador",
      "Sobre las raíces blancas descansaban varios albatros plateados completamente tranquilos."
    ),
    ornitheaDialogue(
      "Narrador",
      "En las plataformas descendentes había varias gaviotas observándolos inmóviles desde las cuerdas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y alrededor del árbol hueco… no había pájaros. Ni uno. Silencio absoluto."
    ),
    ornitheaDialogue("Narrador", "Rocky levantó lentamente la vista."),
    ornitheaDialogue("Rocky", "Vale. Eso da bastante mal rollo."),
    ornitheaDialogue("Narrador", "Blue observó el árbol vacío."),
    ornitheaDialogue("Reina", "Es raro. No hay ni sonido."),
    ornitheaDialogue(
      "Narrador",
      "Mako se acercó ligeramente al borde del tronco hueco."
    ),
    ornitheaDialogue("Mako", "Vale."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Mako", "Hay cero posibilidades de que algo bueno viva ahí dentro."),
    ornitheaDialogue(
      "Minutu",
      "Por una vez estoy completamente de acuerdo contigo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze observó los tres caminos durante bastante rato. Más de lo normal incluso para ella. Luego levantó lentamente la mirada hacia las raíces blancas."
    ),
    ornitheaDialogue("Haze", "Creo… Creo que quizá es por aquí."),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Cruzar las raíces blancas.",
          nextScene: "ornithea_raices_blancas"
        },
        {
          text: "Descender por las plataformas.",
          nextScene: "ornithea_plataformas_descendentes"
        },
        {
          text: "Entrar en el árbol hueco.",
          nextScene: "ornithea_arbol_hueco"
        }
      ]
    }
  ],

  ornithea_raices_blancas: [
    {
      type: "background",
      image: "Fondo_arbol_hueco.jpeg"
    },
    ornitheaDialogue("Narrador", "El grupo decidió cruzar las raíces blancas."),
    ornitheaDialogue(
      "Narrador",
      "La enorme pasarela natural crujía suavemente bajo sus pies mientras avanzaban suspendidos entre la niebla y las corrientes de aire. Pero algo había cambiado."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las raíces eran anchas. Firmes. Casi suaves al tacto. Y las pequeñas esporas luminosas flotaban lentamente alrededor del grupo iluminando la niebla con tonos azulados y dorados."
    ),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue(
      "Narrador",
      "Los silbidos seguían resonando entre los árboles. Pero ahora sonaban cercanos. Armónicos. Como si el bosque estuviera respirando tranquilamente."
    ),
    ornitheaDialogue("Narrador", "Reina observaba todo completamente fascinada."),
    ornitheaDialogue("Reina", "Esto parece otro lugar distinto."),
    ornitheaDialogue("Narrador", "Minutu miró alrededor lentamente."),
    ornitheaDialogue("Minutu", "Sí… Demasiado distinto."),
    ornitheaDialogue(
      "Narrador",
      "Mako caminaba intentando atrapar las pequeñas luces flotantes."
    ),
    ornitheaDialogue("Mako", "¡SON COMO ESTRELLITAS!"),
    ornitheaDialogue(
      "Narrador",
      "Reina seguía observando las aves sobrevolando las raíces."
    ),
    ornitheaDialogue(
      "Narrador",
      "Cada vez había más. Pequeñas. Grandes. Coloridas. Extrañas. Y todas parecían dirigirse hacia el mismo sitio."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze caminaba delante completamente tranquila mientras el viento movía lentamente su pelo."
    ),
    ornitheaDialogue("Haze", "Sí."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Estamos llegando. Lo noto."),
    ornitheaDialogue(
      "Narrador",
      "Entonces la niebla empezó a abrirse. Muy lentamente. Primero apenas unos metros. Luego más. Y finalmente… desapareció."
    ),
    ornitheaDialogue("Narrador", "Todos se quedaron completamente inmóviles."),
    ornitheaDialogue(
      "Narrador",
      "Ante ellos se extendía un enorme santuario natural suspendido entre montañas ocultas por las nubes."
    ),
    {
      type: "background",
      image: "Fondo_santuario.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Árboles gigantescos crecían hacia el cielo atravesando corrientes de aire brillantes. Miles y miles de aves volaban completamente libres entre ramas inmensas, puentes naturales y pequeñas islas suspendidas cubiertas de flores."
    ),
    ornitheaDialogue(
      "Narrador",
      "El lugar entero era de una belleza sorprendente. Como algo sagrado. Antiguo. Vivo."
    ),
    ornitheaDialogue(
      "Narrador",
      "La luz atravesaba las corrientes de niebla creando destellos de colores por todas partes."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y en el centro del santuario… sobre una rama gigantesca que nacía directamente del árbol más grande de Ornithea… descansaba el cuervo negro iridiscente."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "Sus plumas absorbían la luz y al mismo tiempo la reflejaban en tonos azules, violetas y verdes. Y colgando de su cuello… una pequeña esfera brillante. La misma que había visto Reina al llegar a la isla."
    ),
    ornitheaDialogue("Narrador", "Reina dio un paso adelante lentamente."),
    ornitheaDialogue("Reina", "Es él…"),
    ornitheaDialogue(
      "Narrador",
      "El cuervo inclinó ligeramente la cabeza observándolos."
    ),
    ornitheaDialogue("Narrador", "Y entonces… abrió las alas."),
    ornitheaDialogue(
      "Narrador",
      "Todas las aves del santuario reaccionaron al mismo tiempo. Miles. El cielo entero empezó a llenarse de plumas y corrientes de aire mientras los cantos resonaban entre las montañas."
    ),
    ornitheaDialogue("Narrador", "Blue se quedó completamente sin palabras."),
    ornitheaDialogue(
      "Narrador",
      "Mako tenía los ojos abiertos como una niña viendo magia por primera vez."
    ),
    ornitheaDialogue(
      "Narrador",
      "Incluso Minutu había dejado de analizar cosas durante unos segundos."
    ),
    ornitheaDialogue(
      "Narrador",
      "Rocky y Reina estaban cogidos de la mano mientras miraban aquella maravilla con ojos brillantes."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y Haze… simplemente sonrió. Una sonrisa pequeña. Tranquila. Como alguien que acababa de volver a casa."
    ),
    {
      type: "background",
      image: "Fondo_santuario.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El santuario entero parecía contener la respiración."
    ),
    ornitheaDialogue(
      "Narrador",
      "Miles de aves observaban en silencio desde las ramas gigantescas mientras el cuervo negro iridiscente seguía posado sobre aquella enorme raíz suspendida."
    ),
    ornitheaDialogue(
      "Narrador",
      "Sus ojos eran extraños. Antiguos. Como si estuviera mirando mucho más allá de ellos. El viento movió lentamente las plumas negras de sus alas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y entonces habló. No movió el pico. La voz simplemente apareció alrededor del grupo."
    ),
    ornitheaDialogue(
      "Cuervo",
      "Cuando alguien está perdido… ¿qué es más importante? ¿El mapa… o el motivo por el que sigue caminando?"
    ),
    ornitheaDialogue("Narrador", "Silencio absoluto."),
    ornitheaDialogue("Narrador", "Reina parpadeó lentamente."),
    ornitheaDialogue("Mako", "Vale… El pájaro habla. Normal. Sí… Claaaro."),
    ornitheaDialogue(
      "Narrador",
      "Minutu observaba al cuervo completamente inmóvil."
    ),
    ornitheaDialogue("Minutu", "No estoy preparado intelectualmente para esto."),
    ornitheaDialogue("Narrador", "Rocky frunció ligeramente el ceño pensando."),
    ornitheaDialogue(
      "Narrador",
      "Blue bajó la mirada. Como si intentara encontrar una respuesta lógica."
    ),
    ornitheaDialogue(
      "Narrador",
      "Pero Haze… simplemente observaba al cuervo en silencio."
    ),
    ornitheaDialogue("Narrador", "Reina dio un paso adelante lentamente."),
    ornitheaDialogue("Reina", "El motivo."),
    ornitheaDialogue("Narrador", "El viento atravesó el santuario."),
    ornitheaDialogue(
      "Narrador",
      "Las aves levantaron el vuelo parcialmente entre las ramas."
    ),
    ornitheaDialogue("Narrador", "Reina mantuvo la mirada fija en el cuervo."),
    ornitheaDialogue(
      "Reina",
      "Porque puedes perder un mapa. Equivocarte. Dar vueltas. Pero si sabes por qué sigues caminando… acabarás encontrando el camino igualmente."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "Y entonces el cuervo inclinó lentamente la cabeza."
    ),
    ornitheaDialogue("Cuervo", "Correcto."),
    ornitheaDialogue(
      "Narrador",
      "Las corrientes de aire cambiaron inmediatamente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Miles de plumas comenzaron a elevarse alrededor del santuario como si Ornithea hubiera respondido a aquella frase. Y entonces el cuervo voló. Descendió lentamente entre corrientes de aire brillantes… hasta posarse sobre el brazo de Haze."
    ),
    ornitheaDialogue("Narrador", "Ella ni siquiera pareció sorprendida."),
    ornitheaDialogue("Haze", "Hola otra vez."),
    ornitheaDialogue(
      "Narrador",
      "El cuervo rozó ligeramente su hombro con la cabeza. Y por primera vez desde conocerla… Haze parecía completamente presente. Completamente conectada con algo. El pequeño collar brilló ligeramente bajo la luz."
    ),
    ornitheaDialogue(
      "Narrador",
      "Reina se acercó despacio. El cuervo no se movió. Con muchísimo cuidado… Reina deslizó la esfera fuera del cuello del ave."
    ),
    ornitheaDialogue(
      "Narrador",
      "La pequeña bola metálica descansó entre sus manos."
    ),
    ornitheaDialogue("Narrador", "Todos se acercaron inmediatamente."),
    ornitheaDialogue(
      "Narrador",
      "Y allí estaba. El símbolo. Exactamente igual que en las otras reliquias."
    ),
    ornitheaDialogue(
      "Narrador",
      "Reina giró lentamente la esfera. Y en la parte trasera… grabados casi invisibles entre pequeñas líneas iridiscentes… había números."
    ),
    ornitheaDialogue("Narrador", "Minutu abrió mucho los ojos."),
    ornitheaDialogue("Minutu", "Otro código."),
    ornitheaDialogue("Rocky", "Entonces ya tenemos cuatro."),
    ornitheaDialogue("Narrador", "Mako levantó ambos brazos emocionada."),
    ornitheaDialogue("Mako", "¡¡¡VAMOS GANANDO AL MISTERIO!!!"),
    ornitheaDialogue("Narrador", "Fiu. Fiu."),
    ornitheaDialogue("Narrador", "El cuervo emitió dos silbidos cortos. Y el cielo respondió."),
    {
      type: "background",
      image: "Fondo_aves.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Tres enormes aves descendieron desde las corrientes superiores atravesando la niebla. Gigantescas. Majestuosas. Con alas tan grandes que parecían cubrir el cielo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Se posaron lentamente frente al grupo levantando corrientes de aire y pequeñas plumas luminosas."
    ),
    ornitheaDialogue(
      "Cuervo",
      "Ellos os llevarán al puerto. Debéis continuar vuestro camino."
    ),
    ornitheaDialogue(
      "Narrador",
      "Haze bajó lentamente la mirada. Por primera vez desde conocerla… parecía triste."
    ),
    ornitheaDialogue("Haze", "Creo… Creo que quiero quedarme aquí."),
    ornitheaDialogue("Narrador", "El cuervo la observó en silencio unos segundos."),
    ornitheaDialogue("Cuervo", "No."),
    ornitheaDialogue("Narrador", "Haze levantó lentamente la cabeza."),
    ornitheaDialogue("Cuervo", "Este lugar fue tu refugio. No tu destino."),
    ornitheaDialogue(
      "Narrador",
      "El viento movió las ramas gigantescas del santuario."
    ),
    ornitheaDialogue("Cuervo", "Debes encontrar tu propio camino ahora."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "Haze observó las aves alrededor. El santuario. La niebla. El cielo. Y sonrió apenas un poco."
    ),
    ornitheaDialogue("Haze", "Hmm. Eso suena importante."),
    ornitheaDialogue(
      "Narrador",
      "Poco después… los seis atravesaban Ornithea montados sobre las enormes aves gigantes mientras la niebla se abría a su paso."
    ),
    ornitheaDialogue(
      "Narrador",
      "Mako iba abrazada al cuello de una de ellas gritando de emoción."
    ),
    ornitheaDialogue(
      "Narrador",
      "Blue intentaba no mirar hacia abajo, mientras Haze ausentemente acariciaba las plumas del ave en la que iban."
    ),
    ornitheaDialogue(
      "Narrador",
      "Minutu ya había aceptado que su vida había dejado de tener sentido hacía varias islas."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y Rocky y Reina observaban el paisaje sonriendo mientras las corrientes los llevaban de regreso al puerto."
    ),
    ornitheaDialogue(
      "Narrador",
      "Cuando finalmente llegaron al Nyinyus… el silencio apareció durante unos segundos. Haze observaba el barco. Luego el mar. Luego Ornithea cubierta otra vez por la niebla."
    ),
    ornitheaDialogue("Narrador", "Reina dio un paso adelante."),
    ornitheaDialogue("Reina", "Oye. ¿Quieres venir con nosotros?"),
    ornitheaDialogue("Narrador", "Haze parpadeó lentamente."),
    ornitheaDialogue(
      "Narrador",
      "Haze dudó. Miró otra vez hacia la isla. Como si una parte de ella quisiera quedarse. Y entonces… un pequeño destello iridiscente atravesó la niebla en el cielo. Muy arriba."
    ),
    ornitheaDialogue("Narrador", "Fiu. Fiu. Dos silbidos cortos."),
    ornitheaDialogue(
      "Narrador",
      "Haze levantó lentamente la mirada. Y sonrió. Una sonrisa tranquila. Pequeña. Segura."
    ),
    ornitheaDialogue("Haze", "Hmm. Sí. Creo que este es el camino correcto."),
    ornitheaDialogue(
      "Narrador",
      "Y así… la tripulación del Nyinyus volvió a zarpar."
    ),
    ornitheaDialogue("Narrador", "Rocky y Reina como capitanes."),
    ornitheaDialogue("Narrador", "Minutu como estratega."),
    ornitheaDialogue("Narrador", "Mako como vigía."),
    ornitheaDialogue("Narrador", "Blue como ingeniera."),
    ornitheaDialogue(
      "Narrador",
      "Y Haze Clouds… la exploradora que parecía perdida incluso cuando encontraba el camino antes que nadie."
    ),
    {
      type: "background",
      image: "Fondo_despedida_aves.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "Mientras el barco se alejaba… la niebla de Ornithea se abrió apenas unos segundos. Y todos jurarían haber visto una gigantesca bandada de aves de todos los colores sobrevolando la isla bajo la luz del amanecer."
    ),
    ornitheaDialogue(
      "Narrador",
      "Como si Ornithea… se estuviera despidiendo."
    ),
    {
      type: "background",
      image: "FONDO TRANSICIÓN_3.png"
    },
    ornitheaDialogue(
      "Narrador",
      "El Nyinyus navegó durante días bajo cielos tranquilos. Atrás quedaba Ornithea. La isla de la niebla. De los silbidos. Y de los caminos que solo podían encontrarse cuando dejabas de intentar controlarlo todo."
    ),
    ornitheaDialogue(
      "Narrador",
      "Mientras tanto, sobre la mesa principal del Nyinyus… los cuatro objetos descansaban juntos por primera vez. Cuatro símbolos. Cuatro series de números."
    ),
    ornitheaDialogue("Narrador", "Y una única pregunta."),
    ornitheaDialogue("Narrador", "¿Qué les depararía la quinta isla?")
  ],

  ornithea_plataformas_descendentes: [
    {
      type: "background",
      image: "Fondo_arbol_hueco.jpeg"
    },
    ornitheaDialogue(
      "Narrador",
      "El grupo decidió descender por las plataformas. Las gaviotas que había en las cuerdas echaron a volar cuando se acercaron."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las estructuras de madera estaban sujetas entre acantilados mediante cuerdas antiguas y raíces entrelazadas. Cuanto más bajaban… más espesa se volvía la niebla. Y también… más húmeda."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las aves desaparecieron poco a poco. Primero dejaron de escuchar cantos. Luego los silbidos. Y finalmente… incluso el viento."
    ),
    ornitheaDialogue(
      "Narrador",
      "Solo quedaba el sonido de las tablas crujiendo bajo sus pies."
    ),
    ornitheaDialogue("Narrador", "CRRK."),
    ornitheaDialogue("Narrador", "CRRK."),
    ornitheaDialogue("Narrador", "CRRK."),
    ornitheaDialogue("Narrador", "Blue observó alrededor inquieta."),
    ornitheaDialogue("Blue", "No me gusta que ya no haya pájaros."),
    ornitheaDialogue("Narrador", "Reina miró hacia arriba."),
    ornitheaDialogue("Reina", "Sí, es algo preocupante."),
    ornitheaDialogue(
      "Narrador",
      "Haze iba delante completamente distraída observando unas flores que crecían entre las rocas."
    ),
    ornitheaDialogue("Minutu", "¿Nos estamos alejando del santuario?"),
    ornitheaDialogue("Narrador", "Haze pensó unos segundos."),
    ornitheaDialogue("Haze", "Hmm."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Puede."),
    ornitheaDialogue("Narrador", "Minutu cerró lentamente los ojos."),
    ornitheaDialogue("Minutu", "Fantástico."),
    ornitheaDialogue(
      "Narrador",
      "El descenso continuó durante muchísimo rato. Demasiado."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las plataformas empezaron a inclinarse peligrosamente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las cuerdas estaban húmedas y cubiertas de musgo. Y la niebla era tan densa que apenas podían verse entre ellos."
    ),
    ornitheaDialogue("Narrador", "Entonces escucharon algo."),
    ornitheaDialogue("Narrador", "No un silbido. Respiración. Lenta. Profunda."),
    ornitheaDialogue("Narrador", "Blue se quedó inmóvil."),
    ornitheaDialogue("Blue", "…¿Habéis oído eso?"),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "CRRRRK."),
    ornitheaDialogue(
      "Narrador",
      "Algo enorme se movió bajo las plataformas. Las tablas temblaron violentamente."
    ),
    ornitheaDialogue("Rocky", "¡¿Qué demonios—?!"),
    ornitheaDialogue("Narrador", "BOOOOM."),
    ornitheaDialogue(
      "Narrador",
      "Una gigantesca corriente de aire explotó desde abajo atravesando la niebla. Y durante apenas un segundo… lo vieron. Algo gigantesco moviéndose entre las corrientes bajo los acantilados. Alas enormes. Demasiado. Plumas negras mezcladas con niebla. Y unos ojos brillando entre la oscuridad."
    ),
    ornitheaDialogue("Mako", "¡NOPE! ¡NOPE! ¡ESO ES UN NO GIGANTE!"),
    ornitheaDialogue(
      "Narrador",
      "Las plataformas empezaron a balancearse violentamente."
    ),
    ornitheaDialogue("Narrador", "CRAAAK."),
    ornitheaDialogue("Narrador", "Una de las cuerdas principales se rompió."),
    ornitheaDialogue(
      "Narrador",
      "Reina perdió el equilibrio y cayó de rodillas mientras toda la estructura se inclinaba peligrosamente hacia el vacío."
    ),
    ornitheaDialogue(
      "Narrador",
      "Rocky se agarró a una raíz como un hombre aceptando el final de su vida."
    ),
    ornitheaDialogue("Rocky", "La isla tiene depredadores."),
    ornitheaDialogue(
      "Narrador",
      "Y entonces la criatura volvió a moverse. Muchísimo más cerca."
    ),
    ornitheaDialogue(
      "Narrador",
      "Las corrientes empezaron a absorber la niebla alrededor revelando parcialmente un enorme pico lleno de marcas y cicatrices."
    ),
    ornitheaDialogue("Narrador", "Haze observó hacia abajo tranquilamente."),
    ornitheaDialogue("Haze", "Ah."),
    ornitheaDialogue("Narrador", "Pausa."),
    ornitheaDialogue("Haze", "Los Nidos Hundidos."),
    ornitheaDialogue("Rocky", "¡¡¿LOS QUÉ?!!"),
    ornitheaDialogue(
      "Haze",
      "Creo que aquí viven las cosas que se comen a los perdidos… pájaros… personas…"
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Minutu",
      "¡¡ESA INFORMACIÓN HUBIESE SIDO MUY IMPORTANTE HACE RATO!!"
    ),
    ornitheaDialogue("Narrador", "BOOOOOM."),
    ornitheaDialogue(
      "Narrador",
      "La criatura golpeó otra vez las corrientes bajo las plataformas haciendo que toda la estructura empezara a desprenderse."
    ),
    ornitheaDialogue("Rocky", "¡¡ARRIBA!! ¡¡CORRED!!"),
    ornitheaDialogue(
      "Narrador",
      "El grupo empezó a subir desesperadamente mientras las plataformas crujían detrás de ellos y la criatura ascendía parcialmente entre la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y cuando finalmente consiguieron regresar arriba… las plataformas inferiores desaparecieron completamente tragadas por la bruma."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue(
      "Narrador",
      "Ni un solo pájaro volaba cerca de aquella zona."
    ),
    ornitheaDialogue("Narrador", "Blue respiraba agitada."),
    ornitheaDialogue("Blue", "Definitivamente ese no era el camino."),
    ornitheaDialogue("Narrador", "Haze observó la niebla unos segundos."),
    ornitheaDialogue("Haze", "Parece que no."),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Cruzar las raíces blancas.",
          nextScene: "ornithea_raices_blancas"
        },
        {
          text: "Descender por las plataformas.",
          nextScene: "ornithea_plataformas_descendentes"
        },
        {
          text: "Entrar en el árbol hueco.",
          nextScene: "ornithea_arbol_hueco"
        }
      ]
    }
  ],

  ornithea_arbol_hueco: [
    {
      type: "background",
      image: "Fondo_arbol_hueco.jpeg"
    },
    ornitheaDialogue("Narrador", "El grupo decidió entrar en el árbol hueco."),
    ornitheaDialogue(
      "Narrador",
      "El interior descendía en espiral alrededor de un enorme vacío central oculto completamente por la oscuridad y la niebla."
    ),
    ornitheaDialogue(
      "Narrador",
      "Y cuanto más bajaban…  más extraño se volvía todo. Ya no había pájaros. Ni silbidos. Ni viento."
    ),
    ornitheaDialogue(
      "Narrador",
      "Solo el eco de sus propios pasos sobre la madera húmeda."
    ),
    ornitheaDialogue("Narrador", "CLONK."),
    ornitheaDialogue("Narrador", "CLONK."),
    ornitheaDialogue("Narrador", "CLONK."),
    ornitheaDialogue("Narrador", "Reina observó alrededor inquieta."),
    ornitheaDialogue("Reina", "No me gusta esto."),
    ornitheaDialogue("Narrador", "Mako susurraba ahora, incluso ella."),
    ornitheaDialogue("Mako", "Esto tiene una pinta de muerte con patatas que flipas."),
    ornitheaDialogue("Narrador", "Rocky pasó la mano por la pared interior del árbol."),
    ornitheaDialogue("Rocky", "Mirad esto."),
    ornitheaDialogue(
      "Narrador",
      "La madera estaba llena de marcas. Arañazos. Miles. Como si algo enorme hubiera estado trepando constantemente por el interior del tronco."
    ),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Blue levantó lentamente la cabeza hacia arriba."),
    ornitheaDialogue("Blue", "…¿Habéis escuchado eso?"),
    ornitheaDialogue("Narrador", "CRRRRRR…"),
    ornitheaDialogue("Narrador", "Algo se movió. Muy abajo. Algo grande."),
    ornitheaDialogue("Narrador", "El sonido fue húmedo. Lento. Pesado."),
    ornitheaDialogue(
      "Narrador",
      "Y entonces… dos enormes ojos se abrieron en la oscuridad. Muchísimo más abajo dentro del árbol."
    ),
    ornitheaDialogue("Narrador", "Blue dejó de respirar un instante."),
    ornitheaDialogue("Mako", "…Ah."),
    ornitheaDialogue("Narrador", "El árbol entero tembló."),
    ornitheaDialogue("Narrador", "BOOOOM."),
    ornitheaDialogue(
      "Narrador",
      "Algo gigantesco empezó a subir violentamente por el interior del tronco. No podían verlo bien. Solo sombras. Garras. Movimiento. Demasiado rápido."
    ),
    ornitheaDialogue("Rocky", "¡¡CORRED!!"),
    ornitheaDialogue(
      "Narrador",
      "El grupo empezó a subir la espiral mientras el árbol entero crujía detrás de ellos."
    ),
    ornitheaDialogue("Narrador", "CRAAAAAK."),
    ornitheaDialogue(
      "Narrador",
      "Una enorme garra atravesó la madera a pocos centímetros de Minutu."
    ),
    ornitheaDialogue("Minutu", "¡MIERDAMIERDAMIERDA!"),
    ornitheaDialogue(
      "Narrador",
      "Haze, sorprendentemente, parecía completamente tranquila mientras corría."
    ),
    ornitheaDialogue("Haze", "Oh. Ahora recuerdo por qué no volví a entrar aquí."),
    ornitheaDialogue("Minutu", "¡¡¿AHORA LO RECUERDAS?!!"),
    ornitheaDialogue("Narrador", "BOOOOOM."),
    ornitheaDialogue(
      "Narrador",
      "La criatura golpeó otra vez el interior del árbol haciendo caer trozos enormes de madera. Y entonces la vieron parcialmente."
    ),
    ornitheaDialogue(
      "Narrador",
      "Una especie de criatura cubierta de plumas negras húmedas y raíces mezcladas con carne. Ojos rojos. Y un pico gigantesco lleno de dientes irregulares, del que caía saliva."
    ),
    ornitheaDialogue("Blue", "¡¿QUÉ ES ESO?!"),
    ornitheaDialogue("Haze", "Creo que se come a las cosas que bajan demasiado."),
    ornitheaDialogue("Minutu", "¡EXCELENTE DATO PARA RECIBIR AHORA!"),
    ornitheaDialogue(
      "Narrador",
      "Finalmente el grupo consiguió salir del árbol justo antes de que una gigantesca mandíbula atravesara la entrada desde abajo."
    ),
    ornitheaDialogue("Narrador", "BOOOOM."),
    ornitheaDialogue("Narrador", "Todos cayeron al suelo jadeando."),
    ornitheaDialogue("Narrador", "El árbol volvió a quedarse completamente inmóvil."),
    ornitheaDialogue("Narrador", "Silencio."),
    ornitheaDialogue("Narrador", "Ni un solo pájaro se acercaba a él."),
    ornitheaDialogue("Narrador", "Mako respiraba tirada boca arriba."),
    ornitheaDialogue("Mako", "Vaaale… Eso no me ha gustado un pelo."),
    ornitheaDialogue(
      "Narrador",
      "Todos se giraron para mirarla. Sin saber si reír o llorar del susto."
    ),
    ornitheaDialogue("Minutu", "Vaya… Algo que le da miedo."),
    ornitheaDialogue("Narrador", "Mako se encogió de hombros."),
    ornitheaDialogue("Mako", "Me gusta tentar a la suerte, no morir."),
    ornitheaDialogue("Narrador", "Haze observó el árbol unos segundos."),
    ornitheaDialogue("Haze", "Ese definitivamente no era el camino."),
    ornitheaDialogue("Reina", "¿No me digas…?"),
    {
      type: "choice",
      text: "¿Qué hacéis?",
      options: [
        {
          text: "Cruzar las raíces blancas.",
          nextScene: "ornithea_raices_blancas"
        },
        {
          text: "Descender por las plataformas.",
          nextScene: "ornithea_plataformas_descendentes"
        },
        {
          text: "Entrar en el árbol hueco.",
          nextScene: "ornithea_arbol_hueco"
        }
      ]
    }
  ],

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
