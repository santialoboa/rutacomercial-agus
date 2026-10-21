import type { GameCard } from '../types/game';

export const GOLD_ROAD_CARDS: GameCard[] = [
  {
    id: 'gold-road-1',
    number: 1,
    storyId: 'gold-road',
    title: 'El Señor del Oro y la Balanza de Koumbi Saleh',
    theme: 'El monopolio imperial del oro, el valor vital de la sal y la barrera del bosque',
    location: 'Koumbi Saleh — Capital del Imperio de Ghana (Wagadou)',
    illustrationType: 'ghana-gold',
    intro:
      'En la gran plaza amurallada de Koumbi Saleh, el sol abrasador del Sahel hace resplandecer los escudos dorados de la guardia imperial. El Kaya Maghan ("Señor del Oro") preside la corte sobre un estrado de ricos brocados; a sus pies, lebreles de caza lucen collares de oro macizo y los corceles reales llevan mantas tejidas con hilos dorados. Por ley sagrada, todas las pepitas de oro macizo (tibr) halladas en el reino deben entregarse al tesoro real para evitar que la abundancia de metal destruya su poder de compra; a los súbditos y comerciantes solo se les permite negociar con polvo de oro (mithqal). Hacia el sur, las cuencas de los ríos Falémé y Senegal ocultan los aluviones auríferos de Bambuk, pero los caballos de la caballería imperial no pueden cruzar hacia la espesura: la mortífera mosca tsetsé y la enfermedad del sueño (tripanosomiasis) matarían a las monturas en pocas semanas, forzando un comercio pacífico y silencioso con los mineros del bosque. Al mismo tiempo, caravanas recién llegadas del norte descargan su cargamento más codiciado: inmensas barras blancas de sal gema talladas en las minas del desierto, que los caravaneros intercambian gramo a gramo por polvo de oro puro.',
    prompt:
      'Su cofradía debe cerrar los tratos comerciales y preparar el avance de la caravana. ¿Qué decisión adopta el curso en la plaza de Koumbi Saleh?',
    teacherPrompt:
      '¿Por qué el rey de Ghana castigaba a quien guardara pepitas enteras y solo permitía comerciar con polvo de oro? ¿Por qué en este clima una barra de sal gema valía tanto o más que un saco de oro puro?',
    characterFlavor: {
      wangara:
        'Tus dedos calibran con destreza las pesas de latón de la balanza. Sabés que las pepitas reales garantizan la estabilidad del reino, pero que en el desierto nadie puede beber oro: sin sal, el cuerpo humano se apaga en dos jornadas.',
      merchant:
        'Calculás los márgenes: una losa de sal gema traída desde las entrañas del Sahara rinde su peso exacto en polvo de oro. Si las pepitas circularan sin control real, el oro se depreciaría de inmediato.',
      traveler:
        'Escuchás mezclas de soninké, bereber y árabe en las posadas. Al sur se extiende la selva infranqueable para los caballos; al norte, el océano de arena que exigirá toda nuestra pericia.',
      medic:
        'Examinás a los camelleros: sin reponer sal en sus comidas, los hombres colapsan por calambres y golpe de calor. Además, las noticias advierten que internar caballos en el bosque húmedo desatará la temible enfermedad del sueño.',
      scholar:
        'Te fascina la lucidez económica del Kaya Maghan: al retener las pepitas como reserva estatal y liberar solo el polvo medido, el gobernante evita la inflación y preserva el prestigio de su corona.'
    },
    characterChoices: {
      wangara: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Intercambiar barras de sal gema de roca y acumular polvo de oro puro (mithqal)',
          description:
            'Aprovechan su red comercial para adquirir grandes bloques de sal del Sahara y cambiarlos peso a peso por polvo de oro fino con los mineros del sur.',
          consequence:
            'Aseguran una reserva de oro purísimo de 24 quilates almacenada en cuernos de cuero sellados. Comprueban que en África Occidental la sal no es un simple condimento: es el conservante vital y la base de la supervivencia.',
          historicalInsight:
            'En el África medieval, la sal de roca del Sahara central se cambiaba a menudo a la par con el polvo de oro debido a su escasez absoluta en el Sahel y su valor biológico imprescindible.',
          chronicleText:
            'Cambiamos losas de sal de roca por polvo de oro puro (mithqal), comprendiendo que en el Sahel la sal es tan preciosa como el metal dorado.',
          discoveredGoodsOrIdeas: [
            'Polvo de oro puro (mithqal)',
            'Barras de sal gema de roca',
            'Comercio silencioso de Bambuk'
          ]
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Acatar el monopolio del Kaya Maghan entregando las pepitas al tesoro real',
          description:
            'Entregan todas las pepitas de oro macizo (tibr) a los cancilleres del rey a cambio de salvoconductos sellados y protección de arqueros imperiales.',
          consequence:
            'El emperador les concede paso franco y exención de tributos en todas las puertas del reino. Entienden que la ley real impide que la sobreoferta de oro desbarate el valor de la moneda en los mercados.',
          historicalInsight:
            'El monopolio de las pepitas de oro en Ghana (documentado por el geógrafo Al-Bakri en 1068) fue uno de los primeros mecanismos estatales documentados para controlar la inflación monetaria.',
          chronicleText:
            'Respetamos el monopolio real de las pepitas (tibr), asegurando salvoconductos imperiales y estabilidad en los precios del oro.',
          discoveredGoodsOrIdeas: [
            'Monopolio real de pepitas (tibr)',
            'Salvoconductos imperiales de Ghana',
            'Control de inflación medieval'
          ]
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprovisionar boticas contra la enfermedad del sueño y fiebres fluviales',
          description:
            'Consultan con herboristas locales y boticarios para tratar a la comitiva contra las picaduras de la mosca tsetsé y las fiebres de las zonas bajas.',
          consequence:
            'Aprenden a rodear los pantanos donde habita la mosca tsetsé y preparan infusiones de corteza astringente y kohl protector. Salvan a los guías de caer postrados en el letargo mortal de la tripanosomiasis.',
          historicalInsight:
            'La presencia de la mosca tsetsé en los bosques del sur impedía la supervivencia de caballos y ganado mayor, fijando la frontera ecológica y militar entre los imperios de caballería sahelianos y las zonas mineras.',
          chronicleText:
            'Protegimos la salud de la caravana ante la mosca tsetsé y las fiebres, respetando los límites ecológicos del Sahel.',
          discoveredGoodsOrIdeas: [
            'Barrera ecológica de la mosca tsetsé',
            'Farmacopea tradicional del Sahel',
            'Prevención de la tripanosomiasis'
          ]
        }
      ],
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Intercambiar barras de sal gema de roca y acumular polvo de oro puro (mithqal)',
          description:
            'Aprovechan su red comercial para adquirir grandes bloques de sal del Sahara y cambiarlos peso a peso por polvo de oro fino con los mineros del sur.',
          consequence:
            'Aseguran una reserva de oro purísimo de 24 quilates almacenada en cuernos de cuero sellados. Comprueban que en África Occidental la sal no es un simple condimento: es el conservante vital y la base de la supervivencia.',
          historicalInsight:
            'En el África medieval, la sal de roca del Sahara central se cambiaba a menudo a la par con el polvo de oro debido a su escasez absoluta en el Sahel y su valor biológico imprescindible.',
          chronicleText:
            'Cambiamos losas de sal de roca por polvo de oro puro (mithqal), comprendiendo que en el Sahel la sal es tan preciosa como el metal dorado.',
          discoveredGoodsOrIdeas: [
            'Polvo de oro puro (mithqal)',
            'Barras de sal gema de roca',
            'Comercio silencioso de Bambuk'
          ]
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Acatar el monopolio del Kaya Maghan entregando las pepitas al tesoro real',
          description:
            'Entregan todas las pepitas de oro macizo (tibr) a los cancilleres del rey a cambio de salvoconductos sellados y protección de arqueros imperiales.',
          consequence:
            'El emperador les concede paso franco y exención de tributos en todas las puertas del reino. Entienden que la ley real impide que la sobreoferta de oro desbarate el valor de la moneda en los mercados.',
          historicalInsight:
            'El monopolio de las pepitas de oro en Ghana (documentado por el geógrafo Al-Bakri en 1068) fue uno de los primeros mecanismos estatales documentados para controlar la inflación monetaria.',
          chronicleText:
            'Respetamos el monopolio real de las pepitas (tibr), asegurando salvoconductos imperiales y estabilidad en los precios del oro.',
          discoveredGoodsOrIdeas: [
            'Monopolio real de pepitas (tibr)',
            'Salvoconductos imperiales de Ghana',
            'Control de inflación medieval'
          ]
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprovisionar boticas contra la enfermedad del sueño y fiebres fluviales',
          description:
            'Consultan con herboristas locales y boticarios para tratar a la comitiva contra las picaduras de la mosca tsetsé y las fiebres de las zonas bajas.',
          consequence:
            'Aprenden a rodear los pantanos donde habita la mosca tsetsé y preparan infusiones de corteza astringente y kohl protector. Salvan a los guías de caer postrados en el letargo mortal de la tripanosomiasis.',
          historicalInsight:
            'La presencia de la mosca tsetsé en los bosques del sur impedía la supervivencia de caballos y ganado mayor, fijando la frontera ecológica y militar entre los imperios de caballería sahelianos y las zonas mineras.',
          chronicleText:
            'Protegimos la salud de la caravana ante la mosca tsetsé y las fiebres, respetando los límites ecológicos del Sahel.',
          discoveredGoodsOrIdeas: [
            'Barrera ecológica de la mosca tsetsé',
            'Farmacopea tradicional del Sahel',
            'Prevención de la tripanosomiasis'
          ]
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Intercambiar barras de sal gema de roca y acumular polvo de oro puro (mithqal)',
          description:
            'Aprovechan su red comercial para adquirir grandes bloques de sal del Sahara y cambiarlos peso a peso por polvo de oro fino con los mineros del sur.',
          consequence:
            'Aseguran una reserva de oro purísimo de 24 quilates almacenada en cuernos de cuero sellados. Comprueban que en África Occidental la sal no es un simple condimento: es el conservante vital y la base de la supervivencia.',
          historicalInsight:
            'En el África medieval, la sal de roca del Sahara central se cambiaba a menudo a la par con el polvo de oro debido a su escasez absoluta en el Sahel y su valor biológico imprescindible.',
          chronicleText:
            'Cambiamos losas de sal de roca por polvo de oro puro (mithqal), comprendiendo que en el Sahel la sal es tan preciosa como el metal dorado.',
          discoveredGoodsOrIdeas: [
            'Polvo de oro puro (mithqal)',
            'Barras de sal gema de roca',
            'Comercio silencioso de Bambuk'
          ]
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Acatar el monopolio del Kaya Maghan entregando las pepitas al tesoro real',
          description:
            'Entregan todas las pepitas de oro macizo (tibr) a los cancilleres del rey a cambio de salvoconductos sellados y protección de arqueros imperiales.',
          consequence:
            'El emperador les concede paso franco y exención de tributos en todas las puertas del reino. Entienden que la ley real impide que la sobreoferta de oro desbarate el valor de la moneda en los mercados.',
          historicalInsight:
            'El monopolio de las pepitas de oro en Ghana (documentado por el geógrafo Al-Bakri en 1068) fue uno de los primeros mecanismos estatales documentados para controlar la inflación monetaria.',
          chronicleText:
            'Respetamos el monopolio real de las pepitas (tibr), asegurando salvoconductos imperiales y estabilidad en los precios del oro.',
          discoveredGoodsOrIdeas: [
            'Monopolio real de pepitas (tibr)',
            'Salvoconductos imperiales de Ghana',
            'Control de inflación medieval'
          ]
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprovisionar boticas contra la enfermedad del sueño y fiebres fluviales',
          description:
            'Consultan con herboristas locales y boticarios para tratar a la comitiva contra las picaduras de la mosca tsetsé y las fiebres de las zonas bajas.',
          consequence:
            'Aprenden a rodear los pantanos donde habita la mosca tsetsé y preparan infusiones de corteza astringente y kohl protector. Salvan a los guías de caer postrados en el letargo mortal de la tripanosomiasis.',
          historicalInsight:
            'La presencia de la mosca tsetsé en los bosques del sur impedía la supervivencia de caballos y ganado mayor, fijando la frontera ecológica y militar entre los imperios de caballería sahelianos y las zonas mineras.',
          chronicleText:
            'Protegimos la salud de la caravana ante la mosca tsetsé y las fiebres, respetando los límites ecológicos del Sahel.',
          discoveredGoodsOrIdeas: [
            'Barrera ecológica de la mosca tsetsé',
            'Farmacopea tradicional del Sahel',
            'Prevención de la tripanosomiasis'
          ]
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Intercambiar barras de sal gema de roca y acumular polvo de oro puro (mithqal)',
          description:
            'Aprovechan su red comercial para adquirir grandes bloques de sal del Sahara y cambiarlos peso a peso por polvo de oro fino con los mineros del sur.',
          consequence:
            'Aseguran una reserva de oro purísimo de 24 quilates almacenada en cuernos de cuero sellados. Comprueban que en África Occidental la sal no es un simple condimento: es el conservante vital y la base de la supervivencia.',
          historicalInsight:
            'En el África medieval, la sal de roca del Sahara central se cambiaba a menudo a la par con el polvo de oro debido a su escasez absoluta en el Sahel y su valor biológico imprescindible.',
          chronicleText:
            'Cambiamos losas de sal de roca por polvo de oro puro (mithqal), comprendiendo que en el Sahel la sal es tan preciosa como el metal dorado.',
          discoveredGoodsOrIdeas: [
            'Polvo de oro puro (mithqal)',
            'Barras de sal gema de roca',
            'Comercio silencioso de Bambuk'
          ]
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Acatar el monopolio del Kaya Maghan entregando las pepitas al tesoro real',
          description:
            'Entregan todas las pepitas de oro macizo (tibr) a los cancilleres del rey a cambio de salvoconductos sellados y protección de arqueros imperiales.',
          consequence:
            'El emperador les concede paso franco y exención de tributos en todas las puertas del reino. Entienden que la ley real impide que la sobreoferta de oro desbarate el valor de la moneda en los mercados.',
          historicalInsight:
            'El monopolio de las pepitas de oro en Ghana (documentado por el geógrafo Al-Bakri en 1068) fue uno de los primeros mecanismos estatales documentados para controlar la inflación monetaria.',
          chronicleText:
            'Respetamos el monopolio real de las pepitas (tibr), asegurando salvoconductos imperiales y estabilidad en los precios del oro.',
          discoveredGoodsOrIdeas: [
            'Monopolio real de pepitas (tibr)',
            'Salvoconductos imperiales de Ghana',
            'Control de inflación medieval'
          ]
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprovisionar boticas contra la enfermedad del sueño y fiebres fluviales',
          description:
            'Consultan con herboristas locales y boticarios para tratar a la comitiva contra las picaduras de la mosca tsetsé y las fiebres de las zonas bajas.',
          consequence:
            'Aprenden a rodear los pantanos donde habita la mosca tsetsé y preparan infusiones de corteza astringente y kohl protector. Salvan a los guías de caer postrados en el letargo mortal de la tripanosomiasis.',
          historicalInsight:
            'La presencia de la mosca tsetsé en los bosques del sur impedía la supervivencia de caballos y ganado mayor, fijando la frontera ecológica y militar entre los imperios de caballería sahelianos y las zonas mineras.',
          chronicleText:
            'Protegimos la salud de la caravana ante la mosca tsetsé y las fiebres, respetando los límites ecológicos del Sahel.',
          discoveredGoodsOrIdeas: [
            'Barrera ecológica de la mosca tsetsé',
            'Farmacopea tradicional del Sahel',
            'Prevención de la tripanosomiasis'
          ]
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Intercambiar barras de sal gema de roca y acumular polvo de oro puro (mithqal)',
          description:
            'Aprovechan su red comercial para adquirir grandes bloques de sal del Sahara y cambiarlos peso a peso por polvo de oro fino con los mineros del sur.',
          consequence:
            'Aseguran una reserva de oro purísimo de 24 quilates almacenada en cuernos de cuero sellados. Comprueban que en África Occidental la sal no es un simple condimento: es el conservante vital y la base de la supervivencia.',
          historicalInsight:
            'En el África medieval, la sal de roca del Sahara central se cambiaba a menudo a la par con el polvo de oro debido a su escasez absoluta en el Sahel y su valor biológico imprescindible.',
          chronicleText:
            'Cambiamos losas de sal de roca por polvo de oro puro (mithqal), comprendiendo que en el Sahel la sal es tan preciosa como el metal dorado.',
          discoveredGoodsOrIdeas: [
            'Polvo de oro puro (mithqal)',
            'Barras de sal gema de roca',
            'Comercio silencioso de Bambuk'
          ]
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Acatar el monopolio del Kaya Maghan entregando las pepitas al tesoro real',
          description:
            'Entregan todas las pepitas de oro macizo (tibr) a los cancilleres del rey a cambio de salvoconductos sellados y protección de arqueros imperiales.',
          consequence:
            'El emperador les concede paso franco y exención de tributos en todas las puertas del reino. Entienden que la ley real impide que la sobreoferta de oro desbarate el valor de la moneda en los mercados.',
          historicalInsight:
            'El monopolio de las pepitas de oro en Ghana (documentado por el geógrafo Al-Bakri en 1068) fue uno de los primeros mecanismos estatales documentados para controlar la inflación monetaria.',
          chronicleText:
            'Respetamos el monopolio real de las pepitas (tibr), asegurando salvoconductos imperiales y estabilidad en los precios del oro.',
          discoveredGoodsOrIdeas: [
            'Monopolio real de pepitas (tibr)',
            'Salvoconductos imperiales de Ghana',
            'Control de inflación medieval'
          ]
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprovisionar boticas contra la enfermedad del sueño y fiebres fluviales',
          description:
            'Consultan con herboristas locales y boticarios para tratar a la comitiva contra las picaduras de la mosca tsetsé y las fiebres de las zonas bajas.',
          consequence:
            'Aprenden a rodear los pantanos donde habita la mosca tsetsé y preparan infusiones de corteza astringente y kohl protector. Salvan a los guías de caer postrados en el letargo mortal de la tripanosomiasis.',
          historicalInsight:
            'La presencia de la mosca tsetsé en los bosques del sur impedía la supervivencia de caballos y ganado mayor, fijando la frontera ecológica y militar entre los imperios de caballería sahelianos y las zonas mineras.',
          chronicleText:
            'Protegimos la salud de la caravana ante la mosca tsetsé y las fiebres, respetando los límites ecológicos del Sahel.',
          discoveredGoodsOrIdeas: [
            'Barrera ecológica de la mosca tsetsé',
            'Farmacopea tradicional del Sahel',
            'Prevención de la tripanosomiasis'
          ]
        }
      ]
    }
  },

  {
    id: 'gold-road-2',
    number: 2,
    storyId: 'gold-road',
    title: 'Tombuctú: Saberes de Barro, Tráfico de Cautivos y la Gran Encrucijada',
    theme: 'Conocimientos astronómicos, la dolorosa realidad del comercio de personas y la bifurcación transahariana',
    location: 'Tombuctú y el Meandro del Níger — Metrópolis del Imperio de Mali',
    illustrationType: 'mali-timbuktu',
    intro:
      'La caravana arriba a la resplandeciente Tombuctú, donde la curva del río Níger se funde con las arenas rojas del Sahara. Ante ustedes se alzan los imponentes muros de adobe y vigas de acacia de la mezquita de Djinguereber y la Universidad de Sankore. En sus patios en penumbra, sabios y copistas traducen tratados de matemáticas, astronomía para navegar las dunas por las constelaciones, y redactan cartas de crédito (suftaja) que permiten transferir fortunas en oro sin transportar pesados cofres metálicos por el desierto. Sin embargo, en el zoco central de la ciudad se revela la cara más cruda de las rutas transaharianas: junto a los fardos de telas teñidas con añil y colmillos de marfil, se exhiben y compran personas esclavizadas, cautivos capturados en razias bélicas (ghazw) del sur, destinados a marchar encadenados a través del desierto hacia los palacios del norte de África y Oriente. Aquí, a las puertas del Sahara, los líderes de la marcha deben elegir qué gran ruta emprender:',
    prompt:
      'Dos grandes senderos transaharianos parten de Tombuctú para llevar el oro hacia el Mediterráneo. ¿Hacia qué destino decide marchar el curso?',
    teacherPrompt:
      '¿Cómo convivían en una misma metrópolis la alta erudición de las universidades con la crueldad del comercio de seres humanos? ¿Qué peligros suponía elegir cada ruta a través del Sahara?',
    characterFlavor: {
      wangara:
        'Conocés a los ancianos copistas de Sankore y a los tratantes del zoco. El oro que llevamos puede financiar mezquitas y libros sabios, pero el dolor de los cautivos encadenados en la arena ensombrece cualquier ganancia.',
      merchant:
        'La suftaja (letra de cambio) nos salvará de los salteadores nómadas: depositamos oro en Tombuctú y cobramos en Túnez o El Cairo sin arriesgar el metal en el camino.',
      traveler:
        'Es el cruce de caminos del mundo: hacia el noroeste espera el Tanezrouft rumbo a Cartago y Venecia; hacia el este, la gran ruta de los oasis del Fezzan hacia Egipto y Bizancio.',
      medic:
        'Examinás la desnutrición y llagas de los cautivos en el mercado. En el desierto, la deshidratación y las diarreas por pozos contaminados no perdonan a quien viaje sin preparación sanitaria.',
      scholar:
        'Contemplás manuscritos de astronomía escritos en grafía árabe y lenguas locales africanas (ajami). Los sabios de Mali calculan el movimiento de las estrellas con la misma precisión que los mejores astrónomos de Bagdad o Córdoba.'
    },
    choices: [
      {
        id: 'A',
        label: 'Alternativa A (Ruta de Cartago y Venecia)',
        title: 'Ruta Noroeste: Cruzar por Taghaza hacia Cartago / Túnez (y navegar a Venecia)',
        description:
          'Deciden tomar la ruta del Sahara Occidental por las minas de sal de Taghaza y el temible Tanezrouft hacia el puerto de Cartago/Túnez, con la meta de embarcar el oro hacia las cecas de Venecia. Rechazan transportar cautivos y cargan en su lugar polvo de oro, sal y manuscritos astronómicos.',
        consequence:
          'La caravana se alista para el tramo más seco del planeta. Emplean cartas de crédito (suftaja) para viajar livianos y contratan a guías tuareg (Takshif) expertos en orientarse por la estrella Polar.',
        historicalInsight:
          'La suftaja (letra de cambio islámica) revolucionó el comercio a larga distancia, permitiendo cobrar fondos en ciudades distantes sin arriesgar el oro físico en rutas infestadas de salteadores.',
        chronicleText:
          'Elegimos la senda del Noroeste hacia Cartago y Venecia, portando letras de crédito y conocimientos de navegación estelar.',
        discoveredGoodsOrIdeas: [
          'Letras de cambio (suftaja)',
          'Navegación estelar del Sahara',
          'Rechazo del tráfico de cautivos'
        ]
      },
      {
        id: 'B',
        label: 'Alternativa B (Ruta de Egipto y Constantinopla)',
        title: 'Ruta Noreste: La senda imperial del Hajj hacia El Cairo (y continuar a Constantinopla)',
        description:
          'Se integran en la colosal caravana de peregrinación y comercio que emula la marcha de Mansa Musa, cruzando los oasis del Fezzan hacia El Cairo de los mamelucos, con destino final en Constantinopla.',
        consequence:
          'Marchan protegidos por miles de arrieros y camelleros que transportan sacos de polvo de oro para limosnas, compras de especias y mecenazgo religioso, enfrentando el agotamiento de las largas jornadas desérticas.',
        historicalInsight:
          'La peregrinación de Mansa Musa en 1324 movilizó a más de 60.000 personas y decenas de toneladas de oro, poniendo a Mali en los mapas de Europa y el mundo islámico como el reino más rico de la tierra.',
        chronicleText:
          'Tomamos la gran senda oriental hacia El Cairo mameluco y Constantinopla, siguiendo la ruta imperial del oro.',
        discoveredGoodsOrIdeas: [
          'Caravana imperial de Mali',
          'Rutas de oasis del Fezzan',
          'Reflexión sobre el cautiverio'
        ]
      },
      {
        id: 'C',
        label: 'Alternativa C (Acción Humanitaria y Saberes)',
        title: 'Rescatar cautivos del mercado, sumarlos libres a la caravana y marchar al Noroeste',
        description:
          'Utilizan parte de sus fondos en oro para comprar la libertad de escribas y jóvenes cautivos enfermos, integrándolos como miembros plenos de la expedición con destino a Cartago y Venecia.',
        consequence:
          'Su acción humanitaria salva vidas y les proporciona colaboradores leales políglotas que conocen aguadas secretas en el desierto y salvan a la caravana de extraviarse en el Tanezrouft.',
        historicalInsight:
          'Aunque el tráfico transahariano de personas movilizó a millones de cautivos a lo largo de los siglos, existieron redes de manumisión, rescate y solidaridad entre cofradías mercantiles y comunidades locales.',
        chronicleText:
          'Rescatamos cautivos en el zoco de Tombuctú, convirtiéndolos en hermanos de marcha y traductores libres de la caravana hacia Cartago.',
        discoveredGoodsOrIdeas: [
          'Manumisión y dignidad humana',
          'Lenguas y dialectos del desierto',
          'Solidaridad caravanera'
        ]
      }
    ],
    characterChoices: {}
  },

  {
    id: 'gold-road-3-west',
    number: 3,
    storyId: 'gold-road',
    branch: 'carthage-venice',
    title: 'El Desierto de la Sed y las Galeras de Cartago / Túnez',
    theme: 'Peligros del Tanezrouft, medicina del desierto y el oro como moneda de los emires',
    location: 'El Desierto del Tanezrouft y el Puerto de Túnez / Cartago (Ifriqiya)',
    illustrationType: 'transsahara-tunis',
    intro:
      'La caravana se adentra en el Tanezrouft, la temida "Tierra de la Sed", donde el horizonte es solo un vacío de dunas ardientes y no brota un solo pozo de agua durante diez jornadas de marcha forzada. Las tormentas de arena (haboob) borran los senderos en minutos, amenazando con asfixiar a hombres y bestias si no se refugian bajo los vientres de los camellos. La deshidratación, los espejismos y la ceguera por el sol y la arena (tracoma) diezman a los viajeros descuidados; los sanadores aplican colirios de kohl y resinas balsámicas para proteger los ojos inflamados, y cuidan celosamente los odres de cuero de cabra tratados con brea (qirba) para que el agua no se corrompa. Solo la pericia del guía tuareg (Takshif), que reconoce el rumbo oliendo un puñado de arena y leyendo las constelaciones, logra conducirlos vivos hasta el oasis salinero de Taghaza y, semanas después, ante las imponentes murallas blancas y alminares de Túnez y la milenaria Cartago. En este emporio marítimo del Magreb, los sultanes hafsíes funden el oro de Mali para acuñar el prestigioso dinar de oro, mientras galeras venecianas y genovesas esperan en la dársena cargadas de paños de lana, espadas de acero y noticias de ultramar.',
    prompt:
      'El oro africano ha tocado las costas del Mediterráneo. ¿Cómo disponen de la carga en los muelles de Cartago y Túnez?',
    teacherPrompt:
      '¿Por qué un puñado de sal o un odre de agua pura valía diez veces más que un saco de oro en mitad del Tanezrouft? ¿Qué papel jugaban los guías del desierto para la supervivencia de todos?',
    characterFlavor: {
      wangara:
        'Sobrevivimos al Tanezrouft gracias a la sal y a la disciplina de los odres de agua. Ahora, en el puerto de Túnez, los cambistas italianos se disputan nuestro oro con ojos hambrientos.',
      merchant:
        'Los dinares de oro de los emires de Ifriqiya circulan con enorme pureza por todo el Mediterráneo. Convertir nuestro polvo en moneda oficial nos abrirá las puertas de las repúblicas italianas.',
      traveler:
        'Dejar atrás las dunas infinitas y contemplar el mar azul de Cartago produce lágrimas en los caravaneros. Aquí convergen las galeras cristianas con las caravanas musulmanas en paz mercantil.',
      medic:
        'El kohl y el ungüento de mirra salvaron la vista de doce camelleros atacados por la oftalmia del desierto. El agua fresca de las fuentes de Túnez devuelve la vida a los arrieros.',
      scholar:
        'Observo cómo los astrolabios que usamos para cruzar las dunas por las estrellas son idénticos a los que usan los marineros venecianos para trazar sus rumbos por el mar.'
    },
    choices: [
      {
        id: 'A',
        label: 'Alternativa A',
        title: 'Acuñar dinares hafsíes en la ceca de Túnez y fletar bodegas hacia Venecia',
        description:
          'Fundan el polvo de oro en la casa de moneda del emir para acuñar dinares oficiales y canjear pasajes en una flota de galeras mercantes rumbo a la laguna veneciana.',
        consequence:
          'Obtienen moneda de curso legal garantizada en toda la cuenca del Mediterráneo. Los patrones de galera venecianos les aseguran cabinas protegidas para su cargamento de oro.',
        historicalInsight:
          'El dinar de oro del norte de África y los ducados italianos dependían en más de un 70% del oro importado a través de las caravanas del Sahara desde los ríos de África Occidental.',
        chronicleText:
          'Acuñamos dinares de oro en la ceca de Túnez y embarcamos en galeras mercantes con rumbo a Venecia.',
        discoveredGoodsOrIdeas: [
          'Dinar de oro de Ifriqiya',
          'Fletes de galeras mediterráneas',
          'Moneda internacional'
        ]
      },
      {
        id: 'B',
        label: 'Alternativa B',
        title: 'Tratar a los caravaneros en el bimaristán de Túnez con colirios y reposo',
        description:
          'Destinan una porción de oro para alojar a los enfermos en los hospitales de la ciudad y abastecerse de ungüentos de kohl y remedios contra el tracoma antes de embarcar.',
        consequence:
          'La tripulación recupera la visión y la fuerza física. Médicos magrebíes intercambian recetas sobre cómo purificar agua en recipientes de cobre y el uso medicinal del aloe del desierto.',
        historicalInsight:
          'Los puertos del Magreb contaban con hospicios y fonduqs (posadas comerciales) equipados para recibir y rehabilitar a viajeros exhaustos tras meses de travesía desértica.',
        chronicleText:
          'Rehabilitamos a los enfermos en los bimaristanes de Túnez con colirios de kohl y botánica del norte.',
        discoveredGoodsOrIdeas: [
          'Remedios contra el tracoma',
          'Fonduq de mercaderes',
          'Higiene portuaria del Magreb'
        ]
      },
      {
        id: 'C',
        label: 'Alternativa C',
        title: 'Comerciar con paños flamencos y armas de acero para reabastecer a la caravana',
        description:
          'Aprovechan los buques europeos anclados en Cartago para adquirir paños finos de lana y herramientas de hierro forjado a cambio de polvo de oro.',
        consequence:
          'Comprueban cómo funciona la complementariedad económica global: el oro africano compra manufacturas europeas, que luego volverán a cruzar el Sahara como bienes de prestigio.',
        historicalInsight:
          'El comercio transahariano conectaba el corazón de África con los centros textiles de Flandes e Italia mucho antes de la expansión atlántica europea.',
        chronicleText:
          'Intercambiamos oro africano por textiles y herramientas europeas en los muelles de Cartago.',
        discoveredGoodsOrIdeas: [
          'Paños flamencos y toscanos',
          'Acero y herramientas del norte',
          'Complementariedad global'
        ]
      }
    ],
    characterChoices: {}
  },

  {
    id: 'gold-road-3-east',
    number: 3,
    storyId: 'gold-road',
    branch: 'egypt-byzantium',
    title: 'El Gran Río Nilo y el Terremoto del Oro en El Cairo',
    theme: 'Abundancia, la hiperinflación histórica del oro en 1324 y los bimaristanes de Oriente',
    location: 'El Cairo Mameluco — Riberas del Nilo y Gran Zoco Jan el-Jalili',
    illustrationType: 'transsahara-cairo',
    intro:
      'Tras sortear las dunas del Fezzan y el desierto líbico gracias a los canales subterráneos (foggaras) de los oasis, la expedición arriba a la mayor metrópolis del mundo islámico: El Cairo mameluco. La llegada del oro de Mali provoca una conmoción sin precedentes. Siguiendo el ejemplo de la histórica peregrinación de Mansa Musa, se reparten miles de mithqals de oro entre santuarios, dignatarios y comerciantes del Nilo. Sin embargo, la súbita avalancha de metal precioso desata un fenómeno económico insólito: el valor del oro se desploma un 20% frente a la plata, provocando una severa inflación que encarece el trigo, las telas y el aceite durante más de una década. En medio de este torbellino comercial, la caravana visita el majestuoso Bimaristán Mansuri del Sultán Qalawun, un hospital modelo donde médicos de renombre aíslan a pacientes con fiebres contagiosas, realizan cirugías oculares con instrumental de bronce y suministran infusiones medicinales gratuitas. En los embarcaderos del Nilo, naves fluviales preparan el enlace marítimo hacia el mar Egeo y los estrechos del Bósforo.',
    prompt:
      'El exceso de oro ha alterado la economía de Egipto. ¿Cómo gestionan su tesoro antes de proseguir hacia Constantinopla?',
    teacherPrompt:
      '¿Cómo es posible que tener "demasiado oro" empobrezca temporalmente a una ciudad entera como El Cairo? ¿Qué nos enseña esto sobre la ley de la oferta y la demanda?',
    characterFlavor: {
      wangara:
        'Vemos con nuestros propios ojos cómo el exceso de oro derrumba su precio en los zocos de El Cairo. La abundancia desmedida puede ser tan destructiva como la escasez.',
      merchant:
        'Los cambistas de Jan el-Jalili rechazan pagar lo habitual por el mithqal de oro: como todos pagan con oro, los precios de la comida y la ropa se han triplicado.',
      traveler:
        'Las aguas del Nilo están colmadas de faluchos y naves mercantes. Desde aquí, las caravanas conectan con las rutas de las especias del Mar Rojo y las flotas que surcan hacia Constantinopla.',
      medic:
        'El Bimaristán Mansuri es prodigioso: salas con fuentes de agua para calmar la fiebre, músicos para aliviar a los enfermos melancólicos y boticas gratuitas financiadas con donaciones de oro.',
      scholar:
        'Observo a los escribas mamelucos calcular la depreciación de las monedas. El paso de la caravana de Mansa Musa quedará registrado en las crónicas de los historiadores durante siglos.'
    },
    choices: [
      {
        id: 'A',
        label: 'Alternativa A',
        title: 'Escalonar los pagos e invertir en especias del Mar Rojo para proteger el capital',
        description:
          'En lugar de vender todo el oro de golpe a precios deprimidos, adquieren pimienta, canela y sedas de Oriente que conservan su altísimo valor en el mercado internacional.',
        consequence:
          'Evitan las pérdidas de la inflación cairota. Comprueban que los bienes escasos (como las especias indias) protegen la riqueza mejor que un metal que abunda temporalmente.',
        historicalInsight:
          'La peregrinación de Mansa Musa en 1324 inyectó tanto oro en El Cairo que devaluó el metal durante 12 años, obligando a los comerciantes a diversificar en especias y textiles preciosos.',
        chronicleText:
          'Diversificamos nuestro oro en especias del Índico, protegiendo los fondos ante la gran inflación de El Cairo.',
        discoveredGoodsOrIdeas: [
          'Hiperinflación del oro en El Cairo (1324)',
          'Especias del Mar Rojo',
          'Diversificación mercantil'
        ]
      },
      {
        id: 'B',
        label: 'Alternativa B',
        title: 'Donar oro al Bimaristán Mansuri para financiar botánica y tratamientos médicos',
        description:
          'Entregan un lote de oro en concepto de dotación piadosa (waqf) al gran hospital de Qalawun a cambio de tratados médicos sobre aislamiento de fiebres e higiene.',
        consequence:
          'El hospital les entrega compendios de farmacopea y agua de rosas medicinal. Médicos cairotas les enseñan técnicas de aislamiento sanitario que salvarán a la tripulación en el mar.',
        historicalInsight:
          'Los bimaristanes islámicos eran hospitales públicos universales financiados mediante dotaciones perpetuas (waqf), donde se practicaba medicina avanzada sin distinción de credo ni riqueza.',
        chronicleText:
          'Dotamos con oro al Bimaristán Mansuri, adquiriendo valiosos conocimientos médicos sobre aislamiento y farmacopea.',
        discoveredGoodsOrIdeas: [
          'Dotación hospitalaria (waqf)',
          'Medicina clínica del Bimaristán',
          'Tratados de farmacopea botánica'
        ]
      },
      {
        id: 'C',
        label: 'Alternativa C',
        title: 'Contratar naves fluviales y escolta para navegar por el delta hacia Constantinopla',
        description:
          'Utilizan el prestigio del oro imperial de Mali para obtener salvoconductos del sultán mameluco y zarpar desde Alejandría con destino al Bósforo.',
        consequence:
          'Aseguran un viaje marítimo expedito sorteando piratas mediterráneos. Llevan cartas diplomáticas de presentación dirigidas a la corte del emperador bizantino.',
        historicalInsight:
          'Egipto mameluco y el Imperio Bizantino mantenían intensos lazos diplomáticos y comerciales para el suministro de trigo, sedas y metales preciosos.',
        chronicleText:
          'Obtuvimos salvoconductos en El Cairo y zarpamos por el delta del Nilo hacia los estrechos de Constantinopla.',
        discoveredGoodsOrIdeas: [
          'Salvoconductos mamelucos',
          'Rutas marítimas del Levante',
          'Diplomacia intercontinental'
        ]
      }
    ],
    characterChoices: {}
  },

  {
    id: 'gold-road-4-west',
    number: 4,
    storyId: 'gold-road',
    branch: 'carthage-venice',
    title: 'Venecia: La Ceca de San Marcos y el Nacimiento del Ducado de Oro',
    theme: 'El oro africano como sangre de la economía europea, mosaicos eternos y la banca mercantil',
    location: 'Piazza San Marcos y la Zecca — Venecia, República de la Serenísima',
    illustrationType: 'venice-ducat',
    intro:
      'Las galeras mercantes atracan junto a los muelles del Molo y el Palacio Ducal en Venecia. El metal que meses atrás fue extraído como polvo de oro en las arenas de Bambuk y Mali ingresa solemnemente a la Zecca, la célebre Casa de la Moneda de la Serenísima. Ante la mirada atenta de los procuradores de San Marcos y maestros fundidores, el oro africano se refina hasta alcanzar los 24 quilates de pureza casi absoluta (99,7%) y es golpeado con cuños de acero para acuñar los famosos Ducados venecianos (zecchini). Esta moneda, estampada con la figura de San Marcos entregando el estandarte al Dux, se convertirá durante más de cuatrocientos años en la divisa de referencia internacional de toda Europa y el Mediterráneo. A pocos pasos, artesanos mosaicistas utilizan finísimas láminas de "pan de oro" para revestir las cúpulas de la Basílica de San Marcos, atrapando la luz para crear una atmósfera dorada que evoca el paraíso celestial. En los mostradores de los banqueros (banchi di scritta), el oro africano sirve de garantía para letras de cambio y seguros marítimos que financiarán flotas comerciales hacia Brujas, Londres y el Mar Báltico.',
    prompt:
      'El viaje ha conectado las cuencas fluviales de África Occidental con el corazón financiero de Europa. ¿Cuál es su última gran decisión en Venecia?',
    teacherPrompt:
      'Si la moneda más poderosa de Europa (el ducado veneciano) se fabricaba con oro africano, ¿por qué la historia tradicional invisibilizó el papel fundamental de África en la prosperidad europea?',
    characterFlavor: {
      wangara:
        'Ves golpear los martillos en la Zecca veneciana: cada ducado de oro puro que sale de esos cuños nació en las bateas de nuestros ríos del Sahel. Europa resplandece gracias al trabajo africano.',
      merchant:
        'El ducado veneciano es el dólar de la Edad Media. Respaldado por este oro puro de 24 quilates, los mercaderes venecianos compran sedas en Oriente y lanas en Inglaterra.',
      traveler:
        'De las arenas del Sahara a los canales de agua salada de Venecia. Es difícil creer que un mismo grano de oro cruzó desiertos, puertos islámicos y mares para terminar en el altar de San Marcos.',
      medic:
        'Los venecianos han aprendido las lecciones de la peste: en los puertos aplican aislamientos rigurosos y exigen certificados de salud antes de permitir el desembarco en la ciudad.',
      scholar:
        'La contabilidad por partida doble y las letras de cambio de los bancos venecianos son el espejo europeo de la suftaja que aprendimos en Tombuctú. La matemática conecta el comercio universal.'
    },
    choices: [
      {
        id: 'A',
        label: 'Alternativa A',
        title: 'Acuñar el lote completo en ducados de oro e invertir en la banca comercial veneciana',
        description:
          'Depositan el oro en la Zecca para transformarlo en ducados de oro zecchini y abrir cuentas mercantiles garantizadas en los banchi di scritta de Rialto.',
        consequence:
          'Se convierten en socios financieros de primer nivel en la Serenísima. Comprueban que el ducado mantendrá su peso y pureza inalterados durante siglos, impulsando el capitalismo mercantil europeo.',
        historicalInsight:
          'El ducado de oro veneciano (creado en 1284) mantuvo su pureza de 99,7% de oro fino durante más de cinco siglos gracias al flujo constante de oro transahariano llegado por los puertos magrebíes.',
        chronicleText:
          'Acuñamos ducados de oro puro en la Zecca de San Marcos e invertimos en la banca comercial de Venecia.',
        discoveredGoodsOrIdeas: [
          'Ducado veneciano (Zecchino)',
          'Casa de Moneda (La Zecca)',
          'Banca comercial y letras de cambio'
        ]
      },
      {
        id: 'B',
        label: 'Alternativa B',
        title: 'Donar láminas de oro a los maestros del mosaico de la Basílica de San Marcos',
        description:
          'Aportan panes de oro para las bóvedas de la basílica, donde maestros venecianos y bizantinos crean mosaicos resplandecientes que inmortalizan el lazo entre África y el Adriático.',
        consequence:
          'El oro del Sahel queda grabado para siempre en el monumento más admirado de Occidente, reflejando la luz de las velas como testimonio del encuentro entre continentes.',
        historicalInsight:
          'Los mosaicos dorados de San Marcos requerían toneladas de láminas de oro finísimo integradas en vidrio, un lujo que solo fue posible gracias a la importación masiva de oro transahariano.',
        chronicleText:
          'Donamos pan de oro para las cúpulas celestiales de la Basílica de San Marcos, inmortalizando el origen africano del brillo veneciano.',
        discoveredGoodsOrIdeas: [
          'Pan de oro para mosaicos sacros',
          'Arte e iconografía de San Marcos',
          'Huella africana en el Renacimiento'
        ]
      },
      {
        id: 'C',
        label: 'Alternativa C',
        title: 'Fondear una compañía comercial permanente (commenda) entre Venecia y el Sahel',
        description:
          'Firman contratos marítimos para que galeras venecianas lleven manufacturas de vidrio, agujas de acero y telas finas a los puertos del Magreb a cambio de oro y marfil.',
        consequence:
          'Establecen una red comercial continua que no dependerá de viajes aislados, uniendo a comerciantes mandingas, intermediarios berberiscos y banqueros italianos.',
        historicalInsight:
          'El contrato de commenda fue el antecesor medieval de las sociedades comerciales modernas, permitiendo a inversores financiar viajes lejanos compartiendo riesgos y ganancias.',
        chronicleText:
          'Establecimos un contrato comercial de commenda uniendo permanentemente las redes del Sahel con las galeras de Venecia.',
        discoveredGoodsOrIdeas: [
          'Contrato de sociedad (Commenda)',
          'Red comercial África-Venecia',
          'Vidrio soplado y manufacturas'
        ]
      }
    ],
    characterChoices: {}
  },

  {
    id: 'gold-road-4-east',
    number: 4,
    storyId: 'gold-road',
    branch: 'egypt-byzantium',
    title: 'Constantinopla: El Hiperpíron y la Diplomacia del Oro Imperial',
    theme: 'El oro como escudo del Imperio, los mosaicos sacros de Santa Sofía y la gran síntesis cultural',
    location: 'Santa Sofía y el Cuerno de Oro — Constantinopla, Imperio Bizantino',
    illustrationType: 'byzantium-hyperpyron',
    intro:
      'Las naves cruzan el mar de Mármara y fondean en las aguas calmas del Cuerno de Oro frente a las colosales murallas teodosianas de Constantinopla. La expedición contempla la cumbre de la civilización bizantina: la majestuosa basílica de Santa Sofía (Hagia Sophia), cuya inmensa cúpula parece flotar suspendida del cielo gracias a millones de teselas de vidrio cubiertas de oro que reflejan la luz solar. En la corte imperial, el Basileus recibe la embajada comercial. En Bizancio, el oro cumple una función sagrada y estratégica: con él se acuña el Hiperpíron (el legendario "besante" de oro romano), pero sobre todo el oro es el escudo del Imperio. Durante siglos de asedios, los emperadores no solo pelearon batallas, sino que utilizaron el tributo en oro para sobornar invasores, comprar la paz con pueblos nómadas de las estepas y pagar a los leales guerreros de la Guardia Varega. El oro extraído en el río Níger resplandece ahora en los cálices del altar de Santa Sofía y en los tratados diplomáticos que sostienen la continuidad del Imperio Romano de Oriente.',
    prompt:
      'Han culminado una travesía épica desde las sabanas del Sahel hasta los confines de Bizancio. ¿Cómo sellan su destino en la corte imperial?',
    teacherPrompt:
      '¿Qué resultaba más eficaz para la supervivencia de Bizancio: un ejército de soldados o cofres de oro para comprar la diplomacia y la paz con sus vecinos?',
    characterFlavor: {
      wangara:
        'El emperador bizantino sostiene en su palma las monedas de oro que vinieron de nuestras tierras de Mali. El oro de África protegió las murallas del último vestigio del Imperio Romano.',
      merchant:
        'El hiperpíron de oro goza de respeto desde las estepas rusas hasta los puertos de Siria. Negociar exención de impuestos en el Cuerno de Oro multiplica el valor de nuestro viaje.',
      traveler:
        'Estar de pie bajo la cúpula de Santa Sofía tras haber cruzado el desierto del Sahara es la mayor hazaña que un caminante del mundo puede soñar.',
      medic:
        'En los hospitales de Constantinopla se conservan los manuscritos de Galeno y Dioscórides, comentados por médicos árabes y bizantinos que estudian la anatomía humana.',
      scholar:
        'Cambiamos oro por copias en pergamino de astronomía y geometría ptolemaica. Esos libros volverán con nosotros hacia Tombuctú para enriquecer las bibliotecas de Sankore.'
    },
    choices: [
      {
        id: 'A',
        label: 'Alternativa A',
        title: 'Entregar el oro a la tesorería imperial a cambio de privilegios de libre comercio',
        description:
          'Negocian con el chambelán del Basileus para abastecer las arcas imperiales a cambio del sello de oro (crisóbulo) que les exime de peajes en el Bósforo y el Mar Negro.',
        consequence:
          'Obtienen privilegios mercantiles de rango imperial. Comprueban que Bizancio utiliza ese oro para pagar subsidios de paz a tribus nómadas, salvando a la capital de la guerra.',
        historicalInsight:
          'La diplomacia bizantina basaba su defensa en subsidios anuales de oro a vecinos potencialmente hostiles y en la contratación de tropas de élite como la Guardia Varega.',
        chronicleText:
          'Entregamos oro a la corona bizantina a cambio del sello crisóbulo de libre comercio en los estrechos del Bósforo.',
        discoveredGoodsOrIdeas: [
          'El Hiperpíron bizantino',
          'Diplomacia del oro y subsidios de paz',
          'Sello imperial crisóbulo'
        ]
      },
      {
        id: 'B',
        label: 'Alternativa B',
        title: 'Aportar láminas de oro a los talleres de Santa Sofía para el Cristo Pantocrátor',
        description:
          'Donan pan de oro para restaurar los mosaicos sacros de Santa Sofía, donde artistas bizantinos capturan el resplandor de la divinidad en teselas doradas.',
        consequence:
          'El metal africano se funde con el arte más sublime de la cristiandad medieval, demostrando que las rutas de la fe y el arte eran verdaderamente globales.',
        historicalInsight:
          'Los mosaicos de Hagia Sophia fueron diseñados para que cada tesela estuviera ligeramente inclinada, reflejando la luz hacia los fieles para simbolizar la luz increada de Dios.',
        chronicleText:
          'Contribuimos con oro africano al esplendor de los mosaicos sacros de Santa Sofía en Constantinopla.',
        discoveredGoodsOrIdeas: [
          'Mosaicos dorados de Santa Sofía',
          'Arte y liturgia bizantina',
          'Luz divina e iconografía sagrada'
        ]
      },
      {
        id: 'C',
        label: 'Alternativa C',
        title: 'Adquirir códices griegos de ciencia y medicina para llevarlos de vuelta a Tombuctú',
        description:
          'Compran manuscritos de astronomía, medicina y matemáticas en los monasterios de Constantinopla para enriquecer las madrasas del Imperio de Mali.',
        consequence:
          'Cierran el círculo del saber universal: el oro del África subsahariana rescata la filosofía y la ciencia clásica grecorromana para llevarla a las universidades del Níger.',
        historicalInsight:
          'Tombuctú y otras metrópolis del Sahel albergaban colecciones privadas con cientos de miles de manuscritos que incluían tratados de ciencia clásica traducidos y comentados por eruditos africanos.',
        chronicleText:
          'Adquirimos códices griegos de ciencia para enriquecer los centros de saber de Tombuctú y Mali.',
        discoveredGoodsOrIdeas: [
          'Códices clásicos de medicina y astronomía',
          'Circulación de libros intercontinental',
          'Diálogo cultural entre Bizancio y Mali'
        ]
      }
    ],
    characterChoices: {}
  }
];
