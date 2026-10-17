import type { MapNode, MapRoute } from '../types/game';

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
  { from: 'india', to: 'baghdad', type: 'maritime', label: 'Navegación por el Golfo Pérsico' },
  { from: 'india', to: 'alexandria', type: 'maritime', label: 'Navegación por el Mar Rojo', activeUntilCard: 5 },

  // Rutas Marítimas del Mediterráneo
  { from: 'alexandria', to: 'venice_genoa', type: 'maritime', label: 'Flotas comerciales del Mediterráneo', activeUntilCard: 5 },
  { from: 'caffa_constantinople', to: 'venice_genoa', type: 'maritime', label: 'Ruta marítima de galeras genovesas', activeUntilCard: 6 },
  { from: 'caffa_constantinople', to: 'alexandria', type: 'maritime', label: 'Circuito del Mediterráneo Oriental' },
  { from: 'venice_genoa', to: 'fez', type: 'maritime', label: 'Navegación hacia el Mediterráneo Occidental' }
];

export const CARD_LOCATIONS: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'samarkand', title: 'Samarcanda — Gran Bazar' },
  2: { nodeId: 'samarkand', title: 'Taller de Papeleros junto al Río' },
  3: { nodeId: 'india', title: 'Plaza de Cambistas y Sabios de Oriente' },
  4: { nodeId: 'baghdad', title: 'Bagdad — Biblioteca y Hospital (Bimaristán)' },
  5: { nodeId: 'alexandria', title: 'Alejandría — Dársena de Galeras' },
  6: { nodeId: 'caffa_constantinople', title: 'Constantinopla y Caffa — Puerto en Alarma' }
};
