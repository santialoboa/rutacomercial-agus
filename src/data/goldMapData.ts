import type { MapNode, MapRoute, StoryBranch } from '../types/game';

export const GOLD_MAP_NODES: MapNode[] = [
  {
    id: 'ghana',
    name: 'Koumbi Saleh y Aluviones de Bambuk',
    region: 'Imperio de Ghana (Wagadou)',
    x: 8.5,
    y: 81.0,
    description: 'Capital del legendario Kaya Maghan ("Señor del Oro"). Punto neurálgico donde el oro fino de los aluviones de los ríos Senegal y Falémé se intercambia por barras de sal del Sahara bajo estricto monopolio imperial para evitar la inflación.',
    goods: ['Polvo de oro puro (mithqal)', 'Pepitas reales (tibr)', 'Sal gema de roca'],
    cardAssociated: 1
  },
  {
    id: 'mali_timbuktu',
    name: 'Tombuctú y el Meandro del Níger',
    region: 'Imperio de Mali',
    x: 16.0,
    y: 75.5,
    description: 'Gran encrucijada caravanera y faro intelectual del Sahel. Destacan la gran mezquita de Djinguereber y la madrasa de Sankore, donde los manuscritos científicos se cotizan más caros que el oro en polvo.',
    goods: ['Manuscritos de Sankore', 'Letras de crédito (suftaja)', 'Barras de sal y marfil'],
    cardAssociated: 2
  },
  {
    id: 'taghaza',
    name: 'Minas de Sal de Taghaza y Tanezrouft',
    region: 'Sahara Central — Tierra de la Sed',
    x: 13.5,
    y: 63.5,
    description: 'La célebre ciudad del desierto cuyas casas y mezquita se construían enteramente con losas de sal gema. Enclave desértico extremo donde las caravanas compran agua y sal a precio de oro.',
    goods: ['Sal de roca tallada', 'Kohl para ojos', 'Agua de pozo profundo']
  },
  {
    id: 'tunis_carthage',
    name: 'Túnez y Ruinas de Cartago',
    region: 'Ifriqiya (Magreb Central)',
    x: 14.5,
    y: 44.0,
    description: 'Vanguardia portuaria del Magreb de los emires hafsíes. Aquí el oro africano se acuña en dinares y se embarca en galeras de mercaderes venecianos, genoveses y catalanes hacia los puertos europeos.',
    goods: ['Dinares de oro hafsíes', 'Tejidos y paños finos', 'Cuero y aceite'],
    cardAssociated: 3
  },
  {
    id: 'venice_gold',
    name: 'Venecia (La Zecca y San Marcos)',
    region: 'Europa Mediterránea — República de Venecia',
    x: 17.2,
    y: 18.5,
    description: 'Destino supremo de la ruta occidental. En la Casa de la Moneda (La Zecca), el oro africano se funde para acuñar el legendario Ducado (o Zecchino) de 24 quilates, motor de la banca y el Renacimiento.',
    goods: ['Ducados de oro venecianos', 'Vidrio de Murano', 'Letras de cambio bancarias'],
    cardAssociated: 4
  },
  {
    id: 'fezzan',
    name: 'Oasis de Bilma y Fezzan',
    region: 'Ruta Transahariana Oriental',
    x: 26.5,
    y: 66.0,
    description: 'Cadena de oasis, palmerales y canales subterráneos (foggaras) que hicieron posible la colosal peregrinación imperial de Mansa Musa con miles de servidores y camellos hacia el este.',
    goods: ['Sal gema de Bilma', 'Dátiles frescos de palmeral', 'Agua de foggara']
  },
  {
    id: 'cairo_gold',
    name: 'El Cairo y Riberas del Nilo',
    region: 'Sultanato Mameluco de Egipto',
    x: 32.5,
    y: 55.5,
    description: 'La mayor metrópolis de Oriente Próximo. Sede del Sultán Mameluco y el Hospital Mansuri. En 1324, la visita y desmesurada caridad de Mansa Musa inundó de oro los bazares, devaluando el metal durante 12 años.',
    goods: ['Dinares mamelucos', 'Especias del Mar Rojo', 'Tratados médicos y jarabes'],
    cardAssociated: 3
  },
  {
    id: 'constantinople_gold',
    name: 'Constantinopla (Santa Sofía y Cuerno de Oro)',
    region: 'Imperio Bizantino — Puerta de Europa y Asia',
    x: 29.5,
    y: 37.5,
    description: 'La Reina de las Ciudades y enclave imperial sobre el estrecho del Bósforo. El Basileus acuña el prestigioso Hiperpíron de oro y utiliza el metal africano como arma diplomática para pagar tributos y asegurar la paz.',
    goods: ['Hiperpíron bizantino', 'Mosaicos de pan de oro', 'Códices clásicos griegos'],
    cardAssociated: 4
  }
];

export const GOLD_MAP_ROUTES: MapRoute[] = [
  // Eje del Sahel
  { from: 'ghana', to: 'mali_timbuktu', type: 'transsaharan', label: 'Eje del Sahel y Riberas del Níger' },

  // Ramal Occidental (Sahara Central hacia Túnez y Venecia)
  { from: 'mali_timbuktu', to: 'taghaza', type: 'transsaharan', label: 'Paso del Tanezrouft (Tierra de la Sed)' },
  { from: 'taghaza', to: 'tunis_carthage', type: 'transsaharan', label: 'Caravanas al Zoco de Ifriqiya' },
  { from: 'tunis_carthage', to: 'venice_gold', type: 'maritime', label: 'Galeras de San Marcos por el Adriático' },

  // Ramal Oriental (Peregrinación Imperial de Mansa Musa al Cairo y Bizancio)
  { from: 'mali_timbuktu', to: 'fezzan', type: 'transsaharan', label: 'Ruta de los Oasis de Bilma y Fezzan' },
  { from: 'fezzan', to: 'cairo_gold', type: 'transsaharan', label: 'Marcha Real de Mansa Musa al Valle del Nilo' },
  { from: 'cairo_gold', to: 'constantinople_gold', type: 'maritime', label: 'Ruta Marítima del Egeo y el Bósforo' }
];

export const CARAVAN_STAGES_GOLD_WEST = [
  { cardNum: 1, nodeId: 'ghana', label: 'Carta 1', title: 'Koumbi Saleh (Monopolio del Oro)' },
  { cardNum: 2, nodeId: 'mali_timbuktu', label: 'Carta 2', title: 'Tombuctú (Saberes y Tráfico de Cautivos)' },
  { cardNum: 3, nodeId: 'tunis_carthage', label: 'Carta 3', title: 'Túnez y Cartago (Dinares y Galeras)' },
  { cardNum: 4, nodeId: 'venice_gold', label: 'Carta 4', title: 'Venecia (La Zecca y Ducado de Oro)' }
];

export const CARAVAN_STAGES_GOLD_EAST = [
  { cardNum: 1, nodeId: 'ghana', label: 'Carta 1', title: 'Koumbi Saleh (Monopolio del Oro)' },
  { cardNum: 2, nodeId: 'mali_timbuktu', label: 'Carta 2', title: 'Tombuctú (Saberes y Tráfico de Cautivos)' },
  { cardNum: 3, nodeId: 'cairo_gold', label: 'Carta 3', title: 'El Cairo (Devaluación y Bimaristán)' },
  { cardNum: 4, nodeId: 'constantinople_gold', label: 'Carta 4', title: 'Constantinopla (Hiperpíron y Santa Sofía)' }
];

export const CARD_LOCATIONS_GOLD_WEST: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'ghana', title: 'Koumbi Saleh — Corte del Señor del Oro' },
  2: { nodeId: 'mali_timbuktu', title: 'Tombuctú — Encrucijada del Níger y Sankore' },
  3: { nodeId: 'tunis_carthage', title: 'Túnez y Cartago — Galeras y Dinares de Oro' },
  4: { nodeId: 'venice_gold', title: 'Venecia — La Zecca y los Ducados de Oro' }
};

export const CARD_LOCATIONS_GOLD_EAST: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'ghana', title: 'Koumbi Saleh — Corte del Señor del Oro' },
  2: { nodeId: 'mali_timbuktu', title: 'Tombuctú — Encrucijada del Níger y Sankore' },
  3: { nodeId: 'cairo_gold', title: 'El Cairo — Riberas del Nilo y Bimaristán' },
  4: { nodeId: 'constantinople_gold', title: 'Constantinopla — Santa Sofía y el Hiperpíron' }
};

export function getGoldCardLocation(
  cardNumber: number,
  branch: StoryBranch = 'carthage-venice'
) {
  if (branch === 'egypt-byzantium' && CARD_LOCATIONS_GOLD_EAST[cardNumber]) {
    return CARD_LOCATIONS_GOLD_EAST[cardNumber];
  }
  return CARD_LOCATIONS_GOLD_WEST[cardNumber] || CARD_LOCATIONS_GOLD_WEST[1];
}

export interface GoldTradeGood {
  id: string;
  iconName: string;
  name: string;
  origin: string;
  circuit: string;
  significance: string;
  guidingQuestion: string;
}

export const GOLD_HISTORICAL_GOODS: GoldTradeGood[] = [
  {
    id: 'gold_dust',
    iconName: 'gold',
    name: 'Polvo de Oro (Mithqal) y Pepitas Reales (Tibr)',
    origin: 'Aluviones fluviales de Bambuk y Bure (Ríos Senegal y Falémé)',
    circuit: 'Lavaderos en bateas ➔ Intercambio silencioso con Wangaras ➔ Monopolio del Kaya Maghan en Koumbi Saleh ➔ Cecas de Venecia, El Cairo y Bizancio',
    significance: 'África Occidental suministraba alrededor de dos tercios de todo el oro que circulaba en la cuenca mediterránea y Europa. Sin esta inyección de metal precioso africano, la expansión monetaria del comercio medieval europeo y el desarrollo de la banca renacentista no habrían sido posibles.',
    guidingQuestion: '¿Por qué el rey de Ghana confiscaba las pepitas macizas y solo permitía a sus súbditos y mercaderes transaccionar con polvo de oro medido en balanzas?'
  },
  {
    id: 'salt_slabs',
    iconName: 'paper',
    name: 'Barras de Sal Gema de Taghaza y Bilma',
    origin: 'Salinas y cuencas evaporíticas del corazón del Sahara (Taghaza y Bilma)',
    circuit: 'Corte de losas de 50 kg en el desierto central ➔ Caravanas transaharianas de camellos ➔ Intercambio peso a peso por oro en el Sahel',
    significance: 'En los climas tórridos subsaharianos, la sal no era un condimento culinario, sino un mineral biológico indispensable para la reposición electrolítica humana y la conservación de carnes. Su escasez natural en el Sahel le otorgaba un valor parejo al del oro puro.',
    guidingQuestion: '¿Por qué en los mercados de Koumbi Saleh y Tombuctú una barra de sal pura de roca podía comprar su peso equivalente en oro en polvo?'
  },
  {
    id: 'sankore_manuscripts',
    iconName: 'quill',
    name: 'Manuscritos y Saberes de Sankore',
    origin: 'Universidad de Sankore (Tombuctú), Fez, Córdoba y El Cairo',
    circuit: 'Códices manuscritos copiados en papel ➔ Intercambiados por oro y sal ➔ Bibliotecas de alfaquíes, juristas, astrónomos y médicos de Mali',
    significance: 'Tombuctú albergaba una de las mayores comunidades intelectuales del mundo islámico medieval, con más de 25.000 estudiantes y ricas bibliotecas privadas con tratados de matemáticas, astronomía, medicina, jurisprudencia y poesía.',
    guidingQuestion: '¿Qué demuestra el testimonio del cronista León el Africano al afirmar que en Tombuctú los libros se vendían por más dinares que cualquier otra mercancía?'
  },
  {
    id: 'currencies',
    iconName: 'scale',
    name: 'Grandes Monedas Internacionales (Ducados, Dinares e Hiperpíron)',
    origin: 'Casas de la Moneda de Venecia (La Zecca), Túnez, El Cairo y Constantinopla',
    circuit: 'Metal bruto transahariano ➔ Fundición y refinado a 24 quilates ➔ Circulación como moneda de reserva internacional en los tres continentes',
    significance: 'El Ducado veneciano (o Zecchino) y el Dinar de oro eran el equivalente al patrón fiduciario internacional moderno. Su pureza uniforme garantizaba transacciones seguras entre comerciantes cristianos, musulmanes y judíos.',
    guidingQuestion: '¿Por qué tanto las repúblicas mercantiles europeas como el Imperio Bizantino dependían del oro subsahariano para defender el prestigio de sus divisas?'
  },
  {
    id: 'suftaja',
    iconName: 'lute',
    name: 'Letras de Crédito (Suftaja) y Redes Mercantiles Wangara',
    origin: 'Cofradías de comerciantes Wangara y redes bancarias transaharianas',
    circuit: 'Emisión de cartas de pago en Koumbi Saleh o Tombuctú ➔ Cruce seguro del Sahara sin transportar oro ➔ Cobro en dinares en Túnez o Alejandría',
    significance: 'El riesgo de transportar fardos pesados de oro a través de miles de leguas de desierto acechadas por asaltantes motivó la creación de instrumentos financieros y contratos fiduciarios que sentaron las bases de la banca transcontinental.',
    guidingQuestion: '¿Cómo hicieron los mercaderes medievales para mover enormes riquezas a través de desiertos inhóspitos sin que las caravanas fueran asaltadas?'
  }
];
