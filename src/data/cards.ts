import type { GameCard } from '../types/game';

export const GAME_CARDS: GameCard[] = [
  {
    id: 'market-worlds',
    number: 1,
    title: 'Un mercado lleno de mundos',
    theme: 'Las rutas como espacios de intercambio entre personas y regiones',
    location: 'Gran Bazar de Samarcanda — Cruce de caminos en Asia Central',
    illustrationType: 'market',
    intro: 'Al entrar en la ciudad amurallada, la caravana encuentra un mercado deslumbrante. Entre los puestos aparecen telas de seda finamente bordadas, recipientes de porcelana traslúcida, especias de aromas desconocidos y objetos que ninguno de ustedes había visto antes. Los mercaderes pregonan en lenguas diversas y cuentan historias sobre el origen de cada mercancía. Algunas llevan meses viajando y pasaron por decenas de manos antes de llegar hasta aquí.',
    prompt: 'Tienen unas horas antes de que la caravana vuelva a marchar. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Creen que todos estos productos fueron transportados por una sola persona desde su lugar de origen?',
    characterFlavor: {
      merchant: 'Tus ojos van directo a los pesos de las monedas y a las telas de seda: calculás que su precio aquí quintuplica lo que costaron en el Este.',
      traveler: 'Escuchás palabras en persa, sogdiano y árabe en una misma hilera de tiendas. El mercado es un mapa sonoro de medio continente.',
      medic: 'Reconocés sacos de jengibre, clavo y canela; no solo sirven para aderezar banquetes, sino para templar fiebres y conservar alimentos.',
      scholar: 'Te llama la atención cómo los mercaderes llevan libros contables en tiras de papel y tablas de cálculo con sistemas diversos.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Tasar y negociar lotes de seda cruda con mercaderes sogdianos',
          description: 'Aprovechan su conocimiento comercial para evaluar la pureza de las monedas de plata y acordar un lote de seda al por mayor.',
          consequence: 'Detectan monedas adulteradas y logran un trueque ventajoso. Comprueban que la seda viaja embalada en fardos compactos porque un solo fardo permite pagar meses de viaje.',
          historicalInsight: 'El comercio de larga distancia priorizaba bienes de lujo y poco peso que multiplicaban su valor al atravesar continentes.',
          chronicleText: 'Tasamos lotes de seda cruda y aseguramos fondos en plata auténtica para la caravana.',
          discoveredGoodsOrIdeas: ['Seda cruda imperial', 'Márgenes de ganancia', 'Monedas de plata sogdianas']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Averiguar qué productos escasean en los mercados occidentales',
          description: 'Conversan con cambistas y mercaderes en las posadas para saber qué mercancías alcanzan los precios más altos en Europa.',
          consequence: 'Se enteran de que la pimienta y el azafrán se pagan como oro en las ciudades portuarias de Occidente. Entienden que saber qué necesita cada región es tan valioso como la mercancía misma.',
          historicalInsight: 'La información comercial sobre escasez y demanda regional era el motor que dirigía los flujos mercantiles medievales.',
          chronicleText: 'Recopilamos información sobre la escasez de especias y sedas en las ferias occidentales.',
          discoveredGoodsOrIdeas: ['Información de mercados', 'Rutas de demanda', 'Precios de ultramar']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Invertir en especias secas de altísimo valor por peso',
          description: 'Compran clavo de olor, nuez moscada y canela, que ocupan poco espacio en las mulas de carga y no se descomponen con el calor.',
          consequence: 'La carga de la caravana se vuelve liviana y muy valiosa. Descubren que cada especia pasó por pescadores de las islas Molucas, marineros indios y caravanas persas antes de llegar a sus manos.',
          historicalInsight: 'Las especias eran el ejemplo cumbre del comercio por etapas: ningún mercader controlaba la ruta completa desde las islas de origen.',
          chronicleText: 'Cargamos especias compactas de gran valor, testimonio de incontables intermediarios comerciales.',
          discoveredGoodsOrIdeas: ['Clavo de olor', 'Nuez moscada', 'Cadena de intermediarios']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Conversar con veteranos de las rutas sobre peligros y caminos',
          description: 'Se reúnen en el caravasar con guías que cruzaron el desierto para conocer qué pasos de montaña están libres de bandidos.',
          consequence: 'Los ancianos les describen oasis secretos, tormentas de arena del Taklamakan y los tributos que exigen los jefes nómadas para dejarlos pasar en paz.',
          historicalInsight: 'El tránsito por las rutas dependía enteramente de la diplomacia local, los pactos de protección y la experiencia oral de los guías.',
          chronicleText: 'Conversamos con viejos caravaneros y aprendimos cómo sortear los peligros del camino.',
          discoveredGoodsOrIdeas: ['Consejos de ruta', 'Costumbres de hospitalidad', 'Pactos de salvoconducto']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Aprender palabras clave en los dialectos de la región',
          description: 'Dedican las horas a memorizar términos de saludo, comercio y advertencia en persa y túrquico con los tenderos del zoco.',
          consequence: 'Descubren que un saludo respetuoso en la lengua del anfitrión desarma la desconfianza más rápido que una bolsa de monedas. Los mercaderes les abren sus casas y les ofrecen té caliente.',
          historicalInsight: 'Las rutas comerciales funcionaron como gigantescos espacios políglotas donde las lenguas francas facilitaban la convivencia entre pueblos.',
          chronicleText: 'Aprendimos dialectos locales y expresiones de cortesía que nos protegieron en la travesía.',
          discoveredGoodsOrIdeas: ['Lenguas de intercambio', 'Códigos de hospitalidad', 'Fraternidad caravanera']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Trazar mapas de pozos de agua y caravasares con los guías locales',
          description: 'Piden a pastores y tratantes de camellos que les dibujen sobre cuero la ubicación exacta de las fuentes de agua dulce.',
          consequence: 'Obtienen un trazado invaluable de aguadas en el desierto. Comprueban que las ciudades de la Ruta de la Seda crecieron exactamente donde brotaba el agua en medio de la aridez.',
          historicalInsight: 'La geografía física y la presencia de agua determinaban de forma ineludible el trazado y la supervivencia de las caravanas.',
          chronicleText: 'Trazamos un mapa preciso de oasis y fuentes de agua dulce para cruzar el desierto.',
          discoveredGoodsOrIdeas: ['Mapa de aguadas', 'Geografía de oasis', 'Puntos de abastecimiento']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Inspeccionar las boticas de especias y raíces curativas',
          description: 'Buscan jengibre fresco, alcanfor puro del Tíbet y resinas aromáticas para armar el botiquín de primeros auxilios del viaje.',
          consequence: 'El boticario del zoco les enseña a distinguir el clavo auténtico de las imitaciones secas y les vende raíces contra las diarreas. Esas medicinas salvarán a varios camelleros de caer postrados.',
          historicalInsight: 'En la Edad Media, las especias eran tanto condimento gastronómico como la materia prima fundamental de la medicina y la conservación.',
          chronicleText: 'Abastecimos la botica con alcanfor y corteza curativa para proteger la salud de la caravana.',
          discoveredGoodsOrIdeas: ['Alcanfor del Tíbet', 'Farmacopea de especias', 'Botiquín de marcha']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Preguntar a los médicos locales por las fiebres y aguas de la ruta',
          description: 'Visitan a los sanadores de la ciudad para indagar qué enfermedades atacan a los forasteros en los próximos tramos del viaje.',
          consequence: 'Les advierten que hervir el agua de los pozos salobres y evitar los pantanos donde abundan jejenes previene las "fiebres tercianas". La prevención salva vidas en el camino.',
          historicalInsight: 'Los médicos medievales relacionaban las enfermedades con el clima, las aguas estancadas y la corrupción del aire en diferentes regiones.',
          chronicleText: 'Consultamos a los médicos locales y aprendimos a prevenir fiebres consumiendo agua hervida.',
          discoveredGoodsOrIdeas: ['Pautas de higiene del agua', 'Prevención de fiebres', 'Medicina preventiva']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Observar las condiciones higiénicas de los campamentos de animales',
          description: 'Revisan cómo descansan los camellos y mulas y cómo se manejan los desechos orgánicos en los corrales del mercado.',
          consequence: 'Comprueban que la acumulación de estiércol y el hacinamiento de animales atraen enjambres de moscas y parásitos. Reorganizan los petates de la caravana para mantener los víveres aislados del suelo.',
          historicalInsight: 'La convivencia estrecha entre seres humanos y animales de tiro en las caravanas era una fuente constante de transmisión de parásitos e infecciones.',
          chronicleText: 'Mejoramos la higiene de los animales y víveres, evitando contaminaciones en el campamento.',
          discoveredGoodsOrIdeas: ['Higiene en caravasares', 'Cuidado de animales de carga', 'Aislamiento de víveres']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Analizar los libros contables en papel y los sellos aduaneros',
          description: 'Examinan cómo los escribas registran aranceles, inventarios y contratos en finas tiras de papel ligadas con cordeles de seda.',
          consequence: 'Descubren que los escribas usan sistemas de registro ordenado y sellos de arcilla y tinta para garantizar que nadie abra los fardos antes del destino. La escritura protege los intercambios.',
          historicalInsight: 'La burocracia comercial y el uso del papel en Asia Central agilizaron los intercambios continentales siglos antes de su adopción masiva en Europa.',
          chronicleText: 'Estudiamos los métodos contables en papel y los sellos aduaneros que gobernaban el comercio.',
          discoveredGoodsOrIdeas: ['Contabilidad en papel', 'Sellos de aduana', 'Administración comercial']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Conversar con astrónomos y sabios sobre los astrolabios del mercado',
          description: 'Se acercan a los puestos donde artesanos tallan discos de latón con constelaciones y coordenadas de latitud.',
          consequence: 'Un sabio les muestra cómo un astrolabio permite conocer la hora durante la noche mirando la estrella Polar y orientarse en medio de llanuras sin caminos marcados.',
          historicalInsight: 'La astronomía medieval no era una ciencia aislada, sino una herramienta indispensable para la navegación terrestre y marítima.',
          chronicleText: 'Conversamos con astrónomos sobre el uso del astrolabio para orientar el rumbo nocturno.',
          discoveredGoodsOrIdeas: ['Astrolabio de latón', 'Coordenadas astronómicas', 'Navegación celeste']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Comparar monedas de diferentes dinastías y caligrafías',
          description: 'Revisan monedas de plata, bronce y cobre acuñadas en China, el califato abásida y reinos de la India.',
          consequence: 'Se maravillan al ver cómo en un mismo mercado conviven inscripciones en caracteres chinos, caligrafía cúfica árabe y sánscrito. El dinero es un reflejo de los imperios que sostienen las rutas.',
          historicalInsight: 'La estabilidad de las rutas comerciales dependía del poder de grandes imperios que acuñaban moneda y protegían los caminos.',
          chronicleText: 'Comparamos monedas y caligrafías de imperios lejanos, descubriendo su respaldo político.',
          discoveredGoodsOrIdeas: ['Acuñaciones monetarias', 'Caligrafías de Oriente', 'Moneda y poder']
        }
      ]
    }
  },
  {
    id: 'paper-secret',
    number: 2,
    title: 'El secreto del papel',
    theme: 'Circulación de técnicas y saberes prácticos',
    location: 'Taller de artesanos papeleros junto al río',
    illustrationType: 'paper',
    intro: 'En un barrio de artesanos húmedo por los canales del río, ven grandes bastidores y cientos de hojas blancuzcas apiladas secándose al sol. Un maestro papelero revuelve una pulpa de fibras de trapos viejos y cáñamo en una pileta de piedra con mazos hidráulicos. En sus tierras natales todavía se escribe sobre costosos pergaminos de piel de oveja. El maestro observa su curiosidad y les pregunta qué buscan.',
    prompt: 'El taller está en plena labor. ¿Cómo decide actuar la caravana frente al maestro papelero?',
    teacherPrompt: '¿Es lo mismo comprar un invento que aprender la técnica para producirlo por cuenta propia?',
    characterFlavor: {
      merchant: 'Hacés cuentas rápidas: una resma de papel pesa una fracción de los rollos de cuero y cuesta diez veces menos transportarla.',
      traveler: 'Te conmueve ver cómo telas rotas y desechos de ropa usada renacen convertidos en una superficie limpia para la memoria.',
      medic: 'Pensás en tus cuadernos de recetas: sobre papel podrías dibujar con precisión las hojas de cada planta sin gastar pieles de ternera.',
      scholar: 'Tu corazón late con fuerza. El papel multiplica los libros sin tener que sacrificar rebaños enteros de ganado.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Comprar varios fardos de papel terminado para registros de viaje',
          description: 'Adquieren resmas de papel liviano para anotar cuentas, deudas y contratos con mucha mayor comodidad que los pesados rollos de cuero.',
          consequence: 'Alivianan notablemente el peso de la caravana. Sin embargo, cuando las hojas se agoten en unos meses, volverán a depender de comprarlas a talleres lejanos a precios elevados.',
          historicalInsight: 'Comprar mercancías manufacturadas resuelve necesidades inmediatas, pero mantiene la dependencia si no se asimila la tecnología.',
          chronicleText: 'Compramos fardos de papel ligero para nuestros registros, aprovechando su utilidad inmediata.',
          discoveredGoodsOrIdeas: ['Resmas de papel suave', 'Registros contables ligeros', 'Consumo manufacturado']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Firmar un contrato para transportar papel hacia universidades de Occidente',
          description: 'Negocian acopiar fardos selectos de papel con destino a las facultades de Bolonia, París y Salerno, donde los estudiantes pagan fortunas por material para escribir.',
          consequence: 'Logran un precio mayorista imbatible. La caravana transforma un producto artesanal en un negocio rentable, comprobando cómo la educación multiplica la demanda comercial.',
          historicalInsight: 'El florecimiento de las universidades medievales generó una demanda masiva de soporte de escritura barato que el pergamino no podía satisfacer.',
          chronicleText: 'Acordamos transportar fardos de papel para abastecer a estudiantes y copistas de Occidente.',
          discoveredGoodsOrIdeas: ['Demanda universitaria de papel', 'Contrato de transporte', 'Comercio del saber']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Continuar el viaje sin comprar papel por temor a la lluvia',
          description: 'Deciden no invertir dinero en papel, argumentando que una tormenta en el camino arruinaría las hojas, mientras el pergamino de cuero resiste el agua.',
          consequence: 'Evitan el riesgo de pérdidas por humedad, pero pierden la oportunidad de modernizar sus registros y comprobar las ventajas del nuevo material.',
          historicalInsight: 'La adopción de nuevas tecnologías medievales solía enfrentar reticencias por desconfianza hacia la durabilidad de los nuevos materiales.',
          chronicleText: 'Decidimos continuar sin papel, apegados a la costumbre tradicional del pergamino de cuero.',
          discoveredGoodsOrIdeas: ['Prudencia comercial', 'Resistencia al cambio técnico', 'Valor del cuero tradicional']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Preguntar al maestro cómo se prepara la pulpa a partir de trapos viejos',
          description: 'Piden permiso para observar el macerado de restos de lino y cáñamo y cómo los tamices de caña filtran el agua dejando una capa uniforme.',
          consequence: 'El maestro les muestra cómo telas viejas e inservibles se convierten en hojas puras. Aprenden que cualquier pueblo con agua corriente y ropa usada puede producir papel.',
          historicalInsight: 'A diferencia del pergamino, el papel democratizó la escritura porque aprovechaba materiales reciclados y energía hidráulica.',
          chronicleText: 'Observamos el secreto del molino de papel y cómo se elabora pulpa con trapos reciclados.',
          discoveredGoodsOrIdeas: ['Técnica del molino de papel', 'Reciclaje de lino y cáñamo', 'Pulpa hidráulica']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Aprender a encerar hojas para confeccionar mapas portátiles',
          description: 'Piden al artesano que les enseñe a tratar el papel con cera de abejas para volverlo impermeable y doblarlo en bolsillos de viaje.',
          consequence: 'Fabrican mapas de bolsillo que resisten el sudor y la lluvia. Descubren que la maleabilidad del papel permite a los viajeros llevar atlas enteros sin ocupar espacio.',
          historicalInsight: 'La ligereza y flexibilidad del papel transformó la cartografía, facilitando la difusión de mapas de viaje y cuadernos de bitácora.',
          chronicleText: 'Elaboramos mapas encerados impermeables de bolsillo para orientar la marcha.',
          discoveredGoodsOrIdeas: ['Mapas encerados', 'Cartografía portátil', 'Adaptación técnica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Indagar cómo viajó la técnica desde China hasta Samarcanda',
          description: 'Se sientan con el anciano del taller a escuchar la historia de los artesanos chinos prisioneros tras la batalla de Talas en el 751.',
          consequence: 'El anciano les relata cómo artesanos cautivos transmitieron el oficio y cómo en Samarcanda lo perfeccionaron usando cáñamo local y mazos movidos por ríos.',
          historicalInsight: 'Las guerras y las migraciones forzadas fueron con frecuencia canales inesperados de difusión tecnológica entre civilizaciones distantes.',
          chronicleText: 'Escuchamos la crónica de cómo el secreto del papel viajó desde China y echó raíces en Asia Central.',
          discoveredGoodsOrIdeas: ['Memoria oral de Talas', 'Difusión de oficios', 'Migración artesanal']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Adquirir papel fino para ilustrar especies botánicas y recetas',
          description: 'Compran pliegos lisos para dibujar raíces, flores y hojas medicinales con tinta vegetal, reemplazando el costoso pergamino.',
          consequence: 'Logran encuadernar un herbario portátil detallado. Comprueban que con papel un estudiante de medicina puede acumular cientos de páginas de recetas sin arruinarse.',
          historicalInsight: 'La proliferación de tratados médicos y botánicos en el mundo medieval fue posible gracias a la abundancia de papel accesible.',
          chronicleText: 'Compusimos un herbario ilustrado sobre papel fino para conservar remedios botánicos.',
          discoveredGoodsOrIdeas: ['Herbario sobre papel', 'Documentación clínica', 'Multiplicación de recetas']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Examinar las aguas estancadas del molino y la salud de los artesanos',
          description: 'Observan las piletas de fermentación donde los trapos se pudren al sol y preguntan a los obreros por dolores pulmonares o fiebres.',
          consequence: 'Advierten que los vapores de fermentación y la humedad constante provocan toses crónicas en los artesanos. Les recomiendan ventilar los galpones y desviar aguas limpias del río.',
          historicalInsight: 'Los médicos medievales comenzaban a observar los efectos directos de las condiciones de trabajo artesanal sobre la salud humana.',
          chronicleText: 'Evaluamos la salud de los operarios del molino y aconsejamos ventilar los obradores húmedos.',
          discoveredGoodsOrIdeas: ['Observación de salud laboral', 'Riesgos del agua estancada', 'Higiene de talleres']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Investigar si las fibras de lino hervido sirven como vendajes estériles',
          description: 'Piden muestras de fibra de cáñamo y lino lavada y hervida para probar su absorción en heridas abiertas de los viajeros.',
          consequence: 'Comprueban que las fibras maceradas y secas absorben la sangre con eficacia y protegen las heridas del polvo del camino. La caravana gana un recurso médico invaluable.',
          historicalInsight: 'Los materiales de la industria textil y papelera solían ser reutilizados creativamente para curaciones y vendas en los viajes.',
          chronicleText: 'Adaptamos fibras limpias de lino hervido como apósitos absorbentes para heridas de viaje.',
          discoveredGoodsOrIdeas: ['Apósitos de lino hervido', 'Vendajes de viaje', 'Curación con fibras']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Comprar fardos de papel para copiar tratados científicos',
          description: 'Adquieren hojas para copiar textos de astronomía, medicina y filosofía sin tener que sacrificar rebaños de ganado para obtener pergamino.',
          consequence: 'Constatan que en una sola resma cabe el contenido de una biblioteca entera que antes requería docenas de ovejas. El conocimiento se vuelve transportable y reproducible.',
          historicalInsight: 'El papel abarató radicalmente la producción de libros, permitiendo que el saber dejara de ser monopolio exclusivo de monasterios acaudalados.',
          chronicleText: 'Adquirimos papel abundante para transcribir manuscritos y multiplicar bibliotecas.',
          discoveredGoodsOrIdeas: ['Democratización del libro', 'Multiplicación textual', 'Abaratamiento del saber']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Dibujar los planos del molino hidráulico y anotar la fórmula de encolado',
          description: 'Trazan en sus cuadernos el diagrama de las mazas movidas por ruedas de agua y las proporciones de almidón de trigo para impermeabilizar la hoja.',
          consequence: 'El maestro papelero aprecia su precisión técnica y les permite documentar cada paso. Con estos planos, cualquier comunidad con un río podrá erigir su propio molino papelero.',
          historicalInsight: 'La transmisión escrita y dibujada de planos técnicos permitió que los molinos papeleros se multiplicaran con rapidez en Al-Ándalus e Italia.',
          chronicleText: 'Dibujamos los planos del molino de mazas de agua y la fórmula técnica del papel.',
          discoveredGoodsOrIdeas: ['Plano de molino hidráulico', 'Fórmula del almidón de encolado', 'Apropiación tecnológica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Debatir con el maestro sobre la durabilidad del papel frente al pergamino',
          description: 'Discuten si una hoja hecha de trapos vegetales podrá sobrevivir siglos en los estantes de una biblioteca con la misma nobleza que la piel curtida.',
          consequence: 'El maestro les muestra libros de papel fabricados cien años antes en Bagdad que siguen intactos. Comprenden que bien cuidado, el papel conserva la memoria humana tanto como el cuero.',
          historicalInsight: 'El debate entre la resistencia secular del pergamino y la practicidad del papel ocupó a letrados y notarios durante siglos.',
          chronicleText: 'Debatimos sobre la longevidad del papel, confirmando que preserva la memoria por generaciones.',
          discoveredGoodsOrIdeas: ['Debate sobre la memoria escrita', 'Pergamino vs papel', 'Conservación de archivos']
        }
      ]
    }
  },
  {
    id: 'numbers-travel',
    number: 3,
    title: 'Nuevas formas de contar: La Encrucijada de las Rutas',
    theme: 'Conocimientos matemáticos, cálculo de riesgos y la elección de rutas',
    location: 'Lonja mercantil y escuela de cálculo — Encrucijada entre el paso continental y los puertos del Índico',
    illustrationType: 'math',
    intro: 'La caravana llega a una bulliciosa lonja de comercio y escuela de cálculo en la encrucijada del continente. Sobre tablas de arena y pliegos de papel, los calculistas trazan símbolos asombrosos: los nueve guarismos y el círculo vacío del cero (*sifr*). Con esas pocas marcas resuelven en segundos un debate crucial que divide a los viajeros: calcular los costos, jornadas y provisiones para continuar la marcha por tierra hacia las mesetas de Persia y Bagdad... o calcular los fletes de bodegas, las fechas de los vientos monzones y las ganancias de descender hacia los puertos del sur para cruzar el océano hacia Occidente. Dos destinos se miden sobre la arena.',
    prompt: 'Frente a las tablas de cálculo y los mapas de la encrucijada, ¿qué decisión toma el curso para el rumbo de la expedición?',
    teacherPrompt: '¿Cómo influyeron las matemáticas, el cálculo de riesgos y la geografía en la decisión de los viajeros medievales entre atravesar continentes por tierra o surcar los océanos?',
    characterFlavor: {
      merchant: 'Miras las tablas de cálculo en la lonja: los números comparan el costo de cien camellos cruzando la meseta persa contra el flete de un solo navío mercante en el Índico. La matemática revela el dilema entre el camino seguro de tierra o la gran apuesta del mar.',
      traveler: 'En la posada escuchas dos relatos opuestos: los caravaneros que se preparan para los pasos rocosos hacia Bagdad y los marineros que aguardan el soplo del monzón para zarpar hacia Ormuz. Cada camino exige un coraje distinto.',
      medic: 'Revisas las raciones calculadas por los escribas: la marcha terrestre expone a la sed del desierto y a las fatigas del polvo; la travesía marina exige racionar el agua en toneles y prevenir el escorbuto en bodegas. La salud de la expedición depende del camino elegido.',
      scholar: 'Te asombra ver cómo los nuevos guarismos y el cero se usan para medirlo todo: leguas de marcha terrestre, fletes de bodegas y ángulos de estrellas marinas. La ciencia matemática es la brújula que decidirá si nuestro viaje continúa por tierra o por mar.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Aprender las cifras arábigas para optimizar la caravana terrestre hacia Bagdad',
          description: 'Piden al escriba que les enseñe a sumar y multiplicar con los nuevos dígitos en papel para calcular costos de peajes y raciones, decidiendo continuar por la ruta continental hacia las ferias de Mesopotamia.',
          consequence: 'Aceleran los balances comerciales y reducen los costos de marcha terrestre. La caravana avanza organizada hacia Bagdad con registros contables ágiles y precisos.',
          historicalInsight: 'Los mercaderes que adoptaron el cálculo algorítmico escrito pudieron gestionar caravanas más grandes y complejas con balances detallados de pérdidas y ganancias.',
          chronicleText: 'Aplicamos las cifras indoarábigas para optimizar los costos de nuestra caravana terrestre rumbo a Bagdad.',
          discoveredGoodsOrIdeas: ['Cálculo algorítmico', 'Eficiencia contable terrestre', 'Cifras indoarábigas']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Confiar en el ábaco tradicional y mantener la ruta caravanera conocida',
          description: 'Prefieren no arriesgarse con métodos extraños ni aventurarse al mar: calculan con el ábaco de cuentas tradicional y siguen los senderos terrestres conocidos hacia Persia.',
          consequence: 'Sus clientes y socios tradicionales confían en las cuentas visibles del ábaco de madera. Aunque el avance por tierra es lento y costoso, el camino resulta previsible.',
          historicalInsight: 'La resistencia a las nuevas técnicas contables y el apego a las rutas tradicionales de tierra fue muy común entre los gremios mercantiles más conservadores.',
          chronicleText: 'Mantuvimos el ábaco tradicional y la ruta terrestre de caravanas, priorizando la confianza conocida.',
          discoveredGoodsOrIdeas: ['Ábaco tradicional', 'Ruta continental segura', 'Conservadurismo mercantil']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Calcular fletes de ultramar e invertir en la ruta marítima del Índico',
          description: 'Al comprobar en las tablas que un solo navío mercante en el Índico carga diez veces más que la caravana a menor flete, deciden desviar su capital hacia los puertos costeros y zarpar.',
          consequence: 'Los números no mienten: la rentabilidad del transporte marítimo supera por completo el límite de los camellos. Abandonan la tierra y embarcan sus mercancías en flotas de dhows hacia Ormuz.',
          historicalInsight: 'El transporte marítimo en el Índico revolucionó el comercio euroasiático al permitir transportar mercancías a granel que eran inviables a lomo de animales de carga.',
          chronicleText: 'Los cálculos demostraron la ventaja del mar: desviamos el capital a fletes navales por el Océano Índico.',
          discoveredGoodsOrIdeas: ['Fletes navales a gran escala', 'Economía marítima', 'Ruta Marítima de la Seda']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Aprender a medir distancias con los números y seguir la ruta terrestre a Bagdad',
          description: 'Piden a los escribas que les enseñen a calcular leguas diarias y raciones de agua para cruzar las mesetas montañosas hacia Mesopotamia con etapas medidas.',
          consequence: 'Convierten la marcha de la caravana en una ruta planificada: saben con precisión cuántas leguas restan para cada oasis y caravasar en el camino hacia Bagdad.',
          historicalInsight: 'La introducción de mediciones de distancia sistemáticas permitió planificar jornadas terrestres con mayor precisión y evitar desastres en pasos desérticos.',
          chronicleText: 'Calculamos con exactitud las leguas y jornadas para guiar la caravana por tierra hacia Bagdad.',
          discoveredGoodsOrIdeas: ['Medición de distancias', 'Planificación de jornadas', 'Ruta terrestre a Bagdad']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Confiar en la memoria oral de los guías y continuar por los pasos de tierra',
          description: 'Sostienen que para viajar por tierra vale más la memoria de los accidentes geográficos que números en un papel; deciden seguir a los baqueanos por el camino continental.',
          consequence: 'Mantienen su comunión con los saberes ancestrales de la ruta terrestre. La experiencia empírica de los viejos caravaneros los conduce sanos y salvos entre los pasos rocosos.',
          historicalInsight: 'La orientación tradicional mediante accidentes geográficos, estrellas y memoria oral fue durante milenios el soporte de las caravanas de Asia Central.',
          chronicleText: 'Seguimos la memoria oral de los guías para atravesar los pasos de montaña hacia Mesopotamia.',
          discoveredGoodsOrIdeas: ['Memoria geográfica oral', 'Saberes ancestrales de ruta', 'Guías caravaneros']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Calcular las fechas del monzón y cambiar los camellos por un dhow marino',
          description: 'Comprueban en las tablas de la lonja que la temporada del monzón está por comenzar; deciden descender a los puertos costeros y embarcarse con los marineros del Índico.',
          consequence: 'Cambian las pistas de arena por las olas oceánicas. Se integran a tripulaciones políglotas guiadas por constelaciones, iniciando la travesía marina hacia los puertos de Arabia.',
          historicalInsight: 'El calendario de navegación en el Índico estaba regido inexorablemente por los vientos monzones; calcular la temporada exacta de zarpe era cuestión de vida o muerte.',
          chronicleText: 'Calculamos el ciclo de los vientos monzones y decidimos surcar el Océano Índico a bordo de dhows.',
          discoveredGoodsOrIdeas: ['Vientos monzones', 'Navegación oceánica', 'Calendario de zarpe']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Cuantificar las dosis botánicas con exactitud y continuar la ruta a Bagdad',
          description: 'Aprenden a usar las fracciones y el cero para dosificar con precisión matemática los remedios de la caravana antes de internarse hacia los grandes hospitales de Bagdad.',
          consequence: 'Eliminan los errores fatales en las mezclas de beleño y opio. El botiquín de la caravana se convierte en un modelo de farmacología cuantitativa camino al Bimaristán.',
          historicalInsight: 'La medicina árabe medieval fue pionera mundial en fijar dosis farmacológicas ponderadas con rigurosa exactitud matemática.',
          chronicleText: 'Estandarizamos las dosis médicas con precisión numérica para el viaje terrestre hacia Bagdad.',
          discoveredGoodsOrIdeas: ['Farmacología cuantitativa', 'Dosificación exacta', 'Hacia el Bimaristán']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Confiar en el ojo clínico directo y seguir la marcha por el interior continental',
          description: 'Sostienen que la salud de los viajeros depende de la auscultación directa del pulso y la tez antes que de sumas abstractas; mantienen los cuidados tradicionales por tierra.',
          consequence: 'Cuidan con devoción humana a los caravaneros fatigados por el polvo del camino. La observación atenta de los humores corporales sostiene el ánimo del grupo en la marcha.',
          historicalInsight: 'La tradición médica hipocrática clásica priorizaba la observación atenta de los síntomas individuales y el clima frente a las abstracciones matemáticas.',
          chronicleText: 'Cuidamos la salud de la caravana mediante la observación clínica tradicional a lo largo de la ruta de tierra.',
          discoveredGoodsOrIdeas: ['Juicio clínico hipocrático', 'Observación sensorial', 'Medicina tradicional de viaje']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Calcular raciones marítimas y descender a los puertos por las especias de ultramar',
          description: 'Calculan en la lonja que las bodegas marinas permiten traer resinas de mirra, incienso y alcanfor fresco de las islas lejanas; deciden embarcarse por mar atendiendo a las tripulaciones.',
          consequence: 'Descienden a los muelles del Índico en busca de los ingredientes más codiciados de la farmacopea oriental, enfrentando el desafío médico del racionamiento de agua dulce en alta mar.',
          historicalInsight: 'Las materias médicas más selectas y exóticas solo estaban disponibles en estado puro a través de las rutas de ultramar que recalaban en los puertos del Índico y el Mar Rojo.',
          chronicleText: 'Elegimos la ruta del mar para recolectar especias medicinales frescas de ultramar y estudiar la salud a bordo.',
          discoveredGoodsOrIdeas: ['Especias frescas de ultramar', 'Medicina naval y estibaje', 'Incienso y alcanfor']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Copiar los tratados de cifras y álgebra para llevarlos a las academias de Bagdad',
          description: 'Copia con devoción los nueve guarismos y el concepto del cero (*sifr*), decidiendo llevar estos tratados matemáticos a la Casa de la Sabiduría de Bagdad para su traducción.',
          consequence: 'Comprenden cómo la ciencia viaja en las alforjas de los sabios. El álgebra y el cálculo posicional acompañan a la caravana por tierra hacia la mayor metrópolis intelectual de la época.',
          historicalInsight: 'Bagdad fue el centro mundial donde se tradujeron, comentaron y ampliaron los textos matemáticos de la India, dando origen al álgebra de Al-Jwarizmi.',
          chronicleText: 'Copiamos los tratados de numeración y álgebra para llevarlos hacia los círculos académicos de Bagdad.',
          discoveredGoodsOrIdeas: ['Concepto del cero (sifr)', 'Álgebra de Bagdad', 'Transmisión del saber por tierra']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Defender la lógica del ábaco y debatir con los maestros tradicionales de la ruta',
          description: 'Prefieren profundizar en el ábaco de líneas y las tablas de cálculo tradicionales griegas, debatiendo con los mercaderes conservadores en las posadas continentales.',
          consequence: 'Comprueban cómo las tradiciones científicas milenarias resisten el cambio y defienden su eficacia práctica frente a las novedades abstractas a lo largo de las rutas de Asia Central.',
          historicalInsight: 'La disputa entre abacistas y algoristas duró siglos y reflejó dos visiones opuestas sobre la ciencia, la educación y el valor de la tradición frente a la innovación.',
          chronicleText: 'Estudiamos la resistencia del ábaco tradicional frente a las nuevas cifras escritas en la ruta continental.',
          discoveredGoodsOrIdeas: ['Disputa abacistas vs algoristas', 'Debate pedagógico medieval', 'Tradición matemática']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aplicar las matemáticas a la astronomía náutica y embarcarse hacia el océano',
          description: 'Al ver cómo los pilotos del Índico usan la geometría y el astrolabio para calcular latitudes en alta mar, deciden abordar un navío para comprobar la ciencia en el océano.',
          consequence: 'Suben a bordo provistos de tablas estelares y el *kamal*. Comprueban que en medio del océano las matemáticas no son teoría de biblioteca, sino la única guía viva para no naufragar.',
          historicalInsight: 'La astronomía náutica árabe e india aplicó la trigonometría y el cálculo esférico a la navegación marina mucho antes de su adopción en la Europa medieval.',
          chronicleText: 'Decidimos embarcarnos para aplicar las matemáticas y la astronomía náutica en las inmensidades del océano.',
          discoveredGoodsOrIdeas: ['Astronomía náutica', 'El Kamal y astrolabio marino', 'Trigonometría aplicada']
        }
      ]
    }
  },
  {
    id: 'city-books-remedies',
    number: 4,
    branch: 'land',
    title: 'Curar el cuerpo, ordenar el mundo',
    theme: 'Intercambios científicos, médicos y filosóficos',
    location: 'Bimaristán y Casa de la Sabiduría',
    illustrationType: 'medicine',
    intro: 'La caravana llega a una ciudad con una monumental mezquita, jardines de plantas aromáticas y un hospital (*bimaristán*) con cientos de camas. En sus salas, médicos examinan pacientes de todas las clases sociales sin cobrarles, mientras en las galerías contiguas copistas y traductores discuten manuscritos griegos, persas y siríacos. Un médico jefe invita a la caravana a recorrer las salas de curación y estudio.',
    prompt: 'El centro médico y la biblioteca están en plena actividad. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿El mundo islámico fue un simple puente pasivo o un centro activo de creación y discusión de saberes?',
    characterFlavor: {
      merchant: 'Ves frascos de triaca sellada y aceites medicinales finísimos: en Europa los nobles pagarían su peso en oro por estos ungüentos.',
      traveler: 'Te conmueve ver que en las salas del hospital atienden por igual a ricos y mendigos, a musulmanes, cristianos y judíos.',
      medic: 'Tu corazón se acelera. Estás frente a los discípulos de Avicena y Rhazes, los mayores clínicos que ha conocido la historia.',
      scholar: 'Cientos de códices de botánica, astronomía y filosofía alineados en estantes de cedro. Aquí el conocimiento del mundo está vivo.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Comprar ungüentos selectos y triaca aromática para revender en ferias',
          description: 'Adquieren frascos sellados de triaca compuesta y agua de rosas pura de Damasco para comercializarlos en las boticas de Europa.',
          consequence: 'Aseguran mercancías de altísima demanda y prestigio médico. Descubren que la triaca tiene decenas de ingredientes exóticos traídos de tres continentes distintos.',
          historicalInsight: 'La triaca fue el medicamento más costoso y codiciado de la Edad Media, símbolo del comercio de lujo medicinal internacional.',
          chronicleText: 'Adquirimos triaca y ungüentos medicinales selectos para las boticas de Occidente.',
          discoveredGoodsOrIdeas: ['Triaca veneciana/oriental', 'Agua de rosas destilada', 'Mercado del lujo farmacéutico']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Conversar con comerciantes de libros sobre el valor de los manuscritos',
          description: 'Visitan el zoco de los libreros para entender cómo se tasan los códices traducidos y qué textos buscan los compradores acaudalados.',
          consequence: 'Comprueban que un buen manuscrito copiado sobre papel fino vale tanto como un caballo de guerra. El comercio de libros era una de las industrias más lucrativas de las grandes urbes.',
          historicalInsight: 'Las ciudades islámicas albergaban prósperos mercados de libros con decenas de librerías y talleres de copiado profesional.',
          chronicleText: 'Investigamos el mercado de compraventa de libros manuscritos en los bazares del saber.',
          discoveredGoodsOrIdeas: ['Mercado de manuscritos', 'Talleres de copistas', 'Valor económico del libro']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Ofrecer suministros de especias raras para los preparados del hospital',
          description: 'Negocian vender al bimaristán parte de las resinas, mirra y canela que transporta la caravana a cambio de salvoconductos y oro.',
          consequence: 'Logran un trato honorable y lucrativo. El hospital agradece el aprovisionamiento de materias primas frescas para preparar los jarabes de sus pacientes.',
          historicalInsight: 'Los grandes hospitales medievales dependían de redes comerciales globales para abastecer sus complejas recetas farmacológicas.',
          chronicleText: 'Abastecimos al hospital con resinas y especias frescas traídas por nuestra caravana.',
          discoveredGoodsOrIdeas: ['Suministro hospitalario', 'Redes de botica', 'Comercio y salud']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Recorrer las salas para observar cómo acogen a enfermos de toda condición',
          description: 'Visitan los pabellones de hombres, mujeres y pacientes con melancolía, maravillados por la música de agua y la limpieza de las salas.',
          consequence: 'Descubren que el hospital se sostiene mediante fundaciones pías (*waqf*) que garantizan atención gratuita sin importar origen ni religión. Es una lección de humanidad y organización urbana.',
          historicalInsight: 'Los bimaristanes islámicos fueron los primeros hospitales públicos de la historia con salas especializadas, camas individuales e higiene rigurosa.',
          chronicleText: 'Recorrimos el bimaristán y conocimos su modelo de atención médica pública y gratuita.',
          discoveredGoodsOrIdeas: ['Hospital público (Bimaristán)', 'Fundaciones pías (Waqf)', 'Atención sin distinción social']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Conversar con viajeros internados sobre las noticias de ultramar',
          description: 'Se sientan junto a marineros y peregrinos convalecientes para escuchar qué dificultades vivieron en los puertos del Levante.',
          consequence: 'Un marino les advierte sobre tensiones militares en el Mediterráneo y sobre rumores de puertos donde la gente enferma de repente. La información previene a la caravana.',
          historicalInsight: 'Los hospitales de las ciudades de paso funcionaban también como puntos de encuentro y flujo de noticias entre viajeros de todo el orbe.',
          chronicleText: 'Recopilamos noticias de puertos lejanos a través de viajeros internados en el hospital.',
          discoveredGoodsOrIdeas: ['Testimonios de viajeros', 'Rumores de ultramar', 'Redes de información hospitalaria']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprender remedios de emergencia que todo viajero debe dominar',
          description: 'Piden a los enfermeros que les enseñen a entablillar fracturas de marcha, tratar picaduras de alacrán y desinfectar ampollas.',
          consequence: 'Adquieren técnicas prácticas de primeros auxilios que aumentan la autosuficiencia de la caravana ante accidentes en parajes despoblados.',
          historicalInsight: 'El conocimiento médico popular y las técnicas de primeros auxilios eran vitales para los grupos que atravesaban regiones desérticas.',
          chronicleText: 'Aprendimos técnicas de primeros auxilios para socorrer fracturas y picaduras en la ruta.',
          discoveredGoodsOrIdeas: ['Primeros auxilios de caravana', 'Tratamiento de fracturas', 'Autosuficiencia en el camino']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Acompañar a los médicos jefe durante el examen clínico de los pacientes',
          description: 'Siguen las rondas de los médicos para observar cómo examinan el pulso arterial, la orina en matraz de vidrio y la temperatura de los enfermos.',
          consequence: 'Comprueban la minuciosa observación clínica de los maestros, que no se limitan a recitar libros antiguos sino que confrontan la teoría con el cuerpo real del paciente.',
          historicalInsight: 'Médicos como Rhazes insistieron en la primacía de la observación clínica directa y la experiencia sobre la autoridad ciega de los textos antiguos.',
          chronicleText: 'Acompañamos a los médicos en sus exámenes clínicos, aprendiendo el valor del diagnóstico empírico.',
          discoveredGoodsOrIdeas: ['Observación del pulso', 'Uroscopia clínica', 'Diagnóstico experimental']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Copiar capítulos del Canon de Medicina de Avicena sobre prevención',
          description: 'Pasan horas en la biblioteca transcribiendo las secciones sobre dietética, ejercicio, calidad del aire y equilibrio de los cuatro humores.',
          consequence: 'Obtienen un tesoro doctrinal. Aprenden que prevenir la enfermedad cuidando el aire, la comida y el descanso es más eficaz que intentar curarla cuando ya se desató.',
          historicalInsight: 'El *Canon de Medicina* de Avicena fue la enciclopedia médica estándar tanto en el mundo islámico como en las universidades europeas durante más de 500 años.',
          chronicleText: 'Transcribimos capítulos del Canon de Avicena sobre higiene y prevención de enfermedades.',
          discoveredGoodsOrIdeas: ['Canon de Avicena', 'Teoría de los humores', 'Higiene y medicina preventiva']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Debatir con los sabios sobre la causa del contagio de las fiebres',
          description: 'Plantean la discusión sobre si las epidemias se transmiten de persona a persona o si se originan por corrupción de los miasmas en el aire.',
          consequence: 'Los médicos sostienen que ciertos vapores pútridos viajan con el viento y se adhieren a la ropa de los viajeros. La discusión siembra una advertencia crucial para el resto del viaje.',
          historicalInsight: 'La teoría de los miasmas explicaba las enfermedades como producto de la corrupción del aire por materia orgánica en descomposición.',
          chronicleText: 'Debatimos con los maestros sobre el contagio por miasmas y la transmisión aérea de fiebres.',
          discoveredGoodsOrIdeas: ['Teoría de los miasmas', 'Debate sobre el contagio', 'Etiología medieval']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Visitar los talleres de traducción y cotejo de manuscritos',
          description: 'Observan cómo eruditos bilingües comparan códices griegos de Galeno y Aristóteles con versiones siríacas y árabes para corregir erratas.',
          consequence: 'Comprueban que traducir no era un copiar pasivo, sino un acto crítico de análisis filológico y debate filosófico para enriquecer el texto original.',
          historicalInsight: 'El movimiento de traducción en Bagdad y El Cairo rescató, comentó y amplió el legado filosófico y científico de la Antigüedad clásica.',
          chronicleText: 'Observamos el trabajo crítico de los traductores, que enriquecieron los saberes de la Antigüedad.',
          discoveredGoodsOrIdeas: ['Cotejo filológico', 'Traducción crítica', 'Casa de la Sabiduría']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Estudiar los tratados de óptica y diagramas anatómicos del ojo',
          description: 'Examinan las obras de Alhazen (Ibn al-Haytham) sobre cómo los rayos de luz entran en el ojo y cómo las lentes curvas amplifican la visión.',
          consequence: 'Descubren que la visión no emana del ojo como creían los griegos, sino de la luz que rebota en los objetos. Este principio dará origen a los anteojos y a la cámara oscura.',
          historicalInsight: 'La óptica de Alhazen revolucionó la física al combinar geometría abstracta con rigurosa experimentación empírica con espejos y prismas.',
          chronicleText: 'Estudiamos el tratado de óptica de Alhazen y los diagramas sobre la refracción de la luz.',
          discoveredGoodsOrIdeas: ['Óptica de Alhazen', 'Diagrama del ojo', 'Método experimental']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Conversar con filósofos sobre la razón humana y la fe religiosa',
          description: 'Dialogan en los jardines con pensadores que debaten cómo armonizar la lógica aristotélica con los textos de la revelación divina.',
          consequence: 'Escuchan las ideas de Averroes y comprenden que la búsqueda de la verdad mediante la razón no destruye la espiritualidad, sino que la ennoblece.',
          historicalInsight: 'Los debates entre fe y razón protagonizados por filósofos islámicos y judíos influenciaron directamente a la escolástica europea de Santo Tomás.',
          chronicleText: 'Dialogamos con filósofos sobre el equilibrio entre la investigación racional y la fe.',
          discoveredGoodsOrIdeas: ['Filosofía de Averroes', 'Razón y revelación', 'Escolástica compartida']
        }
      ]
    }
  },
  {
    id: 'port-many-news',
    number: 5,
    branch: 'land',
    title: 'Un puerto hacia otras orillas',
    theme: 'Rutas marítimas, mercancías e información',
    location: 'Gran puerto marítimo del Mediterráneo oriental',
    illustrationType: 'port',
    intro: 'Desde el muelle de piedra ven cientos de mástiles mecidos por el oleaje. Galeras de vela latina y grandes naos redondas descargan fardos de seda, tinajas de aceite, sacos de pimienta y cajas de porcelana. Marinos venecianos, genoveses, catalanes y griegos pregonan en el muelle. En las tabernas y aduanas todos parecen tener algo para vender... o una noticia urgente de tierras lejanas para relatar.',
    prompt: 'El puerto bulle de actividad antes del embarque. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Por qué los puertos eran tanto puntos de encuentro comercial como aceleradores de la circulación de noticias y peligros?',
    characterFlavor: {
      merchant: 'Calculás el flete de una galera: mover mercancías por mar es diez veces más rápido que cruzar desiertos a lomo de mula.',
      traveler: 'Mirás el horizonte azul: el mar conecta continentes sin caminos fijos, pero un temporal o un corsario pueden tragarse todo en minutos.',
      medic: 'Ves a marineros desembarcar tosiendo tras semanas en bodegas hacinadas. El agua estancada de los barcos siempre engendra enfermedad.',
      scholar: 'Te fascinan las cartas de marear con rosas de los vientos y la aguja imantada que busca el norte en plena noche cerrada.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Inspeccionar las mercancías de las galeras para negociar un flete ventajoso',
          description: 'Revisan la carga de barcos llegados del Egeo y negocian reservar espacio en una galera mercante rumbo a los puertos de Europa.',
          consequence: 'Logran asegurar bodegas para sus sedas y especias. Comprueban que el transporte marítimo reduce drásticamente los costos por tonelada respecto a las caravanas terrestres.',
          historicalInsight: 'El transporte marítimo en el Mediterráneo conectaba las terminales de las rutas terrestres asiáticas con las redes de consumo europeas.',
          chronicleText: 'Negociamos espacio de flete en una galera mercante para trasladar la carga por mar.',
          discoveredGoodsOrIdeas: ['Flete marítimo de galeras', 'Economía de escala naval', 'Conexión tierra-mar']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Formalizar un contrato de sociedad de riesgo (commenda) ante el notario',
          description: 'Acuden a la escribanía del puerto para pactar con un socio inversor que comparta los riesgos del viaje marítimo ante naufragio o piratería.',
          consequence: 'Firman un contrato de *commenda*. Si el barco naufraga, el mercader no pierde su patrimonio familiar; si llega a buen puerto, comparten los beneficios acordados.',
          historicalInsight: 'El contrato de commenda y los seguros marítimos nacidos en el Mediterráneo sentaron las bases del derecho mercantil y financiero moderno.',
          chronicleText: 'Firmamos un contrato de commenda para asegurar el riesgo financiero ante posibles naufragios.',
          discoveredGoodsOrIdeas: ['Contrato de commenda', 'Seguro de riesgo marítimo', 'Derecho notarial portuario']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Indagar en las tabernas portuarias sobre la cotización en Génova y Venecia',
          description: 'Conversan con capitanes sobre qué puertos tienen aranceles más bajos y dónde se pagan mejor las especias finas en estos meses.',
          consequence: 'Descubren que Venecia y Génova compiten ferozmente y que ciertos puertos aplican impuestos aduaneros abusivos. Eligen una ruta con tasas moderadas que protege su margen.',
          historicalInsight: 'La rivalidad naval entre repúblicas marítimas italianas determinaba las rutas, los peajes y la seguridad de todo el Mediterráneo.',
          chronicleText: 'Analizamos las tasas aduaneras de Venecia y Génova para optimizar nuestra ruta de llegada.',
          discoveredGoodsOrIdeas: ['Rivalidad marítima italiana', 'Aranceles aduaneros', 'Estrategia de desembarco']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Conversar con capitanes sobre vientos, corrientes y piratas',
          description: 'Se sientan con pilotos veteranos para aprender los vientos favorables del verano y qué calas son refugio de corsarios turcos y catalanes.',
          consequence: 'Les enseñan a navegar siguiendo la costa y a refugiarse en islas ante tormentas repentinas. El mar exige una lectura del cielo tan rigurosa como el desierto.',
          historicalInsight: 'La navegación de cabotaje (siguiendo las costas e islas) era la práctica más habitual para evitar perderse y escapar de tempestades.',
          chronicleText: 'Consultamos a los pilotos sobre los vientos estacionales y el peligro de corsarios en alta mar.',
          discoveredGoodsOrIdeas: ['Navegación de cabotaje', 'Vientos del Mediterráneo', 'Peligro de corsarios']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Examinar las cartas portulanas y el uso de la brújula marina',
          description: 'Piden a un timonel que les muestre cómo la aguja de marear imantada sobre un corcho en agua señala siempre el polo norte celeste.',
          consequence: 'Observan maravillados la precisión de las cartas portulanas, trazadas con líneas de rumbo (loxodrómicas) que unen todos los puertos conocidos.',
          historicalInsight: 'La brújula (traída de China) y las cartas portulanas mediterráneas transformaron la navegación al permitir navegar sin ver las estrellas.',
          chronicleText: 'Aprendimos a navegar con la brújula magnética y las cartas portulanas de rumbos.',
          discoveredGoodsOrIdeas: ['Aguja de marear (brújula)', 'Carta portulana', 'Líneas de rumbo']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Observar cómo conviven marinos de múltiples religiones bajo las leyes del mar',
          description: 'Recorren las aduanas y el consulado para ver cómo cristianos, judíos y musulmanes resuelven litigios de carga con un tribunal común.',
          consequence: 'Descubren que las necesidades del comercio marítimo forzaron a crear códigos de leyes compartidas (*Consulado del Mar*) que prevalecían sobre odios religiosos.',
          historicalInsight: 'El comercio internacional marítimo fue un catalizador temprano de leyes supranacionales y consulados diplomáticos modernos.',
          chronicleText: 'Observamos cómo el Consulado del Mar impartía justicia común a marineros de diversas fes.',
          discoveredGoodsOrIdeas: ['Consulado del Mar', 'Leyes de navegación compartidas', 'Convivencia portuaria']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Inspeccionar las bodegas y el agua estancada de los navíos',
          description: 'Suben a bordo de las galeras para revisar los toneles de agua dulce, los sacos de harina y la presencia de ratas e insectos en el fondo del casco.',
          consequence: 'Comprueban que el agua en los toneles de madera se pudre tras dos semanas de travesía y que la sentina del barco acumula inmundicias fétidas. Advierten que el hacinamiento es caldo de cultivo de fiebres.',
          historicalInsight: 'Las condiciones de insalubridad y la falta de agua potable en las bodegas navales medievales causaban altas tasas de mortalidad en alta mar.',
          chronicleText: 'Inspeccionamos las bodegas y advertimos sobre el peligro del agua corrompida en los navíos.',
          discoveredGoodsOrIdeas: ['Insalubridad naval', 'Agua de sentina', 'Riesgos del hacinamiento']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Reponer en los almacenes portuarios vinagre, salazón y plantas tónicas',
          description: 'Compran provisiones de vinagre fuerte, sal para conservar carnes y ajos para mantener la resistencia física de los viajeros durante la travesía.',
          consequence: 'El vinagre resulta indispensable para desinfectar vajillas y manos y purificar el agua turbia. La caravana queda protegida contra infecciones estomacales.',
          historicalInsight: 'El vinagre fue el principal desinfectante utilizado en Europa y el Mediterráneo antes del descubrimiento moderno de los microorganismos.',
          chronicleText: 'Abastecimos la caravana con vinagre y salazón como escudo desinfectante preventivo.',
          discoveredGoodsOrIdeas: ['Vinagre desinfectante', 'Conservación con salazón', 'Higiene preventiva']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Preguntar a las tripulaciones qué fiebres azotan los puertos de ultramar',
          description: 'Interrogan a los marineros llegados de la península de Crimea y Constantinopla sobre el estado de salud de las poblaciones costeras.',
          consequence: 'Los marinos relatan con temor que en el Mar Negro ciudades enteras están quedando desiertas por fiebres fulminantes y bultos en la garganta. La noticia enciende todas las alarmas.',
          historicalInsight: 'Los puertos eran los primeros receptores de noticias sobre epidemias mucho antes de que las autoridades oficiales tomaran medidas.',
          chronicleText: 'Recibimos alarmantes testimonios marineros sobre una mortandad fulminante en el Mar Negro.',
          discoveredGoodsOrIdeas: ['Vigilancia de puertos', 'Primeros signos de epidemia', 'Alertas sanitarias']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Examinar los cuadernos de bitácora y tablas astronómicas de navegación',
          description: 'Piden a los escribas de a bordo revisar cómo anotan los rumbos diarios, las horas de guardia mediante relojes de arena y las observaciones solares.',
          consequence: 'Comprueban cómo la navegación se convirtió en una ciencia matemática rigurosa donde cada legua recorrida se confronta con la posición de los astros.',
          historicalInsight: 'El desarrollo de las tablas astronómicas de navegación permitió a los pilotos calcular latitudes con creciente precisión matemática.',
          chronicleText: 'Analizamos los cuadernos de bitácora y el cálculo de la posición con relojes de arena.',
          discoveredGoodsOrIdeas: ['Cuaderno de bitácora', 'Reloj de arena náutico', 'Astronomía de posición']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Investigar el funcionamiento de las aduanas marítimas y los aranceles',
          description: 'Estudian cómo los oficiales reales inspeccionan las mercancías, cobran el "almojarifazgo" y emiten guías de tránsito selladas.',
          consequence: 'Comprenden que los puertos no son solo muelles, sino sofisticados filtros fiscales donde los estados recaudan la riqueza que financia sus armadas y reinos.',
          historicalInsight: 'La fiscalidad sobre el comercio de ultramar fue una de las principales fuentes de ingresos de las monarquías y repúblicas bajomedievales.',
          chronicleText: 'Investigamos la recaudación fiscal aduanera que sostenía a las potencias marítimas.',
          discoveredGoodsOrIdeas: ['Aduanas marítimas', 'Aranceles fiscales', 'Documentos de tránsito']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Analizar cómo el timón de codaste y la vela latina revolucionaron los barcos',
          description: 'Observan en los astilleros cómo el nuevo timón fijado en la popa permite maniobrar barcos enormes con una sola barra de timón.',
          consequence: 'Descubren que combinar la vela latina triangular (que navega contra el viento) con el timón de codaste permitió barcos más rápidos y seguros que los de la Antigüedad.',
          historicalInsight: 'Las innovaciones técnicas navales del siglo XIV sentaron las bases tecnológicas que posibilitarían los grandes viajes oceánicos del siglo XV.',
          chronicleText: 'Estudiamos las innovaciones del timón de codaste y la vela latina en los astilleros portuarios.',
          discoveredGoodsOrIdeas: ['Timón de codaste', 'Vela latina triangular', 'Tecnología naval bajomedieval']
        }
      ]
    }
  },
  {
    id: 'troubling-news',
    number: 6,
    branch: 'land',
    title: 'Una noticia inquietante',
    theme: 'La Peste Negra y la propagación de enfermedades en las redes',
    location: 'El muelle en alerta al amanecer (1347)',
    illustrationType: 'plague',
    intro: 'Al despuntar el alba, un murmullo de pánico sacude el muelle. Una gran galera mercantil llegada desde las factorías del Mar Negro acaba de fondear con teas humeantes en la cubierta. Varios remeros yacen muertos en los bancos y marineros tosiendo sangre muestran bultos oscuros del tamaño de un huevo bajo las axilas. Nadie sabe con certeza qué provoca el mal: algunos culpan al aire corrupto, otros a castigos celestes o al agua envenenada. Comerciantes y guardias del concejo discuten qué hacer.',
    prompt: 'La amenaza está a las puertas de la ciudad. ¿Cómo decide actuar la caravana?',
    teacherPrompt: '¿Cómo las mismas redes que transportaban seda, libros y riquezas facilitaron la difusión más rápida y letal de la Peste Negra?',
    characterFlavor: {
      merchant: 'Tus fardos de seda y especias están amontonados en el muelle. Si cierran la ciudad perderás todo tu capital, pero si te contagias no habrá fortuna que te salve.',
      traveler: 'Ves el pánico en los ojos de la gente: las puertas de las murallas comienzan a atrancarse. Si no reaccionan de inmediato quedarán atrapados dentro de la trampa.',
      medic: 'Esos bultos negros en las ingles y axilas... ¡son bubones pestilenciales! La muerte llega en tres días. Hay que evitar a toda costa el contacto con ese barco.',
      scholar: 'Un dolor inmenso te oprime el pecho. Todo el saber acumulado en los libros parece impotente ante una fuerza invisible que siega la vida en horas.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Entrar rápidamente al muelle para retirar las mercancías antes del cierre',
          description: 'Se apresuran a cargar las sedas y fardos valiosos en las carretas para no perder la inversión antes de que las autoridades sellen los muelles.',
          consequence: 'Logran rescatar sus mercancías, pero varios mozos de carga respiraron el aire viciado junto a los enfermos de la galera. En los días siguientes, dos de ellos caen con fiebres altísimas.',
          historicalInsight: 'El afán por no perder las fortunas invertidas en mercancías de ultramar aceleró el contagio de la Peste Negra en los grandes puertos mediterráneos.',
          chronicleText: 'Priorizamos rescatar las mercancías del muelle, asumiendo el terrible riesgo del contagio.',
          discoveredGoodsOrIdeas: ['Dilema entre capital y vida', 'Contagio involuntario', 'Pánico en los muelles']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Mantener distancia y almacenar los fardos secos fuera de las murallas',
          description: 'Ordenan a la caravana alejarse del muelle y alquilar un galpón ventilado en el campo para guardar las cargas sin entrar en contacto con el navío.',
          consequence: 'Protegen sus vidas y preservan los bienes en un lugar aislado y seco. Descubren que la prudencia comercial requiere a veces perder oportunidades inmediatas para sobrevivir.',
          historicalInsight: 'Muchos mercaderes cautos establecieron almacenes extramuros para inspeccionar fardos y tripulaciones antes de introducirlos en las ciudades.',
          chronicleText: 'Aislamos nuestras mercancías en galpones rurales fuera de las murallas para no arriesgar la vida.',
          discoveredGoodsOrIdeas: ['Almacenamiento extramuros', 'Prudencia comercial', 'Prevención económica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Suspender toda actividad comercial y huir tierra adentro a zonas montañosas',
          description: 'Deciden dar por cerrado el negocio, vender las mulas sobrantes y refugiarse en aldeas de montaña poco pobladas donde el aire sea puro.',
          consequence: 'Salvan la vida de todos los integrantes de la caravana. Aprenden que cuando las grandes redes de comercio colapsan por epidemias, los parajes aislados se convierten en el único refugio seguro.',
          historicalInsight: 'Familias enteras que huyeron de urbes densas hacia el campo lograron sobrevivir a las primeras olas mortíferas de la peste de 1348.',
          chronicleText: 'Abandonamos el comercio portuario y nos refugiamos en aldeas montañosas alejadas de las rutas.',
          discoveredGoodsOrIdeas: ['Éxodo hacia el campo', 'Aislamiento geográfico', 'Supervivencia ante la peste']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Acercarse al perímetro para obtener noticias de cómo avanza el mal',
          description: 'Envían a exploradores cautos para interrogar a guardias y marineros sobre qué ciudades del camino ya están infectadas.',
          consequence: 'Descubren que la peste avanza siguiendo las líneas de navegación marítima y fluvial. Con esta información trazan una ruta de escape evitando las ciudades ribereñas populosas.',
          historicalInsight: 'La velocidad de propagación de la Peste Negra sorprendió a los contemporáneos, avanzando al mismo ritmo que las galeras y las caravanas.',
          chronicleText: 'Recopilamos información sobre el avance de la epidemia para diseñar un camino de evasión.',
          discoveredGoodsOrIdeas: ['Mapeo de la epidemia', 'Velocidad de propagación', 'Información de escape']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Evitar los puertos y tomar caminos secundarios de montaña',
          description: 'Guían a la caravana por sendas secundarias de pastores, esquivando las ciudades amuralladas donde la gente vive hacinada tras rejas cerradas.',
          consequence: 'El viaje se vuelve duro y pedregoso, pero los integrantes de la caravana respiran aire libre y no cruzan a ningún enfermo. Llegan a destino sanos y salvos.',
          historicalInsight: 'Las rutas secundarias y las regiones rurales montañosas tuvieron tasas de mortalidad significativamente menores que los grandes nudos comerciales.',
          chronicleText: 'Bordeamos los grandes centros urbanos infectados transitando por sendas secundarias.',
          discoveredGoodsOrIdeas: ['Rutas de evasión', 'Senderos de pastores', 'Dispersión preventiva']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Negociar salvoconductos para cruzar fronteras antes de que sellen las villas',
          description: 'Aceleran la marcha para cruzar el paso fronterizo antes de que los corregidores de los reinos vecinos bajen los rastrillos y prohíban el paso de forasteros.',
          consequence: 'Cruzan la frontera en el último momento. A sus espaldas ven cómo los soldados clavan cruces en los portales y expulsan a palos a cualquier viajero foráneo.',
          historicalInsight: 'El pánico ante la Peste provocó el cierre abrupto de fronteras y la expulsión violenta de forasteros, rompiendo la hospitalidad medieval.',
          chronicleText: 'Cruzamos las fronteras antes del cierre de los pasos, presenciando el fin de la hospitalidad.',
          discoveredGoodsOrIdeas: ['Cierre de fronteras', 'Ruptura de la hospitalidad', 'Pánico defensivo']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Observar los síntomas clínicos de los marineros desde una distancia segura',
          description: 'Registran con rigor los signos: fiebre ardiente, esputos con sangre, bubones negros en cuello e ingles y el estupor mental previo a la muerte.',
          consequence: 'Reconocen que se enfrentan a un mal desconocido y devastador que no figura en los textos antiguos de Galeno. Anotan sus fases para que otros médicos puedan identificarlo temprano.',
          historicalInsight: 'Los médicos medievales redactaron numerosos "tratados de la pestilencia" documentando con precisión clínica el avance de la plaga.',
          chronicleText: 'Documentamos clínicamente los síntomas y la rápida evolución de la peste bubónica.',
          discoveredGoodsOrIdeas: ['Sintomatología bubónica', 'Observación clínica directa', 'Tratados de pestilencia']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Establecer un protocolo de higiene estricto con vinagre y lavado de ropas',
          description: 'Ordenan a la caravana bañarse en vinagre aromático, hervir todos los lienzos, quemar prendas dudosas y no tocar ningún objeto llegado del puerto.',
          consequence: 'Aunque en la época creían que el vinagre ahuyentaba los miasmas, el lavado de ropas y el distanciamiento eliminaron las pulgas portadoras de la bacteria. Todos sobreviven.',
          historicalInsight: 'Las medidas empíricas de higiene y quema de ropas, aunque basadas en la teoría de los miasmas, ayudaban a eliminar pulgas y piojos vectores.',
          chronicleText: 'Impusimos un protocolo sanitario estricto con vinagre, lavado de telas y distanciamiento.',
          discoveredGoodsOrIdeas: ['Protocolo higiénico de vinagre', 'Desinfección de ropas', 'Eliminación de vectores']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Exigir al concejo de la ciudad que selle el navío y dicte cuarentena estricta',
          description: 'Acuden ante los magistrados del concejo para advertirles que ningún tripulante ni caja de mercancías debe bajar a tierra durante cuarenta días.',
          consequence: 'Las autoridades escuchan la advertencia y ordenan a las galeras fondear en una isla aislada con bandera de aviso. La ciudad se salva del contagio masivo gracias a la cuarentena.',
          historicalInsight: 'Las ciudades portuarias de Ragusa (Dubrovnik) y Venecia inventaron la "cuarentena" (40 días de aislamiento naval) durante la Peste Negra.',
          chronicleText: 'Advertimos a las autoridades de la ciudad para que instauraran la cuarentena marítima estricta.',
          discoveredGoodsOrIdeas: ['Origen de la cuarentena (Ragusa/Venecia)', 'Aislamiento naval', 'Salud pública urbana']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Redactar una crónica detallada del brote para enviar a otras ciudades',
          description: 'Escriben una memoria urgente con la fecha, el puerto de procedencia del navío y la descripción del contagio para alertar a los cabildos vecinos.',
          consequence: 'Mensajeros a caballo llevan la advertencia a las ciudades del interior, permitiendo que algunas cierren sus murallas a tiempo y preparen lazaretos de aislamiento.',
          historicalInsight: 'Las cartas y crónicas enviadas por escribas y mercaderes fueron las primeras redes de alerta temprana epidemiológica de Europa.',
          chronicleText: 'Redactamos crónicas de advertencia para prevenir a las ciudades del interior sobre la peste.',
          discoveredGoodsOrIdeas: ['Crónicas de alerta epidemiológica', 'Comunicación de emergencia', 'Memoria histórica']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Consultar los tratados antiguos para comprender la corrupción del aire',
          description: 'Revisan los textos de Hipócrates y los astrónomos para averiguar si conjunciones de planetas o terremotos corrompieron la atmósfera.',
          consequence: 'Comprueban las limitaciones de la ciencia de su tiempo: las explicaciones astrológicas y de humores no logran detener la epidemia. Comprenden la urgencia de nuevos métodos de investigación.',
          historicalInsight: 'La Peste Negra sacudió los cimientos de la ciencia medieval al demostrar la impotencia de las teorías médicas tradicionales frente a la realidad.',
          chronicleText: 'Examinamos los tratados antiguos y comprendimos las limitaciones del saber medieval ante la peste.',
          discoveredGoodsOrIdeas: ['Crisis de la ciencia medieval', 'Límites del conocimiento', 'Impulso a la observación empírica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Recomendar la retirada inmediata, recordando las pestes de la Antigüedad',
          description: 'Recuerdan las lecciones de la peste de Justiniano en Constantinopla y aconsejan al grupo no esperar a que la mortandad se multiplique.',
          consequence: 'El grupo confía en el consejo histórico y evacúa la costa ordenadamente. La historia antigua se convierte en una guía práctica para salvar vidas en el presente.',
          historicalInsight: 'El conocimiento histórico de epidemias pasadas permitió a comunidades letradas anticipar la gravedad de la peste y tomar medidas tempranas.',
          chronicleText: 'Guiamos la retirada de la caravana inspirándonos en las lecciones de las epidemias del pasado.',
          discoveredGoodsOrIdeas: ['Lecciones de la historia', 'Memoria de la peste de Justiniano', 'Sabiduría retrospectiva']
        }
      ]
    }
  },
  {
    id: 'monsoon-dhows',
    number: 4,
    branch: 'sea',
    title: 'Los Vientos del Monzón y los Dhows',
    theme: 'La navegación oceánica y el dominio de los ciclos de la naturaleza',
    location: 'En alta mar — Océano Índico y Mar de Arabia',
    illustrationType: 'monsoon',
    intro: 'A bordo del dhow de casco cosido con fibras de coco y calafateado con resina, la costa de la India ha desaparecido hace días tras el horizonte azul. El viento del monzón del noreste hincha con fuerza las dos grandes velas latinas triangulares, empujando la nave a una velocidad que ninguna caravana terrestre podría igualar jamás. A bordo conviven marineros indios, pilotos árabes y mercaderes persas. Sin embargo, el mar no da tregua: el agua dulce de los barriles comienza a escasear y un cielo plomizo en el horizonte anuncia una posible tempestad tropical.',
    prompt: 'Una corriente marina empuja el navío hacia bajíos rocosos mientras el agua potable debe racionarse. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Por qué para navegar en el siglo XIV las personas dependían mucho más de los ciclos estacionales de la naturaleza que en los viajes terrestres?',
    characterFlavor: {
      merchant: 'Calculás con el corazón en la boca: un solo fardo de seda o especias que se moje con agua salada arruinará meses de trabajo, pero si llegamos intactos a puerto el beneficio multiplicará por diez la inversión.',
      traveler: 'Escuchás los cánticos de los marineros al tensar las jarcias de la vela latina. En este barco nadie pregunta de qué reino vienes: todos dependen de la misma madera y del mismo viento.',
      medic: 'Inspeccionás los toneles de agua: el calor y la humedad crían gusanos y verdín con rapidez pasmosa. Debes racionar y purificar el agua antes de que la disentería y el escorbuto abatan a los marineros.',
      scholar: 'Miras al ma\'allam (piloto) elevar el kamal hacia la estrella polar. Con un trozo de madera y un cordel anudado entre los dientes, determina la latitud exacta en medio de la inmensidad marina.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Asegurar los fardos secos con lonas enceradas en la bodega inferior',
          description: 'Ordenan estibar todas las sedas, clavo y canela en el centro del casco y sellarlas con doble lona embadurnada en brea para protegerlas de las olas.',
          consequence: 'La carga queda a salvo de las salpicaduras de la tormenta. Descubren que el arte del estibaje naval es tan crucial como la navegación misma para evitar que el barco vuelque con el balanceo.',
          historicalInsight: 'El embalaje impermeable con alquitrán y resinas vegetales era indispensable para proteger las valiosas mercancías orientales durante meses de travesía marina.',
          chronicleText: 'Aseguramos la carga con lonas enceradas en la bodega, protegiendo las especias de la furia marina.',
          discoveredGoodsOrIdeas: ['Estibaje naval', 'Embalaje impermeable', 'Seguridad de bodega']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Aligerar peso arrojando al agua lastre y tinajas de mercancía pesada',
          description: 'Para ganar maniobrabilidad frente a los arrecifes, deciden soltar fardos secundarios y tinajas de cerámica menos costosas.',
          consequence: 'El navío gana calado y el piloto logra esquivar los escollos rocosos. Aunque pierden parte del cargamento menor, salvan la vida de la tripulación y los bienes más valiosos.',
          historicalInsight: 'La "echazón" (arrojar carga al mar para salvar el barco) era una práctica regulada por las leyes marítimas medievales, repartiendo las pérdidas equitativamente entre los mercaderes.',
          chronicleText: 'Decidimos sacrificar lastre y carga menor para sortear los arrecifes y salvar la expedición.',
          discoveredGoodsOrIdeas: ['Ley de echazón marina', 'Gestión de riesgos náuticos', 'Prioridad de supervivencia']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Negociar un fondo de ayuda mutua con los mercaderes a bordo',
          description: 'Reúnen a los comerciantes de diversas naciones que viajan en el barco y pactan un fondo común para indemnizar a quien sufra pérdidas por el temporal.',
          consequence: 'Firman un pacto solidario en pergamino. La cooperación entre rivales comerciales permite mantener la calma y trabajar codo a codo en las bombas de achique durante la tormenta.',
          historicalInsight: 'Las hermandades mercantiles y acuerdos de avería común marítima fueron los antecesores directos de los seguros modernos en el Océano Índico y el Mediterráneo.',
          chronicleText: 'Establecimos un pacto de avería común entre mercaderes para respaldarnos ante el temporal.',
          discoveredGoodsOrIdeas: ['Avería común marítima', 'Solidaridad mercantil', 'Cooperación interregional']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Ayudar a la marinería a arriar velas y gobernar el timón con temporal',
          description: 'Se suman a los marineros en cubierta para aferrar las velas latinas bajo la lluvia torrencial y sujetar la caña del timón con cabos.',
          consequence: 'Ganan el respeto de la tripulación. Comprueban en carne propia la fuerza colosal del monzón y cómo la destreza colectiva de hombres de distintos pueblos salva al barco del desastre.',
          historicalInsight: 'Las tripulaciones del Índico eran verdaderos mosaicos culturales donde convivían swahilis, árabes, malabares y malayos unidos por la técnica marinera.',
          chronicleText: 'Luchamos codo a codo con la marinería bajo la tempestad para mantener a flote el navío.',
          discoveredGoodsOrIdeas: ['Destreza marinera', 'Tripulaciones cosmopolitas', 'Resistencia oceánica']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Aprender las señas de aves y color de las aguas para avistar tierra',
          description: 'Piden al vigía anciano que les enseñe a identificar la proximidad de islas por el vuelo de los pájaros marinos y el tono verdoso de las corrientes.',
          consequence: 'Aprenden el saber milenario de la navegación empírica. Divisan fragatas y ramas flotantes que les indican la cercanía de un atolón seguro donde fondear.',
          historicalInsight: 'Antes de los mapas modernos, los marinos del Índico leían la naturaleza viva: nubes sobre atolones, bandadas de aves y peces voladores señalaban tierra firme.',
          chronicleText: 'Desciframos las señales vivas del mar (aves y corrientes) para localizar refugio en una isla.',
          discoveredGoodsOrIdeas: ['Navegación bioindicadora', 'Saberes marítimos orales', 'Lectura de corrientes']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Registrar los relatos de naufragios y monstruos marinos de las tabernas',
          description: 'Anotan las historias que cuentan los marineros al amparo de la noche sobre torbellinos míticos, islas de canela y peces gigantes.',
          consequence: 'Comprenden cómo el miedo a lo desconocido modelaba la geografía fantástica medieval, donde el peligro real se transformaba en leyendas morales y mitos de advertencia.',
          historicalInsight: 'Las crónicas marítimas medievales, como los relatos de Simbad el Marino o los libros de maravillas, mezclaban datos geográficos reales con mitología oceánica.',
          chronicleText: 'Compilamos los mitos y leyendas de la marinería que explicaban los peligros del océano desconocido.',
          discoveredGoodsOrIdeas: ['Mitos marinos medievales', 'Geografía fabulosa', 'Imaginario oceánico']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Hervir y filtrar el agua de los toneles con carbón vegetal y clavos de olor',
          description: 'Preparan un método de desinfección improvisado pasando el agua estancada por lienzos limpios con ceniza y añadiendo clavo para frenar putrefacciones.',
          consequence: 'El agua pierde su mal olor y se vuelve potable. La tripulación no contrae fiebres estomacales y reconocen la eficacia preventiva de las medidas de higiene.',
          historicalInsight: 'El control del agua potable fue el mayor desafío de salud en los viajes marítimos de larga distancia antes de la invención de filtros modernos.',
          chronicleText: 'Purificamos el agua de los barriles con carbón y especias antisépticas, evitando epidemias a bordo.',
          discoveredGoodsOrIdeas: ['Purificación de agua dulce', 'Higiene de a bordo', 'Antisépticos botánicos']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Distribuir frutos cítricos secos y vinagre para prevenir el escorbuto',
          description: 'Racionan limones en salmuera, cebollas y vinagre entre los remeros y marineros que muestran encías sangrantes y debilidad extrema.',
          consequence: 'Los marineros recuperan el vigor. Comprueban empíricamente que la dieta fresca y los alimentos ácidos salvan a los hombres de la misteriosa debilidad de las travesías largas.',
          historicalInsight: 'Aunque la vitamina C se descubrió en el siglo XX, muchos navegantes tradicionales ya usaban cítricos y encurtidos para combatir el agotamiento de altamar.',
          chronicleText: 'Combatimos el sangrado de encías y la fatiga administrando cítricos en salazón y vinagres.',
          discoveredGoodsOrIdeas: ['Prevención del escorbuto', 'Dieta naval', 'Medicina preventiva de mar']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Establecer un área de aislamiento en la proa para los tripulantes febriles',
          description: 'Separan a dos marineros con delirios y calor corporal excesivo bajo un toldo ventilado en proa para evitar el hacinamiento en bodegas.',
          consequence: 'Frenan la propagación del malestar al resto del pasaje. Comprueban que el aire fresco del mar y el aislamiento previenen contagios en espacios reducidos.',
          historicalInsight: 'El hacinamiento en bodegas húmedas y mal ventiladas era el caldo de cultivo habitual para tifus y fiebres en las naves medievales.',
          chronicleText: 'Aislamos a los enfermos en la cubierta ventilada para impedir el contagio en las bodegas cerradas.',
          discoveredGoodsOrIdeas: ['Aislamiento en navegación', 'Ventilación sanitaria', 'Control de hacinamiento']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Calcular la latitud nocturna midiendo la altura de la Estrella Polar con el kamal',
          description: 'Suben a cubierta en noche despejada para medir la elevación de la estrella con la tablilla de madera y cotejarla con las cartas celestes.',
          consequence: 'Confirman con precisión matemática que la nave se encuentra en el paralelo de la costa de Omán. El piloto celebra la exactitud del cálculo astronómico.',
          historicalInsight: 'El kamal fue uno de los inventos astronómicos más sencillos y revolucionarios de la navegación árabe e india para medir distancias angulares en el mar.',
          chronicleText: 'Calculamos la latitud marina con el kamal astronómico, guiando el rumbo nocturno con precisión.',
          discoveredGoodsOrIdeas: ['El Kamal astronómico', 'Cálculo de latitud', 'Navegación astronómica del Índico']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Trazar un mapa de vientos estacionales y corrientes del Océano Índico',
          description: 'Anotan minuciosamente en pliegos de papel la dirección de la brisa, las mareas y el cambio de color del agua durante las distintas lunas.',
          consequence: 'Crean una guía náutica pionera. Comprenden que el océano no es un desierto caótico, sino un sistema ordenado de ciclos climáticos que la razón humana puede anticipar.',
          historicalInsight: 'Los manuales náuticos islámicos (*rahmani*) compilaban observaciones empíricas sobre corrientes, bancos de arena y fechas óptimas de zarpe.',
          chronicleText: 'Elaboramos una guía náutica de vientos monzónicos y corrientes estacionales del Mar de Arabia.',
          discoveredGoodsOrIdeas: ['Manuales náuticos (Rahmani)', 'Meteorología estacional', 'Cartografía de corrientes']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Comparar la brújula flotante de aguja imantada con los astros celestes',
          description: 'Examinan un cuenco de agua con una aguja de hierro magnetizada sobre un corcho y observan cómo busca el norte magnético incluso con cielo nublado.',
          consequence: 'Verifican la asombrosa fidelidad de la brújula cuando las nubes ocultan las estrellas. Es el puente perfecto entre la ciencia terrestre y la supervivencia en alta mar.',
          historicalInsight: 'La brújula magnética, nacida en China, se difundió rápidamente por el Índico y el Mediterráneo durante los siglos XII al XIV.',
          chronicleText: 'Comprobamos la orientación de la aguja magnética flotante cuando las tormentas nublan el firmamento.',
          discoveredGoodsOrIdeas: ['Brújula marina flotante', 'Magnetismo terrestre', 'Orientación a ciegas']
        }
      ]
    }
  },
  {
    id: 'hormuz-customs',
    number: 5,
    branch: 'sea',
    title: 'El emporio de Ormuz y las leyes del mar',
    theme: 'Aduanas marítimas, monopolios de paso y derecho mercantil',
    location: 'Isla fortificada de Ormuz — Estrecho del Golfo Pérsico',
    illustrationType: 'ship-customs',
    intro: 'El navío entra al fondeadero de Ormuz, una árida isla rocosa que no produce grano ni agua dulce, pero que es la llave dorada del comercio entre Asia y Occidente. En sus muelles de piedra blanca atracan decenas de barcos cargados de perlas del Golfo, sedas de China, especias de Ceilán y caballos árabes de guerra. El diwan o aduana marítima exige rigurosos tributos para permitir el desembarco y la venta. En las tabernas portuarias se murmura que flotas corsarias merodean las aguas del estrecho y que los mercaderes venecianos compran a cualquier precio para llevar las especias hacia el Mar Rojo y Alejandría.',
    prompt: 'Los oficiales de la aduana exigen un arancel elevado y les ofrecen escolta armada para cruzar hacia el Mar Rojo. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Por qué una pequeña isla que carecía de agua dulce y campos agrícolas llegó a ser uno de los enclaves más ricos y estratégicos del mundo medieval?',
    characterFlavor: {
      merchant: 'Ves cómo tasan los fardos de nuez moscada y canela en balanzas oficiales de bronce. Los impuestos son altos, pero las especias aquí valen el triple que en la India y se multiplicarán en Europa.',
      traveler: 'En los muelles de Ormuz escuchas a genoveses, egipcios, persas y malabares. Esta isla es un teatro flotante donde todos los idiomas del mundo se entienden con monedas y gestos.',
      medic: 'Observás cómo barcazas traen agua dulce desde el continente para abastecer a la población en aljibes con ceniza. El agua en Ormuz se cotiza casi con el mismo celo que el perfume de rosas.',
      scholar: 'Te fascina examinar los libros aduaneros y las tablas de arbitraje marítimo. El derecho mercantil de esta isla regula disputas comerciales entre pueblos que no comparten religión ni rey.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Pagar los aranceles aduaneros y contratar un convoy de escolta naval',
          description: 'Abonan las tasas oficiales del estrecho y se unen a una flota protegida por galeras armadas para disuadir a piratas del golfo.',
          consequence: 'Navegan seguros y en formación hasta las bocas del Mar Rojo. Comprueban que pagar por seguridad es un costo comercial necesario para garantizar que el capital llegue a destino.',
          historicalInsight: 'El cobro de peajes marítimos a cambio de protección armada contra corsarios era el pilar fiscal sobre el que se sostenían los sultanatos costeros.',
          chronicleText: 'Abonamos los aranceles aduaneros en Ormuz y aseguramos el paso con un convoy de galeras armadas.',
          discoveredGoodsOrIdeas: ['Fiscalidad marítima', 'Convoyes de protección', 'Seguridad en estrechos estratégicos']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Invertir en perlas naturales del Golfo para diversificar la carga',
          description: 'Aprovechan los mercados de Ormuz para adquirir perlas finas extraídas por buceadores de Baréin, fáciles de ocultar y de altísimo valor por volumen.',
          consequence: 'Reducen el volumen de su carga aumentando drásticamente su valor económico. Un pequeño saco de perlas permite afrontar cualquier contratiempo o pago de rescate en el viaje.',
          historicalInsight: 'Las perlas del Golfo Pérsico fueron el producto de lujo marino por excelencia, demandadas con pasión tanto en las cortes islámicas como europeas.',
          chronicleText: 'Invertimos en perlas finas del Golfo, compactando nuestra fortuna en un bien de máximo prestigio.',
          discoveredGoodsOrIdeas: ['Perlas de Baréin', 'Bienes de altísimo valor por volumen', 'Diversificación de activos']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Asociarse con un cambista veneciano mediante una carta de crédito marina',
          description: 'Pactan con un factor de Venecia en el puerto depositar fondos en Ormuz a cambio de una orden de pago en florines de oro canjeable en el Mediterráneo.',
          consequence: 'Evitan transportar cofres de plata y oro por mares infestados de asaltantes. Descubren la agilidad de los documentos financieros para mover riqueza sin mover metal pesado.',
          historicalInsight: 'Las letras de cambio y órdenes de pago internacionales permitieron a los comerciantes mover grandes fortunas sin el riesgo físico del traslado de monedas.',
          chronicleText: 'Adoptamos cartas de crédito financieras para trasladar capital hacia Occidente sin arriesgar oro físico.',
          discoveredGoodsOrIdeas: ['Letras de cambio marítimas', 'Crédito financiero medieval', 'Banca internacional']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Recorrer los aljibes y sistemas de importación de agua dulce',
          description: 'Investigan cómo sobrevive una ciudad insular sin manantiales propios gracias a flotas diarias de aguadores y aljibes cubiertos de cal.',
          consequence: 'Se maravillan ante el ingenio humano para sostener una urbe populosa en un desierto de roca y salitre. Entienden que el comercio crea oasis donde la naturaleza no puso nada.',
          historicalInsight: 'Ormuz dependía por completo del suministro de agua de la costa continental vecina, transportada en flotillas especializadas de barcazas cisternas.',
          chronicleText: 'Documentamos la impresionante logística hidráulica que abastecía de agua potable al emporio insular.',
          discoveredGoodsOrIdeas: ['Logística de abastecimiento insular', 'Ingeniería hidráulica de aljibes', 'Ciudades estratégicas']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Conversar con capitanes de África oriental sobre la ruta de Zanzíbar',
          description: 'Se sientan en los cafetines portuarios con marinos swahilis que navegan hacia Kilwa y Sofala en busca de oro, marfil y madera de mangle.',
          consequence: 'Descubren que el Océano Índico conectaba no solo a Asia y Europa, sino también las ricas costas del continente africano en una red circular de comercio global.',
          historicalInsight: 'La costa swahili de África Oriental era un componente fundamental del circuito comercial del Índico, exportando oro, ébano y pieles hacia Asia.',
          chronicleText: 'Ampliamos nuestro horizonte geográfico al conocer las rutas comerciales marítimas hacia África Oriental.',
          discoveredGoodsOrIdeas: ['Comercio de la costa swahili', 'Rutas de África Oriental', 'Globalización medieval']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Observar los juicios del tribunal marítimo del puerto',
          description: 'Asisten a las audiencias donde cónsules y jueces arbitran pleitos entre tripulaciones de distintos credos por abordajes, rotura de mástiles o sueldos impagos.',
          consequence: 'Presencian cómo el interés común por el comercio crea leyes universales de justicia marítima que están por encima de las diferencias religiosas o fronteras de los reinos.',
          historicalInsight: 'El derecho marítimo medieval (como las leyes de Rodas, el Consulado del Mar o los usos de Ormuz) fue pionero en establecer normas internacionales compartidas.',
          chronicleText: 'Presenciamos la aplicación del derecho marítimo internacional que unía a pueblos de distintos credos.',
          discoveredGoodsOrIdeas: ['Tribunales marítimos', 'Derecho internacional consuetudinario', 'Justicia mercantil']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Adquirir bálsamos de mirra, incienso y resinas aromáticas de Adén',
          description: 'Compran fardos de resinas secadas al sol procedentes de los valles del sur de Arabia, indispensables para sahumerios purificadores y ungüentos cicatrizantes.',
          consequence: 'Se aprovisionan de las sustancias medicinales más puras del mundo antiguo. Comprueban que su valor no radica en el lujo decorativo, sino en sus propiedades desinfectantes.',
          historicalInsight: 'La mítica Ruta del Incienso conectaba el sur de Arabia con los puertos del Golfo y el Mediterráneo para abastecer templos, palacios y boticas.',
          chronicleText: 'Incorporamos resinas puras de incienso y mirra de Arabia, fundamentales para sahumerios y curaciones.',
          discoveredGoodsOrIdeas: ['Mirra e incienso de Arabia', 'Resinas antisépticas', 'Ruta del incienso']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Inspeccionar las enfermerías portuarias para marineros heridos',
          description: 'Visitan las salas de los muelles para estudiar cómo los cirujanos portuarios tratan fracturas por cabrestantes, quemaduras de brea y heridas de arpones.',
          consequence: 'Aprenden técnicas de cirugía traumatológica naval de alta urgencia, donde la rapidez y la limpieza con alcohol o vinagre salvan extremidades y vidas.',
          historicalInsight: 'Los médicos de los puertos comerciales desarrollaron una notable pericia en el tratamiento de lesiones traumáticas y quemaduras producidas por la vida en los barcos.',
          chronicleText: 'Perfeccionamos técnicas de cirugía de urgencia y tratamiento de heridas en las boticas portuarias.',
          discoveredGoodsOrIdeas: ['Cirugía naval de urgencia', 'Tratamiento de quemaduras de brea', 'Traumatología de muelle']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Examinar los cargamentos de salazones y conservas para la travesía',
          description: 'Revisan los barriles de pescado seco, dátiles prensados y cecinas que los marineros embarcan para evitar consumir víveres podridos en el mar.',
          consequence: 'Comprueban que la sal y el prensado en miel o aceite son los mejores aliados contra la putrefacción de los alimentos en climas tórridos.',
          historicalInsight: 'La conservación de alimentos mediante salado, secado al sol y ahumado era la única tecnología disponible para posibilitar viajes marítimos de meses.',
          chronicleText: 'Supervisamos los métodos de salazón y secado de víveres que garantizaban la supervivencia en el mar.',
          discoveredGoodsOrIdeas: ['Tecnología de salazón', 'Conservación de alimentos', 'Seguridad alimentaria']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Copiar cartas portulanas con rumbos de aguja y fondos marinos',
          description: 'Pagan a un cartógrafo del puerto para calcar una carta náutica con rumbos radiales, bajos de arena y perfiles de costas del Mar Rojo y Golfo Pérsico.',
          consequence: 'Obtienen un mapa náutico de precisión asombrosa. Entienden que las cartas portulanas no representan mitos ni leyendas, sino rumbos reales medidos con brújula y compás.',
          historicalInsight: 'Las cartas portulanas del siglo XIV revolucionaron la navegación al combinar redes de rumbos magnéticos con mediciones empíricas de distancia costera.',
          chronicleText: 'Copiamos cartas portulanas con redes de vientos y perfiles de sondas marinas para navegar seguros.',
          discoveredGoodsOrIdeas: ['Cartas portulanas', 'Rumbos magnéticos', 'Toponimia costera']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Analizar los registros aduaneros de tonelaje y procedencia de barcos',
          description: 'Estudian los libros de aduana donde los oficiales anotan año a año el número de mástiles, el origen de cada carga y el valor recaudado en plata.',
          consequence: 'Comprenden la magnitud del comercio mundial: miles de toneladas de bienes cruzan los mares cada temporada. La historia de la humanidad está escrita en sus rutas de intercambio.',
          historicalInsight: 'Los registros aduaneros medievales son los documentos históricos más precisos para cuantificar los flujos comerciales y demográficos de la época.',
          chronicleText: 'Analizamos los libros de aduanas que documentaban los volúmenes del comercio global de ultramar.',
          discoveredGoodsOrIdeas: ['Contabilidad fiscal pública', 'Estadísticas mercantiles', 'Flujos de tonelaje naval']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Debatir con pilotos sobre el cálculo de mareas y la influencia de la Luna',
          description: 'Discuten cómo la gravitación lunar genera pleamares y bajamares en los estrechos angostos y cómo aprovechar la subida del agua para franquear barras de arena.',
          consequence: 'Relacionan la física celeste con la práctica náutica cotidiana. La ciencia confirma que el cosmos entero influye en el movimiento de los barcos humanos.',
          historicalInsight: 'El conocimiento de las tablas de mareas fue vital para la navegación en los mares cerrados con grandes fluctuaciones como el Golfo Pérsico.',
          chronicleText: 'Vinculamos los ciclos de la Luna con el cálculo de mareas para sortear barras arenosas en los puertos.',
          discoveredGoodsOrIdeas: ['Tablas de mareas', 'Astronomía aplicada', 'Gravitación lunar empírica']
        }
      ]
    }
  },
  {
    id: 'quarantine-sea',
    number: 6,
    branch: 'sea',
    title: 'El navío en cuarentena',
    theme: 'La Peste Negra por vía marítima y el nacimiento del aislamiento sanitario (1347)',
    location: 'Bahía exterior del puerto mediterráneo — Octubre de 1347',
    illustrationType: 'quarantine',
    intro: 'Tras cruzar el istmo y embarcar en una gran galera mercante que surca el Mediterráneo oriental, divisan al amanecer las torres de su puerto de destino en Europa. Pero la bahía no bulle de fiesta: está en un silencio sepulcral. Varios navíos fondean a distancia con una bandera amarilla izada en el palo mayor. En el muelle de piedra, guardias municipales armados con ballestas y teas humeantes impiden que cualquier bote toque tierra. Desde una chalupa, un oficial del concejo les grita con una bocina de latón: "¡Ningún tripulante pisará la ciudad! Por orden de los magistrados, toda nave procedente de Oriente quedará aislada cuarenta días en la isla del lazareto. ¡La Gran Peste Negra ha llegado en las bodegas de los barcos!"',
    prompt: 'Las provisiones a bordo escasean y algunos marineros tosen sangre bajo cubierta. La ciudad los condena a cuarenta días de aislamiento flotante. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Cómo cambió la llegada de la Peste Negra por vía marítima la forma en que las ciudades portuarias controlaban el movimiento de personas y mercancías?',
    characterFlavor: {
      merchant: 'Tus fardos de especias, perlas y sedas están encerrados en las bodegas del navío fondeado. Si el barco se declara apestado, las autoridades quemarán la nave con toda la fortuna adentro.',
      traveler: 'Miras la línea de murallas inalcanzables. Viajaste miles de leguas cruzando imperios y océanos, y a cien brazas de la orilla una ordenanza municipal te encierra en una prisión de madera flotante.',
      medic: 'Escuchás los lamentos bajo cubierta: fiebres ardientes y bultos negros del tamaño de un huevo bajo las axilas. Reconoces la pesadilla. Si no aíslan a los enfermos de inmediato en una barca auxiliar, nadie sobrevivirá a los cuarenta días.',
      scholar: 'Cuarenta días... "quarantena". Comprendes que estás presenciando una medida sanitaria revolucionaria nacida del terror y la observación empírica: el intento desesperado de cortar el contagio invisible mediante el aislamiento forzoso.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Negociar el desembarco y desinfección de las mercancías secas en el lazareto insular',
          description: 'Piden a los magistrados permiso para descargar los fardos de especias y seda en los almacenes de piedra de la isla de cuarentena para ventilarlos y ahumarlos con azufre.',
          consequence: 'Logran poner a salvo la mercancía sin violar el cerco sanitario. Comprueban que las telas bien ventiladas y secas no transmiten el mal, salvando el capital comercial.',
          historicalInsight: 'En puertos como Ragusa (Dubrovnik) y Venecia, las mercancías de Oriente eran sometidas a cuarentena y desinfección con humo de hierbas aromáticas en islas lazareto.',
          chronicleText: 'Negociamos la ventilación y desinfección de nuestras mercancías en el lazareto insular, salvando la inversión.',
          discoveredGoodsOrIdeas: ['Almacenes de lazareto', 'Desinfección con azufre y humo', 'Supervivencia comercial en crisis']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Financiar víveres frescos desde tierra para sostener a la tripulación en el barco',
          description: 'Usan parte de sus ganancias para pagar a botes de la ciudad que dejen cestas de pan cocido, verduras y agua potable amarradas a una boya.',
          consequence: 'Mantienen nutrida a la marinería durante los duros cuarenta días de encierro. Al evitar el hambre y la desesperación, la tripulación mantiene la disciplina y el barco no se amotina.',
          historicalInsight: 'El aprovisionamiento sin contacto físico (dejando alimentos en barcas intermedias con monedas desinfectadas en vinagre) fue clave durante las cuarentenas portuarias.',
          chronicleText: 'Financiamos el abastecimiento seguro de víveres para la tripulación aislada, evitando motines y hambre.',
          discoveredGoodsOrIdeas: ['Abastecimiento sin contacto', 'Monedas lavadas en vinagre', 'Gestión humanitaria de crisis']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Pagar a capitanes para levar anclas y fondear en una cala desierta apartada',
          description: 'Temiendo que el barco vecino apestado les contagie la peste por el aire, deciden zarpar hacia una bahía deshabitada de la costa para pasar el encierro.',
          consequence: 'Se alejan del foco infeccioso del puerto atestado. En la cala solitaria pescan y purifican sus ropas al sol, logrando que el virus no prenda entre sus hombres.',
          historicalInsight: 'El aislamiento geográfico estricto y la dispersión fuera de los puertos infectados fue una de las pocas medidas eficaces de supervivencia frente a la Peste Negra.',
          chronicleText: 'Nos apartamos a una ensenada solitaria para cumplir el aislamiento lejos de navíos contagiados.',
          discoveredGoodsOrIdeas: ['Aislamiento geográfico autónomo', 'Dispersión preventiva', 'Evitación de focos de contagio']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Organizar turnos estrictos en cubierta y quemar las ropas usadas de los enfermos',
          description: 'Establecen una disciplina férrea a bordo: nadie baja a las bodegas oscuras, se limpian las tablas con agua salada hirviendo y se queman los jergones viejos.',
          consequence: 'Sin saberlo, destruyen los nidos de pulgas y ratas que anidaban en las telas viejas. La mortandad en su galera se detiene milagrosamente.',
          historicalInsight: 'Aunque ignoraban que la bacteria de la peste viajaba en pulgas de ratas negras, las medidas empíricas de higiene radical y quema de ropas salvaron vidas.',
          chronicleText: 'Impusimos estricta limpieza en cubierta y quemamos jergones viejos, frenando el mal en nuestro barco.',
          discoveredGoodsOrIdeas: ['Destrucción de vectores de contagio', 'Higiene náutica extrema', 'Disciplina colectiva']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Establecer comunicación por señales de banderas con los magistrados del muelle',
          description: 'Idean un código de gallardetes y antorchas para informar a los médicos de la orilla sobre cuántos hombres permanecen sanos en el navío.',
          consequence: 'La ciudad comprueba la honestidad y orden del barco. Al cumplir los cuarenta días sin nuevos enfermos, los magistrados les otorgan la patente limpia de sanidad.',
          historicalInsight: 'Los códigos de señales y las "patentes de sanidad" marítimas nacieron a raíz de la Peste Negra para certificar qué naves venían libres de contagio.',
          chronicleText: 'Coordinamos patentes de sanidad mediante señales visuales con las autoridades del puerto.',
          discoveredGoodsOrIdeas: ['Patente limpia de sanidad', 'Señales de cuarentena', 'Certificación sanitaria']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Anotar en un diario de a bordo la agonía y el avance de la plaga en los barcos vecinos',
          description: 'Registran día a día el humo de los barcos que son quemados por las autoridades y los cantos fúnebres que resuenan en la bahía silenciosa.',
          consequence: 'Construyen un testimonio histórico desgarrador sobre el colapso del mundo conocido y el coraje de los supervivientes que desafiaron el abismo del contagio.',
          historicalInsight: 'Los diarios y crónicas escritas por testigos presenciales de 1347 son la mayor fuente histórica para comprender el impacto psicológico y social de la pandemia.',
          chronicleText: 'Escribimos la crónica de los cuarenta días en la bahía silenciada por la Gran Muerte de 1347.',
          discoveredGoodsOrIdeas: ['Diario de cuarentena', 'Testimonio testimonial de 1347', 'Memoria de la pandemia']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Trasladar a los marineros con bubones a una chalupa remolcada a popa',
          description: 'Aíslan de inmediato a los contagiados en un bote amarrado a cincuenta varas de distancia de la nave, atendiéndolos con pértigas y paños con vinagre.',
          consequence: 'Cortan el contacto directo con los exudados y las pulgas de los enfermos. Salvan a más del ochenta por ciento de la tripulación sana de una muerte segura.',
          historicalInsight: 'El aislamiento tajante de los enfermos en lazaretos flotantes o botes separados fue la medida clínica más audaz ideada en los puertos medievales.',
          chronicleText: 'Separamos a los infectados en una chalupa remolcada, cortando la cadena de contagio a bordo.',
          discoveredGoodsOrIdeas: ['Lazareto flotante', 'Aislamiento tajante', 'Protección de tripulantes sanos']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Sellar las bodegas con humo espeso de azufre para exterminar alimañas',
          description: 'Queman calderos de azufre y brea en el fondo del casco sellando las escotillas durante dos días para matar las "emanaciones venenosas" y ratas.',
          consequence: 'El gas tóxico sofoca a todas las ratas negras y pulgas de las bodegas. Al reabrir y ventilar, el foco biológico del barco ha sido aniquilado por completo.',
          historicalInsight: 'La fumigación con azufre fue uno de los métodos medievales más efectivos, ya que actuaba como insecticida y raticida antes de conocerse la microbiología.',
          chronicleText: 'Fumigamos las bodegas con azufre y brea, erradicando involuntariamente las pulgas y ratas del barco.',
          discoveredGoodsOrIdeas: ['Fumigación con azufre', 'Control de alimañas en bodegas', 'Acción insecticida empírica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Fabricar mascarillas de lino con vinagre y esencias para los cuidadores',
          description: 'Confeccionan protectores respiratorios empapados en alcanfor y vinagre fuerte para quienes atienden a los convalecientes en el barco.',
          consequence: 'Brindan una barrera protectora física contra las gotas expulsadas por la tos de los enfermos. Los cuidadores no se infectan de la temible peste neumónica.',
          historicalInsight: 'Los paños con vinagre aromático fueron los antecesores de las célebres máscaras de pico de ave que usarían los médicos de la peste en siglos posteriores.',
          chronicleText: 'Protegimos a los cuidadores con mascarillas de vinagre y alcanfor frente a la peste neumónica.',
          discoveredGoodsOrIdeas: ['Protección respiratoria primitiva', 'Barreras de contacto', 'Profilaxis médica de emergencia']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Analizar el origen del término "quarantena" y su fundamento legal y bíblico',
          description: 'Estudian cómo los magistrados portuarios fijaron el lapso de cuarenta días inspirándose en los cuarenta días del diluvio y la cuaresma como purificación.',
          consequence: 'Comprenden cómo la ciencia, el derecho cívico y las metáforas religiosas se unieron en un momento de terror para inventar una de las instituciones más duraderas de la salud pública.',
          historicalInsight: 'El término "cuarentena" nació formalmente en 1377 en Ragusa (hoy Dubrovnik) al fijar un periodo de aislamiento que luego Venecia y los demás puertos adoptaron.',
          chronicleText: 'Estudiamos el nacimiento de la institución jurídica de la cuarentena como respuesta social a la epidemia.',
          discoveredGoodsOrIdeas: ['Institución de la cuarentena', 'Derecho sanitario municipal', 'Evolución de la salud pública']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Cartografiar cómo las rutas comerciales marítimas aceleraron la propagación del mal',
          description: 'Trazan en un pergamino cómo las galeras genovesas llevaron el brote desde Caffa en Crimea hasta Constantinopla, Sicilia, Génova y Marsella en meses.',
          consequence: 'Tienen una revelación histórica: la misma velocidad de los barcos que enriqueció a las ciudades convirtió al Mediterráneo en una trampa epidémica interconectada.',
          historicalInsight: 'La Peste Negra fue la primera pandemia verdaderamente globalizada, donde las naves a vela y galeras multiplicaron la velocidad de difusión del patógeno.',
          chronicleText: 'Mapeamos la difusión de la peste a través de las rutas marítimas, revelando la vulnerabilidad de un mundo conectado.',
          discoveredGoodsOrIdeas: ['Cartografía epidemiológica', 'Redes de contagio acelerado', 'Paradoja de la conectividad']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Redactar un memorial para los rectores de la ciudad con medidas para el futuro',
          description: 'Escriben una propuesta en latín proponiendo la creación permanente de magistrados de salud pública, cementerios extramuros y lazaretos fijos.',
          consequence: 'Sientan las bases del pensamiento sanitario moderno. Comprenden que tras la catástrofe demográfica, la sociedad deberá reorganizar su medicina y sus gobiernos.',
          historicalInsight: 'La devastación de la Peste Negra impulsó la creación de los primeros ministerios y consejos de salud pública permanentes en las ciudades renacentistas.',
          chronicleText: 'Redactamos un memorial sobre salud pública y prevención que anticipó las reformas sanitarias del Renacimiento.',
          discoveredGoodsOrIdeas: ['Consejos de salud pública', 'Planificación urbana sanitaria', 'Lecciones para el Renacimiento']
        }
      ]
    }
  }
];
