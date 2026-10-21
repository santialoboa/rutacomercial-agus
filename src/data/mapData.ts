import type { MapNode, MapRoute, StoryBranch, StoryId } from '../types/game';

export const MAP_NODES: MapNode[] = [
  {
    id: 'china',
    name: "Chang'an (Xi'an)",
    region: 'China Imperial',
    x: 89.5,
    y: 47.5,
    description: 'Punto de partida oriental de la Ruta de la Seda. De aquí partían caravanas con fardos de seda cruda, papel y fina porcelana imperial hacia Occidente.',
    goods: ['Seda Imperial', 'Porcelana Fina', 'Papel y Saberes'],
    cardAssociated: 0
  },
  {
    id: 'dunhuang',
    name: 'Dunhuang (Cuevas de Mogao)',
    region: 'Frontera del Desierto de Taklamakan',
    x: 79.0,
    y: 39.2,
    description: 'Oasis místico donde la ruta se bifurca alrededor del temible desierto del Taklamakan. Punto de descanso para caravanas de camellos.',
    goods: ['Seda', 'Jade', 'Manuscritos budistas'],
    cardAssociated: 0
  },
  {
    id: 'kashgar',
    name: 'Kashgar (Cruce de Oasis)',
    region: 'Cuenca del Tarim',
    x: 64.0,
    y: 39.2,
    description: 'El gran punto de encuentro al pie de las montañas del Pamir, donde se reunían mercaderes chinos, persas y sogdianos.',
    goods: ['Alfombras', 'Frutas secas', 'Caballos ferghana'],
    cardAssociated: 1
  },
  {
    id: 'samarkand',
    name: 'Samarcanda y Oasis de Sogdiana',
    region: 'Asia Central (Uzbekistán actual)',
    x: 57.2,
    y: 41.0,
    description: 'Corazón palpitante de la ruta terrestre. Célebre por sus bazares monumentales, molinos de papel junto al río y mercaderes políglotas.',
    goods: ['Papel artesanal', 'Seda', 'Vidrio y Cerámica'],
    cardAssociated: 1
  },
  {
    id: 'india',
    name: 'Mumbai y Rutas de la India',
    region: 'Costa de Malabar y Valle del Indo',
    x: 61.5,
    y: 69.5,
    description: 'Cuna de las más codiciadas especias (pimienta negra, canela, clavo) y de la matemática posicional con las cifras indoarábigas y el cero.',
    goods: ['Pimienta Negra', 'Canela', 'Cifras Indoarábigas'],
    cardAssociated: 3
  },
  {
    id: 'ormuz',
    name: 'Ormuz (Estrecho del Golfo)',
    region: 'Golfo Pérsico y Rutas de Ultramar',
    x: 48.0,
    y: 58.5,
    description: 'Enclave insular fortificado y aduana marítima clave donde convergían las flotas de perlas del Golfo, especias de la India y galeras mercantes hacia el Mar Rojo.',
    goods: ['Perlas de Baréin', 'Incienso y Mirra', 'Especias de Ceilán'],
    cardAssociated: 5
  },
  {
    id: 'baghdad',
    name: 'Bagdad (Casa de la Sabiduría)',
    region: 'Mesopotamia y Mundo Islámico',
    x: 39.5,
    y: 51.5,
    description: 'Metrópolis cultural donde confluían la ciencia griega, persa e india. Famosa por sus grandes hospitales (Bimaristán), bibliotecas y observatorios.',
    goods: ['Tratados de Medicina', 'Astrolabios', 'Textiles de Damasco'],
    cardAssociated: 4
  },
  {
    id: 'alexandria',
    name: 'Alejandría y El Cairo',
    region: 'Egipto y Mediterráneo Oriental',
    x: 30.5,
    y: 54.5,
    description: 'Puerto estratégico que conecta el comercio marítimo del Mar Rojo e Índico con las galeras mercantes europeas que navegaban hacia Italia.',
    goods: ['Especias de ultramar', 'Lino', 'Noticias marítimas'],
    cardAssociated: 5
  },
  {
    id: 'caffa_constantinople',
    name: 'Constantinopla y Caffa',
    region: 'Mar Negro y Estrechos del Bósforo',
    x: 29.5,
    y: 37.5,
    description: 'Puerta entre Europa y Asia. En 1347, desde el puerto de Caffa en Crimea, naves genovesas parten portando el germen de la peste hacia el Mediterráneo.',
    goods: ['Trigo', 'Pieles de estepa', 'Rumores de epidemia'],
    cardAssociated: 6
  },
  {
    id: 'venice_genoa',
    name: 'Venecia y Génova',
    region: 'Europa Mediterránea',
    x: 17.2,
    y: 30.5,
    description: 'Poderosas repúblicas marítimas que controlaban el comercio de lujo en Europa occidental y redistribuían la seda y las especias hacia el norte.',
    goods: ['Vidrio veneciano', 'Paños de lana', 'Moneda de plata']
  },
  {
    id: 'fez',
    name: 'Valencia y Puertos del Oeste',
    region: 'Península Ibérica y Magreb',
    x: 8.2,
    y: 41.2,
    description: 'Extremo occidental del circuito comercial euroasiático. Enclave de intercambio entre el mundo islámico andalusí y los reinos cristianos.',
    goods: ['Cuero', 'Cerámica mudéjar', 'Aceite']
  },
  // Nodos de la historia especial: El Camino del Oro (África Occidental y el Sahara)
  {
    id: 'ghana',
    name: 'Koumbi Saleh y Aluviones de Bambuk',
    region: 'Imperio de Ghana (Wagadou)',
    x: 10.5,
    y: 78.5,
    description: 'Capital del Señor del Oro (Kaya Maghan). Punto donde el oro fino de los aluviones fluviales de Bambuk se intercambia por barras de sal del Sahara.',
    goods: ['Polvo de oro (mithqal)', 'Pepitas reales (tibr)', 'Sal gema'],
    cardAssociated: 1
  },
  {
    id: 'mali_timbuktu',
    name: 'Tombuctú y el Meandro del Níger',
    region: 'Imperio de Mali',
    x: 18.0,
    y: 74.0,
    description: 'Corazón intelectual del Sahel. Destacan la mezquita de Djinguereber, la Universidad de Sankore y la gran encrucijada caravanera del Sahara.',
    goods: ['Manuscritos de Sankore', 'Letras de crédito (suftaja)', 'Sal y Marfil'],
    cardAssociated: 2
  },
  {
    id: 'taghaza',
    name: 'Minas de Sal de Taghaza y Tanezrouft',
    region: 'Desierto Central del Sahara',
    x: 15.5,
    y: 59.0,
    description: 'La legendaria "ciudad de sal" en el Tanezrouft (Tierra de la Sed). Donde las casas se construían con losas de sal y los guías tuareg leen los astros.',
    goods: ['Sal de roca', 'Kohl para los ojos', 'Agua de pozo profundo']
  },
  {
    id: 'tunis_carthage',
    name: 'Túnez y Ruinas de Cartago',
    region: 'Ifriqiya (Magreb)',
    x: 21.0,
    y: 44.0,
    description: 'Gran puerto mediterráneo de los emires hafsíes. Aquí el oro africano se acuña en dinares y se embarca en galeras de mercaderes venecianos y catalanes.',
    goods: ['Dinares de oro hafsíes', 'Paños europeos', 'Aceite y Cuero'],
    cardAssociated: 3
  },
  {
    id: 'fezzan',
    name: 'Oasis de Bilma y Fezzan',
    region: 'Ruta Transahariana Oriental',
    x: 26.5,
    y: 65.0,
    description: 'Cadena de oasis y canales subterráneos (foggaras) que permitían a las inmensas caravanas reales de peregrinación de Mali cruzar hacia el Nilo.',
    goods: ['Sal de Bilma', 'Dátiles frescos', 'Agua de foggara']
  },
  {
    id: 'cairo_gold',
    name: 'El Cairo y Riberas del Nilo',
    region: 'Egipto Mameluco',
    x: 32.5,
    y: 53.0,
    description: 'Mayor metrópolis de Oriente Próximo. Sede del Sultán Mameluco y el Bimaristán Mansuri. En 1324, la visita de Mansa Musa devaluó el oro durante 12 años.',
    goods: ['Especias del Mar Rojo', 'Tratados médicos', 'Sedas de Damasco'],
    cardAssociated: 3
  },
  {
    id: 'venice_gold',
    name: 'Venecia (La Zecca y San Marcos)',
    region: 'Europa Mediterránea',
    x: 18.0,
    y: 29.5,
    description: 'Destino final de la ruta occidental. En la Casa de la Moneda (La Zecca), el oro africano se transforma en los legendarios Ducados de oro puro de 24 quilates.',
    goods: ['Ducados venecianos', 'Mosaicos de pan de oro', 'Letras bancarias'],
    cardAssociated: 4
  },
  {
    id: 'constantinople_gold',
    name: 'Constantinopla (Santa Sofía y Cuerno de Oro)',
    region: 'Imperio Bizantino',
    x: 30.5,
    y: 36.5,
    description: 'Destino final de la ruta oriental. El Basileus acuña el Hiperpíron y utiliza el oro como escudo diplomático para pagar tributos y asegurar la paz del Imperio.',
    goods: ['Hiperpíron bizantino', 'Mosaicos sacros', 'Códices de ciencia clásica'],
    cardAssociated: 4
  }
];

export const MAP_ROUTES: MapRoute[] = [
  // Ruta de la Seda Terrestre Principal
  { from: 'china', to: 'dunhuang', type: 'terrestrial', label: 'Ruta de la Seda (Desierto de Gobi y Taklamakan)' },
  { from: 'dunhuang', to: 'kashgar', type: 'terrestrial', label: 'Bifurcación de la Cuenca del Tarim' },
  { from: 'kashgar', to: 'samarkand', type: 'terrestrial', label: 'Paso del Pamir hacia Samarcanda', activeUntilCard: 1 },
  { from: 'samarkand', to: 'baghdad', type: 'terrestrial', label: 'Meseta Iraní y Ruta a Mesopotamia', activeUntilCard: 2 },
  { from: 'baghdad', to: 'caffa_constantinople', type: 'terrestrial', label: 'Ruta a los Estrechos y Mar Negro', activeUntilCard: 4 },
  { from: 'baghdad', to: 'alexandria', type: 'terrestrial', label: 'Caravanas de Siria y Levante', activeUntilCard: 4 },

  // Ramal hacia India y Rutas Marítimas del Océano Índico
  { from: 'samarkand', to: 'india', type: 'terrestrial', label: 'Paso del Hindu Kush hacia la India', activeUntilCard: 3 },
  { from: 'china', to: 'india', type: 'maritime', label: 'Ruta de los Juncos y Vientos Monzónicos' },
  { from: 'india', to: 'ormuz', type: 'maritime', label: 'Ruta del Monzón por el Mar de Arabia', activeUntilCard: 4 },
  { from: 'ormuz', to: 'baghdad', type: 'maritime', label: 'Navegación por el Golfo Pérsico' },
  { from: 'ormuz', to: 'alexandria', type: 'maritime', label: 'Ruta marítima del Mar Rojo hacia Alejandría', activeUntilCard: 5 },
  { from: 'india', to: 'alexandria', type: 'maritime', label: 'Navegación por el Mar Rojo', activeUntilCard: 5 },

  // Rutas Marítimas del Mediterráneo
  { from: 'alexandria', to: 'venice_genoa', type: 'maritime', label: 'Flotas comerciales del Mediterráneo', activeUntilCard: 5 },
  { from: 'caffa_constantinople', to: 'venice_genoa', type: 'maritime', label: 'Ruta marítima de galeras genovesas', activeUntilCard: 6 },
  { from: 'caffa_constantinople', to: 'alexandria', type: 'maritime', label: 'Circuito del Mediterráneo Oriental' },
  { from: 'venice_genoa', to: 'fez', type: 'maritime', label: 'Navegación hacia el Mediterráneo Occidental' },

  // Rutas Transaharianas de El Camino del Oro
  { from: 'ghana', to: 'mali_timbuktu', type: 'transsaharan', label: 'Ruta del Sahel y el río Níger' },
  { from: 'mali_timbuktu', to: 'taghaza', type: 'transsaharan', label: 'Paso del Tanezrouft (Tierra de la Sed)' },
  { from: 'taghaza', to: 'tunis_carthage', type: 'transsaharan', label: 'Ruta a los zocos del Magreb' },
  { from: 'tunis_carthage', to: 'venice_gold', type: 'maritime', label: 'Galeras de San Marcos por el Adriático' },
  { from: 'mali_timbuktu', to: 'fezzan', type: 'transsaharan', label: 'Ruta de los Oasis de Bilma' },
  { from: 'fezzan', to: 'cairo_gold', type: 'transsaharan', label: 'Caravana Imperial de Mansa Musa al Nilo' },
  { from: 'cairo_gold', to: 'constantinople_gold', type: 'maritime', label: 'Ruta del Mar Egeo y el Bósforo' }
];

export const CARD_LOCATIONS_LAND: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'samarkand', title: 'Samarcanda — Gran Bazar' },
  2: { nodeId: 'samarkand', title: 'Taller de Papeleros junto al Río' },
  3: { nodeId: 'india', title: 'Plaza de Cambistas y Sabios de Oriente' },
  4: { nodeId: 'baghdad', title: 'Bagdad — Biblioteca y Hospital (Bimaristán)' },
  5: { nodeId: 'alexandria', title: 'Alejandría — Dársena de Galeras' },
  6: { nodeId: 'caffa_constantinople', title: 'Constantinopla y Caffa — Puerto en Alarma' }
};

export const CARD_LOCATIONS_SEA: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'samarkand', title: 'Samarcanda — Gran Bazar' },
  2: { nodeId: 'samarkand', title: 'Taller de Papeleros junto al Río' },
  3: { nodeId: 'india', title: 'Plaza de Cambistas y Sabios de Oriente' },
  4: { nodeId: 'india', title: 'Océano Índico y Malabar — Vientos del Monzón' },
  5: { nodeId: 'ormuz', title: 'Estrecho de Ormuz — Aduana Marítima del Golfo' },
  6: { nodeId: 'venice_genoa', title: 'Puerto Mediterráneo — Navío en Cuarentena' }
};

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

export function getCardLocation(
  cardNumber: number,
  branch: StoryBranch = 'land',
  storyId: StoryId = 'silk-road'
) {
  if (storyId === 'gold-road') {
    if (branch === 'egypt-byzantium' && CARD_LOCATIONS_GOLD_EAST[cardNumber]) {
      return CARD_LOCATIONS_GOLD_EAST[cardNumber];
    }
    return CARD_LOCATIONS_GOLD_WEST[cardNumber] || CARD_LOCATIONS_GOLD_WEST[1];
  }

  if (branch === 'sea' && CARD_LOCATIONS_SEA[cardNumber]) {
    return CARD_LOCATIONS_SEA[cardNumber];
  }
  return CARD_LOCATIONS_LAND[cardNumber] || CARD_LOCATIONS_LAND[1];
}

export const CARD_LOCATIONS = CARD_LOCATIONS_LAND;
