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
    title: 'Nuevas formas de contar',
    theme: 'Circulación y transformación de conocimientos matemáticos',
    location: 'Casa de comercio y escuela de cálculo',
    illustrationType: 'math',
    intro: 'Al llegar a una bulliciosa casa de cambio y escuela mercantil, ven a un escriba resolviendo cálculos con una rapidez asombrosa. Sobre una tabla con arena fina no mueve fichas de ábaco, sino que traza símbolos extraños: los números del 1 al 9 y un pequeño círculo vacío que llama "sifr". Con esas pocas marcas calcula en segundos fletes, comisiones y conversiones de monedas. Los viajeros más tradicionales desconfían de esos trazos.',
    prompt: 'El maestro calculista se ofrece a explicarles su método. ¿Cómo decide actuar el curso?',
    teacherPrompt: '¿Un conocimiento sigue siendo exactamente el mismo cuando otras personas lo estudian, lo utilizan y lo desarrollan?',
    characterFlavor: {
      merchant: 'Ves con asombro cómo divide cantidades gigantescas en segundos. Con este método podrías cerrar tratos antes de que el rival saque sus cuentas.',
      traveler: 'Te cuentan que esos números nacieron en la India, cruzaron Persia y florecieron en Bagdad. Los números también son viajeros.',
      medic: 'Pensás en las dosis: mezclar venenos curativos en proporciones de milésimas requiere una precisión que los números romanos jamás tuvieron.',
      scholar: 'Ese círculo vacío, el sifr... ¡representa la nada y a la vez multiplica por diez lo que toca! Es una revolución intelectual absoluta.'
    },
    characterChoices: {
      merchant: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Aprender las cifras arábigas para calcular ventas y comisiones',
          description: 'Piden al escriba que les enseñe a sumar y multiplicar con los nuevos dígitos en papel para calcular ganancias de forma veloz.',
          consequence: 'Dominan las cuatro operaciones básicas en pocos días. Comprueban que pueden resolver en minutos balances que antes exigían horas de trabajo con fichas y ábacos de madera.',
          historicalInsight: 'Los mercaderes italianos fueron los primeros europeos en adoptar las cifras indoarábigas gracias a los manuales comerciales de Fibonacci.',
          chronicleText: 'Aprendimos las cifras indoarábigas para acelerar nuestros cálculos y balances comerciales.',
          discoveredGoodsOrIdeas: ['Cálculo algorítmico', 'Multiplicación en papel', 'Eficiencia contable']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Seguir usando el ábaco tradicional en el que los clientes confían',
          description: 'Deciden mantener el tablero de cuentas griego y romano, argumentando que los clientes campesinos desconfían de garabatos raros en papel.',
          consequence: 'Sus clientes se sienten seguros porque ven físicamente cómo se mueven las fichas sobre las líneas de madera. Sin embargo, sus cálculos siguen siendo lentos y difíciles de archivar.',
          historicalInsight: 'Durante siglos hubo una disputa abierta entre los "abacistas" (defensores del ábaco manual) y los "algoristas" (usuarios de cifras escritas).',
          chronicleText: 'Mantuvimos el ábaco tradicional para inspirar confianza visual en los clientes locales.',
          discoveredGoodsOrIdeas: ['Ábaco de madera', 'Confianza mercantil tradicional', 'Disputa del cálculo']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Aprender a calcular intereses y reparto proporcional de ganancias',
          description: 'Piden al maestro que les enseñe las reglas de proporción para dividir las ganancias entre socios de la caravana según el capital invertido.',
          consequence: 'Descubren la "regla de tres" y el cálculo fraccionario. Resuelven disputas internas en la caravana con justicia matemática impecable, evitando pleitos entre mercaderes.',
          historicalInsight: 'El desarrollo del álgebra comercial permitió formalizar sociedades mercantiles complejas con múltiples inversores distantes.',
          chronicleText: 'Aplicamos el álgebra para repartir proporcionalmente las ganancias de la caravana.',
          discoveredGoodsOrIdeas: ['Regla de tres comercial', 'Reparto proporcional', 'Sociedades mercantiles']
        }
      ],
      traveler: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Indagar cómo viajaron las cifras desde la India hasta Bagdad',
          description: 'Preguntan a los estudiosos de la escuela cómo esos números cruzaron mares y desiertos y qué pueblos participaron en su desarrollo.',
          consequence: 'Les relatan cómo sabios indios llevaron tratados astronómicos a Bagdad, donde Al-Jwarizmi los sintetizó y les añadió el álgebra. Los números son fruto de un diálogo continental.',
          historicalInsight: 'El sistema indoarábigo no fue invento de una sola cultura, sino una construcción colectiva entre la India, el mundo islámico y el Mediterráneo.',
          chronicleText: 'Reconstruimos el viaje de las cifras desde la India hasta las academias del mundo islámico.',
          discoveredGoodsOrIdeas: ['Origen indoarábigo', 'Síntesis de Al-Jwarizmi', 'Diálogo intercultural']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Aprender a usar los números para medir distancias y latitudes',
          description: 'Piden que les enseñen a calcular leguas recorridas por día y convertir lecturas del astrolabio en distancias terrestres concretas.',
          consequence: 'Convierten la marcha de la caravana en datos precisos. Pueden estimar con exactitud cuántos días faltan para llegar a la próxima ciudad y cuánta comida necesitan.',
          historicalInsight: 'La aplicación de las matemáticas a la geografía y navegación permitió planificar viajes a gran escala con mayor seguridad y previsión.',
          chronicleText: 'Utilizamos los números para registrar distancias en leguas y anticipar jornadas de marcha.',
          discoveredGoodsOrIdeas: ['Cálculo de jornadas', 'Medición de distancias', 'Planificación de ruta']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Continuar confiando en las marcas orales y la memoria de los guías',
          description: 'Consideran que para viajar por desiertos vale más la memoria de los accidentes geográficos que los números abstractos en un papel.',
          consequence: 'Mantienen su conexión intuitiva con el paisaje y las estrellas. No obstante, reconocen que sin números escritos es difícil transmitir la información a otros grupos que vengan detrás.',
          historicalInsight: 'El saber empírico tradicional y la ciencia matemática escrita coexistieron y se complementaron en las rutas comerciales.',
          chronicleText: 'Reafirmamos el valor de la memoria geográfica oral junto a las mediciones formales.',
          discoveredGoodsOrIdeas: ['Memoria territorial oral', 'Saberes tradicionales', 'Orientación empírica']
        }
      ],
      medic: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Estudiar cómo dosificar venenos y remedios con precisión matemática',
          description: 'Piden que les enseñen a usar las fracciones y el cero para calcular dosis de hierbas potentes como la belladona, el opio o el beleño.',
          consequence: 'Comprueban que una gota de más en un preparado puede matar a un paciente y una de menos lo deja sin alivio. Las nuevas cifras eliminan el margen de error mortal en la botica.',
          historicalInsight: 'La farmacología islámica medieval fue pionera en cuantificar rigurosamente las dosis de los medicamentos mediante proporciones matemáticas.',
          chronicleText: 'Perfeccionamos las dosis farmacológicas con precisión numérica para evitar errores fatales.',
          discoveredGoodsOrIdeas: ['Dosificación matemática', 'Farmacología cuantitativa', 'Cálculo de venenos y remedios']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Armonizar las tablas de pesos de las boticas de distintos reinos',
          description: 'Utilizan las cifras para establecer equivalencias exactas entre dracmas griegas, granos árabes y onzas latinas.',
          consequence: 'Elaboran una tabla de conversión universal para el botiquín de la caravana. Ya no habrá peligro de confundir las pesas al comprar ingredientes en ciudades distantes.',
          historicalInsight: 'La estandarización de pesos y medidas fue una lucha científica central para la seguridad de la medicina y el comercio medieval.',
          chronicleText: 'Elaboramos tablas de conversión de pesas botánicas para unificar recetas de diferentes países.',
          discoveredGoodsOrIdeas: ['Estandarización de pesas', 'Tabla de equivalencias', 'Seguridad botánica']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Confiar en los sentidos del médico antes que en cifras abstractas',
          description: 'Sostienen que la verdadera medicina se basa en oler, mirar y palpar al enfermo, no en sumas sobre arena o papel.',
          consequence: 'Mantienen una atención clínica atenta y humana. Sin embargo, comprenden que sin números no pueden calcular epidemias ni registrar estadísticas de cuántos enfermos sobreviven.',
          historicalInsight: 'La medicina clínica medieval combinaba la observación sensorial directa de los síntomas con los primeros intentos de cuantificación estadística.',
          chronicleText: 'Defendimos la observación sensorial del médico frente al cálculo abstracto.',
          discoveredGoodsOrIdeas: ['Diagnóstico sensorial', 'Juicio clínico directo', 'Medicina hipocrática']
        }
      ],
      scholar: [
        {
          id: 'A',
          label: 'Alternativa A',
          title: 'Copiar los nueve guarismos y estudiar el poder conceptual del cero',
          description: 'Piden al maestro que les dicte los tratados de cálculo posicional y debaten sobre el concepto del cero (*sifr*) como espacio de la nada.',
          consequence: 'Quedan maravillados al comprender cómo un símbolo de la nada permite multiplicar por potencias infinitas según la posición que ocupe. Es una de las cumbres del pensamiento humano.',
          historicalInsight: 'La noción del cero posicional revolucionó la ciencia global al liberar al cálculo de las ataduras mecánicas del ábaco.',
          chronicleText: 'Copiamos los nueve dígitos y el símbolo del cero, asimilando la revolución del valor posicional.',
          discoveredGoodsOrIdeas: ['El concepto del cero (sifr)', 'Valor posicional', 'Tratados de aritmética']
        },
        {
          id: 'B',
          label: 'Alternativa B',
          title: 'Debatir con los matemáticos sobre las reglas del álgebra',
          description: 'Discuten cómo resolver ecuaciones lineales y cuadráticas buscando la "cosa desconocida" (*al-shay*, que luego originó la "x").',
          consequence: 'El maestro les muestra cómo el álgebra permite encontrar incógnitas comerciales y geométricas mediante equilibrio lógico de ecuaciones. Copian los diagramas con reverencia.',
          historicalInsight: 'El álgebra (*al-jabr*, restauración) fue desarrollada como rama matemática autónoma en Bagdad para resolver problemas reales de herencias y agrimensura.',
          chronicleText: 'Debatimos sobre las leyes del álgebra y la resolución de incógnitas desconocidas.',
          discoveredGoodsOrIdeas: ['Álgebra de Al-Jwarizmi', 'Resolución de incógnitas', 'Lógica matemática']
        },
        {
          id: 'C',
          label: 'Alternativa C',
          title: 'Analizar cómo viajan los libros de cálculo entre Oriente y Occidente',
          description: 'Investigan qué textos están siendo traducidos en Toledo y Sicilia para llevar estos conocimientos a las escuelas europeas.',
          consequence: 'Comprueban que sabios judíos, cristianos y musulmanes colaboran en las fronteras del Mediterráneo para verter estas obras del árabe al latín. La ciencia no reconoce fronteras religiosas.',
          historicalInsight: 'Los centros de traducción medievales en Toledo y Salerno permitieron la llegada del saber matemático árabe a la Europa feudal.',
          chronicleText: 'Rastreamos las rutas de traducción que llevaron las matemáticas árabes a las universidades europeas.',
          discoveredGoodsOrIdeas: ['Escuelas de traducción', 'Traducción árabe-latín', 'Conocimiento sin fronteras']
        }
      ]
    }
  },
  {
    id: 'city-books-remedies',
    number: 4,
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
  }
];
