import type { MapNode, MapRoute } from '../types/game';

export const MAP_NODES: MapNode[] = [
  {
    id: 'china',
    name: "Chang'an y Quanzhou",
    region: 'China Imperial',
    x: 88,
    y: 52,
    description: 'Punto de partida de la seda, el papel primigenio y la fina porcelana que partía hacia el oeste.',
    goods: ['Seda', 'Porcelana', 'Papel'],
    cardAssociated: 0
  },
  {
    id: 'samarkand',
    name: 'Samarcanda y Oasis',
    region: 'Asia Central',
    x: 65,
    y: 44,
    description: 'Cruce de caminos donde confluían mercaderes sogdianos, molinos de papel y caravanas de camellos bactrianos.',
    goods: ['Papel artesanal', 'Telas finas', 'Caballos'],
    cardAssociated: 1
  },
  {
    id: 'india',
    name: 'Calicut y Valle del Ganges',
    region: 'Subcontinente Indio',
    x: 72,
    y: 68,
    description: 'Cuna de las ricas especias, del álgebra y de los números posicionales con el concepto del cero.',
    goods: ['Pimienta', 'Canela', 'Numeración indoarábiga'],
    cardAssociated: 3
  },
  {
    id: 'baghdad',
    name: 'Bagdad y Damasco',
    region: 'Mundo Islámico',
    x: 48,
    y: 46,
    description: 'Grandes centros de estudio, bibliotecas, hospitales (Bimaristán) y debate científico intercultural.',
    goods: ['Tratados de medicina', 'Astronomía', 'Traducciones'],
    cardAssociated: 4
  },
  {
    id: 'alexandria',
    name: 'Alejandría y El Cairo',
    region: 'Egipto y Mediterráneo Oriental',
    x: 40,
    y: 54,
    description: 'El puerto bisagra entre las rutas marítimas del Mar Rojo y las flotas mercantes del Mediterráneo.',
    goods: ['Especias de ultramar', 'Lino', 'Noticias marítimas'],
    cardAssociated: 5
  },
  {
    id: 'caffa_constantinople',
    name: 'Constantinopla y Caffa',
    region: 'Mar Negro y Estrechos',
    x: 41,
    y: 36,
    description: 'Puertos estratégicos de conexión con las estepas; en 1347, naves genovesas zarpan portando la peste.',
    goods: ['Trigo', 'Pieles', 'Rumores de epidemia'],
    cardAssociated: 6
  },
  {
    id: 'venice_genoa',
    name: 'Venecia y Génova',
    region: 'Europa Mediterránea',
    x: 28,
    y: 35,
    description: 'Repúblicas marítimas cuyos navíos dominaban el comercio de lujo y redistribuían mercancías hacia el interior europeo.',
    goods: ['Paños de lana', 'Plata', 'Vidrio veneciano']
  },
  {
    id: 'timbuktu',
    name: 'Tombuctú y Reinos del Níger',
    region: 'África Occidental',
    x: 20,
    y: 66,
    description: 'Grandes emporios del oro y la sal que cruzaban el desierto del Sáhara en caravanas transaharianas.',
    goods: ['Oro de Mali', 'Sal del Sáhara', 'Manuscritos']
  },
  {
    id: 'fez',
    name: 'Fez y El Magreb',
    region: 'Norte de África',
    x: 18,
    y: 46,
    description: 'Punto de llegada de las caravanas saharianas y salida hacia el Mediterráneo andalusí e italiano.',
    goods: ['Cuero', 'Oro procesado', 'Aceite']
  }
];

export const MAP_ROUTES: MapRoute[] = [
  // Ruta de la Seda Terrestre
  { from: 'china', to: 'samarkand', type: 'terrestrial', label: 'Ruta de la Seda (Desierto de Gobi y Taklamakan)' },
  { from: 'samarkand', to: 'baghdad', type: 'terrestrial', label: 'Ruta de Persia a Mesopotamia', activeUntilCard: 2 },
  { from: 'baghdad', to: 'caffa_constantinople', type: 'terrestrial', label: 'Ruta a los Estrechos y Mar Negro', activeUntilCard: 4 },
  { from: 'baghdad', to: 'alexandria', type: 'terrestrial', label: 'Caravanas de Siria y Palestina', activeUntilCard: 4 },

  // Rutas Marítimas del Océano Índico
  { from: 'china', to: 'india', type: 'maritime', label: 'Ruta de los Juncos y Vientos Monzónicos' },
  { from: 'india', to: 'baghdad', type: 'maritime', label: 'Navegación por el Golfo Pérsico' },
  { from: 'india', to: 'alexandria', type: 'maritime', label: 'Navegación por el Mar Rojo', activeUntilCard: 5 },

  // Rutas Marítimas del Mediterráneo
  { from: 'alexandria', to: 'venice_genoa', type: 'maritime', label: 'Flotas comerciales del Mediterráneo', activeUntilCard: 5 },
  { from: 'caffa_constantinople', to: 'venice_genoa', type: 'maritime', label: 'Ruta marítima de galeras genovesas', activeUntilCard: 6 },
  { from: 'caffa_constantinople', to: 'alexandria', type: 'maritime', label: 'Circuito del Mediterráneo Oriental' },

  // Rutas Transaharianas
  { from: 'timbuktu', to: 'fez', type: 'transsaharan', label: 'Caravanas del Oro y la Sal a través del Sáhara' },
  { from: 'fez', to: 'alexandria', type: 'terrestrial', label: 'Vía del Litoral Norteafricano' },
  { from: 'fez', to: 'venice_genoa', type: 'maritime', label: 'Navegación al Estrecho de Gibraltar' }
];

export const CARD_LOCATIONS: Record<number, { nodeId: string; title: string }> = {
  1: { nodeId: 'samarkand', title: 'Samarcanda — Gran Bazar' },
  2: { nodeId: 'samarkand', title: 'Taller de Papeleros junto al Río' },
  3: { nodeId: 'india', title: 'Plaza de Cambistas y Sabios de Oriente' },
  4: { nodeId: 'baghdad', title: 'Bagdad — Biblioteca y Hospital (Bimaristán)' },
  5: { nodeId: 'alexandria', title: 'Alejandría — Dársena de Galeras' },
  6: { nodeId: 'caffa_constantinople', title: 'Constantinopla y Caffa — Puerto en Alarma' }
};
