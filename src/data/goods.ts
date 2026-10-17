import type { TradeGood } from '../types/game';

export const HISTORICAL_GOODS: TradeGood[] = [
  {
    id: 'silk',
    name: 'Seda Imperial',
    origin: 'China (Dinastías Tang, Song y Yuan)',
    circuit: 'China → Oasis de Asia Central → Persia → Constantinopla y puertos italianos → Europa',
    significance: 'Durante siglos, el secreto de la sericicultura (cría del gusano de seda) estuvo ferozmente protegido. Su ligereza, brillo y altísimo valor la convirtieron en el producto emblema de las rutas terrestres transcontinentales.',
    icon: 'feather'
  },
  {
    id: 'spices',
    name: 'Especias (Pimienta, Canela, Clavo)',
    origin: 'Sur y Sudeste de Asia (Costa de Malabar, Islas Molucas)',
    circuit: 'India / Molucas → Océano Índico → Golfo Pérsico y Mar Rojo → Alejandría y Beirut → Venecia y Génova → Europa',
    significance: 'Imprescindibles para conservar carnes, elaborar remedios medicinales y aromatizar banquetes aristocráticos. Las rutas marítimas del monzón en el Océano Índico fueron la columna vertebral de este comercio.',
    icon: 'sparkles'
  },
  {
    id: 'porcelain',
    name: 'Porcelana Fina',
    origin: 'China (Hornos de Jingdezhen)',
    circuit: 'China → Rutas terrestres por Asia Central ó Rutas marítimas por el Sudeste Asiático e India → Golfo Pérsico → Mediterráneo',
    significance: 'Objeto de prestigio y deleite estético por su dureza, brillo vítreo y resistencia a líquidos calientes. Su circulación demuestra que no había una sola ruta: viajaba tanto en camellos como en juncos marítimos.',
    icon: 'cup'
  },
  {
    id: 'paper',
    name: 'Papel y Saberes Técnicos',
    origin: 'China (siglo II a.C. a II d.C.)',
    circuit: 'China → Samarcanda (siglo VIII) → Bagdad, Damasco y El Cairo → Al-Ándalus y Sicilia → Italia y Europa central',
    significance: 'El ejemplo supremo de transferencia tecnológica: no se trató solo de comprar hojas terminadas, sino de difundir molinos hidráulicos de trapos, revolucionando la administración, la ciencia y la copia de libros.',
    icon: 'scroll'
  },
  {
    id: 'gold',
    name: 'Oro Transahariano',
    origin: 'África Occidental (Imperios de Ghana y Mali)',
    circuit: 'Bosques y ríos de África Occidental → Rutas de caravanas por el Sáhara (Tombuctú, Sijilmasa) → Norte de África → Casas de moneda de Europa y Oriente',
    significance: 'Conecta a África subsahariana en el mapa global medieval. Caravanas de miles de camellos cruzaban el desierto portando lingotes y polvo de oro a cambio de sal, telas y libros eruditos.',
    icon: 'crown'
  }
];
